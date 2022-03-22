/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 582:
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

/***/ 156:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const argument_builder_1 = __nccwpck_require__(582);
class UnityCommandBuilder extends argument_builder_1.ArgumentBuilder {
    constructor() {
        super();
        this.Append('-quit')
            .Append('-batchmode')
            .Append('-nographics')
            .Append('-silent-crashes');
    }
    DisableGPUSkinning() {
        this.Append('-disable-gpu-skinning');
        return this;
    }
    SetExecuteMethod(executeMethod) {
        this.Append('-executeMethod', executeMethod);
        return this;
    }
    SetJobWorkerCount(count) {
        this.Append('-job-worker-count', count.toString());
        return this;
    }
    SetLogFile(logFile) {
        this.Append('-logFile', logFile);
        return this;
    }
    DisableUPM() {
        this.Append('-noUpm');
        return this;
    }
    Activation(username, password) {
        this.Append('-username', username)
            .Append('-password', password);
        return this;
    }
    SetProjectPath(projectPath) {
        this.Append('-projectPath', projectPath);
        return this;
    }
    EnableReleaseCodeOptimization() {
        this.Append('-releaseCodeOptimization');
        return this;
    }
    // Batch mode arguments
    EnableAPIUpdater() {
        this.Append('-accept-apiupdate');
        return this;
    }
    // Build Arguments
    SetBuildTarget(target) {
        this.Append('-buildTarget', target);
        return this;
    }
    // Cache server arguments
    EnableCacheServer(endpoint) {
        this.Append('-EnableCacheServer')
            .Append('-cacheServerEndpoint', endpoint);
        return this;
    }
    // Debugging arguments
    DisableManagedDebugger() {
        this.Append('-disableManagedDebugger');
        return this;
    }
    EnableDebugCodeOptimization() {
        this.Append('-debugCodeOptimization');
        return this;
    }
    SetStackTraceLogType(type) {
        this.Append('-stackTraceLogType', `"${type}"`);
        return this;
    }
}
exports["default"] = UnityCommandBuilder;


/***/ }),

/***/ 925:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnityCommandBuilder = exports.Unity = void 0;
var unity_1 = __nccwpck_require__(327);
Object.defineProperty(exports, "Unity", ({ enumerable: true, get: function () { return __importDefault(unity_1).default; } }));
var UnityCommandBuilder_1 = __nccwpck_require__(156);
Object.defineProperty(exports, "UnityCommandBuilder", ({ enumerable: true, get: function () { return __importDefault(UnityCommandBuilder_1).default; } }));


/***/ }),

/***/ 327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __nccwpck_require__(147);
const path_1 = __importDefault(__nccwpck_require__(17));
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
        const data = await fs_1.promises.readFile(path_1.default.join(projectDirectory, 'ProjectSettings', 'ProjectVersion.txt'));
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
/******/ 	var __webpack_exports__ = __nccwpck_require__(925);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;