import { CommandBuilder } from '@akiojin/command-builder';
export default class UnityCommandBuilder {
    builder: CommandBuilder;
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
