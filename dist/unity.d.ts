export default class Unity {
    static GetExecutePath(os: string, unityVersion: string): string;
    static GetVersion(projectDirectory: string): Promise<string>;
}
export declare class UnityCommandBuilder {
    args: string[];
    constructor();
    AddCommand(command: string): void;
    AddCommand(command: string, param: string): void;
    AddCommand(commands: string[]): void;
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
    SetOutputPath(outputPath: string): void;
    Build(): string[];
}
