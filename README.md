# unity-command

A package to control [Unity][0] from the command line.

## Installation

```sh
npm install unity-command
```

## Usage
### class `Unity`

#### Method `GetVersion`
##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|projectDirectory|string|Unity project directory path.|

##### Return
`string`: Unity version. (e.g. 2021.2.7f1)

#### Method `GetExecutePath`
##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|os|string|Name of OS to be used.<br>See [os.platform()][1] for possible values|
|unityVersion|string|Unity version to be used|

##### Return
`string`: Unity app path (e.g. /Applications/Unity/Hub/Editor/2021.2.7f1/Unity.app/Contents/MacOS/Unity)


[0]: https://unity.com/
[1]: https://nodejs.org/api/os.html#osplatform