import { CommandBuilder } from '@akiojin/command-builder'

export default class UnityCommandBuilder
{
	builder: CommandBuilder = new CommandBuilder()

    AddCommand(command: string): void
    AddCommand(command: string, param: string): void
    AddCommand(commands: string[]): void

    AddCommand(command: string | string[], param?: string): void
    {
        if (Array.isArray(command)) {
			this.builder.AddCommand(command)
        } else {
			if (param != null) {
				this.builder.AddCommand(command, param)
			} else {
				this.builder.AddCommand(command)
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
		return this.builder.Build()
    }
}
