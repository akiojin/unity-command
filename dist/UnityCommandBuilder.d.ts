import { ArgumentBuilder } from '@akiojin/argument-builder';
export default class UnityCommandBuilder extends ArgumentBuilder {
    constructor();
    DisableGPUSkinning(): void;
    SetExecuteMethod(executeMethod: string): void;
    SetJobWorkerCount(count: number): void;
    SetLogFile(logFile: string): void;
    DisableUPM(): void;
    Activation(username: string, password: string): void;
    SetProjectPath(projectPath: string): void;
    EnableReleaseCodeOptimization(): void;
    EnableAPIUpdater(): void;
    SetBuildTarget(target: string): void;
    EnableCacheServer(endpoint: string): void;
    DisableManagedDebugger(): void;
    EnableDebugCodeOptimization(): void;
    SetStackTraceLogType(type: string): void;
}
