/******/ var __webpack_modules__ = ({

/***/ 901:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = eval("require")("request-promise");


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ../../usr/local/share/nvm/versions/node/v24.11.1/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?request-promise
var _notfoundrequest_promise = __nccwpck_require__(755);
;// CONCATENATED MODULE: ./src/joke.js


const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
  json: true,
};

async function getJoke() {
  const res = await _notfoundrequest_promise(options);
  return res.joke;
}

/* harmony default export */ const src_joke = (getJoke);
// EXTERNAL MODULE: ../../usr/local/share/nvm/versions/node/v24.11.1/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/core
var core = __nccwpck_require__(901);
;// CONCATENATED MODULE: ./src/main.js



async function run() {
  const joke = await src_joke();
  console.log(joke);
  core.setOutput("joke", joke);
}

run();
