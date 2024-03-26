import { ArgumentBuilder } from '@akiojin/argument-builder';
export default class UnityCommandBuilder extends ArgumentBuilder {
    /**
     * Sets the default argument.
     */
    constructor();
    /**
     * Exit the Unity editor after the command has finished executing.
     *
     * @returns this
     */
    Quit(): UnityCommandBuilder;
    /**
     * When you run this in batch mode, Unity doesn’t initialize the graphics device.
     * You can then run automated workflows on machines that don’t have a GPU.
     * Automated workflows only work when you have a window in focus, otherwise you can’t send simulated input commands.
     * -nographics does not allow you to bake GI, because Enlighten requires a GPU for Meta Pass rendering.
     *
     * @returns this
     */
    NoGraphics(): UnityCommandBuilder;
    /**
     * Disable Graphics Processing Unit (GPU) skinning at startup.
     *
     * @returns this
     */
    DisableGPUSkinning(): UnityCommandBuilder;
    /**
     * Execute the static method as soon as Unity opens the project,
     * and after the optional Asset server update is complete.
     *
     * @param executeMethod Method name
     * @returns this
     */
    SetExecuteMethod(executeMethod: string): UnityCommandBuilder;
    /**
     * Specify the maximum thread count for the Unity JobQueue Job Worker Count.
     *
     * @param count Job Worker Count
     * @returns this
     */
    SetJobWorkerCount(count: number): UnityCommandBuilder;
    /**
     * Specify where Unity writes the Editor or Windows/Linux/OSX standalone log file.
     *
     * @param logFile pathname
     * @returns this
     */
    SetLogFile(logFile: string): UnityCommandBuilder;
    /**
     * Disables the Unity Package Manager.
     *
     * @returns this
     */
    DisableUPM(): UnityCommandBuilder;
    /**
     * Enable log output from the Unity Package Manager.
     *
     * @returns this
     */
    EnablePackageManagerTraces(): UnityCommandBuilder;
    /**
     * Activate Unity Editor. (Plus and Pro only)
     *
     * @param username username
     * @param password password
     * @param serial Unity Serial No.
     * @returns this
     */
    Activation(username: string, password: string, serial: string): UnityCommandBuilder;
    /**
     * Generate a license request file.
     *
     * @returns this
     */
    RequestActivaion(): UnityCommandBuilder;
    /**
     * License authentication by ulf file.
     *
     * @param ulfFilePath ulf file path.
     * @returns this
     */
    ActivationForFile(ulfFilePath: string): UnityCommandBuilder;
    /**
     * Return the license.
     *
     * @param username User name.
     * @param password Password
     * @returns this
     */
    Deactivation(username: string, password: string): UnityCommandBuilder;
    /**
     * Open the project at the given path.
     *
     * @param projectPath pathname
     * @returns this
     */
    SetProjectPath(projectPath: string): UnityCommandBuilder;
    /**
     * Enables release code optimization mode,
     * overriding the current default code optimization mode for the session.
     *
     * @returns this
     */
    EnableReleaseCodeOptimization(): UnityCommandBuilder;
    /**
     * Use this command line option to specify that APIUpdater should run when Unity is launched in batch mode.
     *
     * @returns this
     */
    EnableAPIUpdater(): UnityCommandBuilder;
    /**
     * Select an active build target before loading a project.
     *
     * Possible options are:
     * Standalone, Win, Win64, OSXUniversal, Linux64, iOS, Android, WebGL, WindowsStoreApps, tvOS
     *
     * @param target Target name
     * @returns this
     */
    SetBuildTarget(target: string): UnityCommandBuilder;
    /**
     * Tells Unity to use the newer Accelerator Cache Server.
     * Specifies the endpoint address if you are using the newer Accelerator Cache Server.
     *
     * @param endpoint Example: -cacheServerEndpoint 127.0.0.1:10080
     * @returns this
     */
    EnableCacheServer(endpoint: string): UnityCommandBuilder;
    /**
     * Disables the debugger listen socket.
     *
     * @returns this
     */
    DisableManagedDebugger(): UnityCommandBuilder;
    /**
     * Enables debug code optimization mode,
     * overriding the current default code optimization mode for the session.
     *
     * @returns this
     */
    EnableDebugCodeOptimization(): UnityCommandBuilder;
    /**
     * Allow detailed debugging.
     *
     * Possible options are:
     * None, Script Only, Full
     *
     * @param type option
     * @returns
     */
    SetStackTraceLogType(type: string): UnityCommandBuilder;
}
