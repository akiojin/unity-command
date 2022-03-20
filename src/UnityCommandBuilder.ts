import { ArgumentBuilder } from '@akiojin/argument-builder'

export default class UnityCommandBuilder extends ArgumentBuilder
{
	constructor()
	{
		super()
		this.Append('-quit')
			.Append('-batchmode')
			.Append('-nographics')
			.Append('-silent-crashes')
	}

	DisableGPUSkinning(): UnityCommandBuilder
	{
		this.Append('-disable-gpu-skinning')
		return this
	}

	SetExecuteMethod(executeMethod: string): UnityCommandBuilder
	{
		this.Append('-executeMethod', executeMethod)
		return this
	}

	SetJobWorkerCount(count: number): UnityCommandBuilder
	{
		this.Append('-job-worker-count', count.toString())
		return this
	}

	SetLogFile(logFile: string): UnityCommandBuilder
	{
		this.Append('-logFile', logFile)
		return this
	}

	DisableUPM() : UnityCommandBuilder
	{
		this.Append('-noUpm')
		return this
	}

	Activation(username: string, password: string): UnityCommandBuilder
	{
		this.Append('-username', username)
			.Append('-password', password)
		return this
	}

	SetProjectPath(projectPath: string): UnityCommandBuilder
	{
		this.Append('-projectPath', projectPath)
		return this
	}

	EnableReleaseCodeOptimization(): UnityCommandBuilder
	{
		this.Append('-releaseCodeOptimization')
		return this
	}

	// Batch mode arguments

	EnableAPIUpdater(): UnityCommandBuilder
	{
		this.Append('-accept-apiupdate')
		return this
	}

	// Build Arguments

	SetBuildTarget(target: string): UnityCommandBuilder
	{
		this.Append('-buildTarget', target)
		return this
	}

	// Cache server arguments

	EnableCacheServer(endpoint: string): UnityCommandBuilder
	{
		this.Append('-EnableCacheServer')
			.Append('-cacheServerEndpoint', endpoint)
		return this
	}

    // Debugging arguments

	DisableManagedDebugger(): UnityCommandBuilder
	{
		this.Append('-disableManagedDebugger')
		return this
	}

    EnableDebugCodeOptimization(): UnityCommandBuilder
    {
        this.Append('-debugCodeOptimization')
		return this
    }

    SetStackTraceLogType(type: string): UnityCommandBuilder
    {
        this.Append('-stackTraceLogType', `"${type}"`)
		return this
    }
}
