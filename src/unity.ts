import { promises as fs } from 'fs'
import path from 'path'

export default class Unity
{
    /**
     * Returns the path to the Unity executable.
     * 
     * @param os platform name (e.g. os.platform())
     * @param unityVersion Unity version
     * @returns Execute path
     */
    static GetExecutePath(os: string, unityVersion?: string): string
    {
        switch (os) {
        default:
            throw new Error('Unsupported platform.')
        case 'darwin':
            if (!unityVersion) {
                return `/Applications/Unity/Unity.app/Contents/MacOS/Unity`
            } else {
                return `/Applications/Unity/Hub/Editor/${unityVersion}/Unity.app/Contents/MacOS/Unity`
            }
        case 'win32':
            return `"C:\\Program Files\\Unity\\Hub\\Editor\\${unityVersion}\\Editor\\Unity.exe"`
        }
    }

    /**
     * Returns the version of Unity used in a given project.
     * The Unity version is obtained from ProjectSettings/ProjectVersion.txt.
     * 
     * @param projectDirectory Unity project path
     * @returns Unity version (e.g. 2021.2.16f1)
     */
    static async GetVersion(projectDirectory: string): Promise<string>
    {
        const filePath = path.join(projectDirectory, 'ProjectSettings', 'ProjectVersion.txt')
        const text = await fs.readFile(filePath, 'utf-8')

        const result = text.match(/m_EditorVersion: (?<version>[0-9a-zA-Z.]*)/i)
    
        if (result === null || result.groups == null) {
            throw new Error('Invalid ProjectVersion.txt')
        }
    
        return result.groups.version
    }
}
