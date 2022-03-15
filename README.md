# unity-command

A package to control [Unity][0] from the command line.

## Installation

```sh
npm install unity-command
```

## Usage
### class `Unity`
#### Static Method `GetVersion()`
##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|projectDirectory|string|Unity project directory path.|

##### Return
`string`: Unity version. (e.g. 2021.2.7f1)

#### Static Method `GetExecutePath()`
##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|os|string|Name of OS to be used.<br>See [os.platform()][1] for possible values|
|unityVersion|string|Unity version to be used|

##### Return
`string`: Unity app path (e.g. /Applications/Unity/Hub/Editor/2021.2.7f1/Unity.app/Contents/MacOS/Unity)

### class `UnityCommandBuilder`

The following parameters have already been added by default when the instance is created, so they do not need to be added.

- `-quit`
- `-batchmode`
- `-nographics`
- `-silent-crashes`

#### Method `AddCommand()`
|Name|Type|Description|
|:--|:--|:--|
|command|string \| string[]|Commands to pass to the Unity command line|
|param?|string|Parameters to be added to the command|

#### Method `Build()`

##### Return
`string[]`: command array

[0]: https://unity.com/
[1]: https://nodejs.org/api/os.html#osplatform