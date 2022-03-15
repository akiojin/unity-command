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

export class UnityCommandBuilder
{
    args: string[] = []

    constructor()
    {
        this.AddCommand('-quit')
        this.AddCommand('-batchmode')
        this.AddCommand('-nographics')
        this.AddCommand('-silent-crashes')
    }

    AddCommand(command: string): void
    AddCommand(command: string, param: string): void
    AddCommand(commands: string[]): void

    AddCommand(command: string | string[], param?: string): void
    {
        if (Array.isArray(command)) {
            this.args = this.args.concat(command)
        } else {
            this.args.push(command)

            if (param != null) {
                this.args.push(param)
            }
        }
    }

    DisableGPUSkinning(): void
    {
        this.AddCommand('-disable-gpu-skinning')
    }

    SetExecuteMethod(executeMethod: string): void
    {
        this.AddCommand('-executeMethod', executeMethod)
    }

    SetJobWorkerCount(count: number): void
    {
        this.AddCommand('-job-worker-count', count.toString())
    }

    SetLogFile(logFile: string): void
    {
        this.AddCommand('-logFile', logFile)
    }

    DisableUPM() : void
    {
        this.AddCommand('-noUpm')
    }

    Activation(username: string, password: string): void
    {
        this.AddCommand('-username', username)
        this.AddCommand('-password', password)
    }

    SetProjectPath(projectPath: string): void
    {
        this.AddCommand('-projectPath', projectPath)
    }

    EnableReleaseCodeOptimization(): void
    {
        this.AddCommand('-releaseCodeOptimization')
    }

    // Batch mode arguments

    EnableAPIUpdater(): void
    {
        this.AddCommand('-accept-apiupdate')
    }

    // Build Arguments

    SetBuildTarget(target: string): void
    {
        this.AddCommand('-buildTarget', target)
    }

    // Cache server arguments

    EnableCacheServer(endpoint: string): void
    {
        this.AddCommand('-EnableCacheServer')
        this.AddCommand('-cacheServerEndpoint', endpoint)
    }

    SetOutputPath(outputPath: string): void
    {
        this.AddCommand('-outputPath', outputPath)
    }

    Build(): string[]
    {
        return this.args
    }
}
