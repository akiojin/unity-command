export default class UnityUtils {
    /**
     * Returns the path to the Unity Hub.
     *
     * @returns Default Unity Hub install directory
     *
     */
    static GetDefaultUnityHubDirectory(): string;
    /**
     * Return the path to the Unity executable.
     *
     * @param unityVersion Unity version (e.g. 2021.2.16f1)
     * @param installDirectory Unity Hub install directory
     * @returns Unity executable path
     *
     */
    static GenerateUnityPath(unityVersion: string, installDirectory: string): string;
    /**
     * Returns the path to the Unity executable.
     *
     * @param unityVersion Unity version (e.g. 2021.2.16f1)
     * @param installDirectory Unity Hub install directory
     * @returns Execute path
     *
     * The installation directory, if omitted, is obtained from the environment variable UNITY_HUB_INSTALL_DIRECTORY.
     * If the environment variable UNITY_HUB_INSTALL_DIRECTORY is not set, it is taken from the default installation directory.
     */
    static GetUnityPath(unityVersion: string, installDirectory?: string): string;
    /**
     * Returns the version of Unity used in a given project.
     * The Unity version is obtained from ProjectSettings/ProjectVersion.txt.
     *
     * @param projectDirectory Unity project path
     * @returns Unity version (e.g. 2021.2.16f1)
     */
    static GetCurrentUnityVersion(projectDirectory: string): Promise<string>;
}
