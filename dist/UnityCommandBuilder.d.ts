import { ArgumentBuilder } from '@akiojin/argument-builder';
export default class UnityCommandBuilder extends ArgumentBuilder {
    constructor();
    DisableGPUSkinning(): UnityCommandBuilder;
    SetExecuteMethod(executeMethod: string): UnityCommandBuilder;
    SetJobWorkerCount(count: number): UnityCommandBuilder;
    SetLogFile(logFile: string): UnityCommandBuilder;
    DisableUPM(): UnityCommandBuilder;
    Activation(username: string, password: string): UnityCommandBuilder;
    SetProjectPath(projectPath: string): UnityCommandBuilder;
    EnableReleaseCodeOptimization(): UnityCommandBuilder;
    EnableAPIUpdater(): UnityCommandBuilder;
    SetBuildTarget(target: string): UnityCommandBuilder;
    EnableCacheServer(endpoint: string): UnityCommandBuilder;
    DisableManagedDebugger(): UnityCommandBuilder;
    EnableDebugCodeOptimization(): UnityCommandBuilder;
    SetStackTraceLogType(type: string): UnityCommandBuilder;
}
