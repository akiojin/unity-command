import { promises as fs } from 'fs'
import * as os from 'os'

export default class UnityUtils
{
    /**
     * Returns the path to the Unity Hub.
     * 
     * @returns Default Unity Hub install directory
     * 
     */
    static GetDefaultUnityHubDirectory(): string
    {
        switch (os.platform()) {
        default:
            throw new Error('Unsupported platform.')
        case 'darwin':
            return "/Applications/Unity/Hub/Editor"
        case 'win32':
            return "C:/Program Files/Unity/Hub/Editor"
        }
    }

    /**
     * Return the path to the Unity executable.
     * 
     * @param unityVersion Unity version (e.g. 2021.2.16f1)
     * @param installDirectory Unity Hub install directory
     * @returns Unity executable path
     * 
     */
    static GenerateUnityPath(unityVersion: string, installDirectory: string): string
    {
        switch (os.platform()) {
        default:
            throw new Error('Unsupported platform.')
        case 'darwin':
            return `${installDirectory}/${unityVersion}/Unity.app/Contents/MacOS/Unity`
        case 'win32':
            return `"${installDirectory}/${unityVersion}/Editor/Unity.exe"`
        }
    }

    /**
     * Returns the path to the Unity executable.
     * 
     * @param unityVersion Unity version (e.g. 2021.2.16f1)
     * @param installDirectory Unity Hub install directory
     * @returns Execute path
     * 
     * The installation directory, if omitted, is obtained from the environment variable UNITY_HUB_INSTALL_DIRECTORY.
     * If the environment variable UNITY_HUB_INSTALL_DIRECTORY is not set, it is taken from the default installation directory.
     */
    static GetUnityPath(unityVersion: string, installDirectory?: string): string
    {
        installDirectory = installDirectory ??
            process.env.UNITY_HUB_INSTALL_DIRECTORY ??
            this.GetDefaultUnityHubDirectory()

        return this.GenerateUnityPath(unityVersion, installDirectory)
    }

    /**
     * Returns the version of Unity used in a given project.
     * The Unity version is obtained from ProjectSettings/ProjectVersion.txt.
     * 
     * @param projectDirectory Unity project path
     * @returns Unity version (e.g. 2021.2.16f1)
     */
    static async GetCurrentUnityVersion(projectDirectory: string): Promise<string>
    {
        const filePath = `${projectDirectory}/ProjectSettings/ProjectVersion.txt`
        const text = await fs.readFile(filePath, 'utf-8')

        const result = text.match(/m_EditorVersion: (?<version>[0-9a-zA-Z.]*)/i)
    
        if (result === null || result.groups == null) {
            throw new Error('Invalid ProjectVersion.txt')
        }
    
        return result.groups.version
    }
}
