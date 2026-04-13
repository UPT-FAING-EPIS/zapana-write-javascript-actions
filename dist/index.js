/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 901:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = eval("require")("request-promise");


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
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
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
var __webpack_exports__ = {};
const core = __nccwpck_require__(901);
const rp = __nccwpck_require__(755);

async function run() {
  try {
    const options = {
      uri: 'https://icanhazdadjoke.com/',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'GitHub-Action-Dad-Joke'
      },
      json: true
    };

    const response = await rp(options);
    const joke = response.joke;

    core.setOutput('joke', joke); // Asegúrate que aquí diga 'joke'
    console.log(joke);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
module.exports = __webpack_exports__;
/******/ })()
;