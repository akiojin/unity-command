# unity-command
A package to control [Unity][0] from the command line.

## Installation
```sh
npm install @akiojin/unity-command
```

## Usage
```js
import { Unity, UnityCommandBuilder } from '@akiojin/unity-command'
```
```js
const builder = new UnityCommandBuilder()
builder.SetBuildTarget('iOS')
builder.SetExecuteMethod('MyEditorScript.PerformBuild')
const args = [ '-CustomCommand', 'Param' ]
builder.Append(args)
...
const exe = Unity.GetExecutePath(os.platform(), '2021.2.7f1')
execa.execa(exe, builder.Build())
```

## Reference
### class `Unity`
#### `static GetVersion(projectDirectory: string): string`
##### Description
Returns the Unity version set for the given project.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|`projectDirectory`|`string`|Unity project directory path.|

##### Return
|Type|Description|
|:--|:--|
|`string`|Unity version. (e.g. 2021.2.7f1)|


#### `static GetExecutePath(os: string, unityVersion: string): string`
##### Description
Returns the Unity execution path.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|`os`|`string`|Name of OS to be used.<br>See [os.platform()][1] for possible values|
|`unityVersion`|`string`|Unity version to be used|

##### Return
|Type|Description|
|:--|:--|
|`string`|Unity app path (e.g. /Applications/Unity/Hub/Editor/2021.2.7f1/Unity.app/Contents/MacOS/Unity)|


### class `UnityCommandBuilder`
The following parameters have already been added by default when the instance is created, so they do not need to be added.

- `-quit`
- `-batchmode`
- `-nographics`
- `-silent-crashes`


#### `DisableGPUSkinning(): void`
##### Description
Disable Graphics Processing Unit (GPU) skinning at startup.


#### `SetExecuteMethod(executeMethod: string): void`
##### Description
Execute the static method as soon as Unity opens the project, and after the optional Asset server update is complete.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|executeMethod|string|<ClassName.MethodName> or <NamespaceName.ClassName.MethodName>|


#### `SetJobWorkerCount(count: number): void`
##### Description
Specify the maximum thread count for the Unity JobQueue Job Worker Count.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|count|number|the Unity JobQueue Job Worker Count.|


#### `SetLogFile(logFile: string): void`
##### Description
Specify where Unity writes the Editor or Windows/Linux/OSX standalone log file. To output to the console, specify - for the path name. On Windows, specify the - option to direct the output to stdout, which by default is not the console.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|logFile|string|Path name|


#### `DisableUPM() : void`
##### Description
Disable the Unity Package Manager.


#### `Activation(username: string, password: string): void`
##### Description
Activate the Unity Editor.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|username|string|Enter a username into the log-in form during the activation of the Unity Editor.|
|password|string|Enter a password into the log-in form during the activation of the Unity Editor.|


#### `SetProjectPath(projectPath: string): void`
##### Description
Open the project at the given path. If the pathname contains spaces, enclose it in quotes.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|projectPath|string|Project path|


#### `EnableReleaseCodeOptimization(): void`
##### Description
Enables release code optimization mode, overriding the current default code optimization mode for the session.


#### `EnableAPIUpdater(): void`
##### Description
Use this command line option to specify that APIUpdater should run when Unity is launched in batch mode.


#### `SetBuildTarget(target: string): void`
##### Description
Select an active build target before loading a project.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|target|string|Standalone, Win, Win64, OSXUniversal, Linux64, iOS, Android, WebGL, XboxOne, PS4, WindowsStoreApps, Switch,tvOS|


#### `EnableCacheServer(endpoint: string): void`
##### Description
Tells Unity to use the newer Accelerator Cache Server.
This overrides any configuration stored in the Editor Preferences. Use this to connect multiple instances of Unity to different Cache Servers.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|endpoint|string|Specifies the endpoint address if you are using the newer Accelerator Cache Server.<br>Example: 127.0.0.1:10080.|


#### `SetOutputPath(outputPath: string): void`
##### Description
Specify the output directory path.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|outputPath|string|Output path|


#### `Append(arg: string): void`
#### `Append(arg: string, param: string): void`
#### `Append(args: string[]): void`
#### `Append(arg: string | string[], param?: string): void`
##### Description
Add an argument.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|`arg`|string \| string[]|Commands to pass to the Unity command line|
|`param?`|string|Parameters to be added to the command|


#### `Build(): string[]`
##### Description
Returns an array of arguments to be passed to the command line.

##### Return
|Type|Description|
|:--|:--|
|`string[]`|Argument array|

[0]: https://unity.com/
[1]: https://nodejs.org/api/os.html#osplatform