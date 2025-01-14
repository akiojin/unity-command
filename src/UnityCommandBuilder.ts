import { ArgumentBuilder } from '@akiojin/argument-builder'

export default class UnityCommandBuilder extends ArgumentBuilder
{
    /**
     * Sets the default argument.
     */
    constructor()
    {
        super()
        this.Append('-batchmode')
            .Append('-silent-crashes')
    }

    /**
     * Exit the Unity editor after the command has finished executing.
     * 
     * @returns this
     */
    Quit(): UnityCommandBuilder
    {
        this.Append('-quit')
        return this
    }

    /**
     * When you run this in batch mode, Unity doesn’t initialize the graphics device.
     * You can then run automated workflows on machines that don’t have a GPU.
     * Automated workflows only work when you have a window in focus, otherwise you can’t send simulated input commands.
     * -nographics does not allow you to bake GI, because Enlighten requires a GPU for Meta Pass rendering.
     * 
     * @returns this
     */
    NoGraphics(): UnityCommandBuilder
    {
        this.Append('-nographics')
        return this
    }

    /**
     * Disable Graphics Processing Unit (GPU) skinning at startup.
     *
     * @returns this
     */
    DisableGPUSkinning(): UnityCommandBuilder
    {
        this.Append('-disable-gpu-skinning')
        return this
    }

    /**
     * Execute the static method as soon as Unity opens the project,
     * and after the optional Asset server update is complete.
     * 
     * @param executeMethod Method name
     * @returns this
     */
    SetExecuteMethod(executeMethod: string): UnityCommandBuilder
    {
        this.Append('-executeMethod', executeMethod)
        return this
    }

    /**
     * Specify the maximum thread count for the Unity JobQueue Job Worker Count.
     * 
     * @param count Job Worker Count
     * @returns this
     */
    SetJobWorkerCount(count: number): UnityCommandBuilder
    {
        this.Append('-job-worker-count', count.toString())
        return this
    }

    /**
     * Specify where Unity writes the Editor or Windows/Linux/OSX standalone log file.
     * 
     * @param logFile pathname
     * @returns this
     */
    SetLogFile(logFile: string): UnityCommandBuilder
    {
        this.Append('-logFile', logFile)
        return this
    }

    /**
     * Disables the Unity Package Manager.
     * 
     * @returns this
     */
    DisableUPM(): UnityCommandBuilder
    {
        this.Append('-noUpm')
        return this
    }

    /**
     * Enable log output from the Unity Package Manager.
     * 
     * @returns this
     */
    EnablePackageManagerTraces(): UnityCommandBuilder
    {
        this.Append('-enablePackageManagerTraces')
        return this
    }

    /**
     * Activate Unity Editor. (Plus and Pro only)
     * 
     * @param username username
     * @param password password
     * @param serial Unity Serial No.
     * @returns this
     */
    Activation(username: string, password: string, serial: string): UnityCommandBuilder
    {
        this.Append('-username', username)
            .Append('-password', password)
            .Append('-serial', serial)
        return this
    }

    /**
     * Generate a license request file.
     * 
     * @returns this
     */
    RequestActivaion(): UnityCommandBuilder
    {
        this.Append('-createManualActivationFile')
        return this;
    }

    /**
     * License authentication by ulf file.
     * 
     * @param ulfFilePath ulf file path.
     * @returns this
     */
    ActivationForFile(ulfFilePath: string): UnityCommandBuilder
    {
        this.Append('-manualLicenseFile', ulfFilePath)
        return this;
    }

    /**
     * Return the license.
     * 
     * @param username User name.
     * @param password Password
     * @returns this
     */
    Deactivation(username: string, password: string): UnityCommandBuilder
    {
        this.Append('-returnlicense')
            .Append('-username', username)
            .Append('-password', password)
        return this
    }

    /**
     * Open the project at the given path.
     * 
     * @param projectPath pathname
     * @returns this
     */
    SetProjectPath(projectPath: string): UnityCommandBuilder
    {
        this.Append('-projectPath', projectPath)
        return this
    }

    /**
     * Enables release code optimization mode,
     * overriding the current default code optimization mode for the session.
     * 
     * @returns this
     */
    EnableReleaseCodeOptimization(): UnityCommandBuilder
    {
        this.Append('-releaseCodeOptimization')
        return this
    }

    // Batch mode arguments

    /**
     * Use this command line option to specify that APIUpdater should run when Unity is launched in batch mode.
     * 
     * @returns this
     */
    EnableAPIUpdater(): UnityCommandBuilder
    {
        this.Append('-accept-apiupdate')
        return this
    }

    // Build Arguments

    /**
     * Set the build profile saved at the given path as an active build profile
     * (for example, -activeBuildProfile "Assets/Settings/Build Profiles/WindowsDemo.asset").
     * 
     * Note: -activeBuildProfile <pathname> applies custom scripting defines found in the Build data section of the active build profile before compilation.
     * These scripting defines are additive and don’t override other scripting defines in your project.
     * 
     * @param pathname 
     * @returns this
     */
    ActiveBuildProfile(pathname: string): UnityCommandBuilder
    {
        this.Append('-activeBuildProfile', pathname)
        return this
    }

    /**
     * Select an active build target before loading a project.
     * 
     * Possible options are:
     * Standalone, Win, Win64, OSXUniversal, Linux64, iOS, Android, WebGL, WindowsStoreApps, tvOS
     * 
     * @param target Target name
     * @returns this
     */
    SetBuildTarget(target: string): UnityCommandBuilder
    {
        this.Append('-buildTarget', target)
        return this
    }

    // Cache server arguments

    /**
     * Tells Unity to use the newer Accelerator Cache Server.
     * Specifies the endpoint address if you are using the newer Accelerator Cache Server.
     * 
     * @param endpoint Example: -cacheServerEndpoint 127.0.0.1:10080
     * @returns this
     */
    EnableCacheServer(endpoint: string): UnityCommandBuilder
    {
        this.Append('-EnableCacheServer')
            .Append('-cacheServerEndpoint', endpoint)
        return this
    }

    // Debugging arguments

    /**
     * Disables the debugger listen socket.
     * 
     * @returns this
     */
    DisableManagedDebugger(): UnityCommandBuilder
    {
        this.Append('-disableManagedDebugger')
        return this
    }

    /**
     * Enables debug code optimization mode,
     * overriding the current default code optimization mode for the session.
     * 
     * @returns this
     */
    EnableDebugCodeOptimization(): UnityCommandBuilder
    {
        this.Append('-debugCodeOptimization')
        return this
    }

    /**
     * Allow detailed debugging.
     * 
     * Possible options are:
     * None, Script Only, Full
     * 
     * @param type option
     * @returns 
     */
    SetStackTraceLogType(type: string): UnityCommandBuilder
    {
        this.Append('-stackTraceLogType', `"${type}"`)
        return this
    }
}
