import { promises as fs } from 'fs'

export default class Unity
{
    static GetExecutePath(os: string, unityVersion: string): string
    {
        switch (os) {
        default:
        case 'darwin':
            return `/Applications/Unity/Hub/Editor/${unityVersion}/Unity.app/Contents/MacOS/Unity`
        case 'win32':
            return `C:\\Program Files\\Unity\\Hub\\Editor\\${unityVersion}\\Editor\\Unity.exe`
        }
    }

    static async GetVersion(projectDirectory: string): Promise<string>
    {
        const data = await fs.readFile(`${projectDirectory}/ProjectSettings/ProjectVersion.txt`)
        const text = data.toString()
    
        const result = text.match(/m_EditorVersion: (?<version>[0-9a-zA-Z.]*)/i)
    
        if (result === null || result.groups == null) {
            throw new Error('Invalid ProjectVersion.txt')
        }
    
        return result.groups.version
    }
}
