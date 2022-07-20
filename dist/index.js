/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 175:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 356:
/***/ (function(__unused_webpack_module, exports) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ArgumentBuilder_args;
Object.defineProperty(exports, "__esModule", ({ value: true }));
class ArgumentBuilder {
    constructor() {
        _ArgumentBuilder_args.set(this, []);
    }
    Append(arg, param) {
        if (Array.isArray(arg)) {
            __classPrivateFieldSet(this, _ArgumentBuilder_args, __classPrivateFieldGet(this, _ArgumentBuilder_args, "f").concat(arg), "f");
        }
        else {
            __classPrivateFieldGet(this, _ArgumentBuilder_args, "f").push(arg);
            if (param != null) {
                __classPrivateFieldGet(this, _ArgumentBuilder_args, "f").push(param);
            }
        }
        return this;
    }
    Count() {
        return __classPrivateFieldGet(this, _ArgumentBuilder_args, "f").length;
    }
    Build() {
        return __classPrivateFieldGet(this, _ArgumentBuilder_args, "f");
    }
    ToString() {
        return __classPrivateFieldGet(this, _ArgumentBuilder_args, "f").join(' ');
    }
}
exports["default"] = ArgumentBuilder;
_ArgumentBuilder_args = new WeakMap();


/***/ }),

/***/ 925:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require2_) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArgumentBuilder = void 0;
var ArgumentBuilder_1 = __nccwpck_require2_(356);
Object.defineProperty(exports, "ArgumentBuilder", ({ enumerable: true, get: function () { return __importDefault(ArgumentBuilder_1).default; } }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require2_(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require2_);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require2_ !== 'undefined') __nccwpck_require2_.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require2_(925);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;

/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const argument_builder_1 = __nccwpck_require__(175);
class UnityCommandBuilder extends argument_builder_1.ArgumentBuilder {
    /**
     * Sets the default argument.
     */
    constructor() {
        super();
        this.Append('-quit')
            .Append('-batchmode')
            .Append('-nographics')
            .Append('-silent-crashes');
    }
    /**
     * Disable Graphics Processing Unit (GPU) skinning at startup.
     *
     * @returns this
     */
    DisableGPUSkinning() {
        this.Append('-disable-gpu-skinning');
        return this;
    }
    /**
     * Execute the static method as soon as Unity opens the project,
     * and after the optional Asset server update is complete.
     *
     * @param executeMethod Method name
     * @returns this
     */
    SetExecuteMethod(executeMethod) {
        this.Append('-executeMethod', executeMethod);
        return this;
    }
    /**
     * Specify the maximum thread count for the Unity JobQueue Job Worker Count.
     *
     * @param count Job Worker Count
     * @returns this
     */
    SetJobWorkerCount(count) {
        this.Append('-job-worker-count', count.toString());
        return this;
    }
    /**
     * Specify where Unity writes the Editor or Windows/Linux/OSX standalone log file.
     *
     * @param logFile pathname
     * @returns this
     */
    SetLogFile(logFile) {
        this.Append('-logFile', logFile);
        return this;
    }
    /**
     * Disables the Unity Package Manager.
     *
     * @returns this
     */
    DisableUPM() {
        this.Append('-noUpm');
        return this;
    }
    /**
     * Enable log output from the Unity Package Manager.
     *
     * @returns this
     */
    EnablePackageManagerTraces() {
        this.Append('-enablePackageManagerTraces');
        return this;
    }
    /**
     * Activate Unity Editor. (Plus and Pro only)
     *
     * @param username username
     * @param password password
     * @param serial Unity Serial No.
     * @returns this
     */
    Activation(username, password, serial) {
        this.Append('-username', username)
            .Append('-password', password)
            .Append('-serial', serial);
        return this;
    }
    /**
     * Generate a license request file.
     *
     * @returns this
     */
    RequestActivaion() {
        this.Append('-createManualActivationFile');
        return this;
    }
    /**
     * License authentication by ulf file.
     *
     * @param ulfFilePath ulf file path.
     * @returns this
     */
    ActivationForFile(ulfFilePath) {
        this.Append('-manualLicenseFile', ulfFilePath);
        return this;
    }
    /**
     * Return the license.
     *
     * @param username User name.
     * @param password Password
     * @returns this
     */
    Deactivation(username, password) {
        this.Append('-returnlicense')
            .Append('-username', username)
            .Append('-password', password);
        return this;
    }
    /**
     * Open the project at the given path.
     *
     * @param projectPath pathname
     * @returns this
     */
    SetProjectPath(projectPath) {
        this.Append('-projectPath', projectPath);
        return this;
    }
    /**
     * Enables release code optimization mode,
     * overriding the current default code optimization mode for the session.
     *
     * @returns this
     */
    EnableReleaseCodeOptimization() {
        this.Append('-releaseCodeOptimization');
        return this;
    }
    // Batch mode arguments
    /**
     * Use this command line option to specify that APIUpdater should run when Unity is launched in batch mode.
     *
     * @returns this
     */
    EnableAPIUpdater() {
        this.Append('-accept-apiupdate');
        return this;
    }
    // Build Arguments
    /**
     * Select an active build target before loading a project.
     *
     * Possible options are:
     * Standalone, Win, Win64, OSXUniversal, Linux64, iOS, Android, WebGL, WindowsStoreApps, tvOS
     *
     * @param target Target name
     * @returns this
     */
    SetBuildTarget(target) {
        this.Append('-buildTarget', target);
        return this;
    }
    // Cache server arguments
    /**
     * Tells Unity to use the newer Accelerator Cache Server.
     * Specifies the endpoint address if you are using the newer Accelerator Cache Server.
     *
     * @param endpoint Example: -cacheServerEndpoint 127.0.0.1:10080
     * @returns this
     */
    EnableCacheServer(endpoint) {
        this.Append('-EnableCacheServer')
            .Append('-cacheServerEndpoint', endpoint);
        return this;
    }
    // Debugging arguments
    /**
     * Disables the debugger listen socket.
     *
     * @returns this
     */
    DisableManagedDebugger() {
        this.Append('-disableManagedDebugger');
        return this;
    }
    /**
     * Enables debug code optimization mode,
     * overriding the current default code optimization mode for the session.
     *
     * @returns this
     */
    EnableDebugCodeOptimization() {
        this.Append('-debugCodeOptimization');
        return this;
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
    SetStackTraceLogType(type) {
        this.Append('-stackTraceLogType', `"${type}"`);
        return this;
    }
}
exports["default"] = UnityCommandBuilder;


/***/ }),

/***/ 322:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __nccwpck_require__(147);
const path_1 = __importDefault(__nccwpck_require__(17));
class UnityUtils {
    /**
     * Returns the path to the Unity executable.
     *
     * @param os platform name (e.g. os.platform())
     * @param unityVersion Unity version
     * @returns Execute path
     */
    static GetExecutePath(os, unityVersion) {
        switch (os) {
            default:
                throw new Error('Unsupported platform.');
            case 'darwin':
                if (!unityVersion) {
                    return `/Applications/Unity/Unity.app/Contents/MacOS/Unity`;
                }
                else {
                    return `/Applications/Unity/Hub/Editor/${unityVersion}/Unity.app/Contents/MacOS/Unity`;
                }
            case 'win32':
                return `"C:\\Program Files\\Unity\\Hub\\Editor\\${unityVersion}\\Editor\\Unity.exe"`;
        }
    }
    /**
     * Returns the version of Unity used in a given project.
     * The Unity version is obtained from ProjectSettings/ProjectVersion.txt.
     *
     * @param projectDirectory Unity project path
     * @returns Unity version (e.g. 2021.2.16f1)
     */
    static async GetVersion(projectDirectory) {
        const filePath = path_1.default.join(projectDirectory, 'ProjectSettings', 'ProjectVersion.txt');
        const text = await fs_1.promises.readFile(filePath, 'utf-8');
        const result = text.match(/m_EditorVersion: (?<version>[0-9a-zA-Z.]*)/i);
        if (result === null || result.groups == null) {
            throw new Error('Invalid ProjectVersion.txt');
        }
        return result.groups.version;
    }
}
exports["default"] = UnityUtils;


/***/ }),

/***/ 177:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnityCommandBuilder = exports.UnityUtils = void 0;
var UnityUtils_1 = __nccwpck_require__(322);
Object.defineProperty(exports, "UnityUtils", ({ enumerable: true, get: function () { return __importDefault(UnityUtils_1).default; } }));
var UnityCommandBuilder_1 = __nccwpck_require__(245);
Object.defineProperty(exports, "UnityCommandBuilder", ({ enumerable: true, get: function () { return __importDefault(UnityCommandBuilder_1).default; } }));


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(177);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;