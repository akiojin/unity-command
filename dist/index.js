/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 643:
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 741:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CommandBuilder {
    constructor() {
        this.args = [];
    }
    AddCommand(command, param) {
        if (Array.isArray(command)) {
            this.args = this.args.concat(command);
        }
        else {
            this.args.push(command);
            if (param != null) {
                this.args.push(param);
            }
        }
    }
    Build() {
        return this.args;
    }
}
exports["default"] = CommandBuilder;


/***/ }),

/***/ 264:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require2_) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandBuilder = void 0;
var CommandBuilder_1 = __nccwpck_require2_(741);
Object.defineProperty(exports, "CommandBuilder", ({ enumerable: true, get: function () { return __importDefault(CommandBuilder_1).default; } }));


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
/******/ 	var __webpack_exports__ = __nccwpck_require2_(264);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;

/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const command_builder_1 = __nccwpck_require__(643);
class UnityCommandBuilder {
    constructor() {
        this.builder = new command_builder_1.CommandBuilder();
    }
    AddCommand(command, param) {
        if (Array.isArray(command)) {
            this.builder.AddCommand(command);
        }
        else {
            if (param != null) {
                this.builder.AddCommand(command, param);
            }
            else {
                this.builder.AddCommand(command);
            }
        }
    }
    DisableGPUSkinning() {
        this.AddCommand('-disable-gpu-skinning');
    }
    SetExecuteMethod(executeMethod) {
        this.AddCommand('-executeMethod', executeMethod);
    }
    SetJobWorkerCount(count) {
        this.AddCommand('-job-worker-count', count.toString());
    }
    SetLogFile(logFile) {
        this.AddCommand('-logFile', logFile);
    }
    DisableUPM() {
        this.AddCommand('-noUpm');
    }
    Activation(username, password) {
        this.AddCommand('-username', username);
        this.AddCommand('-password', password);
    }
    SetProjectPath(projectPath) {
        this.AddCommand('-projectPath', projectPath);
    }
    EnableReleaseCodeOptimization() {
        this.AddCommand('-releaseCodeOptimization');
    }
    // Batch mode arguments
    EnableAPIUpdater() {
        this.AddCommand('-accept-apiupdate');
    }
    // Build Arguments
    SetBuildTarget(target) {
        this.AddCommand('-buildTarget', target);
    }
    // Cache server arguments
    EnableCacheServer(endpoint) {
        this.AddCommand('-EnableCacheServer');
        this.AddCommand('-cacheServerEndpoint', endpoint);
    }
    SetOutputPath(outputPath) {
        this.AddCommand('-outputPath', outputPath);
    }
    Build() {
        return this.builder.Build();
    }
}
exports["default"] = UnityCommandBuilder;


/***/ }),

/***/ 264:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnityCommandBuilder = exports.Unity = void 0;
var unity_1 = __nccwpck_require__(659);
Object.defineProperty(exports, "Unity", ({ enumerable: true, get: function () { return __importDefault(unity_1).default; } }));
var UnityCommandBuilder_1 = __nccwpck_require__(26);
Object.defineProperty(exports, "UnityCommandBuilder", ({ enumerable: true, get: function () { return __importDefault(UnityCommandBuilder_1).default; } }));


/***/ }),

/***/ 659:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __nccwpck_require__(147);
class Unity {
    static GetExecutePath(os, unityVersion) {
        switch (os) {
            default:
            case 'darwin':
                return `/Applications/Unity/Hub/Editor/${unityVersion}/Unity.app/Contents/MacOS/Unity`;
            case 'win32':
                return `C:\\Program Files\\Unity\\Hub\\Editor\\${unityVersion}\\Editor\\Unity.exe`;
        }
    }
    static async GetVersion(projectDirectory) {
        const data = await fs_1.promises.readFile(`${projectDirectory}/ProjectSettings/ProjectVersion.txt`);
        const text = data.toString();
        const result = text.match(/m_EditorVersion: (?<version>[0-9a-zA-Z.]*)/i);
        if (result === null || result.groups == null) {
            throw new Error('Invalid ProjectVersion.txt');
        }
        return result.groups.version;
    }
}
exports["default"] = Unity;


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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
/******/ 	var __webpack_exports__ = __nccwpck_require__(264);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;