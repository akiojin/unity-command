export default class Unity {
    /**
     * Returns the path to the Unity executable.
     *
     * @param os platform name (e.g. os.platform())
     * @param unityVersion Unity version
     * @returns Execute path
     */
    static GetExecutePath(os: string, unityVersion: string): string;
    /**
     * Returns the version of Unity used in a given project.
     * The Unity version is obtained from ProjectSettings/ProjectVersion.txt.
     *
     * @param projectDirectory Unity project path
     * @returns Unity version (e.g. 2021.2.16f1)
     */
    static GetVersion(projectDirectory: string): Promise<string>;
}
