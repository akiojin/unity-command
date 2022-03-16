export default class Unity {
    static GetExecutePath(os: string, unityVersion: string): string;
    static GetVersion(projectDirectory: string): Promise<string>;
}
