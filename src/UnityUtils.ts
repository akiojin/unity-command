import * as core from '@actions/core'
import { promises as fs } from 'fs'
import * as os from 'os'

export default class UnityUtils
{
    static GetBuildTarget(): string
    {
        const buildTarget = core.getInput('build-target')

        switch (buildTarget.toLowerCase()) {
        default:
            return buildTarget
        case 'ios':
        case 'iphone':
            return 'iOS'
        case 'android':
            return 'Android'
        case 'windows':
        case 'win':
        case 'win64':
            return 'Win64'
        case 'mac':
        case 'macos':
        case 'osx':
        case 'osxuniversal':
            return 'OSXUniversal'
        case 'switch':
            return 'Switch'
        }
    }
    
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
        installDirectory = installDirectory ||
            process.env.UNITY_HUB_INSTALL_DIRECTORY ||
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

    private static GetPlatformName(target: string): string
    {
        switch (target.toLowerCase()) {
        default:
            return target
        case 'ios':
        case 'iphone':
            return 'iPhone'
        case 'android':
            return 'Android'
        case 'windows':
        case 'win':
        case 'win64':
        case 'mac':
        case 'macos':
        case 'osx':
        case 'osxuniversal':
            return 'Standalone'
        }
    }
    
    /**
     * 
     * @param buildTarget 
     * @param symbols 
     * @param projectDirectory 
     * @returns 
     */
    static async AddDefineSymbols(buildTarget: string, symbols: string, projectDirectory: string): Promise<string>
    {
        const target = UnityUtils.GetPlatformName(buildTarget)
        const filePath = `${projectDirectory}/ProjectSettings/ProjectSettings.asset`
        const contents = await fs.readFile(filePath, 'utf-8')
        const updatedContents = []
    
        let reachedSection = false
    
        for (const line of contents.split('\n')) {
            const trim = line.trim()
    
            if (trim.startsWith('scriptingDefineSymbols:')) {
                reachedSection = true
            }
    
            if (reachedSection && trim.startsWith(target)) {
                updatedContents.push(`${line};${symbols}`)
                reachedSection = false
            } else {
                updatedContents.push(line)
            }
        }
    
        const result = updatedContents.join('\n')
        await fs.writeFile(filePath, result, 'utf-8')
    
        return result
    }

    static async GetDefineSymbols(buildTarget: string, projectDirectory: string): Promise<string>
    {
        const target = UnityUtils.GetPlatformName(buildTarget)
        const filePath = `${projectDirectory}/ProjectSettings/ProjectSettings.asset`
        const contents = await fs.readFile(filePath, 'utf-8')
    
        let reachedSection = false
    
        for (const line of contents.split('\n')) {
            const trim = line.trim()
    
            if (trim.startsWith('scriptingDefineSymbols:')) {
                reachedSection = true
            }
    
            if (reachedSection && trim.startsWith(target)) {
                return trim.split(':')[1].trim()
            }
        }

        throw new Error('Define symbols not found.')
    }
}
