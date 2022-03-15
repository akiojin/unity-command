export default class Unity {
    static GetExecutePath(os: string, unityVersion: string): string;
    static GetVersion(projectDirectory: string): Promise<string>;
}
export declare class UnityCommandBuilder {
    args: string[];
    constructor();
    AddCommand(command: string): void;
    AddCommand(command: string, param: string): void;
    Build(): string[];
}
