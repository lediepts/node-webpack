/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routers/index.ts":
/*!******************************!*\
  !*** ./src/Routers/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst v1_1 = __webpack_require__(/*! ./v1 */ \"./src/Routers/v1/index.ts\");\nconst rootRouter = express_1.default.Router();\nrootRouter.use(\"/api/v1\", v1_1.apiV1);\nrootRouter.get(\"/help\", (req, res) => {\n    res.send(\"abc123\");\n});\nexports[\"default\"] = rootRouter;\n\n\n//# sourceURL=webpack://helloworld/./src/Routers/index.ts?");

/***/ }),

/***/ "./src/Routers/v1/index.ts":
/*!*********************************!*\
  !*** ./src/Routers/v1/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.apiV1 = void 0;\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nexports.apiV1 = express_1.default.Router();\n\n\n//# sourceURL=webpack://helloworld/./src/Routers/v1/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst server_1 = __importDefault(__webpack_require__(/*! ./server */ \"./src/server.ts\"));\ndotenv.config();\nconst PORT = parseInt(process.env.PORT, 10);\nserver_1.default.start(PORT || 8881);\n\n\n//# sourceURL=webpack://helloworld/./src/index.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.server = void 0;\nconst cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst http_1 = __webpack_require__(/*! http */ \"http\");\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nconst Routers_1 = __importDefault(__webpack_require__(/*! ./Routers */ \"./src/Routers/index.ts\"));\nconst getIP_1 = __webpack_require__(/*! ./utils/getIP */ \"./src/utils/getIP.ts\");\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\ndotenv.config();\nconst app = (0, express_1.default)();\napp.set(\"view engine\", \"pug\");\napp.set(\"views\", path_1.default.join(process.cwd(), \"dist/views\"));\napp.use(express_1.default.static(path_1.default.join(process.cwd(), \"dist/assets/\")));\nconst corsOptions = {\n    origin: \"*\",\n};\napp.use((0, cors_1.default)(corsOptions));\napp.use((0, helmet_1.default)({\n    contentSecurityPolicy: false,\n}));\napp.use((0, cookie_parser_1.default)(\"4s-mmsi4\"));\napp.use(express_1.default.json({\n    limit: \"10mb\",\n}));\nexports.server = (0, http_1.createServer)(app);\n// =======LOGGER=======\nmorgan_1.default.token(\"IP\", function (req) {\n    return (0, getIP_1.getIP)(req);\n});\nmorgan_1.default.token(\"TIME\", function (req) {\n    return new Date().toLocaleTimeString();\n});\nmorgan_1.default.token(\"req-data\", function (req, res) {\n    return `${req.params && Object.keys(req.params).length > 0\n        ? \"\\nparams:\" + JSON.stringify(req.params, null, 2)\n        : \"\"}${req.query && Object.keys(req.query).length > 0 ? \"\\nquery:\" + JSON.stringify(req.query, null, 2) : \"\"}${req.body && Object.keys(req.body).length > 0 ? \"\\nbody:\" + JSON.stringify(req.body, null, 2) : \"\"}`;\n});\napp.use((0, morgan_1.default)(\"=>[:TIME] :IP :method :url :status [:response-time ms] :req-data\"));\n// APP cache setting\napp.use((req, res, next) => {\n    res.setHeader(\"X-XSS-Protection\", \"1; mode=block\");\n    if (req.path.match(/\\/api\\//)) {\n        res.setHeader(\"Cache-control\", \"no-cache, no-store\");\n        res.setHeader(\"Pragma\", \"no-cache\");\n    }\n    next();\n});\n// API Router setting\napp.use(\"/\", Routers_1.default);\nfunction start(port) {\n    exports.server.listen(port, () => {\n        console.log(`Server on port ${port}`);\n    });\n}\nexports[\"default\"] = {\n    start,\n};\n\n\n//# sourceURL=webpack://helloworld/./src/server.ts?");

/***/ }),

/***/ "./src/utils/getIP.ts":
/*!****************************!*\
  !*** ./src/utils/getIP.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getIP = void 0;\nconst getIP = (req) => {\n    const getIp = __webpack_require__(/*! ipware */ \"ipware\")().get_ip;\n    const { clientIp } = getIp(req);\n    const forwarded = req.headers[\"x-forwarded-for\"];\n    return forwarded || clientIp;\n};\nexports.getIP = getIP;\n\n\n//# sourceURL=webpack://helloworld/./src/utils/getIP.ts?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "ipware":
/*!*************************!*\
  !*** external "ipware" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ipware");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;