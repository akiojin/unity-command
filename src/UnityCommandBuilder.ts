import { ArgumentBuilder } from '@akiojin/argument-builder'

export default class UnityCommandBuilder extends ArgumentBuilder
{
	constructor()
	{
		super()

		this.Append('-quit')
		this.Append('-batchmode')
		this.Append('-nographics')
		this.Append('-silent-crashes')
	}

	DisableGPUSkinning(): void
	{
		this.Append('-disable-gpu-skinning')
	}

	SetExecuteMethod(executeMethod: string): void
	{
		this.Append('-executeMethod', executeMethod)
	}

	SetJobWorkerCount(count: number): void
	{
		this.Append('-job-worker-count', count.toString())
	}

	SetLogFile(logFile: string): void
	{
		this.Append('-logFile', logFile)
	}

	DisableUPM() : void
	{
		this.Append('-noUpm')
	}

	Activation(username: string, password: string): void
	{
		this.Append('-username', username)
		this.Append('-password', password)
	}

	SetProjectPath(projectPath: string): void
	{
		this.Append('-projectPath', projectPath)
	}

	EnableReleaseCodeOptimization(): void
	{
		this.Append('-releaseCodeOptimization')
	}

	// Batch mode arguments

	EnableAPIUpdater(): void
	{
		this.Append('-accept-apiupdate')
	}

	// Build Arguments

	SetBuildTarget(target: string): void
	{
		this.Append('-buildTarget', target)
	}

	// Cache server arguments

	EnableCacheServer(endpoint: string): void
	{
		this.Append('-EnableCacheServer')
		this.Append('-cacheServerEndpoint', endpoint)
	}

    // Debugging arguments

	DisableManagedDebugger(): void
	{
		this.Append('-disableManagedDebugger')
	}

    EnableDebugCodeOptimization(): void
    {
        this.Append('-debugCodeOptimization')
    }

    SetStackTraceLogType(type: string): void
    {
        this.Append('-stackTraceLogType', `"${type}"`)
    }
}
