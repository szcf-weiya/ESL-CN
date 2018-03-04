(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/* eslint-disable no-underscore-dangle */
exports.default = /* JSX */{

  /**
   * Create a native DOM node from JSX's intermediate representation
   *
   * @param {string} tag - Tag name
   * @param {?Object} properties - Properties
   * @param {Array<string | number | { __html: string } | Array<HTMLElement>>}
   *   children - Child nodes
   * @return {HTMLElement} Native DOM node
   */
  createElement: function createElement(tag, properties) {
    var el = document.createElement(tag);

    /* Set all properties */
    if (properties) Array.prototype.forEach.call(Object.keys(properties), function (attr) {
      el.setAttribute(attr, properties[attr]);
    });

    /* Iterate child nodes */
    var iterateChildNodes = function iterateChildNodes(nodes) {
      Array.prototype.forEach.call(nodes, function (node) {

        /* Directly append text content */
        if (typeof node === "string" || typeof node === "number") {
          el.textContent += node;

          /* Recurse, if we got an array */
        } else if (Array.isArray(node)) {
          iterateChildNodes(node);

          /* Append raw HTML */
        } else if (typeof node.__html !== "undefined") {
          el.innerHTML += node.__html;

          /* Append regular nodes */
        } else if (node instanceof Node) {
          el.appendChild(node);
        }
      });
    };

    /* Iterate child nodes and return element */

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    iterateChildNodes(children);
    return el;
  }
};
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/200|0) == 1,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Listener = function () {

  /**
   * Generic event listener
   *
   * @constructor
   *
   * @property {(Array<EventTarget>)} els_ - Event targets
   * @property {Object} handler_- Event handlers
   * @property {Array<string>} events_ - Event names
   * @property {Function} update_ - Update handler
   *
   * @param {?(string|EventTarget|NodeList<EventTarget>)} els -
   *   Selector or Event targets
   * @param {(string|Array<string>)} events - Event names
   * @param {(Object|Function)} handler - Handler to be invoked
   */
  function Listener(els, events, handler) {
    var _this = this;

    _classCallCheck(this, Listener);

    this.els_ = Array.prototype.slice.call(typeof els === "string" ? document.querySelectorAll(els) : [].concat(els));

    /* Set handler as function or directly as object */
    this.handler_ = typeof handler === "function" ? { update: handler } : handler;

    /* Initialize event names and update handler */
    this.events_ = [].concat(events);
    this.update_ = function (ev) {
      return _this.handler_.update(ev);
    };
  }

  /**
   * Register listener for all relevant events
   */


  Listener.prototype.listen = function listen() {
    var _this2 = this;

    this.els_.forEach(function (el) {
      _this2.events_.forEach(function (event) {
        el.addEventListener(event, _this2.update_, false);
      });
    });

    /* Execute setup handler, if implemented */
    if (typeof this.handler_.setup === "function") this.handler_.setup();
  };

  /**
   * Unregister listener for all relevant events
   */


  Listener.prototype.unlisten = function unlisten() {
    var _this3 = this;

    this.els_.forEach(function (el) {
      _this3.events_.forEach(function (event) {
        el.removeEventListener(event, _this3.update_);
      });
    });

    /* Execute reset handler, if implemented */
    if (typeof this.handler_.reset === "function") this.handler_.reset();
  };

  return Listener;
}();

exports.default = Listener;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
exports.app = undefined;

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

var _promisePolyfill = __webpack_require__(14);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _clipboard = __webpack_require__(18);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _fastclick = __webpack_require__(26);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Material = __webpack_require__(27);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

window.Promise = window.Promise || _promisePolyfill2.default;

/* ----------------------------------------------------------------------------
 * Dependencies
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Polyfills
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Application
 * ------------------------------------------------------------------------- */

/**
 * Initialize Material for MkDocs
 *
 * @param {Object} config - Configuration
 */
function initialize(config) {
  // eslint-disable-line func-style

  /* Initialize Modernizr and FastClick */
  new _Material2.default.Event.Listener(document, "DOMContentLoaded", function () {
    if (!(document.body instanceof HTMLElement)) throw new ReferenceError();

    /* Attach FastClick to mitigate 300ms delay on touch devices */
    _fastclick2.default.attach(document.body);

    /* Test for iOS */
    Modernizr.addTest("ios", function () {
      return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });

    /* Wrap all data tables for better overflow scrolling */
    var tables = document.querySelectorAll("table:not([class])"); // TODO: this is JSX, we should rename the file
    Array.prototype.forEach.call(tables, function (table) {
      var wrap = JSX.createElement(
        "div",
        { "class": "md-typeset__scrollwrap" },
        JSX.createElement("div", { "class": "md-typeset__table" })
      );
      if (table.nextSibling) {
        table.parentNode.insertBefore(wrap, table.nextSibling);
      } else {
        table.parentNode.appendChild(wrap);
      }
      wrap.children[0].appendChild(table);
    });

    /* Clipboard integration */
    if (_clipboard2.default.isSupported()) {
      var blocks = document.querySelectorAll(".codehilite > pre, pre > code");
      Array.prototype.forEach.call(blocks, function (block, index) {
        var id = "__code_" + index;

        /* Create button with message container */
        var button = JSX.createElement(
          "button",
          { "class": "md-clipboard", title: translate("clipboard.copy"),
            "data-clipboard-target": "#" + id + " pre, #" + id + " code" },
          JSX.createElement("span", { "class": "md-clipboard__message" })
        );

        /* Link to block and insert button */
        var parent = block.parentNode;
        parent.id = id;
        parent.insertBefore(button, block);
      });

      /* Initialize Clipboard listener */
      var copy = new _clipboard2.default(".md-clipboard");

      /* Success handler */
      copy.on("success", function (action) {
        var message = action.trigger.querySelector(".md-clipboard__message");
        if (!(message instanceof HTMLElement)) throw new ReferenceError();

        /* Clear selection and reset debounce logic */
        action.clearSelection();
        if (message.dataset.mdTimer) clearTimeout(parseInt(message.dataset.mdTimer, 10));

        /* Set message indicating success and show it */
        message.classList.add("md-clipboard__message--active");
        message.innerHTML = translate("clipboard.copied");

        /* Hide message after two seconds */
        message.dataset.mdTimer = setTimeout(function () {
          message.classList.remove("md-clipboard__message--active");
          message.dataset.mdTimer = "";
        }, 2000).toString();
      });
    }

    /* Polyfill details/summary functionality */
    if (!Modernizr.details) {
      var _blocks = document.querySelectorAll("details > summary");
      Array.prototype.forEach.call(_blocks, function (summary) {
        summary.addEventListener("click", function (ev) {
          var details = ev.target.parentNode;
          if (details.hasAttribute("open")) {
            details.removeAttribute("open");
          } else {
            details.setAttribute("open", "");
          }
        });
      });
    }

    /* Open details after anchor jump */
    var details = function details() {
      if (document.location.hash) {
        var el = document.getElementById(document.location.hash.substring(1));
        if (!el) return;

        /* Walk up as long as we're not in a details tag */
        var parent = el.parentNode;
        while (parent && !(parent instanceof HTMLDetailsElement)) {
          parent = parent.parentNode;
        } /* If there's a details tag, open it */
        if (parent && !parent.open) {
          parent.open = true;

          /* Force reload, so the viewport repositions */
          var loc = location.hash;
          location.hash = " ";
          location.hash = loc;
        }
      }
    };
    window.addEventListener("hashchange", details);
    details();

    /* Force 1px scroll offset to trigger overflow scrolling */
    if (Modernizr.ios) {
      var scrollable = document.querySelectorAll("[data-md-scrollfix]");
      Array.prototype.forEach.call(scrollable, function (item) {
        item.addEventListener("touchstart", function () {
          var top = item.scrollTop;

          /* We're at the top of the container */
          if (top === 0) {
            item.scrollTop = 1;

            /* We're at the bottom of the container */
          } else if (top + item.offsetHeight === item.scrollHeight) {
            item.scrollTop = top - 1;
          }
        });
      });
    }
  }).listen();

  /* Component: header shadow toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen();

  /* Component: header title toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen();

  /* Component: hero visibility toggle */
  if (document.querySelector("[data-md-component=hero]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=hero]")).listen();

  /* Component: tabs visibility toggle */
  if (document.querySelector("[data-md-component=tabs]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=tabs]")).listen();

  /* Component: sidebar with navigation */
  new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]")));

  /* Component: sidebar with table of contents (missing on 404 page) */
  if (document.querySelector("[data-md-component=toc]")) new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]")));

  /* Component: link blurring for table of contents */
  new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, "scroll", new _Material2.default.Nav.Blur("[data-md-component=toc] [href]")));

  /* Component: collapsible elements for navigation */
  var collapsibles = document.querySelectorAll("[data-md-component=collapsible]");
  Array.prototype.forEach.call(collapsibles, function (collapse) {
    new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(collapse.previousElementSibling, "click", new _Material2.default.Nav.Collapse(collapse)));
  });

  /* Component: active pane monitor for iOS scrolling fixes */
  new _Material2.default.Event.MatchMedia("(max-width: 1219px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new _Material2.default.Nav.Scrolling("[data-md-component=navigation] nav")));

  /* Initialize search, if available */
  if (document.querySelector("[data-md-component=search]")) {

    /* Component: search body lock for mobile */
    new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", new _Material2.default.Search.Lock("[data-md-toggle=search]")));

    /* Component: search results */
    new _Material2.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new _Material2.default.Search.Result("[data-md-component=result]", function () {
      return fetch(config.url.base + "/" + (config.version < "0.17" ? "mkdocs" : "search") + "/search_index.json", {
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.docs.map(function (doc) {
          doc.location = config.url.base + doc.location;
          return doc;
        });
      });
    })).listen();

    /* Listener: focus input after form reset */
    new _Material2.default.Event.Listener("[data-md-component=reset]", "click", function () {
      setTimeout(function () {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        query.focus();
      }, 10);
    }).listen();

    /* Listener: focus input after opening search */
    new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", function (ev) {
      setTimeout(function (toggle) {
        if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
        if (toggle.checked) {
          var query = document.querySelector("[data-md-component=query]");
          if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
          query.focus();
        }
      }, 400, ev.target);
    }).listen();

    /* Listener: open search on focus */
    new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener("[data-md-component=query]", "focus", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (!toggle.checked) {
        toggle.checked = true;
        toggle.dispatchEvent(new CustomEvent("change"));
      }
    }));

    /* Listener: keyboard handlers */ // eslint-disable-next-line complexity
    new _Material2.default.Event.Listener(window, "keydown", function (ev) {
      // TODO: split up into component to reduce complexity
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      var query = document.querySelector("[data-md-component=query]");
      if (!(query instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort if meta key (macOS) or ctrl key (Windows) is pressed */
      if (ev.metaKey || ev.ctrlKey) return;

      /* Search is open */
      if (toggle.checked) {

        /* Enter: prevent form submission */
        if (ev.keyCode === 13) {
          if (query === document.activeElement) {
            ev.preventDefault();

            /* Go to current active/focused link */
            var focus = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
            if (focus instanceof HTMLLinkElement) {
              window.location = focus.getAttribute("href");

              /* Close search */
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
              query.blur();
            }
          }

          /* Escape or Tab: close search */
        } else if (ev.keyCode === 9 || ev.keyCode === 27) {
          toggle.checked = false;
          toggle.dispatchEvent(new CustomEvent("change"));
          query.blur();

          /* Horizontal arrows and backspace: focus input */
        } else if ([8, 37, 39].indexOf(ev.keyCode) !== -1) {
          if (query !== document.activeElement) query.focus();

          /* Vertical arrows: select previous or next search result */
        } else if ([38, 40].indexOf(ev.keyCode) !== -1) {
          var key = ev.keyCode;

          /* Retrieve all results */
          var links = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]"));

          /* Retrieve current active/focused result */
          var _focus = links.find(function (link) {
            if (!(link instanceof HTMLElement)) throw new ReferenceError();
            return link.dataset.mdState === "active";
          });
          if (_focus) _focus.dataset.mdState = "";

          /* Calculate index depending on direction, add length to form ring */
          var index = Math.max(0, (links.indexOf(_focus) + links.length + (key === 38 ? -1 : +1)) % links.length);

          /* Set active state and focus */
          if (links[index]) {
            links[index].dataset.mdState = "active";
            links[index].focus();
          }

          /* Prevent scrolling of page */
          ev.preventDefault();
          ev.stopPropagation();

          /* Return false prevents the cursor position from changing */
          return false;
        }

        /* Search is closed and we're not inside a form */
      } else if (document.activeElement && !document.activeElement.form) {

        /* F/S: Open search if not in input field */
        if (ev.keyCode === 70 || ev.keyCode === 83) {
          query.focus();
          ev.preventDefault();
        }
      }
    }).listen();

    /* Listener: focus query if in search is open and character is typed */
    new _Material2.default.Event.Listener(window, "keypress", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        if (query !== document.activeElement) query.focus();
      }
    }).listen();
  }

  /* Listener: handle tabbing context for better accessibility */
  new _Material2.default.Event.Listener(document.body, "keydown", function (ev) {
    if (ev.keyCode === 9) {
      var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
      Array.prototype.forEach.call(labels, function (label) {
        if (label.offsetHeight) label.tabIndex = 0;
      });
    }
  }).listen();

  /* Listener: reset tabbing behavior */
  new _Material2.default.Event.Listener(document.body, "mousedown", function () {
    var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
    Array.prototype.forEach.call(labels, function (label) {
      label.removeAttribute("tabIndex");
    });
  }).listen();

  document.body.addEventListener("click", function () {
    if (document.body.dataset.mdState === "tabbing") document.body.dataset.mdState = "";
  });

  /* Listener: close drawer when anchor links are clicked */
  new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function () {
    var toggle = document.querySelector("[data-md-toggle=drawer]");
    if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
    if (toggle.checked) {
      toggle.checked = false;
      toggle.dispatchEvent(new CustomEvent("change"));
    }
  }))

  /* Retrieve facts for the given repository type */
  ;(function () {
    var el = document.querySelector("[data-md-source]");
    if (!el) return _promisePolyfill2.default.resolve([]);else if (!(el instanceof HTMLAnchorElement)) throw new ReferenceError();
    switch (el.dataset.mdSource) {
      case "github":
        return new _Material2.default.Source.Adapter.GitHub(el).fetch();
      default:
        return _promisePolyfill2.default.resolve([]);
    }

    /* Render repository information */
  })().then(function (facts) {
    var sources = document.querySelectorAll("[data-md-source]");
    Array.prototype.forEach.call(sources, function (source) {
      new _Material2.default.Source.Repository(source).initialize(facts);
    });
  });
}

/* ----------------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------------- */

/* Provide this for downward compatibility for now */
var app = {
  initialize: initialize
};

exports.app = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/bitbucket.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/github.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/gitlab.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

if (!window.fetch) window.fetch = __webpack_require__(2).default || __webpack_require__(2);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(16);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(19), __webpack_require__(21), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(23);
var delegate = __webpack_require__(24);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(25);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Event = __webpack_require__(28);

var _Event2 = _interopRequireDefault(_Event);

var _Header = __webpack_require__(30);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(33);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(37);

var _Search2 = _interopRequireDefault(_Search);

var _Sidebar = __webpack_require__(43);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Source = __webpack_require__(45);

var _Source2 = _interopRequireDefault(_Source);

var _Tabs = __webpack_require__(51);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Event: _Event2.default,
  Header: _Header2.default,
  Nav: _Nav2.default,
  Search: _Search2.default,
  Sidebar: _Sidebar2.default,
  Source: _Source2.default,
  Tabs: _Tabs2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

var _MatchMedia = __webpack_require__(29);

var _MatchMedia2 = _interopRequireDefault(_MatchMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Listener: _Listener2.default,
  MatchMedia: _MatchMedia2.default
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

// eslint-disable-line no-unused-vars

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var MatchMedia =

/**
 * Media query listener
 *
 * This class listens for state changes of media queries and automatically
 * switches the given listeners on or off.
 *
 * @constructor
 *
 * @property {Function} handler_ - Media query event handler
 *
 * @param {string} query - Media query to test for
 * @param {Listener} listener - Event listener
 */
function MatchMedia(query, listener) {
  _classCallCheck(this, MatchMedia);

  this.handler_ = function (mq) {
    if (mq.matches) listener.listen();else listener.unlisten();
  };

  /* Initialize media query listener */
  var media = window.matchMedia(query);
  media.addListener(this.handler_);

  /* Always check at initialization */
  this.handler_(media);
};

exports.default = MatchMedia;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shadow = __webpack_require__(31);

var _Shadow2 = _interopRequireDefault(_Shadow);

var _Title = __webpack_require__(32);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Shadow: _Shadow2.default,
  Title: _Title2.default
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Shadow = function () {

  /**
   * Show or hide header shadow depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Offset height of previous nodes
   * @property {boolean} active_ - Header shadow state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Shadow(el, header) {
    _classCallCheck(this, Shadow);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize height and state */
    this.height_ = 0;
    this.active_ = false;
  }

  /**
   * Calculate total height of previous nodes
   */


  Shadow.prototype.setup = function setup() {
    var current = this.el_;
    while (current = current.previousElementSibling) {
      if (!(current instanceof HTMLElement)) throw new ReferenceError();
      this.height_ += current.offsetHeight;
    }
    this.update();
  };

  /**
   * Update shadow state
   *
   * @param {Event} ev - Event
   */


  Shadow.prototype.update = function update(ev) {
    if (ev && (ev.type === "resize" || ev.type === "orientationchange")) {
      this.height_ = 0;
      this.setup();
    } else {
      var active = window.pageYOffset >= this.height_;
      if (active !== this.active_) this.header_.dataset.mdState = (this.active_ = active) ? "shadow" : "";
    }
  };

  /**
   * Reset shadow state
   */


  Shadow.prototype.reset = function reset() {
    this.header_.dataset.mdState = "";
    this.height_ = 0;
    this.active_ = false;
  };

  return Shadow;
}();

exports.default = Shadow;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Title = function () {

  /**
   * Swap header title topics when header is scrolled past
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Element
   * @property {HTMLElement} header_ - Header
   * @property {boolean} active_ - Title state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLHeadingElement)} header - Selector or HTML element
   */
  function Title(el, header) {
    _classCallCheck(this, Title);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLHeadingElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize state */
    this.active_ = false;
  }

  /**
   * Setup title state
   */


  Title.prototype.setup = function setup() {
    var _this = this;

    Array.prototype.forEach.call(this.el_.children, function (node) {
      // TODO: use childNodes here for IE?
      node.style.width = _this.el_.offsetWidth - 20 + "px";
    });
  };

  /**
   * Update title state
   *
   * @param {Event} ev - Event
   */


  Title.prototype.update = function update(ev) {
    var _this2 = this;

    var active = window.pageYOffset >= this.header_.offsetTop;
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "active" : "";

    /* Hack: induce ellipsis on topics */
    if (ev.type === "resize" || ev.type === "orientationchange") {
      Array.prototype.forEach.call(this.el_.children, function (node) {
        node.style.width = _this2.el_.offsetWidth - 20 + "px";
      });
    }
  };

  /**
   * Reset title state
   */


  Title.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.width = "";
    this.active_ = false;
  };

  return Title;
}();

exports.default = Title;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Blur = __webpack_require__(34);

var _Blur2 = _interopRequireDefault(_Blur);

var _Collapse = __webpack_require__(35);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Scrolling = __webpack_require__(36);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Blur: _Blur2.default,
  Collapse: _Collapse2.default,
  Scrolling: _Scrolling2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Blur = function () {

  /**
   * Blur links within the table of contents above current page y-offset
   *
   * @constructor
   *
   * @property {NodeList<HTMLElement>} els_ - Table of contents links
   * @property {Array<HTMLElement>} anchors_ - Referenced anchor nodes
   * @property {number} index_ - Current link index
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} dir_ - Scroll direction change
   *
   * @param {(string|NodeList<HTMLElement>)} els - Selector or HTML elements
   */
  function Blur(els) {
    _classCallCheck(this, Blur);

    this.els_ = typeof els === "string" ? document.querySelectorAll(els) : els;

    /* Initialize index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;

    /* Necessary state to correctly reset the index */
    this.dir_ = false;

    /* Index anchor node offsets for fast lookup */
    this.anchors_ = [].reduce.call(this.els_, function (anchors, el) {
      return anchors.concat(document.getElementById(el.hash.substring(1)) || []);
    }, []);
  }

  /**
   * Initialize blur states
   */


  Blur.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update blur states
   *
   * Deduct the static offset of the header (56px) and sidebar offset (24px),
   * see _permalinks.scss for more information.
   */


  Blur.prototype.update = function update() {
    var offset = window.pageYOffset;
    var dir = this.offset_ - offset < 0;

    /* Hack: reset index if direction changed to catch very fast scrolling,
       because otherwise we would have to register a timer and that sucks */
    if (this.dir_ !== dir) this.index_ = dir ? this.index_ = 0 : this.index_ = this.els_.length - 1;

    /* Exit when there are no anchors */
    if (this.anchors_.length === 0) return;

    /* Scroll direction is down */
    if (this.offset_ <= offset) {
      for (var i = this.index_ + 1; i < this.els_.length; i++) {
        if (this.anchors_[i].offsetTop - (56 + 24) <= offset) {
          if (i > 0) this.els_[i - 1].dataset.mdState = "blur";
          this.index_ = i;
        } else {
          break;
        }
      }

      /* Scroll direction is up */
    } else {
      for (var _i = this.index_; _i >= 0; _i--) {
        if (this.anchors_[_i].offsetTop - (56 + 24) > offset) {
          if (_i > 0) this.els_[_i - 1].dataset.mdState = "";
        } else {
          this.index_ = _i;
          break;
        }
      }
    }

    /* Remember current offset and direction for next iteration */
    this.offset_ = offset;
    this.dir_ = dir;
  };

  /**
   * Reset blur states
   */


  Blur.prototype.reset = function reset() {
    Array.prototype.forEach.call(this.els_, function (el) {
      el.dataset.mdState = "";
    });

    /* Reset index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;
  };

  return Blur;
}();

exports.default = Blur;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Collapse = function () {

  /**
   * Expand or collapse navigation on toggle
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Navigation list
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Collapse(el) {
    _classCallCheck(this, Collapse);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize overflow and display for accessibility
   */


  Collapse.prototype.setup = function setup() {
    var current = this.el_.getBoundingClientRect().height;

    /* Hidden links should not be focusable, so hide them when the navigation
       is collapsed and set overflow so the outline is not cut off */
    this.el_.style.display = current ? "block" : "none";
    this.el_.style.overflow = current ? "visible" : "hidden";
  };

  /**
   * Animate expand and collapse smoothly
   *
   * Internet Explorer 11 is very slow at recognizing changes on the dataset
   * which results in the menu not expanding or collapsing properly. THerefore,
   * for reasons of compatibility, the attribute accessors are used.
   */


  Collapse.prototype.update = function update() {
    var _this = this;

    var current = this.el_.getBoundingClientRect().height;

    /* Reset overflow to CSS defaults */
    this.el_.style.display = "block";
    this.el_.style.overflow = "";

    /* Expanded, so collapse */
    if (current) {
      this.el_.style.maxHeight = current + "px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = "0px";
      });

      /* Collapsed, so expand */
    } else {
      this.el_.setAttribute("data-md-state", "expand");
      this.el_.style.maxHeight = "";

      /* Read height and unset pseudo-toggled state */
      var height = this.el_.getBoundingClientRect().height;
      this.el_.removeAttribute("data-md-state");

      /* Set initial state and animate */
      this.el_.style.maxHeight = "0px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = height + "px";
      });
    }

    /* Remove state on end of transition */
    var end = function end(ev) {
      var target = ev.target;
      if (!(target instanceof HTMLElement)) throw new ReferenceError();

      /* Reset height and state */
      target.removeAttribute("data-md-state");
      target.style.maxHeight = "";

      /* Hidden links should not be focusable, so hide them when the navigation
         is collapsed and set overflow so the outline is not cut off */
      target.style.display = current ? "none" : "block";
      target.style.overflow = current ? "hidden" : "visible";

      /* Only fire once, so directly remove event listener */
      target.removeEventListener("transitionend", end);
    };
    this.el_.addEventListener("transitionend", end, false);
  };

  /**
   * Reset height and pseudo-toggled state
   */


  Collapse.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.maxHeight = "";
    this.el_.style.display = "";
    this.el_.style.overflow = "";
  };

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Scrolling = function () {

  /**
   * Set overflow scrolling on the current active pane (for iOS)
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Primary navigation
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Scrolling(el) {
    _classCallCheck(this, Scrolling);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Setup panes
   */


  Scrolling.prototype.setup = function setup() {

    /* Initially set overflow scrolling on main pane */
    var main = this.el_.children[this.el_.children.length - 1];
    main.style.webkitOverflowScrolling = "touch";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find current and parent list elements */
        var parent = toggle.parentNode.parentNode;
        var target = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        target.style.webkitOverflowScrolling = "touch";
      }
    });
  };

  /**
   * Update active panes
   *
   * @param {Event} ev - Change event
   */


  Scrolling.prototype.update = function update(ev) {
    var target = ev.target;
    if (!(target instanceof HTMLElement)) throw new ReferenceError();

    /* Find corresponding navigational pane */
    var pane = target.nextElementSibling;
    if (!(pane instanceof HTMLElement)) throw new ReferenceError();
    while (pane.tagName !== "NAV" && pane.nextElementSibling) {
      pane = pane.nextElementSibling;
    } /* Check references */
    if (!(target.parentNode instanceof HTMLElement) || !(target.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

    /* Find parent and active panes */
    var parent = target.parentNode.parentNode;
    var active = pane.children[pane.children.length - 1];

    /* Always reset all lists when transitioning */
    parent.style.webkitOverflowScrolling = "";
    active.style.webkitOverflowScrolling = "";

    /* Set overflow scrolling on parent pane */
    if (!target.checked) {
      var end = function end() {
        if (pane instanceof HTMLElement) {
          parent.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", end);
        }
      };
      pane.addEventListener("transitionend", end, false);
    }

    /* Set overflow scrolling on active pane */
    if (target.checked) {
      var _end = function _end() {
        if (pane instanceof HTMLElement) {
          active.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", _end);
        }
      };
      pane.addEventListener("transitionend", _end, false);
    }
  };

  /**
   * Reset panes
   */


  Scrolling.prototype.reset = function reset() {

    /* Reset overflow scrolling on main pane */
    this.el_.children[1].style.webkitOverflowScrolling = "";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find parent and active panes */
        var parent = toggle.parentNode.parentNode;
        var active = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        active.style.webkitOverflowScrolling = "";
      }
    });
  };

  return Scrolling;
}();

exports.default = Scrolling;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Lock = __webpack_require__(38);

var _Lock2 = _interopRequireDefault(_Lock);

var _Result = __webpack_require__(39);

var _Result2 = _interopRequireDefault(_Result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Lock: _Lock2.default,
  Result: _Result2.default
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Lock = function () {

  /**
   * Lock body for full-screen search modal
   *
   * @constructor
   *
   * @property {HTMLInputElement} el_ - Lock toggle
   * @property {HTMLElement} lock_ - Element to lock (document body)
   * @property {number} offset_ - Current page y-offset
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Lock(el) {
    _classCallCheck(this, Lock);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLInputElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve element to lock (= body) */
    if (!document.body) throw new ReferenceError();
    this.lock_ = document.body;
  }

  /**
   * Setup locked state
   */


  Lock.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update locked state
   */


  Lock.prototype.update = function update() {
    var _this = this;

    /* Entering search mode */
    if (this.el_.checked) {
      this.offset_ = window.pageYOffset;

      /* Scroll to top after transition, to omit flickering */
      setTimeout(function () {
        window.scrollTo(0, 0);

        /* Lock body after finishing transition */
        if (_this.el_.checked) {
          _this.lock_.dataset.mdState = "lock";
        }
      }, 400);

      /* Exiting search mode */
    } else {
      this.lock_.dataset.mdState = "";

      /* Scroll to former position, but wait for 100ms to prevent flashes on
         iOS. A short timeout seems to do the trick */
      setTimeout(function () {
        if (typeof _this.offset_ !== "undefined") window.scrollTo(0, _this.offset_);
      }, 100);
    }
  };

  /**
   * Reset locked state and page y-offset
   */


  Lock.prototype.reset = function reset() {
    if (this.lock_.dataset.mdState === "lock") window.scrollTo(0, this.offset_);
    this.lock_.dataset.mdState = "";
  };

  return Lock;
}();

exports.default = Lock;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

var _escapeStringRegexp = __webpack_require__(40);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _exposeLoaderLunrLunr = __webpack_require__(41);

var _exposeLoaderLunrLunr2 = _interopRequireDefault(_exposeLoaderLunrLunr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Truncate a string after the given number of character
 *
 * This is not a reasonable approach, since the summaries kind of suck. It
 * would be better to create something more intelligent, highlighting the
 * search occurrences and making a better summary out of it.
 *
 * @param {string} string - String to be truncated
 * @param {number} n - Number of characters
 * @return {string} Truncated string
 */
var truncate = function truncate(string, n) {
  var i = n;
  if (string.length > i) {
    while (string[i] !== " " && --i > 0) {}
    return string.substring(0, i) + "...";
  }
  return string;
};

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Result = function () {

  /**
   * Perform search and update results on keyboard events
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Search result container
   * @property {(Array<Object>|Function)} data_ - Raw document data
   * @property {Object} docs_ - Indexed documents
   * @property {HTMLElement} meta_ - Search meta information
   * @property {HTMLElement} list_ - Search result list
   * @property {Array<string>} lang_ - Search languages
   * @property {Object} message_ - Search result messages
   * @property {Object} index_ - Search index
   * @property {Array<Function>} stack_ - Search result stack
   * @property {string} value_ - Last input value
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(Array<Object>|Function)} data - Function providing data or array
   */
  function Result(el, data) {
    _classCallCheck(this, Result);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve metadata and list element */

    var _Array$prototype$slic = Array.prototype.slice.call(this.el_.children),
        meta = _Array$prototype$slic[0],
        list = _Array$prototype$slic[1];

    /* Set data, metadata and list elements */


    this.data_ = data;
    this.meta_ = meta;
    this.list_ = list;

    /* Load messages for metadata display */
    this.message_ = {
      placeholder: this.meta_.textContent,
      none: translate("search.result.none"),
      one: translate("search.result.one"),
      other: translate("search.result.other")

      /* Override tokenizer separator, if given */
    };var tokenizer = translate("search.tokenizer");
    if (tokenizer.length) _exposeLoaderLunrLunr2.default.tokenizer.separator = tokenizer;

    /* Load search languages */
    this.lang_ = translate("search.language").split(",").filter(Boolean).map(function (lang) {
      return lang.trim();
    });
  }

  /**
   * Update search results
   *
   * @param {Event} ev - Input or focus event
   */


  Result.prototype.update = function update(ev) {
    var _this = this;

    /* Initialize index, if this has not be done yet */
    if (ev.type === "focus" && !this.index_) {

      /* Initialize index */
      var init = function init(data) {

        /* Preprocess and index sections and documents */
        _this.docs_ = data.reduce(function (docs, doc) {
          var _doc$location$split = doc.location.split("#"),
              path = _doc$location$split[0],
              hash = _doc$location$split[1];

          /* Associate section with parent document */


          if (hash) {
            doc.parent = docs.get(path);

            /* Override page title with document title if first section */
            if (doc.parent && !doc.parent.done) {
              doc.parent.title = doc.title;
              doc.parent.text = doc.text;
              doc.parent.done = true;
            }
          }

          /* Some cleanup on the text */
          doc.text = doc.text.replace(/\n/g, " ") /* Remove newlines */
          .replace(/\s+/g, " ") /* Compact whitespace */
          .replace(/\s+([,.:;!?])/g, /* Correct punctuation */
          function (_, char) {
            return char;
          });

          /* Index sections and documents, but skip top-level headline */
          if (!doc.parent || doc.parent.title !== doc.title) docs.set(doc.location, doc);
          return docs;
        }, new Map());

        /* eslint-disable no-invalid-this */
        var docs = _this.docs_,
            lang = _this.lang_;

        /* Create stack and index */
        _this.stack_ = [];
        _this.index_ = (0, _exposeLoaderLunrLunr2.default)(function () {
          var _pipeline,
              _this2 = this;

          var filters = {
            "search.pipeline.trimmer": _exposeLoaderLunrLunr2.default.trimmer,
            "search.pipeline.stopwords": _exposeLoaderLunrLunr2.default.stopWordFilter

            /* Disable stop words filter and trimmer, if desired */
          };var pipeline = Object.keys(filters).reduce(function (result, name) {
            if (!translate(name).match(/^false$/i)) result.push(filters[name]);
            return result;
          }, []);

          /* Remove stemmer, as it cripples search experience */
          this.pipeline.reset();
          if (pipeline) (_pipeline = this.pipeline).add.apply(_pipeline, pipeline);

          /* Set up alternate search languages */
          if (lang.length === 1 && lang[0] !== "en" && _exposeLoaderLunrLunr2.default[lang[0]]) {
            this.use(_exposeLoaderLunrLunr2.default[lang[0]]);
          } else if (lang.length > 1) {
            this.use(_exposeLoaderLunrLunr2.default.multiLanguage.apply(_exposeLoaderLunrLunr2.default, lang));
          }

          /* Index fields */
          this.field("title", { boost: 10 });
          this.field("text");
          this.ref("location");

          /* Index documents */
          docs.forEach(function (doc) {
            return _this2.add(doc);
          });
        });

        /* Register event handler for lazy rendering */
        var container = _this.el_.parentNode;
        if (!(container instanceof HTMLElement)) throw new ReferenceError();
        container.addEventListener("scroll", function () {
          while (_this.stack_.length && container.scrollTop + container.offsetHeight >= container.scrollHeight - 16) {
            _this.stack_.splice(0, 10).forEach(function (render) {
              return render();
            });
          }
        });
      };
      /* eslint-enable no-invalid-this */

      /* Initialize index after short timeout to account for transition */
      setTimeout(function () {
        return typeof _this.data_ === "function" ? _this.data_().then(init) : init(_this.data_);
      }, 250);

      /* Execute search on new input event */
    } else if (ev.type === "focus" || ev.type === "keyup") {
      var target = ev.target;
      if (!(target instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort early, if index is not build or input hasn't changed */
      if (!this.index_ || target.value === this.value_) return;

      /* Clear current list */
      while (this.list_.firstChild) {
        this.list_.removeChild(this.list_.firstChild);
      } /* Abort early, if search input is empty */
      this.value_ = target.value;
      if (this.value_.length === 0) {
        this.meta_.textContent = this.message_.placeholder;
        return;
      }

      /* Perform search on index and group sections by document */
      var result = this.index_

      /* Append trailing wildcard to all terms for prefix querying */
      .query(function (query) {
        _this.value_.toLowerCase().split(" ").filter(Boolean).forEach(function (term) {
          query.term(term, { wildcard: _exposeLoaderLunrLunr2.default.Query.wildcard.TRAILING });
        });
      })

      /* Process query results */
      .reduce(function (items, item) {
        var doc = _this.docs_.get(item.ref);
        if (doc.parent) {
          var ref = doc.parent.location;
          items.set(ref, (items.get(ref) || []).concat(item));
        } else {
          var _ref = doc.location;
          items.set(_ref, items.get(_ref) || []);
        }
        return items;
      }, new Map());

      /* Assemble regular expressions for matching */
      var query = (0, _escapeStringRegexp2.default)(this.value_.trim()).replace(new RegExp(_exposeLoaderLunrLunr2.default.tokenizer.separator, "img"), "|");
      var match = new RegExp("(^|" + _exposeLoaderLunrLunr2.default.tokenizer.separator + ")(" + query + ")", "img");
      var highlight = function highlight(_, separator, token) {
        return separator + "<em>" + token + "</em>";
      };

      /* Reset stack and render results */
      this.stack_ = [];
      result.forEach(function (items, ref) {
        var _stack_;

        var doc = _this.docs_.get(ref);

        /* Render article */
        var article = JSX.createElement(
          "li",
          { "class": "md-search-result__item" },
          JSX.createElement(
            "a",
            { href: doc.location, title: doc.title,
              "class": "md-search-result__link", tabindex: "-1" },
            JSX.createElement(
              "article",
              { "class": "md-search-result__article\r md-search-result__article--document" },
              JSX.createElement(
                "h1",
                { "class": "md-search-result__title" },
                { __html: doc.title.replace(match, highlight) }
              ),
              doc.text.length ? JSX.createElement(
                "p",
                { "class": "md-search-result__teaser" },
                { __html: doc.text.replace(match, highlight) }
              ) : {}
            )
          )
        );

        /* Render sections for article */
        var sections = items.map(function (item) {
          return function () {
            var section = _this.docs_.get(item.ref);
            article.appendChild(JSX.createElement(
              "a",
              { href: section.location, title: section.title,
                "class": "md-search-result__link", "data-md-rel": "anchor",
                tabindex: "-1" },
              JSX.createElement(
                "article",
                { "class": "md-search-result__article" },
                JSX.createElement(
                  "h1",
                  { "class": "md-search-result__title" },
                  { __html: section.title.replace(match, highlight) }
                ),
                section.text.length ? JSX.createElement(
                  "p",
                  { "class": "md-search-result__teaser" },
                  { __html: truncate(section.text.replace(match, highlight), 400)
                  }
                ) : {}
              )
            ));
          };
        });

        /* Push articles and section renderers onto stack */
        (_stack_ = _this.stack_).push.apply(_stack_, [function () {
          return _this.list_.appendChild(article);
        }].concat(sections));
      });

      /* Gradually add results as long as the height of the container grows */
      var container = this.el_.parentNode;
      if (!(container instanceof HTMLElement)) throw new ReferenceError();
      while (this.stack_.length && container.offsetHeight >= container.scrollHeight - 16) {
        this.stack_.shift()();
      } /* Bind click handlers for anchors */
      var anchors = this.list_.querySelectorAll("[data-md-rel=anchor]");
      Array.prototype.forEach.call(anchors, function (anchor) {
        ["click", "keydown"].forEach(function (action) {
          anchor.addEventListener(action, function (ev2) {
            if (action === "keydown" && ev2.keyCode !== 13) return;

            /* Close search */
            var toggle = document.querySelector("[data-md-toggle=search]");
            if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
            if (toggle.checked) {
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
            }

            /* Hack: prevent default, as the navigation needs to be delayed due
               to the search body lock on mobile */
            ev2.preventDefault();
            setTimeout(function () {
              document.location.href = anchor.href;
            }, 100);
          });
        });
      });

      /* Update search metadata */
      switch (result.size) {
        case 0:
          this.meta_.textContent = this.message_.none;
          break;
        case 1:
          this.meta_.textContent = this.message_.one;
          break;
        default:
          this.meta_.textContent = this.message_.other.replace("#", result.size);
      }
    }
  };

  return Result;
}();

exports.default = Result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["lunr"] = __webpack_require__(42);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.1.5
 * Copyright (C) 2017 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.1.5"
/*!
 * lunr.utils
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf Utils
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf Utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @returns {lunr.Token[]}
 */
lunr.tokenizer = function (obj) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(lunr.utils.asString(t).toLowerCase())
    })
  }

  var str = obj.toString().trim().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        tokens.push(
          new lunr.Token (str.slice(sliceStart, sliceEnd), {
            position: [sliceStart, sliceLength],
            index: tokens.length
          })
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null. This token will not be passed to any downstream pipeline functions and will not be
 * added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]

    tokens = tokens.reduce(function (memo, token, j) {
      var result = fn(token, j, tokens)

      if (result === void 0 || result === '') return memo

      return memo.concat(result)
    }, [])
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str) {
  var token = new lunr.Token (str)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the cosine similarity between this vector and another
 * vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2017 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      } else {
        stack.push({
          node: noEditNode,
          editsRemaining: frame.editsRemaining,
          str: frame.str.slice(1)
        })
      }
    }

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var char = frame.str.charAt(1),
          deletionNode

      if (char in frame.node.edges) {
        deletionNode = frame.node.edges[char]
      } else {
        deletionNode = new lunr.TokenSet
        frame.node.edges[char] = deletionNode
      }

      if (frame.str.length <= 2) {
        deletionNode.final = true
      } else {
        stack.push({
          node: deletionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(2)
        })
      }
    }

    // deletion
    // just removing the last character from the str
    if (frame.editsRemaining > 0 && frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.editsRemaining > 0 && frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      } else {
        stack.push({
          node: substitutionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(1)
        })
      }
    }

    // insertion
    // can only do insertion if there are edits remaining
    if (frame.editsRemaining > 0) {
      if ("*" in frame.node.edges) {
        var insertionNode = frame.node.edges["*"]
      } else {
        var insertionNode = new lunr.TokenSet
        frame.node.edges["*"] = insertionNode
      }

      if (frame.str.length == 0) {
        insertionNode.final = true
      } else {
        stack.push({
          node: insertionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str
        })
      }
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      } else {
        stack.push({
          node: transposeNode,
          editsRemaining: frame.editsRemaining - 1,
          str: charA + frame.str.slice(2)
        })
      }
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node,
      wildcardFound = false

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * As soon as a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      wildcardFound = true
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next

      // TODO: is this needed anymore?
      if (wildcardFound) {
        node.edges["*"] = root
      }
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.documentVectors - Document vectors keyed by document reference.
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null)

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term)
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field

          /*
           * To support field level boosts a query vector is created per
           * field. This vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           *
           * If the query vector for this field does not exist yet it needs
           * to be created.
           */
          if (queryVectors[field] === undefined) {
            queryVectors[field] = new lunr.Vector
          }

          /*
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, 1 * clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef,
        fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = {},
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = []
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * @param {string} field - The name of a field to index in all documents.
 */
lunr.Builder.prototype.field = function (field) {
  this._fields.push(field)
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * @param {object} doc - The document to add to the index.
 */
lunr.Builder.prototype.add = function (doc) {
  var docRef = doc[this._ref]

  this.documentCount += 1

  for (var i = 0; i < this._fields.length; i++) {
    var fieldName = this._fields[i],
        field = doc[fieldName],
        tokens = this.tokenizer(field),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < this._fields.length; k++) {
          posting[this._fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  for (var i = 0; i < this._fields.length; i++) {
    var field = this._fields[i]
    accumulator[field] = accumulator[field] / documentsWithField[field]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[field])) + tf)
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: this._fields,
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata)

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)
  this.metadata[term] = Object.create(null)
  this.metadata[term][field] = clonedMetadata
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=0] - Whether the term should have wildcards appended or prepended.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  this.clauses.push(clause)

  return this
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * @param {string} term - The term to add to the query.
 * @param {Object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.prototype.term = function (term, options) {
  var clause = options || {}
  clause.term = term

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseFieldOrTerm

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseFieldOrTerm = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else if (typeof exports === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory()
    } else {
      // Browser globals (root is window)
      root.lunr = factory()
    }
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Position = __webpack_require__(44);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Position: _Position2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Position = function () {

  /**
   * Set sidebars to locked state and limit height to parent node
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Sidebar
   * @property {HTMLElement} parent_ - Sidebar container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Current sidebar height
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} pad_ - Pad when header is fixed
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Position(el, header) {
    _classCallCheck(this, Position);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
    this.parent_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize current height and test whether header is fixed */
    this.height_ = 0;
    this.pad_ = window.getComputedStyle(this.header_).position === "fixed";
  }

  /**
   * Initialize sidebar state
   */


  Position.prototype.setup = function setup() {
    var top = Array.prototype.reduce.call(this.parent_.children, function (offset, child) {
      return Math.max(offset, child.offsetTop);
    }, 0);

    /* Set lock offset for element with largest top offset */
    this.offset_ = top - (this.pad_ ? this.header_.offsetHeight : 0);
    this.update();
  };

  /**
   * Update locked state and height
   *
   * The inner height of the window (= the visible area) is the maximum
   * possible height for the stretching sidebar. This height must be deducted
   * by the height of the fixed header (56px). Depending on the page y-offset,
   * the top offset of the sidebar must be taken into account, as well as the
   * case where the window is scrolled beyond the sidebar container.
   *
   * @param {Event?} ev - Event
   */


  Position.prototype.update = function update(ev) {
    var offset = window.pageYOffset;
    var visible = window.innerHeight;

    /* Update offset, in case window is resized */
    if (ev && ev.type === "resize") this.setup();

    /* Set bounds of sidebar container - must be calculated on every run, as
       the height of the content might change due to loading images etc. */
    var bounds = {
      top: this.pad_ ? this.header_.offsetHeight : 0,
      bottom: this.parent_.offsetTop + this.parent_.offsetHeight

      /* Calculate new offset and height */
    };var height = visible - bounds.top - Math.max(0, this.offset_ - offset) - Math.max(0, offset + visible - bounds.bottom);

    /* If height changed, update element */
    if (height !== this.height_) this.el_.style.height = (this.height_ = height) + "px";

    /* Sidebar should be locked, as we're below parent offset */
    if (offset >= this.offset_) {
      if (this.el_.dataset.mdState !== "lock") this.el_.dataset.mdState = "lock";

      /* Sidebar should be unlocked, if locked */
    } else if (this.el_.dataset.mdState === "lock") {
      this.el_.dataset.mdState = "";
    }
  };

  /**
   * Reset locked state and height
   */


  Position.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.height = "";
    this.height_ = 0;
  };

  return Position;
}();

exports.default = Position;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Adapter = __webpack_require__(46);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _Repository = __webpack_require__(50);

var _Repository2 = _interopRequireDefault(_Repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Adapter: _Adapter2.default,
  Repository: _Repository2.default
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GitHub = __webpack_require__(47);

var _GitHub2 = _interopRequireDefault(_GitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  GitHub: _GitHub2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Abstract2 = __webpack_require__(48);

var _Abstract3 = _interopRequireDefault(_Abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * deal in the Software without restriction, including without limitation the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var GitHub = function (_Abstract) {
  _inherits(GitHub, _Abstract);

  /**
   * Retrieve repository information from GitHub
   *
   * @constructor
   *
   * @property {string} name_ - Name of the repository
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function GitHub(el) {
    _classCallCheck(this, GitHub);

    /* Extract user (and repository name) from URL, as we have to query for all
       repositories, to omit 404 errors for private repositories */
    var _this = _possibleConstructorReturn(this, _Abstract.call(this, el));

    var matches = /^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(_this.base_);
    if (matches && matches.length === 3) {
      var user = matches[1],
          name = matches[2];

      /* Initialize base URL and repository name */

      _this.base_ = "https://api.github.com/users/" + user + "/repos";
      _this.name_ = name;
    }
    return _this;
  }

  /**
   * Fetch relevant repository information from GitHub
   *
   * @return {Promise<Array<string>>} Promise returning an array of facts
   */


  GitHub.prototype.fetch_ = function fetch_() {
    var _this2 = this;

    var paginate = function paginate() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return fetch(_this2.base_ + "?per_page=30&page=" + page).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!(data instanceof Array)) throw new TypeError();

        /* Display number of stars and forks, if repository is given */
        if (_this2.name_) {
          var repo = data.find(function (item) {
            return item.name === _this2.name_;
          });
          if (!repo && data.length === 30) return paginate(page + 1);

          /* If we found a repo, extract the facts */
          return repo ? [_this2.format_(repo.stargazers_count) + " Stars", _this2.format_(repo.forks_count) + " Forks"] : [];

          /* Display number of repositories, otherwise */
        } else {
          return [data.length + " Repositories"];
        }
      });
    };

    /* Paginate through repos */
    return paginate();
  };

  return GitHub;
}(_Abstract3.default);

exports.default = GitHub;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsCookie = __webpack_require__(49);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Abstract = function () {

  /**
   * Retrieve repository information
   *
   * @constructor
   *
   * @property {HTMLAnchorElement} el_ - Link to repository
   * @property {string} base_ - API base URL
   * @property {number} salt_ - Unique identifier
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function Abstract(el) {
    _classCallCheck(this, Abstract);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLAnchorElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve base URL */
    this.base_ = this.el_.href;
    this.salt_ = this.hash_(this.base_);
  }

  /**
   * Retrieve data from Cookie or fetch from respective API
   *
   * @return {Promise<Array<string>>} Promise that returns an array of facts
   */


  Abstract.prototype.fetch = function fetch() {
    var _this = this;

    return new Promise(function (resolve) {
      var cached = _jsCookie2.default.getJSON(_this.salt_ + ".cache-source");
      if (typeof cached !== "undefined") {
        resolve(cached);

        /* If the data is not cached in a cookie, invoke fetch and set
           a cookie that automatically expires in 15 minutes */
      } else {
        _this.fetch_().then(function (data) {
          _jsCookie2.default.set(_this.salt_ + ".cache-source", data, { expires: 1 / 96 });
          resolve(data);
        });
      }
    });
  };

  /**
   * Abstract private function that fetches relevant repository information
   *
   * @abstract
   */


  Abstract.prototype.fetch_ = function fetch_() {
    throw new Error("fetch_(): Not implemented");
  };

  /**
   * Format a number with suffix
   *
   * @param {number} number - Number to format
   * @return {string} Formatted number
   */


  Abstract.prototype.format_ = function format_(number) {
    if (number > 10000) return (number / 1000).toFixed(0) + "k";else if (number > 1000) return (number / 1000).toFixed(1) + "k";
    return "" + number;
  };

  /**
   * Simple hash function
   *
   * Taken from http://stackoverflow.com/a/7616484/1065584
   *
   * @param {string} str - Input string
   * @return {number} Hashed string
   */


  Abstract.prototype.hash_ = function hash_(str) {
    var hash = 0;
    if (str.length === 0) return hash;
    for (var i = 0, len = str.length; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return Abstract;
}();

exports.default = Abstract;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Repository = function () {

  /**
   * Render repository information
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Repository information
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Repository(el) {
    _classCallCheck(this, Repository);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize the repository
   *
   * @param {Array<string>} facts - Facts to be rendered
   */


  Repository.prototype.initialize = function initialize(facts) {
    if (facts.length && this.el_.children.length) this.el_.children[this.el_.children.length - 1].appendChild(JSX.createElement(
      "ul",
      { "class": "md-source__facts" },
      facts.map(function (fact) {
        return JSX.createElement(
          "li",
          { "class": "md-source__fact" },
          fact
        );
      })
    ));

    /* Finish rendering with animation */
    this.el_.dataset.mdState = "done";
  };

  return Repository;
}();

exports.default = Repository;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Toggle = __webpack_require__(52);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Toggle: _Toggle2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Toggle = function () {

  /**
   * Toggle tabs visibility depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {number} offset_ - Toggle page-y offset
   * @property {boolean} active_ - Tabs visibility
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Toggle(el) {
    _classCallCheck(this, Toggle);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof Node)) throw new ReferenceError();
    this.el_ = ref;

    /* Initialize offset and state */
    this.active_ = false;
  }

  /**
   * Update visibility
   */


  Toggle.prototype.update = function update() {
    var active = window.pageYOffset >= this.el_.children[0].offsetTop + (5 - 48); // TODO: quick hack to enable same handling for hero
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "hidden" : "";
  };

  /**
   * Reset visibility
   */


  Toggle.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.active_ = false;
  };

  return Toggle;
}();

exports.default = Toggle;

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmFhMzc3YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9MaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzcz8wZjU4Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24tcGFsZXR0ZS5zY3NzPzQ5YjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9jdXN0b20tZXZlbnQtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9saWIvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvbGliL2NsaXBib2FyZC1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbGVjdC9zcmMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2QtbGlzdGVuZXIvc3JjL2xpc3Rlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZC1saXN0ZW5lci9zcmMvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVsZWdhdGUvc3JjL2Nsb3Nlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BlcnRpZXMiLCJlbCIsImRvY3VtZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyIiwiaXRlcmF0ZUNoaWxkTm9kZXMiLCJub2RlcyIsIm5vZGUiLCJ0ZXh0Q29udGVudCIsImlzQXJyYXkiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsIkxpc3RlbmVyIiwiZWxzIiwiZXZlbnRzIiwiaGFuZGxlciIsImVsc18iLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25jYXQiLCJoYW5kbGVyXyIsInVwZGF0ZSIsImV2ZW50c18iLCJ1cGRhdGVfIiwiZXYiLCJsaXN0ZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzZXR1cCIsInVubGlzdGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2V0Iiwid2luZG93IiwiUHJvbWlzZSIsInRyYW5zbGF0ZSIsIm1ldGEiLCJnZXRFbGVtZW50c0J5TmFtZSIsImtleSIsIkhUTUxNZXRhRWxlbWVudCIsIlJlZmVyZW5jZUVycm9yIiwiY29udGVudCIsImluaXRpYWxpemUiLCJjb25maWciLCJFdmVudCIsImJvZHkiLCJIVE1MRWxlbWVudCIsImF0dGFjaCIsIk1vZGVybml6ciIsImFkZFRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsInRhYmxlcyIsIndyYXAiLCJ0YWJsZSIsIm5leHRTaWJsaW5nIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImlzU3VwcG9ydGVkIiwiYmxvY2tzIiwiYmxvY2siLCJpbmRleCIsImlkIiwiYnV0dG9uIiwicGFyZW50IiwiY29weSIsIm9uIiwibWVzc2FnZSIsImFjdGlvbiIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJTZWxlY3Rpb24iLCJkYXRhc2V0IiwibWRUaW1lciIsImNsZWFyVGltZW91dCIsInBhcnNlSW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRvU3RyaW5nIiwiZGV0YWlscyIsInN1bW1hcnkiLCJ0YXJnZXQiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCJnZXRFbGVtZW50QnlJZCIsInN1YnN0cmluZyIsIkhUTUxEZXRhaWxzRWxlbWVudCIsIm9wZW4iLCJsb2MiLCJpb3MiLCJzY3JvbGxhYmxlIiwiaXRlbSIsInRvcCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsIkhlYWRlciIsIlNoYWRvdyIsIlRpdGxlIiwiVGFicyIsIlRvZ2dsZSIsIk1hdGNoTWVkaWEiLCJTaWRlYmFyIiwiUG9zaXRpb24iLCJOYXYiLCJCbHVyIiwiY29sbGFwc2libGVzIiwiY29sbGFwc2UiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiQ29sbGFwc2UiLCJTY3JvbGxpbmciLCJTZWFyY2giLCJMb2NrIiwiUmVzdWx0IiwiZmV0Y2giLCJ1cmwiLCJiYXNlIiwidmVyc2lvbiIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwicXVlcnkiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJ0b2dnbGUiLCJjaGVja2VkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXlDb2RlIiwiYWN0aXZlRWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiSFRNTExpbmtFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiYmx1ciIsImluZGV4T2YiLCJsaW5rcyIsImZpbmQiLCJsaW5rIiwibWRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtIiwibGFiZWxzIiwibGFiZWwiLCJ0YWJJbmRleCIsInJlc29sdmUiLCJIVE1MQW5jaG9yRWxlbWVudCIsIm1kU291cmNlIiwiU291cmNlIiwiQWRhcHRlciIsIkdpdEh1YiIsInNvdXJjZXMiLCJSZXBvc2l0b3J5Iiwic291cmNlIiwiZmFjdHMiLCJhcHAiLCJsaXN0ZW5lciIsIm1xIiwibWF0Y2hlcyIsIm1lZGlhIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwiaGVhZGVyIiwicmVmIiwiZWxfIiwiaGVhZGVyXyIsImhlaWdodF8iLCJhY3RpdmVfIiwiY3VycmVudCIsInR5cGUiLCJhY3RpdmUiLCJwYWdlWU9mZnNldCIsIkhUTUxIZWFkaW5nRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsImluZGV4XyIsIm9mZnNldF8iLCJkaXJfIiwiYW5jaG9yc18iLCJyZWR1Y2UiLCJhbmNob3JzIiwib2Zmc2V0IiwiZGlyIiwiaSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImRpc3BsYXkiLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVuZCIsIm1haW4iLCJ3ZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsInRvZ2dsZXMiLCJwYW5lIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsImxvY2tfIiwic2Nyb2xsVG8iLCJ0cnVuY2F0ZSIsInN0cmluZyIsIm4iLCJsaXN0IiwiZGF0YV8iLCJtZXRhXyIsImxpc3RfIiwibWVzc2FnZV8iLCJwbGFjZWhvbGRlciIsIm5vbmUiLCJvbmUiLCJvdGhlciIsInRva2VuaXplciIsInNlcGFyYXRvciIsImxhbmdfIiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwibGFuZyIsInRyaW0iLCJpbml0IiwiZG9jc18iLCJwYXRoIiwiZ2V0IiwiZG9uZSIsInRpdGxlIiwidGV4dCIsInJlcGxhY2UiLCJfIiwiY2hhciIsInNldCIsIk1hcCIsInN0YWNrXyIsImZpbHRlcnMiLCJ0cmltbWVyIiwic3RvcFdvcmRGaWx0ZXIiLCJwaXBlbGluZSIsInJlc3VsdCIsIm5hbWUiLCJwdXNoIiwidXNlIiwibXVsdGlMYW5ndWFnZSIsImZpZWxkIiwiYm9vc3QiLCJjb250YWluZXIiLCJzcGxpY2UiLCJyZW5kZXIiLCJ2YWx1ZSIsInZhbHVlXyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInRvTG93ZXJDYXNlIiwidGVybSIsIndpbGRjYXJkIiwiUXVlcnkiLCJUUkFJTElORyIsIml0ZW1zIiwiUmVnRXhwIiwiaGlnaGxpZ2h0IiwidG9rZW4iLCJhcnRpY2xlIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwic2hpZnQiLCJhbmNob3IiLCJldjIiLCJocmVmIiwic2l6ZSIsInBhcmVudF8iLCJwYWRfIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwiY2hpbGQiLCJ2aXNpYmxlIiwiaW5uZXJIZWlnaHQiLCJib3VuZHMiLCJib3R0b20iLCJleGVjIiwiYmFzZV8iLCJ1c2VyIiwibmFtZV8iLCJmZXRjaF8iLCJwYWdpbmF0ZSIsInBhZ2UiLCJUeXBlRXJyb3IiLCJyZXBvIiwiZm9ybWF0XyIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc19jb3VudCIsIkFic3RyYWN0Iiwic2FsdF8iLCJoYXNoXyIsImNhY2hlZCIsImdldEpTT04iLCJleHBpcmVzIiwiRXJyb3IiLCJudW1iZXIiLCJ0b0ZpeGVkIiwic3RyIiwibGVuIiwiY2hhckNvZGVBdCIsImZhY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7QUFJQTtrQkFDZSxTQUFVOztBQUV2Qjs7Ozs7Ozs7O0FBU0FBLGVBWHVCLHlCQVdUQyxHQVhTLEVBV0pDLFVBWEksRUFXcUI7QUFDMUMsUUFBTUMsS0FBS0MsU0FBU0osYUFBVCxDQUF1QkMsR0FBdkIsQ0FBWDs7QUFFQTtBQUNBLFFBQUlDLFVBQUosRUFDRUcsTUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCQyxPQUFPQyxJQUFQLENBQVlSLFVBQVosQ0FBN0IsRUFBc0QsZ0JBQVE7QUFDNURDLFNBQUdRLFlBQUgsQ0FBZ0JD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QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7Ozs7OztBQzNDQTs7Ozs7Ozs7b0RDQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBOzs7Ozs7OztBQ2pPQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUN6TEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDJDQUEyQztBQUM5RCxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUMsRTs7Ozs7O0FDOU1EO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNwQixZQUFZLE9BQU8sWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQix5Q0FBeUM7QUFDL0Q7OztBQUdBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQyxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEMsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxZQUFZLFlBQVk7QUFDeEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkJBQTZCO0FBQ3pDLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksT0FBTyxZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbHpCRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7a0JBSWU7QUFDYjdILHdCQURhO0FBRWJ5RCwwQkFGYTtBQUdiUSxvQkFIYTtBQUliTywwQkFKYTtBQUtiVCw0QkFMYTtBQU1idUQsMEJBTmE7QUFPYjFEO0FBUGEsQyxFQWxDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NCQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQXpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2QmU7QUFDYjNGLDhCQURhO0FBRWI2RjtBQUZhLEM7Ozs7Ozs7Ozs7O0FDUGY7Ozs7OzswSkF0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmtDOztBQUVsQzs7OztJQUlxQkEsVTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7QUFhQSxvQkFBWXlCLEtBQVosRUFBbUJ1QyxRQUFuQixFQUE2QjtBQUFBOztBQUMzQixPQUFLckosUUFBTCxHQUFnQixjQUFNO0FBQ3BCLFFBQUlzSixHQUFHQyxPQUFQLEVBQ0VGLFNBQVNoSixNQUFULEdBREYsS0FHRWdKLFNBQVM1SSxRQUFUO0FBQ0gsR0FMRDs7QUFPQTtBQUNBLE1BQU0rSSxRQUFRNUksT0FBTzZJLFVBQVAsQ0FBa0IzQyxLQUFsQixDQUFkO0FBQ0EwQyxRQUFNRSxXQUFOLENBQWtCLEtBQUsxSixRQUF2Qjs7QUFFQTtBQUNBLE9BQUtBLFFBQUwsQ0FBY3dKLEtBQWQ7QUFDRCxDOztrQkE3QmtCbkUsVTs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUF6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkJlO0FBQ2JKLDBCQURhO0FBRWJDO0FBRmEsQzs7Ozs7Ozs7Ozs7OztBQzdCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQkQsTTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7QUFhQSxrQkFBWTdHLEVBQVosRUFBZ0J1TCxNQUFoQixFQUF3QjtBQUFBOztBQUN0QixRQUFJQyxNQUFPLE9BQU94TCxFQUFQLEtBQWMsUUFBZixHQUNOQyxTQUFTNkUsYUFBVCxDQUF1QjlFLEVBQXZCLENBRE0sR0FFTkEsRUFGSjtBQUdBLFFBQUksRUFBRXdMLGVBQWVuSSxXQUFqQixLQUNBLEVBQUVtSSxJQUFJeEgsVUFBSixZQUEwQlgsV0FBNUIsQ0FESixFQUVFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsU0FBSzBJLEdBQUwsR0FBV0QsSUFBSXhILFVBQWY7O0FBRUE7QUFDQXdILFVBQU8sT0FBT0QsTUFBUCxLQUFrQixRQUFuQixHQUNGdEwsU0FBUzZFLGFBQVQsQ0FBdUJ5RyxNQUF2QixDQURFLEdBRUZBLE1BRko7QUFHQSxRQUFJLEVBQUVDLGVBQWVuSSxXQUFqQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixTQUFLMkksT0FBTCxHQUFlRixHQUFmOztBQUVBO0FBQ0EsU0FBS0csT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNEOztBQUVEOzs7OzttQkFHQXhKLEssb0JBQVE7QUFDTixRQUFJeUosVUFBVSxLQUFLSixHQUFuQjtBQUNBLFdBQVFJLFVBQVVBLFFBQVFyRSxzQkFBMUIsRUFBbUQ7QUFDakQsVUFBSSxFQUFFcUUsbUJBQW1CeEksV0FBckIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsV0FBSzRJLE9BQUwsSUFBZ0JFLFFBQVFuRixZQUF4QjtBQUNEO0FBQ0QsU0FBSzdFLE1BQUw7QUFDRCxHOztBQUVEOzs7Ozs7O21CQUtBQSxNLG1CQUFPRyxFLEVBQUk7QUFDVCxRQUFJQSxPQUFPQSxHQUFHOEosSUFBSCxLQUFZLFFBQVosSUFBd0I5SixHQUFHOEosSUFBSCxLQUFZLG1CQUEzQyxDQUFKLEVBQXFFO0FBQ25FLFdBQUtILE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS3ZKLEtBQUw7QUFDRCxLQUhELE1BR087QUFDTCxVQUFNMkosU0FBU3ZKLE9BQU93SixXQUFQLElBQXNCLEtBQUtMLE9BQTFDO0FBQ0EsVUFBSUksV0FBVyxLQUFLSCxPQUFwQixFQUNFLEtBQUtGLE9BQUwsQ0FBYTFHLE9BQWIsQ0FBcUI2RSxPQUFyQixHQUErQixDQUFDLEtBQUsrQixPQUFMLEdBQWVHLE1BQWhCLElBQTBCLFFBQTFCLEdBQXFDLEVBQXBFO0FBQ0g7QUFDRixHOztBQUVEOzs7OzttQkFHQXhKLEssb0JBQVE7QUFDTixTQUFLbUosT0FBTCxDQUFhMUcsT0FBYixDQUFxQjZFLE9BQXJCLEdBQStCLEVBQS9CO0FBQ0EsU0FBSzhCLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDRCxHOzs7OztrQkF6RWtCL0UsTTs7Ozs7Ozs7Ozs7OztBQzFCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7SUFJcUJDLEs7O0FBRW5COzs7Ozs7Ozs7Ozs7QUFZQSxpQkFBWTlHLEVBQVosRUFBZ0J1TCxNQUFoQixFQUF3QjtBQUFBOztBQUN0QixRQUFJQyxNQUFPLE9BQU94TCxFQUFQLEtBQWMsUUFBZixHQUNOQyxTQUFTNkUsYUFBVCxDQUF1QjlFLEVBQXZCLENBRE0sR0FFTkEsRUFGSjtBQUdBLFFBQUksRUFBRXdMLGVBQWVuSSxXQUFqQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixTQUFLMEksR0FBTCxHQUFXRCxHQUFYOztBQUVBO0FBQ0FBLFVBQU8sT0FBT0QsTUFBUCxLQUFrQixRQUFuQixHQUNGdEwsU0FBUzZFLGFBQVQsQ0FBdUJ5RyxNQUF2QixDQURFLEdBRUZBLE1BRko7QUFHQSxRQUFJLEVBQUVDLGVBQWVTLGtCQUFqQixDQUFKLEVBQ0UsTUFBTSxJQUFJbEosY0FBSixFQUFOO0FBQ0YsU0FBSzJJLE9BQUwsR0FBZUYsR0FBZjs7QUFFQTtBQUNBLFNBQUtJLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7O0FBRUQ7Ozs7O2tCQUdBeEosSyxvQkFBUTtBQUFBOztBQUNObEMsVUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCLEtBQUtvTCxHQUFMLENBQVN0SyxRQUF0QyxFQUFnRCxnQkFBUTtBQUFvQjtBQUMxRVAsV0FBS3NMLEtBQUwsQ0FBV0MsS0FBWCxHQUFzQixNQUFLVixHQUFMLENBQVNXLFdBQVQsR0FBdUIsRUFBN0M7QUFDRCxLQUZEO0FBR0QsRzs7QUFFRDs7Ozs7OztrQkFLQXZLLE0sbUJBQU9HLEUsRUFBSTtBQUFBOztBQUNULFFBQU0rSixTQUFTdkosT0FBT3dKLFdBQVAsSUFBc0IsS0FBS04sT0FBTCxDQUFhVyxTQUFsRDtBQUNBLFFBQUlOLFdBQVcsS0FBS0gsT0FBcEIsRUFDRSxLQUFLSCxHQUFMLENBQVN6RyxPQUFULENBQWlCNkUsT0FBakIsR0FBMkIsQ0FBQyxLQUFLK0IsT0FBTCxHQUFlRyxNQUFoQixJQUEwQixRQUExQixHQUFxQyxFQUFoRTs7QUFFRjtBQUNBLFFBQUkvSixHQUFHOEosSUFBSCxLQUFZLFFBQVosSUFBd0I5SixHQUFHOEosSUFBSCxLQUFZLG1CQUF4QyxFQUE2RDtBQUMzRDVMLFlBQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QixLQUFLb0wsR0FBTCxDQUFTdEssUUFBdEMsRUFBZ0QsZ0JBQVE7QUFDdERQLGFBQUtzTCxLQUFMLENBQVdDLEtBQVgsR0FBc0IsT0FBS1YsR0FBTCxDQUFTVyxXQUFULEdBQXVCLEVBQTdDO0FBQ0QsT0FGRDtBQUdEO0FBRUYsRzs7QUFFRDs7Ozs7a0JBR0E3SixLLG9CQUFRO0FBQ04sU0FBS2tKLEdBQUwsQ0FBU3pHLE9BQVQsQ0FBaUI2RSxPQUFqQixHQUEyQixFQUEzQjtBQUNBLFNBQUs0QixHQUFMLENBQVNTLEtBQVQsQ0FBZUMsS0FBZixHQUF1QixFQUF2QjtBQUNBLFNBQUtQLE9BQUwsR0FBZSxLQUFmO0FBQ0QsRzs7Ozs7a0JBckVrQjlFLEs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7a0JBSWU7QUFDYk8sc0JBRGE7QUFFYkksOEJBRmE7QUFHYkM7QUFIYSxDLEVBOUJmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQkwsSTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7QUFhQSxnQkFBWWhHLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLRyxJQUFMLEdBQWEsT0FBT0gsR0FBUCxLQUFlLFFBQWhCLEdBQ1JwQixTQUFTeUIsZ0JBQVQsQ0FBMEJMLEdBQTFCLENBRFEsR0FFUkEsR0FGSjs7QUFJQTtBQUNBLFNBQUtpTCxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZS9KLE9BQU93SixXQUF0Qjs7QUFFQTtBQUNBLFNBQUtRLElBQUwsR0FBWSxLQUFaOztBQUVBO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixHQUFHQyxNQUFILENBQVVyTSxJQUFWLENBQWUsS0FBS21CLElBQXBCLEVBQTBCLFVBQUNtTCxPQUFELEVBQVUzTSxFQUFWLEVBQWlCO0FBQ3pELGFBQU8yTSxRQUFRaEwsTUFBUixDQUNMMUIsU0FBUytGLGNBQVQsQ0FBd0JoRyxHQUFHK0YsSUFBSCxDQUFRRSxTQUFSLENBQWtCLENBQWxCLENBQXhCLEtBQWlELEVBRDVDLENBQVA7QUFFRCxLQUhlLEVBR2IsRUFIYSxDQUFoQjtBQUlEOztBQUVEOzs7OztpQkFHQTdELEssb0JBQVE7QUFDTixTQUFLUCxNQUFMO0FBQ0QsRzs7QUFFRDs7Ozs7Ozs7aUJBTUFBLE0scUJBQVM7QUFDUCxRQUFNK0ssU0FBU3BLLE9BQU93SixXQUF0QjtBQUNBLFFBQU1hLE1BQU0sS0FBS04sT0FBTCxHQUFlSyxNQUFmLEdBQXdCLENBQXBDOztBQUVBOztBQUVBLFFBQUksS0FBS0osSUFBTCxLQUFjSyxHQUFsQixFQUNFLEtBQUtQLE1BQUwsR0FBY08sTUFDVixLQUFLUCxNQUFMLEdBQWMsQ0FESixHQUVWLEtBQUtBLE1BQUwsR0FBYyxLQUFLOUssSUFBTCxDQUFVd0ksTUFBVixHQUFtQixDQUZyQzs7QUFJRjtBQUNBLFFBQUksS0FBS3lDLFFBQUwsQ0FBY3pDLE1BQWQsS0FBeUIsQ0FBN0IsRUFDRTs7QUFFRjtBQUNBLFFBQUksS0FBS3VDLE9BQUwsSUFBZ0JLLE1BQXBCLEVBQTRCO0FBQzFCLFdBQUssSUFBSUUsSUFBSSxLQUFLUixNQUFMLEdBQWMsQ0FBM0IsRUFBOEJRLElBQUksS0FBS3RMLElBQUwsQ0FBVXdJLE1BQTVDLEVBQW9EOEMsR0FBcEQsRUFBeUQ7QUFDdkQsWUFBSSxLQUFLTCxRQUFMLENBQWNLLENBQWQsRUFBaUJULFNBQWpCLElBQThCLEtBQUssRUFBbkMsS0FBMENPLE1BQTlDLEVBQXNEO0FBQ3BELGNBQUlFLElBQUksQ0FBUixFQUNFLEtBQUt0TCxJQUFMLENBQVVzTCxJQUFJLENBQWQsRUFBaUI5SCxPQUFqQixDQUF5QjZFLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0YsZUFBS3lDLE1BQUwsR0FBY1EsQ0FBZDtBQUNELFNBSkQsTUFJTztBQUNMO0FBQ0Q7QUFDRjs7QUFFSDtBQUNDLEtBWkQsTUFZTztBQUNMLFdBQUssSUFBSUEsS0FBSSxLQUFLUixNQUFsQixFQUEwQlEsTUFBSyxDQUEvQixFQUFrQ0EsSUFBbEMsRUFBdUM7QUFDckMsWUFBSSxLQUFLTCxRQUFMLENBQWNLLEVBQWQsRUFBaUJULFNBQWpCLElBQThCLEtBQUssRUFBbkMsSUFBeUNPLE1BQTdDLEVBQXFEO0FBQ25ELGNBQUlFLEtBQUksQ0FBUixFQUNFLEtBQUt0TCxJQUFMLENBQVVzTCxLQUFJLENBQWQsRUFBaUI5SCxPQUFqQixDQUF5QjZFLE9BQXpCLEdBQW1DLEVBQW5DO0FBQ0gsU0FIRCxNQUdPO0FBQ0wsZUFBS3lDLE1BQUwsR0FBY1EsRUFBZDtBQUNBO0FBQ0Q7QUFDRjtBQUNGOztBQUVEO0FBQ0EsU0FBS1AsT0FBTCxHQUFlSyxNQUFmO0FBQ0EsU0FBS0osSUFBTCxHQUFZSyxHQUFaO0FBQ0QsRzs7QUFFRDs7Ozs7aUJBR0F0SyxLLG9CQUFRO0FBQ05yQyxVQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS21CLElBQWxDLEVBQXdDLGNBQU07QUFDNUN4QixTQUFHZ0YsT0FBSCxDQUFXNkUsT0FBWCxHQUFxQixFQUFyQjtBQUNELEtBRkQ7O0FBSUE7QUFDQSxTQUFLeUMsTUFBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUvSixPQUFPd0osV0FBdEI7QUFDRCxHOzs7OztrQkF2R2tCM0UsSTs7Ozs7Ozs7Ozs7OztBQzFCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7SUFJcUJJLFE7O0FBRW5COzs7Ozs7Ozs7QUFTQSxvQkFBWXpILEVBQVosRUFBZ0I7QUFBQTs7QUFDZCxRQUFNd0wsTUFBTyxPQUFPeEwsRUFBUCxLQUFjLFFBQWYsR0FDUkMsU0FBUzZFLGFBQVQsQ0FBdUI5RSxFQUF2QixDQURRLEdBRVJBLEVBRko7QUFHQSxRQUFJLEVBQUV3TCxlQUFlbkksV0FBakIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsU0FBSzBJLEdBQUwsR0FBV0QsR0FBWDtBQUNEOztBQUVEOzs7OztxQkFHQXBKLEssb0JBQVE7QUFDTixRQUFNeUosVUFBVSxLQUFLSixHQUFMLENBQVNzQixxQkFBVCxHQUFpQ0MsTUFBakQ7O0FBRUE7O0FBRUEsU0FBS3ZCLEdBQUwsQ0FBU1MsS0FBVCxDQUFlZSxPQUFmLEdBQTBCcEIsVUFBVSxPQUFWLEdBQXNCLE1BQWhEO0FBQ0EsU0FBS0osR0FBTCxDQUFTUyxLQUFULENBQWVnQixRQUFmLEdBQTBCckIsVUFBVSxTQUFWLEdBQXNCLFFBQWhEO0FBQ0QsRzs7QUFFRDs7Ozs7Ozs7O3FCQU9BaEssTSxxQkFBUztBQUFBOztBQUNQLFFBQU1nSyxVQUFVLEtBQUtKLEdBQUwsQ0FBU3NCLHFCQUFULEdBQWlDQyxNQUFqRDs7QUFFQTtBQUNBLFNBQUt2QixHQUFMLENBQVNTLEtBQVQsQ0FBZWUsT0FBZixHQUEwQixPQUExQjtBQUNBLFNBQUt4QixHQUFMLENBQVNTLEtBQVQsQ0FBZWdCLFFBQWYsR0FBMEIsRUFBMUI7O0FBRUE7QUFDQSxRQUFJckIsT0FBSixFQUFhO0FBQ1gsV0FBS0osR0FBTCxDQUFTUyxLQUFULENBQWVpQixTQUFmLEdBQThCdEIsT0FBOUI7QUFDQXVCLDRCQUFzQixZQUFNO0FBQzFCLGNBQUszQixHQUFMLENBQVNqTCxZQUFULENBQXNCLGVBQXRCLEVBQXVDLFNBQXZDO0FBQ0EsY0FBS2lMLEdBQUwsQ0FBU1MsS0FBVCxDQUFlaUIsU0FBZixHQUEyQixLQUEzQjtBQUNELE9BSEQ7O0FBS0Y7QUFDQyxLQVJELE1BUU87QUFDTCxXQUFLMUIsR0FBTCxDQUFTakwsWUFBVCxDQUFzQixlQUF0QixFQUF1QyxRQUF2QztBQUNBLFdBQUtpTCxHQUFMLENBQVNTLEtBQVQsQ0FBZWlCLFNBQWYsR0FBMkIsRUFBM0I7O0FBRUE7QUFDQSxVQUFNSCxTQUFTLEtBQUt2QixHQUFMLENBQVNzQixxQkFBVCxHQUFpQ0MsTUFBaEQ7QUFDQSxXQUFLdkIsR0FBTCxDQUFTNUYsZUFBVCxDQUF5QixlQUF6Qjs7QUFFQTtBQUNBLFdBQUs0RixHQUFMLENBQVNTLEtBQVQsQ0FBZWlCLFNBQWYsR0FBMkIsS0FBM0I7QUFDQUMsNEJBQXNCLFlBQU07QUFDMUIsY0FBSzNCLEdBQUwsQ0FBU2pMLFlBQVQsQ0FBc0IsZUFBdEIsRUFBdUMsU0FBdkM7QUFDQSxjQUFLaUwsR0FBTCxDQUFTUyxLQUFULENBQWVpQixTQUFmLEdBQThCSCxNQUE5QjtBQUNELE9BSEQ7QUFJRDs7QUFFRDtBQUNBLFFBQU1LLE1BQU0sU0FBTkEsR0FBTSxLQUFNO0FBQ2hCLFVBQU0xSCxTQUFTM0QsR0FBRzJELE1BQWxCO0FBQ0EsVUFBSSxFQUFFQSxrQkFBa0J0QyxXQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47O0FBRUY7QUFDQTRDLGFBQU9FLGVBQVAsQ0FBdUIsZUFBdkI7QUFDQUYsYUFBT3VHLEtBQVAsQ0FBYWlCLFNBQWIsR0FBeUIsRUFBekI7O0FBRUE7O0FBRUF4SCxhQUFPdUcsS0FBUCxDQUFhZSxPQUFiLEdBQXdCcEIsVUFBVSxNQUFWLEdBQXFCLE9BQTdDO0FBQ0FsRyxhQUFPdUcsS0FBUCxDQUFhZ0IsUUFBYixHQUF3QnJCLFVBQVUsUUFBVixHQUFxQixTQUE3Qzs7QUFFQTtBQUNBbEcsYUFBT3JELG1CQUFQLENBQTJCLGVBQTNCLEVBQTRDK0ssR0FBNUM7QUFDRCxLQWhCRDtBQWlCQSxTQUFLNUIsR0FBTCxDQUFTdkosZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNtTCxHQUEzQyxFQUFnRCxLQUFoRDtBQUNELEc7O0FBRUQ7Ozs7O3FCQUdBOUssSyxvQkFBUTtBQUNOLFNBQUtrSixHQUFMLENBQVN6RyxPQUFULENBQWlCNkUsT0FBakIsR0FBMkIsRUFBM0I7QUFDQSxTQUFLNEIsR0FBTCxDQUFTUyxLQUFULENBQWVpQixTQUFmLEdBQTJCLEVBQTNCO0FBQ0EsU0FBSzFCLEdBQUwsQ0FBU1MsS0FBVCxDQUFlZSxPQUFmLEdBQTJCLEVBQTNCO0FBQ0EsU0FBS3hCLEdBQUwsQ0FBU1MsS0FBVCxDQUFlZ0IsUUFBZixHQUEyQixFQUEzQjtBQUNELEc7Ozs7O2tCQXBHa0J6RixROzs7Ozs7Ozs7Ozs7O0FDMUJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQkMsUzs7QUFFbkI7Ozs7Ozs7OztBQVNBLHFCQUFZMUgsRUFBWixFQUFnQjtBQUFBOztBQUNkLFFBQU13TCxNQUFPLE9BQU94TCxFQUFQLEtBQWMsUUFBZixHQUNSQyxTQUFTNkUsYUFBVCxDQUF1QjlFLEVBQXZCLENBRFEsR0FFUkEsRUFGSjtBQUdBLFFBQUksRUFBRXdMLGVBQWVuSSxXQUFqQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixTQUFLMEksR0FBTCxHQUFXRCxHQUFYO0FBQ0Q7O0FBRUQ7Ozs7O3NCQUdBcEosSyxvQkFBUTs7QUFFTjtBQUNBLFFBQU1rTCxPQUFPLEtBQUs3QixHQUFMLENBQVN0SyxRQUFULENBQWtCLEtBQUtzSyxHQUFMLENBQVN0SyxRQUFULENBQWtCNkksTUFBbEIsR0FBMkIsQ0FBN0MsQ0FBYjtBQUNBc0QsU0FBS3BCLEtBQUwsQ0FBV3FCLHVCQUFYLEdBQXFDLE9BQXJDOztBQUVBO0FBQ0EsUUFBTUMsVUFBVSxLQUFLL0IsR0FBTCxDQUFTL0osZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWhCO0FBQ0F4QixVQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJtTixPQUE3QixFQUFzQyxrQkFBVTtBQUM5QyxVQUFJLEVBQUUzRSxrQkFBa0JGLGdCQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJNUYsY0FBSixFQUFOO0FBQ0YsVUFBSThGLE9BQU9DLE9BQVgsRUFBb0I7O0FBRWxCO0FBQ0EsWUFBSTJFLE9BQU81RSxPQUFPNkUsa0JBQWxCO0FBQ0EsWUFBSSxFQUFFRCxnQkFBZ0JwSyxXQUFsQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixlQUFPMEssS0FBS0UsT0FBTCxLQUFpQixLQUFqQixJQUEwQkYsS0FBS0Msa0JBQXRDO0FBQ0VELGlCQUFPQSxLQUFLQyxrQkFBWjtBQURGLFNBTmtCLENBU2xCO0FBQ0EsWUFBSSxFQUFFN0UsT0FBTzdFLFVBQVAsWUFBNkJYLFdBQS9CLEtBQ0EsRUFBRXdGLE9BQU83RSxVQUFQLENBQWtCQSxVQUFsQixZQUF3Q1gsV0FBMUMsQ0FESixFQUVFLE1BQU0sSUFBSU4sY0FBSixFQUFOOztBQUVGO0FBQ0EsWUFBTXlCLFNBQVNxRSxPQUFPN0UsVUFBUCxDQUFrQkEsVUFBakM7QUFDQSxZQUFNMkIsU0FBUzhILEtBQUt0TSxRQUFMLENBQWNzTSxLQUFLdE0sUUFBTCxDQUFjNkksTUFBZCxHQUF1QixDQUFyQyxDQUFmOztBQUVBO0FBQ0F4RixlQUFPMEgsS0FBUCxDQUFhcUIsdUJBQWIsR0FBdUMsRUFBdkM7QUFDQTVILGVBQU91RyxLQUFQLENBQWFxQix1QkFBYixHQUF1QyxPQUF2QztBQUNEO0FBQ0YsS0F6QkQ7QUEwQkQsRzs7QUFFRDs7Ozs7OztzQkFLQTFMLE0sbUJBQU9HLEUsRUFBSTtBQUNULFFBQU0yRCxTQUFTM0QsR0FBRzJELE1BQWxCO0FBQ0EsUUFBSSxFQUFFQSxrQkFBa0J0QyxXQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47O0FBRUY7QUFDQSxRQUFJMEssT0FBTzlILE9BQU8rSCxrQkFBbEI7QUFDQSxRQUFJLEVBQUVELGdCQUFnQnBLLFdBQWxCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFdBQU8wSyxLQUFLRSxPQUFMLEtBQWlCLEtBQWpCLElBQTBCRixLQUFLQyxrQkFBdEM7QUFDRUQsYUFBT0EsS0FBS0Msa0JBQVo7QUFERixLQVRTLENBWVQ7QUFDQSxRQUFJLEVBQUUvSCxPQUFPM0IsVUFBUCxZQUE2QlgsV0FBL0IsS0FDQSxFQUFFc0MsT0FBTzNCLFVBQVAsQ0FBa0JBLFVBQWxCLFlBQXdDWCxXQUExQyxDQURKLEVBRUUsTUFBTSxJQUFJTixjQUFKLEVBQU47O0FBRUY7QUFDQSxRQUFNeUIsU0FBU21CLE9BQU8zQixVQUFQLENBQWtCQSxVQUFqQztBQUNBLFFBQU0rSCxTQUFTMEIsS0FBS3RNLFFBQUwsQ0FBY3NNLEtBQUt0TSxRQUFMLENBQWM2SSxNQUFkLEdBQXVCLENBQXJDLENBQWY7O0FBRUE7QUFDQXhGLFdBQU8wSCxLQUFQLENBQWFxQix1QkFBYixHQUF1QyxFQUF2QztBQUNBeEIsV0FBT0csS0FBUCxDQUFhcUIsdUJBQWIsR0FBdUMsRUFBdkM7O0FBRUE7QUFDQSxRQUFJLENBQUM1SCxPQUFPbUQsT0FBWixFQUFxQjtBQUNuQixVQUFNdUUsTUFBTSxTQUFOQSxHQUFNLEdBQU07QUFDaEIsWUFBSUksZ0JBQWdCcEssV0FBcEIsRUFBaUM7QUFDL0JtQixpQkFBTzBILEtBQVAsQ0FBYXFCLHVCQUFiLEdBQXVDLE9BQXZDO0FBQ0FFLGVBQUtuTCxtQkFBTCxDQUF5QixlQUF6QixFQUEwQytLLEdBQTFDO0FBQ0Q7QUFDRixPQUxEO0FBTUFJLFdBQUt2TCxnQkFBTCxDQUFzQixlQUF0QixFQUF1Q21MLEdBQXZDLEVBQTRDLEtBQTVDO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJMUgsT0FBT21ELE9BQVgsRUFBb0I7QUFDbEIsVUFBTXVFLE9BQU0sU0FBTkEsSUFBTSxHQUFNO0FBQ2hCLFlBQUlJLGdCQUFnQnBLLFdBQXBCLEVBQWlDO0FBQy9CMEksaUJBQU9HLEtBQVAsQ0FBYXFCLHVCQUFiLEdBQXVDLE9BQXZDO0FBQ0FFLGVBQUtuTCxtQkFBTCxDQUF5QixlQUF6QixFQUEwQytLLElBQTFDO0FBQ0Q7QUFDRixPQUxEO0FBTUFJLFdBQUt2TCxnQkFBTCxDQUFzQixlQUF0QixFQUF1Q21MLElBQXZDLEVBQTRDLEtBQTVDO0FBQ0Q7QUFDRixHOztBQUVEOzs7OztzQkFHQTlLLEssb0JBQVE7O0FBRU47QUFDQSxTQUFLa0osR0FBTCxDQUFTdEssUUFBVCxDQUFrQixDQUFsQixFQUFxQitLLEtBQXJCLENBQTJCcUIsdUJBQTNCLEdBQXFELEVBQXJEOztBQUVBO0FBQ0EsUUFBTUMsVUFBVSxLQUFLL0IsR0FBTCxDQUFTL0osZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWhCO0FBQ0F4QixVQUFNQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FBNkJtTixPQUE3QixFQUFzQyxrQkFBVTtBQUM5QyxVQUFJLEVBQUUzRSxrQkFBa0JGLGdCQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJNUYsY0FBSixFQUFOO0FBQ0YsVUFBSThGLE9BQU9DLE9BQVgsRUFBb0I7O0FBRWxCO0FBQ0EsWUFBSTJFLE9BQU81RSxPQUFPNkUsa0JBQWxCO0FBQ0EsWUFBSSxFQUFFRCxnQkFBZ0JwSyxXQUFsQixDQUFKLEVBQ0UsTUFBTSxJQUFJTixjQUFKLEVBQU47QUFDRixlQUFPMEssS0FBS0UsT0FBTCxLQUFpQixLQUFqQixJQUEwQkYsS0FBS0Msa0JBQXRDO0FBQ0VELGlCQUFPQSxLQUFLQyxrQkFBWjtBQURGLFNBTmtCLENBU2xCO0FBQ0EsWUFBSSxFQUFFN0UsT0FBTzdFLFVBQVAsWUFBNkJYLFdBQS9CLEtBQ0EsRUFBRXdGLE9BQU83RSxVQUFQLENBQWtCQSxVQUFsQixZQUF3Q1gsV0FBMUMsQ0FESixFQUVFLE1BQU0sSUFBSU4sY0FBSixFQUFOOztBQUVGO0FBQ0EsWUFBTXlCLFNBQVNxRSxPQUFPN0UsVUFBUCxDQUFrQkEsVUFBakM7QUFDQSxZQUFNK0gsU0FBUzBCLEtBQUt0TSxRQUFMLENBQWNzTSxLQUFLdE0sUUFBTCxDQUFjNkksTUFBZCxHQUF1QixDQUFyQyxDQUFmOztBQUVBO0FBQ0F4RixlQUFPMEgsS0FBUCxDQUFhcUIsdUJBQWIsR0FBdUMsRUFBdkM7QUFDQXhCLGVBQU9HLEtBQVAsQ0FBYXFCLHVCQUFiLEdBQXVDLEVBQXZDO0FBQ0Q7QUFDRixLQXpCRDtBQTBCRCxHOzs7OztrQkFwSmtCN0YsUzs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUF6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkJlO0FBQ2JFLHNCQURhO0FBRWJDO0FBRmEsQzs7Ozs7Ozs7Ozs7OztBQzdCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztJQUlxQkQsSTs7QUFFbkI7Ozs7Ozs7Ozs7O0FBV0EsZ0JBQVk1SCxFQUFaLEVBQWdCO0FBQUE7O0FBQ2QsUUFBTXdMLE1BQU8sT0FBT3hMLEVBQVAsS0FBYyxRQUFmLEdBQ1JDLFNBQVM2RSxhQUFULENBQXVCOUUsRUFBdkIsQ0FEUSxHQUVSQSxFQUZKO0FBR0EsUUFBSSxFQUFFd0wsZUFBZTdDLGdCQUFqQixDQUFKLEVBQ0UsTUFBTSxJQUFJNUYsY0FBSixFQUFOO0FBQ0YsU0FBSzBJLEdBQUwsR0FBV0QsR0FBWDs7QUFFQTtBQUNBLFFBQUksQ0FBQ3ZMLFNBQVNtRCxJQUFkLEVBQ0UsTUFBTSxJQUFJTCxjQUFKLEVBQU47QUFDRixTQUFLNkssS0FBTCxHQUFhM04sU0FBU21ELElBQXRCO0FBQ0Q7O0FBRUQ7Ozs7O2lCQUdBaEIsSyxvQkFBUTtBQUNOLFNBQUtQLE1BQUw7QUFDRCxHOztBQUVEOzs7OztpQkFHQUEsTSxxQkFBUztBQUFBOztBQUVQO0FBQ0EsUUFBSSxLQUFLNEosR0FBTCxDQUFTM0MsT0FBYixFQUFzQjtBQUNwQixXQUFLeUQsT0FBTCxHQUFlL0osT0FBT3dKLFdBQXRCOztBQUVBO0FBQ0ExRyxpQkFBVyxZQUFNO0FBQ2Y5QyxlQUFPcUwsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjs7QUFFQTtBQUNBLFlBQUksTUFBS3BDLEdBQUwsQ0FBUzNDLE9BQWIsRUFBc0I7QUFDcEIsZ0JBQUs4RSxLQUFMLENBQVc1SSxPQUFYLENBQW1CNkUsT0FBbkIsR0FBNkIsTUFBN0I7QUFDRDtBQUNGLE9BUEQsRUFPRyxHQVBIOztBQVNGO0FBQ0MsS0FkRCxNQWNPO0FBQ0wsV0FBSytELEtBQUwsQ0FBVzVJLE9BQVgsQ0FBbUI2RSxPQUFuQixHQUE2QixFQUE3Qjs7QUFFQTs7QUFFQXZFLGlCQUFXLFlBQU07QUFDZixZQUFJLE9BQU8sTUFBS2lILE9BQVosS0FBd0IsV0FBNUIsRUFDRS9KLE9BQU9xTCxRQUFQLENBQWdCLENBQWhCLEVBQW1CLE1BQUt0QixPQUF4QjtBQUNILE9BSEQsRUFHRyxHQUhIO0FBSUQ7QUFDRixHOztBQUVEOzs7OztpQkFHQWhLLEssb0JBQVE7QUFDTixRQUFJLEtBQUtxTCxLQUFMLENBQVc1SSxPQUFYLENBQW1CNkUsT0FBbkIsS0FBK0IsTUFBbkMsRUFDRXJILE9BQU9xTCxRQUFQLENBQWdCLENBQWhCLEVBQW1CLEtBQUt0QixPQUF4QjtBQUNGLFNBQUtxQixLQUFMLENBQVc1SSxPQUFYLENBQW1CNkUsT0FBbkIsR0FBNkIsRUFBN0I7QUFDRCxHOzs7OztrQkF6RWtCakMsSTs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7OzBKQXZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7OztBQUlBOzs7Ozs7Ozs7OztBQVdBLElBQU1rRyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDOUIsTUFBSWxCLElBQUlrQixDQUFSO0FBQ0EsTUFBSUQsT0FBTy9ELE1BQVAsR0FBZ0I4QyxDQUFwQixFQUF1QjtBQUNyQixXQUFPaUIsT0FBT2pCLENBQVAsTUFBYyxHQUFkLElBQXFCLEVBQUVBLENBQUYsR0FBTSxDQUFsQztBQUNBLFdBQVVpQixPQUFPOUgsU0FBUCxDQUFpQixDQUFqQixFQUFvQjZHLENBQXBCLENBQVY7QUFDRDtBQUNELFNBQU9pQixNQUFQO0FBQ0QsQ0FQRDs7QUFTQTs7Ozs7OztBQU9BLElBQU1yTCxZQUFZLFNBQVpBLFNBQVksTUFBTztBQUN2QixNQUFNQyxPQUFPMUMsU0FBUzJDLGlCQUFULFdBQW1DQyxHQUFuQyxFQUEwQyxDQUExQyxDQUFiO0FBQ0EsTUFBSSxFQUFFRixnQkFBZ0JHLGVBQWxCLENBQUosRUFDRSxNQUFNLElBQUlDLGNBQUosRUFBTjtBQUNGLFNBQU9KLEtBQUtLLE9BQVo7QUFDRCxDQUxEOztBQU9BOzs7O0lBSXFCNkUsTTs7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsa0JBQVk3SCxFQUFaLEVBQWdCc0ksSUFBaEIsRUFBc0I7QUFBQTs7QUFDcEIsUUFBTWtELE1BQU8sT0FBT3hMLEVBQVAsS0FBYyxRQUFmLEdBQ1JDLFNBQVM2RSxhQUFULENBQXVCOUUsRUFBdkIsQ0FEUSxHQUVSQSxFQUZKO0FBR0EsUUFBSSxFQUFFd0wsZUFBZW5JLFdBQWpCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGLFNBQUswSSxHQUFMLEdBQVdELEdBQVg7O0FBRUE7O0FBUm9CLGdDQVNDdEwsTUFBTUMsU0FBTixDQUFnQnNCLEtBQWhCLENBQXNCcEIsSUFBdEIsQ0FBMkIsS0FBS29MLEdBQUwsQ0FBU3RLLFFBQXBDLENBVEQ7QUFBQSxRQVNid0IsSUFUYTtBQUFBLFFBU1BzTCxJQVRPOztBQVdwQjs7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhNUYsSUFBYjtBQUNBLFNBQUs2RixLQUFMLEdBQWF4TCxJQUFiO0FBQ0EsU0FBS3lMLEtBQUwsR0FBYUgsSUFBYjs7QUFFQTtBQUNBLFNBQUtJLFFBQUwsR0FBZ0I7QUFDZEMsbUJBQWEsS0FBS0gsS0FBTCxDQUFXdE4sV0FEVjtBQUVkME4sWUFBTTdMLFVBQVUsb0JBQVYsQ0FGUTtBQUdkOEwsV0FBSzlMLFVBQVUsbUJBQVYsQ0FIUztBQUlkK0wsYUFBTy9MLFVBQVUscUJBQVY7O0FBR1Q7QUFQZ0IsS0FBaEIsQ0FRQSxJQUFNZ00sWUFBWWhNLFVBQVUsa0JBQVYsQ0FBbEI7QUFDQSxRQUFJZ00sVUFBVTFFLE1BQWQsRUFDRSwrQkFBSzBFLFNBQUwsQ0FBZUMsU0FBZixHQUEyQkQsU0FBM0I7O0FBRUY7QUFDQSxTQUFLRSxLQUFMLEdBQWFsTSxVQUFVLGlCQUFWLEVBQTZCbU0sS0FBN0IsQ0FBbUMsR0FBbkMsRUFDVkMsTUFEVSxDQUNIQyxPQURHLEVBRVZ2RyxHQUZVLENBRU47QUFBQSxhQUFRd0csS0FBS0MsSUFBTCxFQUFSO0FBQUEsS0FGTSxDQUFiO0FBR0Q7O0FBRUQ7Ozs7Ozs7bUJBS0FwTixNLG1CQUFPRyxFLEVBQUk7QUFBQTs7QUFFVDtBQUNBLFFBQUlBLEdBQUc4SixJQUFILEtBQVksT0FBWixJQUF1QixDQUFDLEtBQUtRLE1BQWpDLEVBQXlDOztBQUV2QztBQUNBLFVBQU00QyxPQUFPLFNBQVBBLElBQU8sT0FBUTs7QUFFbkI7QUFDQSxjQUFLQyxLQUFMLEdBQWE3RyxLQUFLb0UsTUFBTCxDQUFZLFVBQUNuRSxJQUFELEVBQU9FLEdBQVAsRUFBZTtBQUFBLG9DQUNqQkEsSUFBSTNDLFFBQUosQ0FBYStJLEtBQWIsQ0FBbUIsR0FBbkIsQ0FEaUI7QUFBQSxjQUMvQk8sSUFEK0I7QUFBQSxjQUN6QnJKLElBRHlCOztBQUd0Qzs7O0FBQ0EsY0FBSUEsSUFBSixFQUFVO0FBQ1IwQyxnQkFBSWpFLE1BQUosR0FBYStELEtBQUs4RyxHQUFMLENBQVNELElBQVQsQ0FBYjs7QUFFQTtBQUNBLGdCQUFJM0csSUFBSWpFLE1BQUosSUFBYyxDQUFDaUUsSUFBSWpFLE1BQUosQ0FBVzhLLElBQTlCLEVBQW9DO0FBQ2xDN0csa0JBQUlqRSxNQUFKLENBQVcrSyxLQUFYLEdBQW1COUcsSUFBSThHLEtBQXZCO0FBQ0E5RyxrQkFBSWpFLE1BQUosQ0FBV2dMLElBQVgsR0FBbUIvRyxJQUFJK0csSUFBdkI7QUFDQS9HLGtCQUFJakUsTUFBSixDQUFXOEssSUFBWCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQTdHLGNBQUkrRyxJQUFKLEdBQVcvRyxJQUFJK0csSUFBSixDQUNSQyxPQURRLENBQ0EsS0FEQSxFQUNPLEdBRFAsRUFDMEI7QUFEMUIsV0FFUkEsT0FGUSxDQUVBLE1BRkEsRUFFUSxHQUZSLEVBRTBCO0FBRjFCLFdBR1JBLE9BSFEsQ0FHQSxnQkFIQSxFQUcwQjtBQUNqQyxvQkFBQ0MsQ0FBRCxFQUFJQyxJQUFKO0FBQUEsbUJBQWFBLElBQWI7QUFBQSxXQUpPLENBQVg7O0FBTUE7QUFDQSxjQUFJLENBQUNsSCxJQUFJakUsTUFBTCxJQUFlaUUsSUFBSWpFLE1BQUosQ0FBVytLLEtBQVgsS0FBcUI5RyxJQUFJOEcsS0FBNUMsRUFDRWhILEtBQUtxSCxHQUFMLENBQVNuSCxJQUFJM0MsUUFBYixFQUF1QjJDLEdBQXZCO0FBQ0YsaUJBQU9GLElBQVA7QUFDRCxTQTFCWSxFQTBCVixJQUFJc0gsR0FBSixFQTFCVSxDQUFiOztBQTRCQTtBQUNBLFlBQU10SCxPQUFPLE1BQUs0RyxLQUFsQjtBQUFBLFlBQ01ILE9BQU8sTUFBS0osS0FEbEI7O0FBR0E7QUFDQSxjQUFLa0IsTUFBTCxHQUFjLEVBQWQ7QUFDQSxjQUFLeEQsTUFBTCxHQUFjLG9DQUFLLFlBQVc7QUFBQTtBQUFBOztBQUM1QixjQUFNeUQsVUFBVTtBQUNkLHVDQUEyQiwrQkFBS0MsT0FEbEI7QUFFZCx5Q0FBNkIsK0JBQUtDOztBQUdwQztBQUxnQixXQUFoQixDQU1BLElBQU1DLFdBQVc1UCxPQUFPQyxJQUFQLENBQVl3UCxPQUFaLEVBQXFCckQsTUFBckIsQ0FBNEIsVUFBQ3lELE1BQUQsRUFBU0MsSUFBVCxFQUFrQjtBQUM3RCxnQkFBSSxDQUFDMU4sVUFBVTBOLElBQVYsRUFBZ0J6TSxLQUFoQixDQUFzQixVQUF0QixDQUFMLEVBQ0V3TSxPQUFPRSxJQUFQLENBQVlOLFFBQVFLLElBQVIsQ0FBWjtBQUNGLG1CQUFPRCxNQUFQO0FBQ0QsV0FKZ0IsRUFJZCxFQUpjLENBQWpCOztBQU1BO0FBQ0EsZUFBS0QsUUFBTCxDQUFjM04sS0FBZDtBQUNBLGNBQUkyTixRQUFKLEVBQ0Usa0JBQUtBLFFBQUwsRUFBYzdLLEdBQWQsa0JBQXFCNkssUUFBckI7O0FBRUY7QUFDQSxjQUFJbEIsS0FBS2hGLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJnRixLQUFLLENBQUwsTUFBWSxJQUFqQyxJQUF5QywrQkFBS0EsS0FBSyxDQUFMLENBQUwsQ0FBN0MsRUFBNEQ7QUFDMUQsaUJBQUtzQixHQUFMLENBQVMsK0JBQUt0QixLQUFLLENBQUwsQ0FBTCxDQUFUO0FBQ0QsV0FGRCxNQUVPLElBQUlBLEtBQUtoRixNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDMUIsaUJBQUtzRyxHQUFMLENBQVMsK0JBQUtDLGFBQUwsdUNBQXNCdkIsSUFBdEIsQ0FBVDtBQUNEOztBQUVEO0FBQ0EsZUFBS3dCLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEVBQUVDLE9BQU8sRUFBVCxFQUFwQjtBQUNBLGVBQUtELEtBQUwsQ0FBVyxNQUFYO0FBQ0EsZUFBS2hGLEdBQUwsQ0FBUyxVQUFUOztBQUVBO0FBQ0FqRCxlQUFLbkksT0FBTCxDQUFhO0FBQUEsbUJBQU8sT0FBS2lGLEdBQUwsQ0FBU29ELEdBQVQsQ0FBUDtBQUFBLFdBQWI7QUFDRCxTQWhDYSxDQUFkOztBQWtDQTtBQUNBLFlBQU1pSSxZQUFZLE1BQUtqRixHQUFMLENBQVN6SCxVQUEzQjtBQUNBLFlBQUksRUFBRTBNLHFCQUFxQnJOLFdBQXZCLENBQUosRUFDRSxNQUFNLElBQUlOLGNBQUosRUFBTjtBQUNGMk4sa0JBQVV4TyxnQkFBVixDQUEyQixRQUEzQixFQUFxQyxZQUFNO0FBQ3pDLGlCQUFPLE1BQUs0TixNQUFMLENBQVk5RixNQUFaLElBQXNCMEcsVUFBVWpLLFNBQVYsR0FDekJpSyxVQUFVaEssWUFEZSxJQUNDZ0ssVUFBVS9KLFlBQVYsR0FBeUIsRUFEdkQ7QUFFRSxrQkFBS21KLE1BQUwsQ0FBWWEsTUFBWixDQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQnZRLE9BQTFCLENBQWtDO0FBQUEscUJBQVV3USxRQUFWO0FBQUEsYUFBbEM7QUFGRjtBQUdELFNBSkQ7QUFLRCxPQWhGRDtBQWlGQTs7QUFFQTtBQUNBdEwsaUJBQVcsWUFBTTtBQUNmLGVBQU8sT0FBTyxNQUFLNEksS0FBWixLQUFzQixVQUF0QixHQUNILE1BQUtBLEtBQUwsR0FBYS9GLElBQWIsQ0FBa0IrRyxJQUFsQixDQURHLEdBRUhBLEtBQUssTUFBS2hCLEtBQVYsQ0FGSjtBQUdELE9BSkQsRUFJRyxHQUpIOztBQU1GO0FBQ0MsS0E5RkQsTUE4Rk8sSUFBSWxNLEdBQUc4SixJQUFILEtBQVksT0FBWixJQUF1QjlKLEdBQUc4SixJQUFILEtBQVksT0FBdkMsRUFBZ0Q7QUFDckQsVUFBTW5HLFNBQVMzRCxHQUFHMkQsTUFBbEI7QUFDQSxVQUFJLEVBQUVBLGtCQUFrQmdELGdCQUFwQixDQUFKLEVBQ0UsTUFBTSxJQUFJNUYsY0FBSixFQUFOOztBQUVGO0FBQ0EsVUFBSSxDQUFDLEtBQUt1SixNQUFOLElBQWdCM0csT0FBT2tMLEtBQVAsS0FBaUIsS0FBS0MsTUFBMUMsRUFDRTs7QUFFRjtBQUNBLGFBQU8sS0FBSzFDLEtBQUwsQ0FBVzJDLFVBQWxCO0FBQ0UsYUFBSzNDLEtBQUwsQ0FBVzRDLFdBQVgsQ0FBdUIsS0FBSzVDLEtBQUwsQ0FBVzJDLFVBQWxDO0FBREYsT0FWcUQsQ0FhckQ7QUFDQSxXQUFLRCxNQUFMLEdBQWNuTCxPQUFPa0wsS0FBckI7QUFDQSxVQUFJLEtBQUtDLE1BQUwsQ0FBWTlHLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsYUFBS21FLEtBQUwsQ0FBV3ROLFdBQVgsR0FBeUIsS0FBS3dOLFFBQUwsQ0FBY0MsV0FBdkM7QUFDQTtBQUNEOztBQUVEO0FBQ0EsVUFBTTZCLFNBQVMsS0FBSzdEOztBQUVsQjtBQUZhLE9BR1o1RCxLQUhZLENBR04saUJBQVM7QUFDZCxjQUFLb0ksTUFBTCxDQUFZRyxXQUFaLEdBQTBCcEMsS0FBMUIsQ0FBZ0MsR0FBaEMsRUFDR0MsTUFESCxDQUNVQyxPQURWLEVBRUczTyxPQUZILENBRVcsZ0JBQVE7QUFDZnNJLGdCQUFNd0ksSUFBTixDQUFXQSxJQUFYLEVBQWlCLEVBQUVDLFVBQVUsK0JBQUtDLEtBQUwsQ0FBV0QsUUFBWCxDQUFvQkUsUUFBaEMsRUFBakI7QUFDRCxTQUpIO0FBS0QsT0FUWTs7QUFXYjtBQVhhLE9BWVozRSxNQVpZLENBWUwsVUFBQzRFLEtBQUQsRUFBUS9LLElBQVIsRUFBaUI7QUFDdkIsWUFBTWtDLE1BQU0sTUFBSzBHLEtBQUwsQ0FBV0UsR0FBWCxDQUFlOUksS0FBS2lGLEdBQXBCLENBQVo7QUFDQSxZQUFJL0MsSUFBSWpFLE1BQVIsRUFBZ0I7QUFDZCxjQUFNZ0gsTUFBTS9DLElBQUlqRSxNQUFKLENBQVdzQixRQUF2QjtBQUNBd0wsZ0JBQU0xQixHQUFOLENBQVVwRSxHQUFWLEVBQWUsQ0FBQzhGLE1BQU1qQyxHQUFOLENBQVU3RCxHQUFWLEtBQWtCLEVBQW5CLEVBQXVCN0osTUFBdkIsQ0FBOEI0RSxJQUE5QixDQUFmO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsY0FBTWlGLE9BQU0vQyxJQUFJM0MsUUFBaEI7QUFDQXdMLGdCQUFNMUIsR0FBTixDQUFVcEUsSUFBVixFQUFnQjhGLE1BQU1qQyxHQUFOLENBQVU3RCxJQUFWLEtBQWtCLEVBQWxDO0FBQ0Q7QUFDRCxlQUFPOEYsS0FBUDtBQUNELE9BdEJZLEVBc0JWLElBQUl6QixHQUFKLEVBdEJVLENBQWY7O0FBd0JBO0FBQ0EsVUFBTW5ILFFBQVEsa0NBQU8sS0FBS29JLE1BQUwsQ0FBWTdCLElBQVosRUFBUCxFQUEyQlEsT0FBM0IsQ0FDWixJQUFJOEIsTUFBSixDQUFXLCtCQUFLN0MsU0FBTCxDQUFlQyxTQUExQixFQUFxQyxLQUFyQyxDQURZLEVBQ2lDLEdBRGpDLENBQWQ7QUFFQSxVQUFNaEwsUUFDSixJQUFJNE4sTUFBSixTQUFpQiwrQkFBSzdDLFNBQUwsQ0FBZUMsU0FBaEMsVUFBOENqRyxLQUE5QyxRQUF3RCxLQUF4RCxDQURGO0FBRUEsVUFBTThJLFlBQVksU0FBWkEsU0FBWSxDQUFDOUIsQ0FBRCxFQUFJZixTQUFKLEVBQWU4QyxLQUFmO0FBQUEsZUFDYjlDLFNBRGEsWUFDRzhDLEtBREg7QUFBQSxPQUFsQjs7QUFHQTtBQUNBLFdBQUszQixNQUFMLEdBQWMsRUFBZDtBQUNBSyxhQUFPL1AsT0FBUCxDQUFlLFVBQUNrUixLQUFELEVBQVE5RixHQUFSLEVBQWdCO0FBQUE7O0FBQzdCLFlBQU0vQyxNQUFNLE1BQUswRyxLQUFMLENBQVdFLEdBQVgsQ0FBZTdELEdBQWYsQ0FBWjs7QUFFQTtBQUNBLFlBQU1rRyxVQUNKO0FBQUE7QUFBQSxZQUFJLFNBQU0sd0JBQVY7QUFDRTtBQUFBO0FBQUEsY0FBRyxNQUFNakosSUFBSTNDLFFBQWIsRUFBdUIsT0FBTzJDLElBQUk4RyxLQUFsQztBQUNFLHVCQUFNLHdCQURSLEVBQ2lDLFVBQVMsSUFEMUM7QUFFRTtBQUFBO0FBQUEsZ0JBQVMsU0FBTSxpRUFBZjtBQUVFO0FBQUE7QUFBQSxrQkFBSSxTQUFNLHlCQUFWO0FBQ0csa0JBQUV4TyxRQUFRMEgsSUFBSThHLEtBQUosQ0FBVUUsT0FBVixDQUFrQjlMLEtBQWxCLEVBQXlCNk4sU0FBekIsQ0FBVjtBQURILGVBRkY7QUFLRy9JLGtCQUFJK0csSUFBSixDQUFTeEYsTUFBVCxHQUNDO0FBQUE7QUFBQSxrQkFBRyxTQUFNLDBCQUFUO0FBQ0csa0JBQUVqSixRQUFRMEgsSUFBSStHLElBQUosQ0FBU0MsT0FBVCxDQUFpQjlMLEtBQWpCLEVBQXdCNk4sU0FBeEIsQ0FBVjtBQURILGVBREQsR0FHUTtBQVJYO0FBRkY7QUFERixTQURGOztBQWtCQTtBQUNBLFlBQU1HLFdBQVdMLE1BQU05SSxHQUFOLENBQVUsZ0JBQVE7QUFDakMsaUJBQU8sWUFBTTtBQUNYLGdCQUFNb0osVUFBVSxNQUFLekMsS0FBTCxDQUFXRSxHQUFYLENBQWU5SSxLQUFLaUYsR0FBcEIsQ0FBaEI7QUFDQWtHLG9CQUFReFEsV0FBUixDQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFNMFEsUUFBUTlMLFFBQWpCLEVBQTJCLE9BQU84TCxRQUFRckMsS0FBMUM7QUFDRSx5QkFBTSx3QkFEUixFQUNpQyxlQUFZLFFBRDdDO0FBRUUsMEJBQVMsSUFGWDtBQUdFO0FBQUE7QUFBQSxrQkFBUyxTQUFNLDJCQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFNBQU0seUJBQVY7QUFDRyxvQkFBRXhPLFFBQVE2USxRQUFRckMsS0FBUixDQUFjRSxPQUFkLENBQXNCOUwsS0FBdEIsRUFBNkI2TixTQUE3QixDQUFWO0FBREgsaUJBREY7QUFJR0ksd0JBQVFwQyxJQUFSLENBQWF4RixNQUFiLEdBQ0M7QUFBQTtBQUFBLG9CQUFHLFNBQU0sMEJBQVQ7QUFDRyxvQkFBRWpKLFFBQVErTSxTQUNUOEQsUUFBUXBDLElBQVIsQ0FBYUMsT0FBYixDQUFxQjlMLEtBQXJCLEVBQTRCNk4sU0FBNUIsQ0FEUyxFQUMrQixHQUQvQjtBQUFWO0FBREgsaUJBREQsR0FLUTtBQVRYO0FBSEYsYUFERjtBQWlCRCxXQW5CRDtBQW9CRCxTQXJCZ0IsQ0FBakI7O0FBdUJBO0FBQ0EseUJBQUsxQixNQUFMLEVBQVlPLElBQVosaUJBQWlCO0FBQUEsaUJBQU0sTUFBS2pDLEtBQUwsQ0FBV2xOLFdBQVgsQ0FBdUJ3USxPQUF2QixDQUFOO0FBQUEsU0FBakIsU0FBMkRDLFFBQTNEO0FBQ0QsT0FoREQ7O0FBa0RBO0FBQ0EsVUFBTWpCLFlBQVksS0FBS2pGLEdBQUwsQ0FBU3pILFVBQTNCO0FBQ0EsVUFBSSxFQUFFME0scUJBQXFCck4sV0FBdkIsQ0FBSixFQUNFLE1BQU0sSUFBSU4sY0FBSixFQUFOO0FBQ0YsYUFBTyxLQUFLK00sTUFBTCxDQUFZOUYsTUFBWixJQUNIMEcsVUFBVWhLLFlBQVYsSUFBMEJnSyxVQUFVL0osWUFBVixHQUF5QixFQUR2RDtBQUVHLGFBQUttSixNQUFMLENBQVkrQixLQUFaLEVBQUQ7QUFGRixPQTdHcUQsQ0FpSHJEO0FBQ0EsVUFBTWxGLFVBQVUsS0FBS3lCLEtBQUwsQ0FBVzFNLGdCQUFYLENBQTRCLHNCQUE1QixDQUFoQjtBQUNBeEIsWUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCc00sT0FBN0IsRUFBc0Msa0JBQVU7QUFDOUMsU0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQnZNLE9BQXJCLENBQTZCLGtCQUFVO0FBQ3JDMFIsaUJBQU81UCxnQkFBUCxDQUF3QjBDLE1BQXhCLEVBQWdDLGVBQU87QUFDckMsZ0JBQUlBLFdBQVcsU0FBWCxJQUF3Qm1OLElBQUk1SSxPQUFKLEtBQWdCLEVBQTVDLEVBQ0U7O0FBRUY7QUFDQSxnQkFBTU4sU0FBUzVJLFNBQVM2RSxhQUFULENBQXVCLHlCQUF2QixDQUFmO0FBQ0EsZ0JBQUksRUFBRStELGtCQUFrQkYsZ0JBQXBCLENBQUosRUFDRSxNQUFNLElBQUk1RixjQUFKLEVBQU47QUFDRixnQkFBSThGLE9BQU9DLE9BQVgsRUFBb0I7QUFDbEJELHFCQUFPQyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0FELHFCQUFPRSxhQUFQLENBQXFCLElBQUlDLFdBQUosQ0FBZ0IsUUFBaEIsQ0FBckI7QUFDRDs7QUFFRDs7QUFFQStJLGdCQUFJMUksY0FBSjtBQUNBL0QsdUJBQVcsWUFBTTtBQUNmckYsdUJBQVM2RixRQUFULENBQWtCa00sSUFBbEIsR0FBeUJGLE9BQU9FLElBQWhDO0FBQ0QsYUFGRCxFQUVHLEdBRkg7QUFHRCxXQW5CRDtBQW9CRCxTQXJCRDtBQXNCRCxPQXZCRDs7QUF5QkE7QUFDQSxjQUFRN0IsT0FBTzhCLElBQWY7QUFDRSxhQUFLLENBQUw7QUFDRSxlQUFLOUQsS0FBTCxDQUFXdE4sV0FBWCxHQUF5QixLQUFLd04sUUFBTCxDQUFjRSxJQUF2QztBQUNBO0FBQ0YsYUFBSyxDQUFMO0FBQ0UsZUFBS0osS0FBTCxDQUFXdE4sV0FBWCxHQUF5QixLQUFLd04sUUFBTCxDQUFjRyxHQUF2QztBQUNBO0FBQ0Y7QUFDRSxlQUFLTCxLQUFMLENBQVd0TixXQUFYLEdBQ0UsS0FBS3dOLFFBQUwsQ0FBY0ksS0FBZCxDQUFvQmdCLE9BQXBCLENBQTRCLEdBQTVCLEVBQWlDVSxPQUFPOEIsSUFBeEMsQ0FERjtBQVJKO0FBV0Q7QUFDRixHOzs7OztrQkF2VGtCcEssTTs7Ozs7Ozs7QUNuRXJCOztBQUVBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ1ZBLHdHOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTyxhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLFdBQVcsMEJBQTBCO0FBQ3JDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwQkFBMEI7QUFDckMsYUFBYTtBQUNiO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwQkFBMEI7QUFDckMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVyxXQUFXO0FBQ3RCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixVQUFVOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDBCQUEwQjtBQUMvQywyQkFBMkIsMkJBQTJCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkMsK0JBQStCLGNBQWMsc0JBQXNCO0FBQ25FLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixZQUFZLFdBQVc7QUFDdkIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVyxXQUFXO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixVQUFVO0FBQzdCOztBQUVBLHFCQUFxQixVQUFVO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlEQUFpRDtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyw0QkFBNEI7QUFDdkMsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsU0FBUztBQUNwQixXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxlQUFlO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsWUFBWSxxQkFBcUI7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRixlQUFlOztBQUVsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxlQUFlO0FBQzdCLGNBQWMsY0FBYztBQUM1QixjQUFjLGNBQWM7QUFDNUIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixjQUFjLE9BQU87QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLHlCQUF5QjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0EsK0NBQStDLHVCQUF1QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQyxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUMsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFDQUFxQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0UsdUJBQXVCO0FBQ3pGOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxH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QyxDQURGLENBRE8sQ0FFcUU7QUFDNUUsUUFBSU4sV0FBVyxLQUFLSCxPQUFwQixFQUNFLEtBQUtILEdBQUwsQ0FBU3pHLE9BQVQsQ0FBaUI2RSxPQUFqQixHQUEyQixDQUFDLEtBQUsrQixPQUFMLEdBQWVHLE1BQWhCLElBQTBCLFFBQTFCLEdBQXFDLEVBQWhFO0FBQ0gsRzs7QUFFRDs7Ozs7bUJBR0F4SixLLG9CQUFRO0FBQ04sU0FBS2tKLEdBQUwsQ0FBU3pHLE9BQVQsQ0FBaUI2RSxPQUFqQixHQUEyQixFQUEzQjtBQUNBLFNBQUsrQixPQUFMLEdBQWUsS0FBZjtBQUNELEc7Ozs7O2tCQXpDa0I1RSxNIiwiZmlsZSI6ImFzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJhYTM3N2FmIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXHJcbmV4cG9ydCBkZWZhdWx0IC8qIEpTWCAqLyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5hdGl2ZSBET00gbm9kZSBmcm9tIEpTWCdzIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRhZyBuYW1lXHJcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBwcm9wZXJ0aWVzIC0gUHJvcGVydGllc1xyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgeyBfX2h0bWw6IHN0cmluZyB9IHwgQXJyYXk8SFRNTEVsZW1lbnQ+Pn1cclxuICAgKiAgIGNoaWxkcmVuIC0gQ2hpbGQgbm9kZXNcclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTmF0aXZlIERPTSBub2RlXHJcbiAgICovXHJcbiAgY3JlYXRlRWxlbWVudCh0YWcsIHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxyXG5cclxuICAgIC8qIFNldCBhbGwgcHJvcGVydGllcyAqL1xyXG4gICAgaWYgKHByb3BlcnRpZXMpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoT2JqZWN0LmtleXMocHJvcGVydGllcyksIGF0dHIgPT4ge1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wZXJ0aWVzW2F0dHJdKVxyXG4gICAgICB9KVxyXG5cclxuICAgIC8qIEl0ZXJhdGUgY2hpbGQgbm9kZXMgKi9cclxuICAgIGNvbnN0IGl0ZXJhdGVDaGlsZE5vZGVzID0gbm9kZXMgPT4ge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCBub2RlID0+IHtcclxuXHJcbiAgICAgICAgLyogRGlyZWN0bHkgYXBwZW5kIHRleHQgY29udGVudCAqL1xyXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAgICAgICB0eXBlb2Ygbm9kZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgZWwudGV4dENvbnRlbnQgKz0gbm9kZVxyXG5cclxuICAgICAgICAvKiBSZWN1cnNlLCBpZiB3ZSBnb3QgYW4gYXJyYXkgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgICAgIGl0ZXJhdGVDaGlsZE5vZGVzKG5vZGUpXHJcblxyXG4gICAgICAgIC8qIEFwcGVuZCByYXcgSFRNTCAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUuX19odG1sICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBlbC5pbm5lckhUTUwgKz0gbm9kZS5fX2h0bWxcclxuXHJcbiAgICAgICAgLyogQXBwZW5kIHJlZ3VsYXIgbm9kZXMgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBJdGVyYXRlIGNoaWxkIG5vZGVzIGFuZCByZXR1cm4gZWxlbWVudCAqL1xyXG4gICAgaXRlcmF0ZUNoaWxkTm9kZXMoY2hpbGRyZW4pXHJcbiAgICByZXR1cm4gZWxcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpbmRleCA9IHR5cGVvZiBmZXRjaD09J2Z1bmN0aW9uJyA/IGZldGNoLmJpbmQoKSA6IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdHJlcXVlc3Qub3BlbihvcHRpb25zLm1ldGhvZCB8fCAnZ2V0JywgdXJsKTtcblxuXHRcdGZvciAodmFyIGkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG5cdFx0XHRyZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoaSwgb3B0aW9ucy5oZWFkZXJzW2ldKTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHM9PSdpbmNsdWRlJztcblxuXHRcdHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSgpKTtcblx0XHR9O1xuXG5cdFx0cmVxdWVzdC5vbmVycm9yID0gcmVqZWN0O1xuXG5cdFx0cmVxdWVzdC5zZW5kKG9wdGlvbnMuYm9keSk7XG5cblx0XHRmdW5jdGlvbiByZXNwb25zZSgpIHtcblx0XHRcdHZhciBrZXlzID0gW10sXG5cdFx0XHRcdGFsbCA9IFtdLFxuXHRcdFx0XHRoZWFkZXJzID0ge30sXG5cdFx0XHRcdGhlYWRlcjtcblxuXHRcdFx0cmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6XFxzKihbXFxzXFxTXSo/KSQvZ20sIGZ1bmN0aW9uIChtLCBrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGtleXMucHVzaChrZXkgPSBrZXkudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRcdGFsbC5wdXNoKFtrZXksIHZhbHVlXSk7XG5cdFx0XHRcdGhlYWRlciA9IGhlYWRlcnNba2V5XTtcblx0XHRcdFx0aGVhZGVyc1trZXldID0gaGVhZGVyID8gKGhlYWRlciArIFwiLFwiICsgdmFsdWUpIDogdmFsdWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b2s6IChyZXF1ZXN0LnN0YXR1cy8yMDB8MCkgPT0gMSxcdFx0Ly8gMjAwLTI5OVxuXHRcdFx0XHRzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG5cdFx0XHRcdHVybDogcmVxdWVzdC5yZXNwb25zZVVSTCxcblx0XHRcdFx0Y2xvbmU6IHJlc3BvbnNlLFxuXHRcdFx0XHR0ZXh0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpOyB9LFxuXHRcdFx0XHRqc29uOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpLnRoZW4oSlNPTi5wYXJzZSk7IH0sXG5cdFx0XHRcdGJsb2I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcmVxdWVzdC5yZXNwb25zZV0pKTsgfSxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdGtleXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGtleXM7IH0sXG5cdFx0XHRcdFx0ZW50cmllczogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWxsOyB9LFxuXHRcdFx0XHRcdGdldDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIGhlYWRlcnNbbi50b0xvd2VyQ2FzZSgpXTsgfSxcblx0XHRcdFx0XHRoYXM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuLnRvTG93ZXJDYXNlKCkgaW4gaGVhZGVyczsgfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2guZXMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91bmZldGNoL2Rpc3QvdW5mZXRjaC5lcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyaWMgZXZlbnQgbGlzdGVuZXJcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHsoQXJyYXk8RXZlbnRUYXJnZXQ+KX0gZWxzXyAtIEV2ZW50IHRhcmdldHNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gaGFuZGxlcl8tIEV2ZW50IGhhbmRsZXJzXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBldmVudHNfIC0gRXZlbnQgbmFtZXNcclxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1cGRhdGVfIC0gVXBkYXRlIGhhbmRsZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7PyhzdHJpbmd8RXZlbnRUYXJnZXR8Tm9kZUxpc3Q8RXZlbnRUYXJnZXQ+KX0gZWxzIC1cclxuICAgKiAgIFNlbGVjdG9yIG9yIEV2ZW50IHRhcmdldHNcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8QXJyYXk8c3RyaW5nPil9IGV2ZW50cyAtIEV2ZW50IG5hbWVzXHJcbiAgICogQHBhcmFtIHsoT2JqZWN0fEZ1bmN0aW9uKX0gaGFuZGxlciAtIEhhbmRsZXIgdG8gYmUgaW52b2tlZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVscywgZXZlbnRzLCBoYW5kbGVyKSB7XHJcbiAgICB0aGlzLmVsc18gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgKHR5cGVvZiBlbHMgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVscylcclxuICAgICAgICA6IFtdLmNvbmNhdChlbHMpKVxyXG5cclxuICAgIC8qIFNldCBoYW5kbGVyIGFzIGZ1bmN0aW9uIG9yIGRpcmVjdGx5IGFzIG9iamVjdCAqL1xyXG4gICAgdGhpcy5oYW5kbGVyXyA9IHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgPyB7IHVwZGF0ZTogaGFuZGxlciB9XHJcbiAgICAgIDogaGFuZGxlclxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgZXZlbnQgbmFtZXMgYW5kIHVwZGF0ZSBoYW5kbGVyICovXHJcbiAgICB0aGlzLmV2ZW50c18gPSBbXS5jb25jYXQoZXZlbnRzKVxyXG4gICAgdGhpcy51cGRhdGVfID0gZXYgPT4gdGhpcy5oYW5kbGVyXy51cGRhdGUoZXYpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBsaXN0ZW5lciBmb3IgYWxsIHJlbGV2YW50IGV2ZW50c1xyXG4gICAqL1xyXG4gIGxpc3RlbigpIHtcclxuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNfLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXywgZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIEV4ZWN1dGUgc2V0dXAgaGFuZGxlciwgaWYgaW1wbGVtZW50ZWQgKi9cclxuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyXy5zZXR1cCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICB0aGlzLmhhbmRsZXJfLnNldHVwKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVucmVnaXN0ZXIgbGlzdGVuZXIgZm9yIGFsbCByZWxldmFudCBldmVudHNcclxuICAgKi9cclxuICB1bmxpc3RlbigpIHtcclxuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNfLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXylcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLyogRXhlY3V0ZSByZXNldCBoYW5kbGVyLCBpZiBpbXBsZW1lbnRlZCAqL1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJfLnJlc2V0ID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgIHRoaXMuaGFuZGxlcl8ucmVzZXQoKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmdcIlxyXG5pbXBvcnQgXCIuLi9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1wiXHJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCJcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3NcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQb2x5ZmlsbHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaW1wb3J0IFwiY3VzdG9tLWV2ZW50LXBvbHlmaWxsXCJcclxuaW1wb3J0IFwidW5mZXRjaC9wb2x5ZmlsbFwiXHJcblxyXG5pbXBvcnQgUHJvbWlzZSBmcm9tIFwicHJvbWlzZS1wb2x5ZmlsbFwiXHJcbndpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2UgfHwgUHJvbWlzZVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBEZXBlbmRlbmNpZXNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaW1wb3J0IENsaXBib2FyZCBmcm9tIFwiY2xpcGJvYXJkXCJcclxuaW1wb3J0IEZhc3RDbGljayBmcm9tIFwiZmFzdGNsaWNrXCJcclxuXHJcbmltcG9ydCBNYXRlcmlhbCBmcm9tIFwiLi9jb21wb25lbnRzL01hdGVyaWFsXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRnVuY3Rpb25zXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIG1ldGEgdGFnIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBNZXRhIG5hbWVcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcclxuICovXHJcbmNvbnN0IHRyYW5zbGF0ZSA9IGtleSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXHJcbiAgaWYgKCEobWV0YSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCkpXHJcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICByZXR1cm4gbWV0YS5jb250ZW50XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQXBwbGljYXRpb25cclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgTWF0ZXJpYWwgZm9yIE1rRG9jc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLXN0eWxlXHJcblxyXG4gIC8qIEluaXRpYWxpemUgTW9kZXJuaXpyIGFuZCBGYXN0Q2xpY2sgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBpZiAoIShkb2N1bWVudC5ib2R5IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAvKiBBdHRhY2ggRmFzdENsaWNrIHRvIG1pdGlnYXRlIDMwMG1zIGRlbGF5IG9uIHRvdWNoIGRldmljZXMgKi9cclxuICAgIEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSlcclxuXHJcbiAgICAvKiBUZXN0IGZvciBpT1MgKi9cclxuICAgIE1vZGVybml6ci5hZGRUZXN0KFwiaW9zXCIsICgpID0+IHtcclxuICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFdyYXAgYWxsIGRhdGEgdGFibGVzIGZvciBiZXR0ZXIgb3ZlcmZsb3cgc2Nyb2xsaW5nICovXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGU6bm90KFtjbGFzc10pXCIpICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIEpTWCwgd2Ugc2hvdWxkIHJlbmFtZSB0aGUgZmlsZVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0YWJsZXMsIHRhYmxlID0+IHtcclxuICAgICAgY29uc3Qgd3JhcCA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdHlwZXNldF9fc2Nyb2xsd3JhcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXR5cGVzZXRfX3RhYmxlXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICAgaWYgKHRhYmxlLm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcCwgdGFibGUubmV4dFNpYmxpbmcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwKVxyXG4gICAgICB9XHJcbiAgICAgIHdyYXAuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQodGFibGUpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIENsaXBib2FyZCBpbnRlZ3JhdGlvbiAqL1xyXG4gICAgaWYgKENsaXBib2FyZC5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29kZWhpbGl0ZSA+IHByZSwgcHJlID4gY29kZVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2NrcywgKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gYF9fY29kZV8ke2luZGV4fWBcclxuXHJcbiAgICAgICAgLyogQ3JlYXRlIGJ1dHRvbiB3aXRoIG1lc3NhZ2UgY29udGFpbmVyICovXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kLWNsaXBib2FyZFwiIHRpdGxlPXt0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29weVwiKX1cclxuICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtgIyR7aWR9IHByZSwgIyR7aWR9IGNvZGVgfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC1jbGlwYm9hcmRfX21lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8qIExpbmsgdG8gYmxvY2sgYW5kIGluc2VydCBidXR0b24gKi9cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBibG9jay5wYXJlbnROb2RlXHJcbiAgICAgICAgcGFyZW50LmlkID0gaWRcclxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgYmxvY2spXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIENsaXBib2FyZCBsaXN0ZW5lciAqL1xyXG4gICAgICBjb25zdCBjb3B5ID0gbmV3IENsaXBib2FyZChcIi5tZC1jbGlwYm9hcmRcIilcclxuXHJcbiAgICAgIC8qIFN1Y2Nlc3MgaGFuZGxlciAqL1xyXG4gICAgICBjb3B5Lm9uKFwic3VjY2Vzc1wiLCBhY3Rpb24gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhY3Rpb24udHJpZ2dlci5xdWVyeVNlbGVjdG9yKFwiLm1kLWNsaXBib2FyZF9fbWVzc2FnZVwiKVxyXG4gICAgICAgIGlmICghKG1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgICAgLyogQ2xlYXIgc2VsZWN0aW9uIGFuZCByZXNldCBkZWJvdW5jZSBsb2dpYyAqL1xyXG4gICAgICAgIGFjdGlvbi5jbGVhclNlbGVjdGlvbigpXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyKVxyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHBhcnNlSW50KG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyLCAxMCkpXHJcblxyXG4gICAgICAgIC8qIFNldCBtZXNzYWdlIGluZGljYXRpbmcgc3VjY2VzcyBhbmQgc2hvdyBpdCAqL1xyXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXHJcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSB0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29waWVkXCIpXHJcblxyXG4gICAgICAgIC8qIEhpZGUgbWVzc2FnZSBhZnRlciB0d28gc2Vjb25kcyAqL1xyXG4gICAgICAgIG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJtZC1jbGlwYm9hcmRfX21lc3NhZ2UtLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgbWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIgPSBcIlwiXHJcbiAgICAgICAgfSwgMjAwMCkudG9TdHJpbmcoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFBvbHlmaWxsIGRldGFpbHMvc3VtbWFyeSBmdW5jdGlvbmFsaXR5ICovXHJcbiAgICBpZiAoIU1vZGVybml6ci5kZXRhaWxzKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkZXRhaWxzID4gc3VtbWFyeVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2Nrcywgc3VtbWFyeSA9PiB7XHJcbiAgICAgICAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXYgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGV2LnRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgICAgICBpZiAoZGV0YWlscy5oYXNBdHRyaWJ1dGUoXCJvcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIGRldGFpbHMucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIFwiXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBPcGVuIGRldGFpbHMgYWZ0ZXIgYW5jaG9yIGp1bXAgKi9cclxuICAgIGNvbnN0IGRldGFpbHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSlcclxuICAgICAgICBpZiAoIWVsKVxyXG4gICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIC8qIFdhbGsgdXAgYXMgbG9uZyBhcyB3ZSdyZSBub3QgaW4gYSBkZXRhaWxzIHRhZyAqL1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlXHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxEZXRhaWxzRWxlbWVudCkpXHJcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG5cclxuICAgICAgICAvKiBJZiB0aGVyZSdzIGEgZGV0YWlscyB0YWcsIG9wZW4gaXQgKi9cclxuICAgICAgICBpZiAocGFyZW50ICYmICFwYXJlbnQub3Blbikge1xyXG4gICAgICAgICAgcGFyZW50Lm9wZW4gPSB0cnVlXHJcblxyXG4gICAgICAgICAgLyogRm9yY2UgcmVsb2FkLCBzbyB0aGUgdmlld3BvcnQgcmVwb3NpdGlvbnMgKi9cclxuICAgICAgICAgIGNvbnN0IGxvYyA9IGxvY2F0aW9uLmhhc2hcclxuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBcIiBcIlxyXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGxvY1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGRldGFpbHMpXHJcbiAgICBkZXRhaWxzKClcclxuXHJcbiAgICAvKiBGb3JjZSAxcHggc2Nyb2xsIG9mZnNldCB0byB0cmlnZ2VyIG92ZXJmbG93IHNjcm9sbGluZyAqL1xyXG4gICAgaWYgKE1vZGVybml6ci5pb3MpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1zY3JvbGxmaXhdXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2Nyb2xsYWJsZSwgaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b3AgPSBpdGVtLnNjcm9sbFRvcFxyXG5cclxuICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSB0b3Agb2YgdGhlIGNvbnRhaW5lciAqL1xyXG4gICAgICAgICAgaWYgKHRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpdGVtLnNjcm9sbFRvcCA9IDFcclxuXHJcbiAgICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lciAqL1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0b3AgKyBpdGVtLm9mZnNldEhlaWdodCA9PT0gaXRlbS5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgaXRlbS5zY3JvbGxUb3AgPSB0b3AgLSAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlYWRlciBzaGFkb3cgdG9nZ2xlICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgXSwgbmV3IE1hdGVyaWFsLkhlYWRlci5TaGFkb3coXHJcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1jb250YWluZXJdXCIsXHJcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpXHJcbiAgKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlYWRlciB0aXRsZSB0b2dnbGUgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICBdLCBuZXcgTWF0ZXJpYWwuSGVhZGVyLlRpdGxlKFxyXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dGl0bGVdXCIsXHJcbiAgICBcIi5tZC10eXBlc2V0IGgxXCIpXHJcbiAgKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlcm8gdmlzaWJpbGl0eSB0b2dnbGUgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1oZXJvXVwiKSlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuVGFicy5Ub2dnbGUoXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVyb11cIikpLmxpc3RlbigpXHJcblxyXG4gIC8qIENvbXBvbmVudDogdGFicyB2aXNpYmlsaXR5IHRvZ2dsZSAqL1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXRhYnNdXCIpKVxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5UYWJzLlRvZ2dsZShcIltkYXRhLW1kLWNvbXBvbmVudD10YWJzXVwiKSkubGlzdGVuKClcclxuXHJcbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggbmF2aWdhdGlvbiAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTIyMHB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5TaWRlYmFyLlBvc2l0aW9uKFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXVwiLFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpKSlcclxuXHJcbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggdGFibGUgb2YgY29udGVudHMgKG1pc3Npbmcgb24gNDA0IHBhZ2UpICovXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiKSlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgICAgXSwgbmV3IE1hdGVyaWFsLlNpZGViYXIuUG9zaXRpb24oXHJcbiAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiLFxyXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIikpKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGxpbmsgYmx1cnJpbmcgZm9yIHRhYmxlIG9mIGNvbnRlbnRzICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwic2Nyb2xsXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5OYXYuQmx1cihcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdIFtocmVmXVwiKSkpXHJcblxyXG4gIC8qIENvbXBvbmVudDogY29sbGFwc2libGUgZWxlbWVudHMgZm9yIG5hdmlnYXRpb24gKi9cclxuICBjb25zdCBjb2xsYXBzaWJsZXMgPVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLWNvbXBvbmVudD1jb2xsYXBzaWJsZV1cIilcclxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbGxhcHNpYmxlcywgY29sbGFwc2UgPT4ge1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjIwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihjb2xsYXBzZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBcImNsaWNrXCIsXHJcbiAgICAgICAgbmV3IE1hdGVyaWFsLk5hdi5Db2xsYXBzZShjb2xsYXBzZSkpKVxyXG4gIH0pXHJcblxyXG4gIC8qIENvbXBvbmVudDogYWN0aXZlIHBhbmUgbW9uaXRvciBmb3IgaU9TIHNjcm9sbGluZyBmaXhlcyAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTIxOXB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSBbZGF0YS1tZC10b2dnbGVdXCIsIFwiY2hhbmdlXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5OYXYuU2Nyb2xsaW5nKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIG5hdlwiKSkpXHJcblxyXG4gIC8qIEluaXRpYWxpemUgc2VhcmNoLCBpZiBhdmFpbGFibGUgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdXCIpKSB7XHJcblxyXG4gICAgLyogQ29tcG9uZW50OiBzZWFyY2ggYm9keSBsb2NrIGZvciBtb2JpbGUgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU5cHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIsIFwiY2hhbmdlXCIsXHJcbiAgICAgICAgbmV3IE1hdGVyaWFsLlNlYXJjaC5Mb2NrKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIikpKVxyXG5cclxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIHJlc3VsdHMgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIiwgW1xyXG4gICAgICBcImZvY3VzXCIsIFwia2V5dXBcIiwgXCJjaGFuZ2VcIlxyXG4gICAgXSwgbmV3IE1hdGVyaWFsLlNlYXJjaC5SZXN1bHQoXCJbZGF0YS1tZC1jb21wb25lbnQ9cmVzdWx0XVwiLCAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaChgJHtjb25maWcudXJsLmJhc2V9LyR7XHJcbiAgICAgICAgY29uZmlnLnZlcnNpb24gPCBcIjAuMTdcIiA/IFwibWtkb2NzXCIgOiBcInNlYXJjaFwiXHJcbiAgICAgIH0vc2VhcmNoX2luZGV4Lmpzb25gLCB7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIHJldHVybiBkYXRhLmRvY3MubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIGRvYy5sb2NhdGlvbiA9IGNvbmZpZy51cmwuYmFzZSArIGRvYy5sb2NhdGlvblxyXG4gICAgICAgICAgICByZXR1cm4gZG9jXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KSkubGlzdGVuKClcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgaW5wdXQgYWZ0ZXIgZm9ybSByZXNldCAqL1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXJlc2V0XVwiLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxyXG4gICAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBxdWVyeS5mb2N1cygpXHJcbiAgICAgIH0sIDEwKVxyXG4gICAgfSkubGlzdGVuKClcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgaW5wdXQgYWZ0ZXIgb3BlbmluZyBzZWFyY2ggKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIsIFwiY2hhbmdlXCIsIGV2ID0+IHtcclxuICAgICAgc2V0VGltZW91dCh0b2dnbGUgPT4ge1xyXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXHJcbiAgICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDQwMCwgZXYudGFyZ2V0KVxyXG4gICAgfSkubGlzdGVuKClcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjogb3BlbiBzZWFyY2ggb24gZm9jdXMgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIiwgXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBpZiAoIXRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IHRydWVcclxuICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG5cclxuICAgIC8qIExpc3RlbmVyOiBrZXlib2FyZCBoYW5kbGVycyAqLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgXCJrZXlkb3duXCIsIGV2ID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzcGxpdCB1cCBpbnRvIGNvbXBvbmVudCB0byByZWR1Y2UgY29tcGxleGl0eVxyXG4gICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcclxuICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgIC8qIEFib3J0IGlmIG1ldGEga2V5IChtYWNPUykgb3IgY3RybCBrZXkgKFdpbmRvd3MpIGlzIHByZXNzZWQgKi9cclxuICAgICAgaWYgKGV2Lm1ldGFLZXkgfHwgZXYuY3RybEtleSlcclxuICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgIC8qIFNlYXJjaCBpcyBvcGVuICovXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG5cclxuICAgICAgICAvKiBFbnRlcjogcHJldmVudCBmb3JtIHN1Ym1pc3Npb24gKi9cclxuICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgIGlmIChxdWVyeSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAvKiBHbyB0byBjdXJyZW50IGFjdGl2ZS9mb2N1c2VkIGxpbmsgKi9cclxuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF0gW2hyZWZdW2RhdGEtbWQtc3RhdGU9YWN0aXZlXVwiKVxyXG4gICAgICAgICAgICBpZiAoZm9jdXMgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBmb2N1cy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXHJcblxyXG4gICAgICAgICAgICAgIC8qIENsb3NlIHNlYXJjaCAqL1xyXG4gICAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgICAgICAgcXVlcnkuYmx1cigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRXNjYXBlIG9yIFRhYjogY2xvc2Ugc2VhcmNoICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChldi5rZXlDb2RlID09PSA5IHx8IGV2LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgICBxdWVyeS5ibHVyKClcclxuXHJcbiAgICAgICAgLyogSG9yaXpvbnRhbCBhcnJvd3MgYW5kIGJhY2tzcGFjZTogZm9jdXMgaW5wdXQgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKFs4LCAzNywgMzldLmluZGV4T2YoZXYua2V5Q29kZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAocXVlcnkgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuXHJcbiAgICAgICAgLyogVmVydGljYWwgYXJyb3dzOiBzZWxlY3QgcHJldmlvdXMgb3IgbmV4dCBzZWFyY2ggcmVzdWx0ICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChbMzgsIDQwXS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgY29uc3Qga2V5ID0gZXYua2V5Q29kZVxyXG5cclxuICAgICAgICAgIC8qIFJldHJpZXZlIGFsbCByZXN1bHRzICovXHJcbiAgICAgICAgICBjb25zdCBsaW5rcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XSwgW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF0gW2hyZWZdXCIpKVxyXG5cclxuICAgICAgICAgIC8qIFJldHJpZXZlIGN1cnJlbnQgYWN0aXZlL2ZvY3VzZWQgcmVzdWx0ICovXHJcbiAgICAgICAgICBjb25zdCBmb2N1cyA9IGxpbmtzLmZpbmQobGluayA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGxpbmsgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgICAgIHJldHVybiBsaW5rLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmIChmb2N1cylcclxuICAgICAgICAgICAgZm9jdXMuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG5cclxuICAgICAgICAgIC8qIENhbGN1bGF0ZSBpbmRleCBkZXBlbmRpbmcgb24gZGlyZWN0aW9uLCBhZGQgbGVuZ3RoIHRvIGZvcm0gcmluZyAqL1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLm1heCgwLCAoXHJcbiAgICAgICAgICAgIGxpbmtzLmluZGV4T2YoZm9jdXMpICsgbGlua3MubGVuZ3RoICsgKGtleSA9PT0gMzggPyAtMSA6ICsxKVxyXG4gICAgICAgICAgKSAlIGxpbmtzLmxlbmd0aClcclxuXHJcbiAgICAgICAgICAvKiBTZXQgYWN0aXZlIHN0YXRlIGFuZCBmb2N1cyAqL1xyXG4gICAgICAgICAgaWYgKGxpbmtzW2luZGV4XSkge1xyXG4gICAgICAgICAgICBsaW5rc1tpbmRleF0uZGF0YXNldC5tZFN0YXRlID0gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICBsaW5rc1tpbmRleF0uZm9jdXMoKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFByZXZlbnQgc2Nyb2xsaW5nIG9mIHBhZ2UgKi9cclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgICAgLyogUmV0dXJuIGZhbHNlIHByZXZlbnRzIHRoZSBjdXJzb3IgcG9zaXRpb24gZnJvbSBjaGFuZ2luZyAqL1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLyogU2VhcmNoIGlzIGNsb3NlZCBhbmQgd2UncmUgbm90IGluc2lkZSBhIGZvcm0gKi9cclxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICFkb2N1bWVudC5hY3RpdmVFbGVtZW50LmZvcm0pIHtcclxuXHJcbiAgICAgICAgLyogRi9TOiBPcGVuIHNlYXJjaCBpZiBub3QgaW4gaW5wdXQgZmllbGQgKi9cclxuICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gNzAgfHwgZXYua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIHF1ZXJ5IGlmIGluIHNlYXJjaCBpcyBvcGVuIGFuZCBjaGFyYWN0ZXIgaXMgdHlwZWQgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwia2V5cHJlc3NcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcclxuICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKHF1ZXJ5ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxyXG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxyXG4gICAgICB9XHJcbiAgICB9KS5saXN0ZW4oKVxyXG4gIH1cclxuXHJcbiAgLyogTGlzdGVuZXI6IGhhbmRsZSB0YWJiaW5nIGNvbnRleHQgZm9yIGJldHRlciBhY2Nlc3NpYmlsaXR5ICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LmJvZHksIFwia2V5ZG93blwiLCBldiA9PiB7XHJcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gOSkge1xyXG4gICAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIC5tZC1uYXZfX2xpbmtbZm9yXTpub3QoW3RhYmluZGV4XSlcIilcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsYWJlbHMsIGxhYmVsID0+IHtcclxuICAgICAgICBpZiAobGFiZWwub2Zmc2V0SGVpZ2h0KVxyXG4gICAgICAgICAgbGFiZWwudGFiSW5kZXggPSAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSkubGlzdGVuKClcclxuXHJcbiAgLyogTGlzdGVuZXI6IHJlc2V0IHRhYmJpbmcgYmVoYXZpb3IgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQuYm9keSwgXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gLm1kLW5hdl9fbGlua1t0YWJpbmRleF1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XHJcbiAgICAgIGxhYmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYkluZGV4XCIpXHJcbiAgICB9KVxyXG4gIH0pLmxpc3RlbigpXHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJ0YWJiaW5nXCIpXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gIH0pXHJcblxyXG4gIC8qIExpc3RlbmVyOiBjbG9zZSBkcmF3ZXIgd2hlbiBhbmNob3IgbGlua3MgYXJlIGNsaWNrZWQgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk1OXB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIFtocmVmXj0nIyddXCIsXHJcbiAgICAgIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9ZHJhd2VyXVwiKVxyXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuXHJcbiAgLyogUmV0cmlldmUgZmFjdHMgZm9yIHRoZSBnaXZlbiByZXBvc2l0b3J5IHR5cGUgKi9cclxuICA7KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXNvdXJjZV1cIilcclxuICAgIGlmICghZWwpXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXHJcbiAgICBlbHNlIGlmICghKGVsIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHN3aXRjaCAoZWwuZGF0YXNldC5tZFNvdXJjZSkge1xyXG4gICAgICBjYXNlIFwiZ2l0aHViXCI6IHJldHVybiBuZXcgTWF0ZXJpYWwuU291cmNlLkFkYXB0ZXIuR2l0SHViKGVsKS5mZXRjaCgpXHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXHJcbiAgICB9XHJcblxyXG4gIC8qIFJlbmRlciByZXBvc2l0b3J5IGluZm9ybWF0aW9uICovXHJcbiAgfSkoKS50aGVuKGZhY3RzID0+IHtcclxuICAgIGNvbnN0IHNvdXJjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtc291cmNlXVwiKVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzb3VyY2VzLCBzb3VyY2UgPT4ge1xyXG4gICAgICBuZXcgTWF0ZXJpYWwuU291cmNlLlJlcG9zaXRvcnkoc291cmNlKVxyXG4gICAgICAgIC5pbml0aWFsaXplKGZhY3RzKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4cG9ydHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogUHJvdmlkZSB0aGlzIGZvciBkb3dud2FyZCBjb21wYXRpYmlsaXR5IGZvciBub3cgKi9cclxuY29uc3QgYXBwID0ge1xyXG4gIGluaXRpYWxpemVcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBhcHBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24tcGFsZXR0ZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBQb2x5ZmlsbCBmb3IgY3JlYXRpbmcgQ3VzdG9tRXZlbnRzIG9uIElFOS8xMC8xMVxuXG4vLyBjb2RlIHB1bGxlZCBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Q0dG9jY2hpbmkvY3VzdG9tZXZlbnQtcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCNQb2x5ZmlsbFxuXG50cnkge1xuICAgIHZhciBjZSA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3Rlc3QnKTtcbiAgICBjZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIElFIGhhcyBwcm9ibGVtcyB3aXRoIC5wcmV2ZW50RGVmYXVsdCgpIG9uIGN1c3RvbSBldmVudHNcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzM0OTE5MVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwcmV2ZW50IGRlZmF1bHQnKTtcbiAgICB9XG59IGNhdGNoKGUpIHtcbiAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgIHZhciBldnQsIG9yaWdQcmV2ZW50O1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgIG9yaWdQcmV2ZW50ID0gZXZ0LnByZXZlbnREZWZhdWx0O1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdQcmV2ZW50LmNhbGwodGhpcyk7XG4gICAgICB0cnkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZXZ0O1xuICB9O1xuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50OyAvLyBleHBvc2UgZGVmaW5pdGlvbiB0byB3aW5kb3dcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9jdXN0b20tZXZlbnQtcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICghd2luZG93LmZldGNoKSB3aW5kb3cuZmV0Y2ggPSByZXF1aXJlKCcuJykuZGVmYXVsdCB8fCByZXF1aXJlKCcuJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91bmZldGNoL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4vLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbnZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgcHJvbSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xuICByZXR1cm4gcHJvbTtcbn07XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24oYXJyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWFyciB8fCB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5Jyk7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChcbiAgICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgICBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmdzW2ldID0gdmFsO1xuICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuUHJvbWlzZS5faW1tZWRpYXRlRm4gPVxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0pIHx8XG4gIGZ1bmN0aW9uKGZuKSB7XG4gICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICB9O1xuXG5Qcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWlkYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydtb2R1bGUnLCAnLi9jbGlwYm9hcmQtYWN0aW9uJywgJ3RpbnktZW1pdHRlcicsICdnb29kLWxpc3RlbmVyJ10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJy4vY2xpcGJvYXJkLWFjdGlvbicpLCByZXF1aXJlKCd0aW55LWVtaXR0ZXInKSwgcmVxdWlyZSgnZ29vZC1saXN0ZW5lcicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5jbGlwYm9hcmRBY3Rpb24sIGdsb2JhbC50aW55RW1pdHRlciwgZ2xvYmFsLmdvb2RMaXN0ZW5lcik7XG4gICAgICAgIGdsb2JhbC5jbGlwYm9hcmQgPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBfY2xpcGJvYXJkQWN0aW9uLCBfdGlueUVtaXR0ZXIsIF9nb29kTGlzdGVuZXIpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX2NsaXBib2FyZEFjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgdmFyIF90aW55RW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55RW1pdHRlcik7XG5cbiAgICB2YXIgX2dvb2RMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29kTGlzdGVuZXIpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmICghc2VsZikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICB9XG5cbiAgICB2YXIgQ2xpcGJvYXJkID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gICAgICAgIF9pbmhlcml0cyhDbGlwYm9hcmQsIF9FbWl0dGVyKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkKTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENsaXBib2FyZCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLmxpc3RlbkNsaWNrKHRyaWdnZXIpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAgICAgICAqIG9yIGN1c3RvbSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZCwgW3tcbiAgICAgICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHR5cGVvZiBvcHRpb25zLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuYWN0aW9uIDogdGhpcy5kZWZhdWx0QWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGV4dCA6IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBfdHlwZW9mKG9wdGlvbnMuY29udGFpbmVyKSA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2xpc3RlbkNsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gKDAsIF9nb29kTGlzdGVuZXIyLmRlZmF1bHQpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBlLmRlbGVnYXRlVGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBuZXcgX2NsaXBib2FyZEFjdGlvbjIuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24odHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0QWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0QWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0VGFyZ2V0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBnZXRBdHRyaWJ1dGVWYWx1ZSgndGFyZ2V0JywgdHJpZ2dlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVmYXVsdFRleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLCBbe1xuICAgICAgICAgICAga2V5OiAnaXNTdXBwb3J0ZWQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnY29weScsICdjdXQnXTtcblxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgc3VwcG9ydCA9ICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkO1xuXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZDtcbiAgICB9KF90aW55RW1pdHRlcjIuZGVmYXVsdCk7XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShzdWZmaXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWNsaXBib2FyZC0nICsgc3VmZml4O1xuXG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmQ7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvbGliL2NsaXBib2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnbW9kdWxlJywgJ3NlbGVjdCddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGZhY3RvcnkobW9kdWxlLCByZXF1aXJlKCdzZWxlY3QnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1vZCA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGZhY3RvcnkobW9kLCBnbG9iYWwuc2VsZWN0KTtcbiAgICAgICAgZ2xvYmFsLmNsaXBib2FyZEFjdGlvbiA9IG1vZC5leHBvcnRzO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIF9zZWxlY3QpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX3NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZWxlY3QpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgQ2xpcGJvYXJkQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmRBY3Rpb24sIFt7XG4gICAgICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlciA9IG9wdGlvbnMuZW1pdHRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIgPSBvcHRpb25zLnRyaWdnZXI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdpbml0U2VsZWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWtlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnc2VsZWN0RmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0RmFrZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT0gJ3J0bCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZha2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjaykgfHwgdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmZvbnRTaXplID0gJzEycHQnO1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGJveCBtb2RlbFxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcbiAgICAgICAgICAgICAgICB2YXIgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS50b3AgPSB5UG9zaXRpb24gKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0udmFsdWUgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAncmVtb3ZlRmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRmFrZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWtlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZha2VFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3NlbGVjdFRhcmdldCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2NvcHlUZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb3B5VGV4dCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VjY2VlZGVkID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQodGhpcy5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChzdWNjZWVkZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdoYW5kbGVSZXN1bHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdChzdWNjZWVkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChzdWNjZWVkZWQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uOiB0aGlzLmNsZWFyU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY2xlYXJTZWxlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2NvcHknO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbiAhPT0gJ2NvcHknICYmIHRoaXMuX2FjdGlvbiAhPT0gJ2N1dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICd0YXJnZXQnLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2NvcHknICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjdXQnICYmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpIHx8IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG4gICAgfSgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmRBY3Rpb247XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvbGliL2NsaXBib2FyZC1hY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNlbGVjdChlbGVtZW50KSB7XG4gICAgdmFyIHNlbGVjdGVkVGV4dDtcblxuICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbGVtZW50Lm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIHZhciBpc1JlYWRPbmx5ID0gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LnNlbGVjdCgpO1xuICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGVsZW1lbnQudmFsdWUubGVuZ3RoKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zZWxlY3Qvc3JjL3NlbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcbnZhciBkZWxlZ2F0ZSA9IHJlcXVpcmUoJ2RlbGVnYXRlJyk7XG5cbi8qKlxuICogVmFsaWRhdGVzIGFsbCBwYXJhbXMgYW5kIGNhbGxzIHRoZSByaWdodFxuICogbGlzdGVuZXIgZnVuY3Rpb24gYmFzZWQgb24gaXRzIHRhcmdldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGFyZ2V0ICYmICF0eXBlICYmICFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5zdHJpbmcodHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLmZuKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoaXMubm9kZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5ub2RlTGlzdCh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlTGlzdCh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMuc3RyaW5nKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblNlbGVjdG9yKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZywgSFRNTEVsZW1lbnQsIEhUTUxDb2xsZWN0aW9uLCBvciBOb2RlTGlzdCcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgSFRNTCBlbGVtZW50XG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZShub2RlLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBub2RlTGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGVMaXN0KG5vZGVMaXN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBzZWxlY3RvclxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuU2VsZWN0b3Ioc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ29vZC1saXN0ZW5lci9zcmMvbGlzdGVuLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmICh0eXBlID09PSAnW29iamVjdCBOb2RlTGlzdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXScpXG4gICAgICAgICYmICgnbGVuZ3RoJyBpbiB2YWx1ZSlcbiAgICAgICAgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBleHBvcnRzLm5vZGUodmFsdWVbMF0pKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLnN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLmZuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29kLWxpc3RlbmVyL3NyYy9pcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsb3Nlc3QgPSByZXF1aXJlKCcuL2Nsb3Nlc3QnKTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVsZWdhdGUvc3JjL2RlbGVnYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvY2xvc2VzdC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiOyhmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cblx0ICpcblx0ICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG5cdCAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuXHQgKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoc2VlIExJQ0VOU0UudHh0KVxuXHQgKi9cblxuXHQvKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cdC8qZ2xvYmFsIGRlZmluZSwgRXZlbnQsIE5vZGUqL1xuXG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGZhc3QtY2xpY2tpbmcgbGlzdGVuZXJzIG9uIHRoZSBzcGVjaWZpZWQgbGF5ZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdGZ1bmN0aW9uIEZhc3RDbGljayhsYXllciwgb3B0aW9ucykge1xuXHRcdHZhciBvbGRPbkNsaWNrO1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIGEgY2xpY2sgaXMgY3VycmVudGx5IGJlaW5nIHRyYWNrZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRpbWVzdGFtcCBmb3Igd2hlbiBjbGljayB0cmFja2luZyBzdGFydGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWxlbWVudCBiZWluZyB0cmFja2VkIGZvciBhIGNsaWNrLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRXZlbnRUYXJnZXRcblx0XHQgKi9cblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBYLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWS1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIElEIG9mIHRoZSBsYXN0IHRvdWNoLCByZXRyaWV2ZWQgZnJvbSBUb3VjaC5pZGVudGlmaWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVG91Y2htb3ZlIGJvdW5kYXJ5LCBiZXlvbmQgd2hpY2ggYSBjbGljayB3aWxsIGJlIGNhbmNlbGxlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIEZhc3RDbGljayBsYXllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEVsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWluaW11bSB0aW1lIGJldHdlZW4gdGFwKHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kKSBldmVudHNcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtYXhpbXVtIHRpbWUgZm9yIGEgdGFwXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcFRpbWVvdXQgPSBvcHRpb25zLnRhcFRpbWVvdXQgfHwgNzAwO1xuXG5cdFx0aWYgKEZhc3RDbGljay5ub3ROZWVkZWQobGF5ZXIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBvbGQgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBoYXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdFx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpOyB9O1xuXHRcdH1cblxuXG5cdFx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB1cCBldmVudCBoYW5kbGVycyBhcyByZXF1aXJlZFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0XHQvLyBIYWNrIGlzIHJlcXVpcmVkIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHQvLyB3aGljaCBpcyBob3cgRmFzdENsaWNrIG5vcm1hbGx5IHN0b3BzIGNsaWNrIGV2ZW50cyBidWJibGluZyB0byBjYWxsYmFja3MgcmVnaXN0ZXJlZCBvbiB0aGUgRmFzdENsaWNrXG5cdFx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdFx0aWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIGFkdiA9IE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IChjYWxsYmFjay5oaWphY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSBoYW5kbGVyIGlzIGFscmVhZHkgZGVjbGFyZWQgaW4gdGhlIGVsZW1lbnQncyBvbmNsaWNrIGF0dHJpYnV0ZSwgaXQgd2lsbCBiZSBmaXJlZCBiZWZvcmVcblx0XHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0XHQvLyBhZGRpbmcgaXQgYXMgbGlzdGVuZXIuXG5cdFx0aWYgKHR5cGVvZiBsYXllci5vbmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0XHQvLyAtIHRoZSBvbGQgb25lIHdvbid0IHdvcmsgaWYgcGFzc2VkIHRvIGFkZEV2ZW50TGlzdGVuZXIgZGlyZWN0bHkuXG5cdFx0XHRvbGRPbkNsaWNrID0gbGF5ZXIub25jbGljaztcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0b2xkT25DbGljayhldmVudCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBXaW5kb3dzIFBob25lIDguMSBmYWtlcyB1c2VyIGFnZW50IHN0cmluZyB0byBsb29rIGxpa2UgQW5kcm9pZCBhbmQgaVBob25lLlxuXHQqXG5cdCogQHR5cGUgYm9vbGVhblxuXHQqL1xuXHR2YXIgZGV2aWNlSXNXaW5kb3dzUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIFBob25lXCIpID49IDA7XG5cblx0LyoqXG5cdCAqIEFuZHJvaWQgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUyA9IC9pUChhZHxob25lfG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUzQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIDRfXFxkKF9cXGQpPy8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuXHQvKipcblx0ICogaU9TIDYuMC03LiogcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCA9IGRldmljZUlzSU9TICYmICgvT1MgWzYtN11fXFxkLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHQvKipcblx0ICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNCbGFja0JlcnJ5MTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0JCMTAnKSA+IDA7XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNDbGljayA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2lucHV0JzpcblxuXHRcdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdFx0aWYgKChkZXZpY2VJc0lPUyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ZpbGUnKSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhYmVsJzpcblx0XHRjYXNlICdpZnJhbWUnOiAvLyBpT1M4IGhvbWVzY3JlZW4gYXBwcyBjYW4gcHJldmVudCBldmVudHMgYnViYmxpbmcgaW50byBmcmFtZXNcblx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNGb2N1cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0c3dpdGNoICh0YXJnZXQudHlwZSkge1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ2ZpbGUnOlxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBwb2ludCBpbiBhdHRlbXB0aW5nIHRvIGZvY3VzIGRpc2FibGVkIGlucHV0c1xuXHRcdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICgvXFxibmVlZHNmb2N1c1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5zZW5kQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50LCBldmVudCkge1xuXHRcdHZhciBjbGlja0V2ZW50LCB0b3VjaDtcblxuXHRcdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIFN5bnRoZXNpc2UgYSBjbGljayBldmVudCwgd2l0aCBhbiBleHRyYSBhdHRyaWJ1dGUgc28gaXQgY2FuIGJlIHRyYWNrZWRcblx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdFx0Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCB0b3VjaC5zY3JlZW5YLCB0b3VjaC5zY3JlZW5ZLCB0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0Y2xpY2tFdmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcblx0XHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG5cdH07XG5cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGUgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cblx0XHQvL0lzc3VlICMxNTk6IEFuZHJvaWQgQ2hyb21lIFNlbGVjdCBCb3ggZG9lcyBub3Qgb3BlbiB3aXRoIGEgc3ludGhldGljIGNsaWNrIGV2ZW50XG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdHJldHVybiAnbW91c2Vkb3duJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ2NsaWNrJztcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUgbW9udGgpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmIHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UgJiYgdGFyZ2V0RWxlbWVudC50eXBlLmluZGV4T2YoJ2RhdGUnKSAhPT0gMCAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICd0aW1lJyAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdGxlbmd0aCA9IHRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW5ndGgsIGxlbmd0aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgYW5kIGlmIHNvLCBzZXQgYSBmbGFnIG9uIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZGlzY292ZXIgd2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHNjcm9sbGFibGUgbGF5ZXIuIFJlLWNoZWNrIGlmIHRoZVxuXHRcdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0XHRpZiAoIXNjcm9sbFBhcmVudCB8fCAhc2Nyb2xsUGFyZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9IHdoaWxlIChwYXJlbnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdFx0aWYgKHNjcm9sbFBhcmVudCkge1xuXHRcdFx0c2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fEV2ZW50VGFyZ2V0fVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblxuXHRcdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0XHRpZiAoZXZlbnRUYXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRUYXJnZXQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggc3RhcnQsIHJlY29yZCB0aGUgcG9zaXRpb24gYW5kIHNjcm9sbCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdFx0Ly8gSWdub3JlIG11bHRpcGxlIHRvdWNoZXMsIG90aGVyd2lzZSBwaW5jaC10by16b29tIGlzIHByZXZlbnRlZCBpZiBib3RoIGZpbmdlcnMgYXJlIG9uIHRoZSBGYXN0Q2xpY2sgZWxlbWVudCAoaXNzdWUgIzExMSkuXG5cdFx0aWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRcdGlmIChkZXZpY2VJc0lPUykge1xuXG5cdFx0XHQvLyBPbmx5IHRydXN0ZWQgZXZlbnRzIHdpbGwgZGVzZWxlY3QgdGV4dCBvbiBpT1MgKGlzc3VlICM0OSlcblx0XHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRcdGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHRcdC8vIFdlaXJkIHRoaW5ncyBoYXBwZW4gb24gaU9TIHdoZW4gYW4gYWxlcnQgb3IgY29uZmlybSBkaWFsb2cgaXMgb3BlbmVkIGZyb20gYSBjbGljayBldmVudCBjYWxsYmFjayAoaXNzdWUgIzIzKTpcblx0XHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0XHQvLyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgdGhlIHRvdWNoIGV2ZW50IHRoYXQgcHJldmlvdXNseSB0cmlnZ2VyZWQgdGhlIGNsaWNrIHRoYXQgdHJpZ2dlcmVkIHRoZSBhbGVydC5cblx0XHRcdFx0Ly8gU2FkbHksIHRoZXJlIGlzIGFuIGlzc3VlIG9uIGlPUyA0IHRoYXQgY2F1c2VzIHNvbWUgbm9ybWFsIHRvdWNoIGV2ZW50cyB0byBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgYW5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VlZGluZyB0b3VjaCBldmVudCAoaXNzdWUgIzUyKSwgc28gdGhpcyBmaXggaXMgdW5hdmFpbGFibGUgb24gdGhhdCBwbGF0Zm9ybS5cblx0XHRcdFx0Ly8gSXNzdWUgMTIwOiB0b3VjaC5pZGVudGlmaWVyIGlzIDAgd2hlbiBDaHJvbWUgZGV2IHRvb2xzICdFbXVsYXRlIHRvdWNoIGV2ZW50cycgaXMgc2V0IHdpdGggYW4gaU9TIGRldmljZSBVQSBzdHJpbmcsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhbGwgdG91Y2ggZXZlbnRzIHRvIGJlIGlnbm9yZWQuIEFzIHRoaXMgYmxvY2sgb25seSBhcHBsaWVzIHRvIGlPUywgYW5kIGlPUyBpZGVudGlmaWVycyBhcmUgYWx3YXlzIGxvbmcsXG5cdFx0XHRcdC8vIHJhbmRvbSBpbnRlZ2VycywgaXQncyBzYWZlIHRvIHRvIGNvbnRpbnVlIGlmIHRoZSBpZGVudGlmaWVyIGlzIDAgaGVyZS5cblx0XHRcdFx0aWYgKHRvdWNoLmlkZW50aWZpZXIgJiYgdG91Y2guaWRlbnRpZmllciA9PT0gdGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciAodXNpbmcgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSBhbmQ6XG5cdFx0XHRcdC8vIDEpIHRoZSB1c2VyIGRvZXMgYSBmbGluZyBzY3JvbGwgb24gdGhlIHNjcm9sbGFibGUgbGF5ZXJcblx0XHRcdFx0Ly8gMikgdGhlIHVzZXIgc3RvcHMgdGhlIGZsaW5nIHNjcm9sbCB3aXRoIGFub3RoZXIgdGFwXG5cdFx0XHRcdC8vIHRoZW4gdGhlIGV2ZW50LnRhcmdldCBvZiB0aGUgbGFzdCAndG91Y2hlbmQnIGV2ZW50IHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdW5kZXIgdGhlIHVzZXIncyBmaW5nZXJcblx0XHRcdFx0Ly8gd2hlbiB0aGUgZmxpbmcgc2Nyb2xsIHdhcyBzdGFydGVkLCBjYXVzaW5nIEZhc3RDbGljayB0byBzZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhhdCBsYXllciAtIHVubGVzcyBhIGNoZWNrXG5cdFx0XHRcdC8vIGlzIG1hZGUgdG8gZW5zdXJlIHRoYXQgYSBwYXJlbnQgbGF5ZXIgd2FzIG5vdCBzY3JvbGxlZCBiZWZvcmUgc2VuZGluZyBhIHN5bnRoZXRpYyBjbGljayAoaXNzdWUgIzQyKS5cblx0XHRcdFx0dGhpcy51cGRhdGVTY3JvbGxQYXJlbnQodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gdHJ1ZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IGV2ZW50LnRpbWVTdGFtcDtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBCYXNlZCBvbiBhIHRvdWNobW92ZSBldmVudCBvYmplY3QsIGNoZWNrIHdoZXRoZXIgdGhlIHRvdWNoIGhhcyBtb3ZlZCBwYXN0IGEgYm91bmRhcnkgc2luY2UgaXQgc3RhcnRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnRvdWNoSGFzTW92ZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLCBib3VuZGFyeSA9IHRoaXMudG91Y2hCb3VuZGFyeTtcblxuXHRcdGlmIChNYXRoLmFicyh0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpID4gYm91bmRhcnkgfHwgTWF0aC5hYnModG91Y2gucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSA+IGJvdW5kYXJ5KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBsYXN0IHBvc2l0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaE1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgdG91Y2ggaGFzIG1vdmVkLCBjYW5jZWwgdGhlIGNsaWNrIHRyYWNraW5nXG5cdFx0aWYgKHRoaXMudGFyZ2V0RWxlbWVudCAhPT0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCkgfHwgdGhpcy50b3VjaEhhc01vdmVkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEF0dGVtcHQgdG8gZmluZCB0aGUgbGFiZWxsZWQgY29udHJvbCBmb3IgdGhlIGdpdmVuIGxhYmVsIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8SFRNTExhYmVsRWxlbWVudH0gbGFiZWxFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZpbmRDb250cm9sID0gZnVuY3Rpb24obGFiZWxFbGVtZW50KSB7XG5cblx0XHQvLyBGYXN0IHBhdGggZm9yIG5ld2VyIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhlIEhUTUw1IGNvbnRyb2wgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5jb250cm9sICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBsYWJlbEVsZW1lbnQuY29udHJvbDtcblx0XHR9XG5cblx0XHQvLyBBbGwgYnJvd3NlcnMgdW5kZXIgdGVzdCB0aGF0IHN1cHBvcnQgdG91Y2ggZXZlbnRzIGFsc28gc3VwcG9ydCB0aGUgSFRNTDUgaHRtbEZvciBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50Lmh0bWxGb3IpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbEVsZW1lbnQuaHRtbEZvcik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgbm8gZm9yIGF0dHJpYnV0ZSBleGlzdHMsIGF0dGVtcHQgdG8gcmV0cmlldmUgdGhlIGZpcnN0IGxhYmVsbGFibGUgZGVzY2VuZGFudCBlbGVtZW50XG5cdFx0Ly8gdGhlIGxpc3Qgb2Ygd2hpY2ggaXMgZGVmaW5lZCBoZXJlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxhYmVsXG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwga2V5Z2VuLCBtZXRlciwgb3V0cHV0LCBwcm9ncmVzcywgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIGVuZCwgZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IGF0IG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgZm9yRWxlbWVudCwgdHJhY2tpbmdDbGlja1N0YXJ0LCB0YXJnZXRUYWdOYW1lLCBzY3JvbGxQYXJlbnQsIHRvdWNoLCB0YXJnZXRFbGVtZW50ID0gdGhpcy50YXJnZXRFbGVtZW50O1xuXG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCkgPiB0aGlzLnRhcFRpbWVvdXQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRvIHByZXZlbnQgd3JvbmcgY2xpY2sgY2FuY2VsIG9uIGlucHV0IChpc3N1ZSAjMTU2KS5cblx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdFx0dGhpcy5sYXN0Q2xpY2tUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0dHJhY2tpbmdDbGlja1N0YXJ0ID0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cdFx0Ly8gT24gc29tZSBpT1MgZGV2aWNlcywgdGhlIHRhcmdldEVsZW1lbnQgc3VwcGxpZWQgd2l0aCB0aGUgZXZlbnQgaXMgaW52YWxpZCBpZiB0aGUgbGF5ZXJcblx0XHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHRcdC8vIGZvciB0aGlzIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgbXVzdCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgZXZlbnQgdGFyZ2V0IGlzIGNoZWNrZWQhXG5cdFx0Ly8gU2VlIGlzc3VlICM1NzsgYWxzbyBmaWxlZCBhcyByZGFyOi8vMTMwNDg1ODkgLlxuXHRcdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdC8vIEluIGNlcnRhaW4gY2FzZXMgYXJndW1lbnRzIG9mIGVsZW1lbnRGcm9tUG9pbnQgY2FuIGJlIG5lZ2F0aXZlLCBzbyBwcmV2ZW50IHNldHRpbmcgdGFyZ2V0RWxlbWVudCB0byBudWxsXG5cdFx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHRoaXMudGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0YXJnZXRUYWdOYW1lID09PSAnbGFiZWwnKSB7XG5cdFx0XHRmb3JFbGVtZW50ID0gdGhpcy5maW5kQ29udHJvbCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZm9yRWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMubmVlZHNGb2N1cyh0YXJnZXRFbGVtZW50KSkge1xuXG5cdFx0XHQvLyBDYXNlIDE6IElmIHRoZSB0b3VjaCBzdGFydGVkIGEgd2hpbGUgYWdvIChiZXN0IGd1ZXNzIGlzIDEwMG1zIGJhc2VkIG9uIHRlc3RzIGZvciBpc3N1ZSAjMzYpIHRoZW4gZm9jdXMgd2lsbCBiZSB0cmlnZ2VyZWQgYW55d2F5LiBSZXR1cm4gZWFybHkgYW5kIHVuc2V0IHRoZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2Ugc28gdGhhdCB0aGUgc3Vic2VxdWVudCBjbGljayB3aWxsIGJlIGFsbG93ZWQgdGhyb3VnaC5cblx0XHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRyYWNraW5nQ2xpY2tTdGFydCkgPiAxMDAgfHwgKGRldmljZUlzSU9TICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiB0YXJnZXRUYWdOYW1lID09PSAnaW5wdXQnKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHRcdC8vIFNlbGVjdCBlbGVtZW50cyBuZWVkIHRoZSBldmVudCB0byBnbyB0aHJvdWdoIG9uIGlPUyA0LCBvdGhlcndpc2UgdGhlIHNlbGVjdG9yIG1lbnUgd29uJ3Qgb3Blbi5cblx0XHRcdC8vIEFsc28gdGhpcyBicmVha3Mgb3BlbmluZyBzZWxlY3RzIHdoZW4gVm9pY2VPdmVyIGlzIGFjdGl2ZSBvbiBpT1M2LCBpT1M3IChhbmQgcG9zc2libHkgb3RoZXJzKVxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayBldmVudCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHBhcmVudCBsYXllciB0aGF0IHdhcyBzY3JvbGxlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgdGFwIGlzIGJlaW5nIHVzZWQgdG8gc3RvcCB0aGUgc2Nyb2xsaW5nICh1c3VhbGx5IGluaXRpYXRlZCBieSBhIGZsaW5nIC0gaXNzdWUgIzQyKS5cblx0XHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdFx0aWYgKHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCAhPT0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHRoZSBhY3R1YWwgY2xpY2sgZnJvbSBnb2luZyB0aG91Z2ggLSB1bmxlc3MgdGhlIHRhcmdldCBub2RlIGlzIG1hcmtlZCBhcyByZXF1aXJpbmdcblx0XHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBjYW5jZWwsIHN0b3AgdHJhY2tpbmcgdGhlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIG1vdXNlIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRcdGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQgZXZlbnRzIHRhcmdldGluZyBhIHNwZWNpZmljIGVsZW1lbnQgc2hvdWxkIGJlIHBlcm1pdHRlZFxuXHRcdGlmICghZXZlbnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRGVyaXZlIGFuZCBjaGVjayB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2VlIHdoZXRoZXIgdGhlIG1vdXNlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcm1pdHRlZDtcblx0XHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdFx0Ly8gdG8gcHJldmVudCBnaG9zdC9kb3VibGVjbGlja3MuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGhpcy50YXJnZXRFbGVtZW50KSB8fCB0aGlzLmNhbmNlbE5leHRDbGljaykge1xuXG5cdFx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdFx0aWYgKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFydCBvZiB0aGUgaGFjayBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0XHRcdGV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgZXZlbnRcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gYWN0dWFsIGNsaWNrcywgZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHRvdWNoLWdlbmVyYXRlZCBjbGljaywgYSBjbGljayBhY3Rpb24gb2NjdXJyaW5nXG5cdCAqIG5hdHVyYWxseSBhZnRlciBhIGRlbGF5IGFmdGVyIGEgdG91Y2ggKHdoaWNoIG5lZWRzIHRvIGJlIGNhbmNlbGxlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiksIG9yXG5cdCAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHBlcm1pdHRlZDtcblxuXHRcdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRcdGlmICh0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcnkgb2RkIGJlaGF2aW91ciBvbiBpT1MgKGlzc3VlICMxOCk6IGlmIGEgc3VibWl0IGVsZW1lbnQgaXMgcHJlc2VudCBpbnNpZGUgYSBmb3JtIGFuZCB0aGUgdXNlciBoaXRzIGVudGVyIGluIHRoZSBpT1Mgc2ltdWxhdG9yIG9yIGNsaWNrcyB0aGUgR28gYnV0dG9uIG9uIHRoZSBwb3AtdXAgT1Mga2V5Ym9hcmQgdGhlIGEga2luZCBvZiAnZmFrZScgY2xpY2sgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGUgc3VibWl0LXR5cGUgaW5wdXQgZWxlbWVudCBhcyB0aGUgdGFyZ2V0LlxuXHRcdGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQuZGV0YWlsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRwZXJtaXR0ZWQgPSB0aGlzLm9uTW91c2UoZXZlbnQpO1xuXG5cdFx0Ly8gT25seSB1bnNldCB0YXJnZXRFbGVtZW50IGlmIHRoZSBjbGljayBpcyBub3QgcGVybWl0dGVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGNoZWNrIGZvciAhdGFyZ2V0RWxlbWVudCBpbiBvbk1vdXNlIGZhaWxzIGFuZCB0aGUgYnJvd3NlcidzIGNsaWNrIGRvZXNuJ3QgZ28gdGhyb3VnaC5cblx0XHRpZiAoIXBlcm1pdHRlZCkge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBJZiBjbGlja3MgYXJlIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gcGVybWl0dGVkO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgRmFzdENsaWNrJ3MgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG5cblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgRmFzdENsaWNrIGlzIG5lZWRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqL1xuXHRGYXN0Q2xpY2subm90TmVlZGVkID0gZnVuY3Rpb24obGF5ZXIpIHtcblx0XHR2YXIgbWV0YVZpZXdwb3J0O1xuXHRcdHZhciBjaHJvbWVWZXJzaW9uO1xuXHRcdHZhciBibGFja2JlcnJ5VmVyc2lvbjtcblx0XHR2YXIgZmlyZWZveFZlcnNpb247XG5cblx0XHQvLyBEZXZpY2VzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0b3VjaCBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENocm9tZSB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRjaHJvbWVWZXJzaW9uID0gKygvQ2hyb21lXFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoY2hyb21lVmVyc2lvbikge1xuXG5cdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIG9uIEFuZHJvaWQgd2l0aCB1c2VyLXNjYWxhYmxlPVwibm9cIiBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjODkpXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDaHJvbWUgMzIgYW5kIGFib3ZlIHdpdGggd2lkdGg9ZGV2aWNlLXdpZHRoIG9yIGxlc3MgZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRcdFx0XHRpZiAoY2hyb21lVmVyc2lvbiA+IDMxICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIENocm9tZSBkZXNrdG9wIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICMxNSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0JsYWNrQmVycnkxMCkge1xuXHRcdFx0YmxhY2tiZXJyeVZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFswLTldKilcXC4oWzAtOV0qKS8pO1xuXG5cdFx0XHQvLyBCbGFja0JlcnJ5IDEwLjMrIGRvZXMgbm90IHJlcXVpcmUgRmFzdGNsaWNrIGxpYnJhcnkuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9pc3N1ZXMvMjUxXG5cdFx0XHRpZiAoYmxhY2tiZXJyeVZlcnNpb25bMV0gPj0gMTAgJiYgYmxhY2tiZXJyeVZlcnNpb25bMl0gPj0gMykge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIHVzZXItc2NhbGFibGU9bm8gZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHdpZHRoPWRldmljZS13aWR0aCAob3IgbGVzcyB0aGFuIGRldmljZS13aWR0aCkgZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTEwIHdpdGggLW1zLXRvdWNoLWFjdGlvbjogbm9uZSBvciBtYW5pcHVsYXRpb24sIHdoaWNoIGRpc2FibGVzIGRvdWJsZS10YXAtdG8tem9vbSAoaXNzdWUgIzk3KVxuXHRcdGlmIChsYXllci5zdHlsZS5tc1RvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBGaXJlZm94IHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGZpcmVmb3hWZXJzaW9uID0gKygvRmlyZWZveFxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGZpcmVmb3hWZXJzaW9uID49IDI3KSB7XG5cdFx0XHQvLyBGaXJlZm94IDI3KyBkb2VzIG5vdCBoYXZlIHRhcCBkZWxheSBpZiB0aGUgY29udGVudCBpcyBub3Qgem9vbWFibGUgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI4OTZcblxuXHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXHRcdFx0aWYgKG1ldGFWaWV3cG9ydCAmJiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTE6IHByZWZpeGVkIC1tcy10b3VjaC1hY3Rpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgaXQncyByZWNvbWVuZGVkIHRvIHVzZSBub24tcHJlZml4ZWQgdmVyc2lvblxuXHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2FwcHMvSGg3NjczMTMuYXNweFxuXHRcdGlmIChsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgbWV0aG9kIGZvciBjcmVhdGluZyBhIEZhc3RDbGljayBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRGYXN0Q2xpY2suYXR0YWNoID0gZnVuY3Rpb24obGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IEZhc3RDbGljayhsYXllciwgb3B0aW9ucyk7XG5cdH07XG5cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBGYXN0Q2xpY2s7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEZhc3RDbGljay5hdHRhY2g7XG5cdFx0bW9kdWxlLmV4cG9ydHMuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYXN0Y2xpY2svbGliL2Zhc3RjbGljay5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9NYXRlcmlhbC9FdmVudFwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vTWF0ZXJpYWwvSGVhZGVyXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9NYXRlcmlhbC9OYXZcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL01hdGVyaWFsL1NlYXJjaFwiXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL01hdGVyaWFsL1NpZGViYXJcIlxyXG5pbXBvcnQgU291cmNlIGZyb20gXCIuL01hdGVyaWFsL1NvdXJjZVwiXHJcbmltcG9ydCBUYWJzIGZyb20gXCIuL01hdGVyaWFsL1RhYnNcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEV2ZW50LFxyXG4gIEhlYWRlcixcclxuICBOYXYsXHJcbiAgU2VhcmNoLFxyXG4gIFNpZGViYXIsXHJcbiAgU291cmNlLFxyXG4gIFRhYnNcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IExpc3RlbmVyIGZyb20gXCIuL0V2ZW50L0xpc3RlbmVyXCJcclxuaW1wb3J0IE1hdGNoTWVkaWEgZnJvbSBcIi4vRXZlbnQvTWF0Y2hNZWRpYVwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgTGlzdGVuZXIsXHJcbiAgTWF0Y2hNZWRpYVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSBcIi4vTGlzdGVuZXJcIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoTWVkaWEge1xyXG5cclxuICAvKipcclxuICAgKiBNZWRpYSBxdWVyeSBsaXN0ZW5lclxyXG4gICAqXHJcbiAgICogVGhpcyBjbGFzcyBsaXN0ZW5zIGZvciBzdGF0ZSBjaGFuZ2VzIG9mIG1lZGlhIHF1ZXJpZXMgYW5kIGF1dG9tYXRpY2FsbHlcclxuICAgKiBzd2l0Y2hlcyB0aGUgZ2l2ZW4gbGlzdGVuZXJzIG9uIG9yIG9mZi5cclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlcl8gLSBNZWRpYSBxdWVyeSBldmVudCBoYW5kbGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgLSBNZWRpYSBxdWVyeSB0byB0ZXN0IGZvclxyXG4gICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIC0gRXZlbnQgbGlzdGVuZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihxdWVyeSwgbGlzdGVuZXIpIHtcclxuICAgIHRoaXMuaGFuZGxlcl8gPSBtcSA9PiB7XHJcbiAgICAgIGlmIChtcS5tYXRjaGVzKVxyXG4gICAgICAgIGxpc3RlbmVyLmxpc3RlbigpXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBsaXN0ZW5lci51bmxpc3RlbigpXHJcbiAgICB9XHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBtZWRpYSBxdWVyeSBsaXN0ZW5lciAqL1xyXG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSlcclxuICAgIG1lZGlhLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlcl8pXHJcblxyXG4gICAgLyogQWx3YXlzIGNoZWNrIGF0IGluaXRpYWxpemF0aW9uICovXHJcbiAgICB0aGlzLmhhbmRsZXJfKG1lZGlhKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTWF0Y2hNZWRpYS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgU2hhZG93IGZyb20gXCIuL0hlYWRlci9TaGFkb3dcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vSGVhZGVyL1RpdGxlXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBTaGFkb3csXHJcbiAgVGl0bGVcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZG93IHtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBvciBoaWRlIGhlYWRlciBzaGFkb3cgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodF8gLSBPZmZzZXQgaGVpZ2h0IG9mIHByZXZpb3VzIG5vZGVzXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gSGVhZGVyIHNoYWRvdyBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHJlZi5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmLnBhcmVudE5vZGVcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cclxuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxyXG4gICAgICA6IGhlYWRlclxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgaGVpZ2h0IGFuZCBzdGF0ZSAqL1xyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSB0b3RhbCBoZWlnaHQgb2YgcHJldmlvdXMgbm9kZXNcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5lbF9cclxuICAgIHdoaWxlICgoY3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZykpIHtcclxuICAgICAgaWYgKCEoY3VycmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgdGhpcy5oZWlnaHRfICs9IGN1cnJlbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2hhZG93IHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBpZiAoZXYgJiYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSkge1xyXG4gICAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgICAgIHRoaXMuc2V0dXAoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRoaXMuaGVpZ2h0X1xyXG4gICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXHJcbiAgICAgICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJzaGFkb3dcIiA6IFwiXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHNoYWRvdyBzdGF0ZVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvU2hhZG93LmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUge1xyXG5cclxuICAvKipcclxuICAgKiBTd2FwIGhlYWRlciB0aXRsZSB0b3BpY3Mgd2hlbiBoZWFkZXIgaXMgc2Nyb2xsZWQgcGFzdFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBFbGVtZW50XHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlXyAtIFRpdGxlIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MSGVhZGluZ0VsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cclxuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxyXG4gICAgICA6IGhlYWRlclxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIHN0YXRlICovXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGl0bGUgc3RhdGVcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4geyAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB1c2UgY2hpbGROb2RlcyBoZXJlIGZvciBJRT9cclxuICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZWxfLm9mZnNldFdpZHRoIC0gMjB9cHhgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRpdGxlIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdGhpcy5oZWFkZXJfLm9mZnNldFRvcFxyXG4gICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxyXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcblxyXG4gICAgLyogSGFjazogaW5kdWNlIGVsbGlwc2lzIG9uIHRvcGljcyAqL1xyXG4gICAgaWYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4ge1xyXG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmVsXy5vZmZzZXRXaWR0aCAtIDIwfXB4YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHRpdGxlIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS53aWR0aCA9IFwiXCJcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvVGl0bGUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJsdXIgZnJvbSBcIi4vTmF2L0JsdXJcIlxyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIi4vTmF2L0NvbGxhcHNlXCJcclxuaW1wb3J0IFNjcm9sbGluZyBmcm9tIFwiLi9OYXYvU2Nyb2xsaW5nXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBCbHVyLFxyXG4gIENvbGxhcHNlLFxyXG4gIFNjcm9sbGluZ1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQmx1ciBsaW5rcyB3aXRoaW4gdGhlIHRhYmxlIG9mIGNvbnRlbnRzIGFib3ZlIGN1cnJlbnQgcGFnZSB5LW9mZnNldFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge05vZGVMaXN0PEhUTUxFbGVtZW50Pn0gZWxzXyAtIFRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxIVE1MRWxlbWVudD59IGFuY2hvcnNfIC0gUmVmZXJlbmNlZCBhbmNob3Igbm9kZXNcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXhfIC0gQ3VycmVudCBsaW5rIGluZGV4XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRpcl8gLSBTY3JvbGwgZGlyZWN0aW9uIGNoYW5nZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfE5vZGVMaXN0PEhUTUxFbGVtZW50Pil9IGVscyAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbHMpIHtcclxuICAgIHRoaXMuZWxzXyA9ICh0eXBlb2YgZWxzID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKVxyXG4gICAgICA6IGVsc1xyXG5cclxuICAgIC8qIEluaXRpYWxpemUgaW5kZXggYW5kIHBhZ2UgeS1vZmZzZXQgKi9cclxuICAgIHRoaXMuaW5kZXhfID0gMFxyXG4gICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gICAgLyogTmVjZXNzYXJ5IHN0YXRlIHRvIGNvcnJlY3RseSByZXNldCB0aGUgaW5kZXggKi9cclxuICAgIHRoaXMuZGlyXyA9IGZhbHNlXHJcblxyXG4gICAgLyogSW5kZXggYW5jaG9yIG5vZGUgb2Zmc2V0cyBmb3IgZmFzdCBsb29rdXAgKi9cclxuICAgIHRoaXMuYW5jaG9yc18gPSBbXS5yZWR1Y2UuY2FsbCh0aGlzLmVsc18sIChhbmNob3JzLCBlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gYW5jaG9ycy5jb25jYXQoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuaGFzaC5zdWJzdHJpbmcoMSkpIHx8IFtdKVxyXG4gICAgfSwgW10pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGJsdXIgc3RhdGVzXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgYmx1ciBzdGF0ZXNcclxuICAgKlxyXG4gICAqIERlZHVjdCB0aGUgc3RhdGljIG9mZnNldCBvZiB0aGUgaGVhZGVyICg1NnB4KSBhbmQgc2lkZWJhciBvZmZzZXQgKDI0cHgpLFxyXG4gICAqIHNlZSBfcGVybWFsaW5rcy5zY3NzIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgY29uc3QgZGlyID0gdGhpcy5vZmZzZXRfIC0gb2Zmc2V0IDwgMFxyXG5cclxuICAgIC8qIEhhY2s6IHJlc2V0IGluZGV4IGlmIGRpcmVjdGlvbiBjaGFuZ2VkIHRvIGNhdGNoIHZlcnkgZmFzdCBzY3JvbGxpbmcsXHJcbiAgICAgICBiZWNhdXNlIG90aGVyd2lzZSB3ZSB3b3VsZCBoYXZlIHRvIHJlZ2lzdGVyIGEgdGltZXIgYW5kIHRoYXQgc3Vja3MgKi9cclxuICAgIGlmICh0aGlzLmRpcl8gIT09IGRpcilcclxuICAgICAgdGhpcy5pbmRleF8gPSBkaXJcclxuICAgICAgICA/IHRoaXMuaW5kZXhfID0gMFxyXG4gICAgICAgIDogdGhpcy5pbmRleF8gPSB0aGlzLmVsc18ubGVuZ3RoIC0gMVxyXG5cclxuICAgIC8qIEV4aXQgd2hlbiB0aGVyZSBhcmUgbm8gYW5jaG9ycyAqL1xyXG4gICAgaWYgKHRoaXMuYW5jaG9yc18ubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm5cclxuXHJcbiAgICAvKiBTY3JvbGwgZGlyZWN0aW9uIGlzIGRvd24gKi9cclxuICAgIGlmICh0aGlzLm9mZnNldF8gPD0gb2Zmc2V0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XyArIDE7IGkgPCB0aGlzLmVsc18ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPD0gb2Zmc2V0KSB7XHJcbiAgICAgICAgICBpZiAoaSA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZWxzX1tpIC0gMV0uZGF0YXNldC5tZFN0YXRlID0gXCJibHVyXCJcclxuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIC8qIFNjcm9sbCBkaXJlY3Rpb24gaXMgdXAgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XzsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPiBvZmZzZXQpIHtcclxuICAgICAgICAgIGlmIChpID4gMClcclxuICAgICAgICAgICAgdGhpcy5lbHNfW2kgLSAxXS5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1lbWJlciBjdXJyZW50IG9mZnNldCBhbmQgZGlyZWN0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbiAqL1xyXG4gICAgdGhpcy5vZmZzZXRfID0gb2Zmc2V0XHJcbiAgICB0aGlzLmRpcl8gPSBkaXJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGJsdXIgc3RhdGVzXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxzXywgZWwgPT4ge1xyXG4gICAgICBlbC5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFJlc2V0IGluZGV4IGFuZCBwYWdlIHktb2Zmc2V0ICovXHJcbiAgICB0aGlzLmluZGV4XyAgPSAwXHJcbiAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGFwc2Uge1xyXG5cclxuICAvKipcclxuICAgKiBFeHBhbmQgb3IgY29sbGFwc2UgbmF2aWdhdGlvbiBvbiB0b2dnbGVcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBvdmVyZmxvdyBhbmQgZGlzcGxheSBmb3IgYWNjZXNzaWJpbGl0eVxyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG5cclxuICAgIC8qIEhpZGRlbiBsaW5rcyBzaG91bGQgbm90IGJlIGZvY3VzYWJsZSwgc28gaGlkZSB0aGVtIHdoZW4gdGhlIG5hdmlnYXRpb25cclxuICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcImJsb2NrXCIgICA6IFwibm9uZVwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGUgZXhwYW5kIGFuZCBjb2xsYXBzZSBzbW9vdGhseVxyXG4gICAqXHJcbiAgICogSW50ZXJuZXQgRXhwbG9yZXIgMTEgaXMgdmVyeSBzbG93IGF0IHJlY29nbml6aW5nIGNoYW5nZXMgb24gdGhlIGRhdGFzZXRcclxuICAgKiB3aGljaCByZXN1bHRzIGluIHRoZSBtZW51IG5vdCBleHBhbmRpbmcgb3IgY29sbGFwc2luZyBwcm9wZXJseS4gVEhlcmVmb3JlLFxyXG4gICAqIGZvciByZWFzb25zIG9mIGNvbXBhdGliaWxpdHksIHRoZSBhdHRyaWJ1dGUgYWNjZXNzb3JzIGFyZSB1c2VkLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuXHJcbiAgICAvKiBSZXNldCBvdmVyZmxvdyB0byBDU1MgZGVmYXVsdHMgKi9cclxuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgID0gXCJibG9ja1wiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcclxuXHJcbiAgICAvKiBFeHBhbmRlZCwgc28gY29sbGFwc2UgKi9cclxuICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IGAke2N1cnJlbnR9cHhgXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcclxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgLyogQ29sbGFwc2VkLCBzbyBleHBhbmQgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJleHBhbmRcIilcclxuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxyXG5cclxuICAgICAgLyogUmVhZCBoZWlnaHQgYW5kIHVuc2V0IHBzZXVkby10b2dnbGVkIHN0YXRlICovXHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICB0aGlzLmVsXy5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXHJcblxyXG4gICAgICAvKiBTZXQgaW5pdGlhbCBzdGF0ZSBhbmQgYW5pbWF0ZSAqL1xyXG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcclxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBgJHtoZWlnaHR9cHhgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIHN0YXRlIG9uIGVuZCBvZiB0cmFuc2l0aW9uICovXHJcbiAgICBjb25zdCBlbmQgPSBldiA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxyXG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAvKiBSZXNldCBoZWlnaHQgYW5kIHN0YXRlICovXHJcbiAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXHJcbiAgICAgIHRhcmdldC5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXHJcblxyXG4gICAgICAvKiBIaWRkZW4gbGlua3Mgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUsIHNvIGhpZGUgdGhlbSB3aGVuIHRoZSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXHJcbiAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcIm5vbmVcIiAgIDogXCJibG9ja1wiXHJcbiAgICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJcclxuXHJcbiAgICAgIC8qIE9ubHkgZmlyZSBvbmNlLCBzbyBkaXJlY3RseSByZW1vdmUgZXZlbnQgbGlzdGVuZXIgKi9cclxuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgIH1cclxuICAgIHRoaXMuZWxfLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBoZWlnaHQgYW5kIHBzZXVkby10b2dnbGVkIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICAgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyAgPSBcIlwiXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxpbmcge1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIHRoZSBjdXJyZW50IGFjdGl2ZSBwYW5lIChmb3IgaU9TKVxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBQcmltYXJ5IG5hdmlnYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCBwYW5lc1xyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG5cclxuICAgIC8qIEluaXRpYWxseSBzZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIG1haW4gcGFuZSAqL1xyXG4gICAgY29uc3QgbWFpbiA9IHRoaXMuZWxfLmNoaWxkcmVuW3RoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcbiAgICBtYWluLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcblxyXG4gICAgLyogRmluZCBhbGwgdG9nZ2xlcyBhbmQgY2hlY2sgd2hpY2ggb25lIGlzIGFjdGl2ZSAqL1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMuZWxfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC10b2dnbGVdXCIpXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRvZ2dsZXMsIHRvZ2dsZSA9PiB7XHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXHJcbiAgICAgICAgbGV0IHBhbmUgPSB0b2dnbGUubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICAgICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xyXG4gICAgICAgIGlmICghKHRvZ2dsZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgICAgICEodG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgICAvKiBGaW5kIGN1cnJlbnQgYW5kIHBhcmVudCBsaXN0IGVsZW1lbnRzICovXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG5cclxuICAgICAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xyXG4gICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgICAgICB0YXJnZXQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhY3RpdmUgcGFuZXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gQ2hhbmdlIGV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcclxuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXHJcbiAgICBsZXQgcGFuZSA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXHJcblxyXG4gICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xyXG4gICAgaWYgKCEodGFyZ2V0LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cclxuICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG5cclxuICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXHJcbiAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcbiAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcblxyXG4gICAgLyogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBwYXJlbnQgcGFuZSAqL1xyXG4gICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gYWN0aXZlIHBhbmUgKi9cclxuICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgcGFuZXNcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuXHJcbiAgICAvKiBSZXNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gbWFpbiBwYW5lICovXHJcbiAgICB0aGlzLmVsXy5jaGlsZHJlblsxXS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuXHJcbiAgICAvKiBGaW5kIGFsbCB0b2dnbGVzIGFuZCBjaGVjayB3aGljaCBvbmUgaXMgYWN0aXZlICovXHJcbiAgICBjb25zdCB0b2dnbGVzID0gdGhpcy5lbF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXRvZ2dsZV1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodG9nZ2xlcywgdG9nZ2xlID0+IHtcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG5cclxuICAgICAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cclxuICAgICAgICBsZXQgcGFuZSA9IHRvZ2dsZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xyXG5cclxuICAgICAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXHJcbiAgICAgICAgaWYgKCEodG9nZ2xlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAgICAgISh0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXHJcbiAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG4gICAgICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IExvY2sgZnJvbSBcIi4vU2VhcmNoL0xvY2tcIlxyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1NlYXJjaC9SZXN1bHRcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIExvY2ssXHJcbiAgUmVzdWx0XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2sge1xyXG5cclxuICAvKipcclxuICAgKiBMb2NrIGJvZHkgZm9yIGZ1bGwtc2NyZWVuIHNlYXJjaCBtb2RhbFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR9IGVsXyAtIExvY2sgdG9nZ2xlXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbG9ja18gLSBFbGVtZW50IHRvIGxvY2sgKGRvY3VtZW50IGJvZHkpXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBlbGVtZW50IHRvIGxvY2sgKD0gYm9keSkgKi9cclxuICAgIGlmICghZG9jdW1lbnQuYm9keSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmxvY2tfID0gZG9jdW1lbnQuYm9keVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgbG9ja2VkIHN0YXRlXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgbG9ja2VkIHN0YXRlXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG5cclxuICAgIC8qIEVudGVyaW5nIHNlYXJjaCBtb2RlICovXHJcbiAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuXHJcbiAgICAgIC8qIFNjcm9sbCB0byB0b3AgYWZ0ZXIgdHJhbnNpdGlvbiwgdG8gb21pdCBmbGlja2VyaW5nICovXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG5cclxuICAgICAgICAvKiBMb2NrIGJvZHkgYWZ0ZXIgZmluaXNoaW5nIHRyYW5zaXRpb24gKi9cclxuICAgICAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImxvY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNDAwKVxyXG5cclxuICAgIC8qIEV4aXRpbmcgc2VhcmNoIG1vZGUgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG5cclxuICAgICAgLyogU2Nyb2xsIHRvIGZvcm1lciBwb3NpdGlvbiwgYnV0IHdhaXQgZm9yIDEwMG1zIHRvIHByZXZlbnQgZmxhc2hlcyBvblxyXG4gICAgICAgICBpT1MuIEEgc2hvcnQgdGltZW91dCBzZWVtcyB0byBkbyB0aGUgdHJpY2sgKi9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9mZnNldF8gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5vZmZzZXRfKVxyXG4gICAgICB9LCAxMDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBsb2NrZWQgc3RhdGUgYW5kIHBhZ2UgeS1vZmZzZXRcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIGlmICh0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJsb2NrXCIpXHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLm9mZnNldF8pXHJcbiAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9Mb2NrLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBlc2NhcGUgZnJvbSBcImVzY2FwZS1zdHJpbmctcmVnZXhwXCJcclxuaW1wb3J0IGx1bnIgZnJvbSBcImV4cG9zZS1sb2FkZXI/bHVuciFsdW5yXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRnVuY3Rpb25zXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiBUcnVuY2F0ZSBhIHN0cmluZyBhZnRlciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIGNoYXJhY3RlclxyXG4gKlxyXG4gKiBUaGlzIGlzIG5vdCBhIHJlYXNvbmFibGUgYXBwcm9hY2gsIHNpbmNlIHRoZSBzdW1tYXJpZXMga2luZCBvZiBzdWNrLiBJdFxyXG4gKiB3b3VsZCBiZSBiZXR0ZXIgdG8gY3JlYXRlIHNvbWV0aGluZyBtb3JlIGludGVsbGlnZW50LCBoaWdobGlnaHRpbmcgdGhlXHJcbiAqIHNlYXJjaCBvY2N1cnJlbmNlcyBhbmQgbWFraW5nIGEgYmV0dGVyIHN1bW1hcnkgb3V0IG9mIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU3RyaW5nIHRvIGJlIHRydW5jYXRlZFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbiAtIE51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gVHJ1bmNhdGVkIHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdHJ1bmNhdGUgPSAoc3RyaW5nLCBuKSA9PiB7XHJcbiAgbGV0IGkgPSBuXHJcbiAgaWYgKHN0cmluZy5sZW5ndGggPiBpKSB7XHJcbiAgICB3aGlsZSAoc3RyaW5nW2ldICE9PSBcIiBcIiAmJiAtLWkgPiAwKTtcclxuICAgIHJldHVybiBgJHtzdHJpbmcuc3Vic3RyaW5nKDAsIGkpfS4uLmBcclxuICB9XHJcbiAgcmV0dXJuIHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBtZXRhIHRhZyB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gTWV0YSBuYW1lXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gTWV0YSBjb250ZW50IHZhbHVlXHJcbiAqL1xyXG5jb25zdCB0cmFuc2xhdGUgPSBrZXkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgbGFuZzoke2tleX1gKVswXVxyXG4gIGlmICghKG1ldGEgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQpKVxyXG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgcmV0dXJuIG1ldGEuY29udGVudFxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlcmZvcm0gc2VhcmNoIGFuZCB1cGRhdGUgcmVzdWx0cyBvbiBrZXlib2FyZCBldmVudHNcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gU2VhcmNoIHJlc3VsdCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkgeyhBcnJheTxPYmplY3Q+fEZ1bmN0aW9uKX0gZGF0YV8gLSBSYXcgZG9jdW1lbnQgZGF0YVxyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkb2NzXyAtIEluZGV4ZWQgZG9jdW1lbnRzXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbWV0YV8gLSBTZWFyY2ggbWV0YSBpbmZvcm1hdGlvblxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGxpc3RfIC0gU2VhcmNoIHJlc3VsdCBsaXN0XHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBsYW5nXyAtIFNlYXJjaCBsYW5ndWFnZXNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gbWVzc2FnZV8gLSBTZWFyY2ggcmVzdWx0IG1lc3NhZ2VzXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGluZGV4XyAtIFNlYXJjaCBpbmRleFxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8RnVuY3Rpb24+fSBzdGFja18gLSBTZWFyY2ggcmVzdWx0IHN0YWNrXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlXyAtIExhc3QgaW5wdXQgdmFsdWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxGdW5jdGlvbil9IGRhdGEgLSBGdW5jdGlvbiBwcm92aWRpbmcgZGF0YSBvciBhcnJheVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsLCBkYXRhKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG5cclxuICAgIC8qIFJldHJpZXZlIG1ldGFkYXRhIGFuZCBsaXN0IGVsZW1lbnQgKi9cclxuICAgIGNvbnN0IFttZXRhLCBsaXN0XSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxfLmNoaWxkcmVuKVxyXG5cclxuICAgIC8qIFNldCBkYXRhLCBtZXRhZGF0YSBhbmQgbGlzdCBlbGVtZW50cyAqL1xyXG4gICAgdGhpcy5kYXRhXyA9IGRhdGFcclxuICAgIHRoaXMubWV0YV8gPSBtZXRhXHJcbiAgICB0aGlzLmxpc3RfID0gbGlzdFxyXG5cclxuICAgIC8qIExvYWQgbWVzc2FnZXMgZm9yIG1ldGFkYXRhIGRpc3BsYXkgKi9cclxuICAgIHRoaXMubWVzc2FnZV8gPSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLm1ldGFfLnRleHRDb250ZW50LFxyXG4gICAgICBub25lOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm5vbmVcIiksXHJcbiAgICAgIG9uZTogdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5vbmVcIiksXHJcbiAgICAgIG90aGVyOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm90aGVyXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLyogT3ZlcnJpZGUgdG9rZW5pemVyIHNlcGFyYXRvciwgaWYgZ2l2ZW4gKi9cclxuICAgIGNvbnN0IHRva2VuaXplciA9IHRyYW5zbGF0ZShcInNlYXJjaC50b2tlbml6ZXJcIilcclxuICAgIGlmICh0b2tlbml6ZXIubGVuZ3RoKVxyXG4gICAgICBsdW5yLnRva2VuaXplci5zZXBhcmF0b3IgPSB0b2tlbml6ZXJcclxuXHJcbiAgICAvKiBMb2FkIHNlYXJjaCBsYW5ndWFnZXMgKi9cclxuICAgIHRoaXMubGFuZ18gPSB0cmFuc2xhdGUoXCJzZWFyY2gubGFuZ3VhZ2VcIikuc3BsaXQoXCIsXCIpXHJcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgLm1hcChsYW5nID0+IGxhbmcudHJpbSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNlYXJjaCByZXN1bHRzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIElucHV0IG9yIGZvY3VzIGV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBpbmRleCwgaWYgdGhpcyBoYXMgbm90IGJlIGRvbmUgeWV0ICovXHJcbiAgICBpZiAoZXYudHlwZSA9PT0gXCJmb2N1c1wiICYmICF0aGlzLmluZGV4Xykge1xyXG5cclxuICAgICAgLyogSW5pdGlhbGl6ZSBpbmRleCAqL1xyXG4gICAgICBjb25zdCBpbml0ID0gZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIC8qIFByZXByb2Nlc3MgYW5kIGluZGV4IHNlY3Rpb25zIGFuZCBkb2N1bWVudHMgKi9cclxuICAgICAgICB0aGlzLmRvY3NfID0gZGF0YS5yZWR1Y2UoKGRvY3MsIGRvYykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW3BhdGgsIGhhc2hdID0gZG9jLmxvY2F0aW9uLnNwbGl0KFwiI1wiKVxyXG5cclxuICAgICAgICAgIC8qIEFzc29jaWF0ZSBzZWN0aW9uIHdpdGggcGFyZW50IGRvY3VtZW50ICovXHJcbiAgICAgICAgICBpZiAoaGFzaCkge1xyXG4gICAgICAgICAgICBkb2MucGFyZW50ID0gZG9jcy5nZXQocGF0aClcclxuXHJcbiAgICAgICAgICAgIC8qIE92ZXJyaWRlIHBhZ2UgdGl0bGUgd2l0aCBkb2N1bWVudCB0aXRsZSBpZiBmaXJzdCBzZWN0aW9uICovXHJcbiAgICAgICAgICAgIGlmIChkb2MucGFyZW50ICYmICFkb2MucGFyZW50LmRvbmUpIHtcclxuICAgICAgICAgICAgICBkb2MucGFyZW50LnRpdGxlID0gZG9jLnRpdGxlXHJcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC50ZXh0ICA9IGRvYy50ZXh0XHJcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC5kb25lICA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFNvbWUgY2xlYW51cCBvbiB0aGUgdGV4dCAqL1xyXG4gICAgICAgICAgZG9jLnRleHQgPSBkb2MudGV4dFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csIFwiIFwiKSAgICAgICAgICAgICAgIC8qIFJlbW92ZSBuZXdsaW5lcyAqL1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikgICAgICAgICAgICAgIC8qIENvbXBhY3Qgd2hpdGVzcGFjZSAqL1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKyhbLC46OyE/XSkvZywgICAgICAgICAvKiBDb3JyZWN0IHB1bmN0dWF0aW9uICovXHJcbiAgICAgICAgICAgICAgKF8sIGNoYXIpID0+IGNoYXIpXHJcblxyXG4gICAgICAgICAgLyogSW5kZXggc2VjdGlvbnMgYW5kIGRvY3VtZW50cywgYnV0IHNraXAgdG9wLWxldmVsIGhlYWRsaW5lICovXHJcbiAgICAgICAgICBpZiAoIWRvYy5wYXJlbnQgfHwgZG9jLnBhcmVudC50aXRsZSAhPT0gZG9jLnRpdGxlKVxyXG4gICAgICAgICAgICBkb2NzLnNldChkb2MubG9jYXRpb24sIGRvYylcclxuICAgICAgICAgIHJldHVybiBkb2NzXHJcbiAgICAgICAgfSwgbmV3IE1hcClcclxuXHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8taW52YWxpZC10aGlzICovXHJcbiAgICAgICAgY29uc3QgZG9jcyA9IHRoaXMuZG9jc18sXHJcbiAgICAgICAgICAgICAgbGFuZyA9IHRoaXMubGFuZ19cclxuXHJcbiAgICAgICAgLyogQ3JlYXRlIHN0YWNrIGFuZCBpbmRleCAqL1xyXG4gICAgICAgIHRoaXMuc3RhY2tfID0gW11cclxuICAgICAgICB0aGlzLmluZGV4XyA9IGx1bnIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBcInNlYXJjaC5waXBlbGluZS50cmltbWVyXCI6IGx1bnIudHJpbW1lcixcclxuICAgICAgICAgICAgXCJzZWFyY2gucGlwZWxpbmUuc3RvcHdvcmRzXCI6IGx1bnIuc3RvcFdvcmRGaWx0ZXJcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBEaXNhYmxlIHN0b3Agd29yZHMgZmlsdGVyIGFuZCB0cmltbWVyLCBpZiBkZXNpcmVkICovXHJcbiAgICAgICAgICBjb25zdCBwaXBlbGluZSA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLnJlZHVjZSgocmVzdWx0LCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdHJhbnNsYXRlKG5hbWUpLm1hdGNoKC9eZmFsc2UkL2kpKVxyXG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbHRlcnNbbmFtZV0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICAgIC8qIFJlbW92ZSBzdGVtbWVyLCBhcyBpdCBjcmlwcGxlcyBzZWFyY2ggZXhwZXJpZW5jZSAqL1xyXG4gICAgICAgICAgdGhpcy5waXBlbGluZS5yZXNldCgpXHJcbiAgICAgICAgICBpZiAocGlwZWxpbmUpXHJcbiAgICAgICAgICAgIHRoaXMucGlwZWxpbmUuYWRkKC4uLnBpcGVsaW5lKVxyXG5cclxuICAgICAgICAgIC8qIFNldCB1cCBhbHRlcm5hdGUgc2VhcmNoIGxhbmd1YWdlcyAqL1xyXG4gICAgICAgICAgaWYgKGxhbmcubGVuZ3RoID09PSAxICYmIGxhbmdbMF0gIT09IFwiZW5cIiAmJiBsdW5yW2xhbmdbMF1dKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlKGx1bnJbbGFuZ1swXV0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxhbmcubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZShsdW5yLm11bHRpTGFuZ3VhZ2UoLi4ubGFuZykpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogSW5kZXggZmllbGRzICovXHJcbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGl0bGVcIiwgeyBib29zdDogMTAgfSlcclxuICAgICAgICAgIHRoaXMuZmllbGQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICB0aGlzLnJlZihcImxvY2F0aW9uXCIpXHJcblxyXG4gICAgICAgICAgLyogSW5kZXggZG9jdW1lbnRzICovXHJcbiAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHRoaXMuYWRkKGRvYykpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciBmb3IgbGF6eSByZW5kZXJpbmcgKi9cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsXy5wYXJlbnROb2RlXHJcbiAgICAgICAgaWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd2hpbGUgKHRoaXMuc3RhY2tfLmxlbmd0aCAmJiBjb250YWluZXIuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0ID49IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSAxNilcclxuICAgICAgICAgICAgdGhpcy5zdGFja18uc3BsaWNlKDAsIDEwKS5mb3JFYWNoKHJlbmRlciA9PiByZW5kZXIoKSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8taW52YWxpZC10aGlzICovXHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIGluZGV4IGFmdGVyIHNob3J0IHRpbWVvdXQgdG8gYWNjb3VudCBmb3IgdHJhbnNpdGlvbiAqL1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuZGF0YV8gPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgPyB0aGlzLmRhdGFfKCkudGhlbihpbml0KVxyXG4gICAgICAgICAgOiBpbml0KHRoaXMuZGF0YV8pXHJcbiAgICAgIH0sIDI1MClcclxuXHJcbiAgICAvKiBFeGVjdXRlIHNlYXJjaCBvbiBuZXcgaW5wdXQgZXZlbnQgKi9cclxuICAgIH0gZWxzZSBpZiAoZXYudHlwZSA9PT0gXCJmb2N1c1wiIHx8IGV2LnR5cGUgPT09IFwia2V5dXBcIikge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcclxuICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAvKiBBYm9ydCBlYXJseSwgaWYgaW5kZXggaXMgbm90IGJ1aWxkIG9yIGlucHV0IGhhc24ndCBjaGFuZ2VkICovXHJcbiAgICAgIGlmICghdGhpcy5pbmRleF8gfHwgdGFyZ2V0LnZhbHVlID09PSB0aGlzLnZhbHVlXylcclxuICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgIC8qIENsZWFyIGN1cnJlbnQgbGlzdCAqL1xyXG4gICAgICB3aGlsZSAodGhpcy5saXN0Xy5maXJzdENoaWxkKVxyXG4gICAgICAgIHRoaXMubGlzdF8ucmVtb3ZlQ2hpbGQodGhpcy5saXN0Xy5maXJzdENoaWxkKVxyXG5cclxuICAgICAgLyogQWJvcnQgZWFybHksIGlmIHNlYXJjaCBpbnB1dCBpcyBlbXB0eSAqL1xyXG4gICAgICB0aGlzLnZhbHVlXyA9IHRhcmdldC52YWx1ZVxyXG4gICAgICBpZiAodGhpcy52YWx1ZV8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ucGxhY2Vob2xkZXJcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUGVyZm9ybSBzZWFyY2ggb24gaW5kZXggYW5kIGdyb3VwIHNlY3Rpb25zIGJ5IGRvY3VtZW50ICovXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaW5kZXhfXHJcblxyXG4gICAgICAgIC8qIEFwcGVuZCB0cmFpbGluZyB3aWxkY2FyZCB0byBhbGwgdGVybXMgZm9yIHByZWZpeCBxdWVyeWluZyAqL1xyXG4gICAgICAgIC5xdWVyeShxdWVyeSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlXy50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKHRlcm0gPT4ge1xyXG4gICAgICAgICAgICAgIHF1ZXJ5LnRlcm0odGVybSwgeyB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qIFByb2Nlc3MgcXVlcnkgcmVzdWx0cyAqL1xyXG4gICAgICAgIC5yZWR1Y2UoKGl0ZW1zLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmRvY3NfLmdldChpdGVtLnJlZilcclxuICAgICAgICAgIGlmIChkb2MucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IGRvYy5wYXJlbnQubG9jYXRpb25cclxuICAgICAgICAgICAgaXRlbXMuc2V0KHJlZiwgKGl0ZW1zLmdldChyZWYpIHx8IFtdKS5jb25jYXQoaXRlbSkpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZWYgPSBkb2MubG9jYXRpb25cclxuICAgICAgICAgICAgaXRlbXMuc2V0KHJlZiwgKGl0ZW1zLmdldChyZWYpIHx8IFtdKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdGVtc1xyXG4gICAgICAgIH0sIG5ldyBNYXApXHJcblxyXG4gICAgICAvKiBBc3NlbWJsZSByZWd1bGFyIGV4cHJlc3Npb25zIGZvciBtYXRjaGluZyAqL1xyXG4gICAgICBjb25zdCBxdWVyeSA9IGVzY2FwZSh0aGlzLnZhbHVlXy50cmltKCkpLnJlcGxhY2UoXHJcbiAgICAgICAgbmV3IFJlZ0V4cChsdW5yLnRva2VuaXplci5zZXBhcmF0b3IsIFwiaW1nXCIpLCBcInxcIilcclxuICAgICAgY29uc3QgbWF0Y2ggPVxyXG4gICAgICAgIG5ldyBSZWdFeHAoYChefCR7bHVuci50b2tlbml6ZXIuc2VwYXJhdG9yfSkoJHtxdWVyeX0pYCwgXCJpbWdcIilcclxuICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gKF8sIHNlcGFyYXRvciwgdG9rZW4pID0+XHJcbiAgICAgICAgYCR7c2VwYXJhdG9yfTxlbT4ke3Rva2VufTwvZW0+YFxyXG5cclxuICAgICAgLyogUmVzZXQgc3RhY2sgYW5kIHJlbmRlciByZXN1bHRzICovXHJcbiAgICAgIHRoaXMuc3RhY2tfID0gW11cclxuICAgICAgcmVzdWx0LmZvckVhY2goKGl0ZW1zLCByZWYpID0+IHtcclxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmRvY3NfLmdldChyZWYpXHJcblxyXG4gICAgICAgIC8qIFJlbmRlciBhcnRpY2xlICovXHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IChcclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17ZG9jLmxvY2F0aW9ufSB0aXRsZT17ZG9jLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fbGlua1wiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGVcclxuICAgICAgICAgICAgICAgICAgICBtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlLS1kb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBkb2MudGl0bGUucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIHtkb2MudGV4dC5sZW5ndGggP1xyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RlYXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogZG9jLnRleHQucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+IDoge319XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgLyogUmVuZGVyIHNlY3Rpb25zIGZvciBhcnRpY2xlICovXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5kb2NzXy5nZXQoaXRlbS5yZWYpXHJcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17c2VjdGlvbi5sb2NhdGlvbn0gdGl0bGU9e3NlY3Rpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2xpbmtcIiBkYXRhLW1kLXJlbD1cImFuY2hvclwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IHNlY3Rpb24udGl0bGUucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICB7c2VjdGlvbi50ZXh0Lmxlbmd0aCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190ZWFzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogdHJ1bmNhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24udGV4dC5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpLCA0MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD4gOiB7fX1cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKiBQdXNoIGFydGljbGVzIGFuZCBzZWN0aW9uIHJlbmRlcmVycyBvbnRvIHN0YWNrICovXHJcbiAgICAgICAgdGhpcy5zdGFja18ucHVzaCgoKSA9PiB0aGlzLmxpc3RfLmFwcGVuZENoaWxkKGFydGljbGUpLCAuLi5zZWN0aW9ucylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8qIEdyYWR1YWxseSBhZGQgcmVzdWx0cyBhcyBsb25nIGFzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBncm93cyAqL1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsXy5wYXJlbnROb2RlXHJcbiAgICAgIGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgd2hpbGUgKHRoaXMuc3RhY2tfLmxlbmd0aCAmJlxyXG4gICAgICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodCA+PSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gMTYpXHJcbiAgICAgICAgKHRoaXMuc3RhY2tfLnNoaWZ0KCkpKClcclxuXHJcbiAgICAgIC8qIEJpbmQgY2xpY2sgaGFuZGxlcnMgZm9yIGFuY2hvcnMgKi9cclxuICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMubGlzdF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXJlbD1hbmNob3JdXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYW5jaG9ycywgYW5jaG9yID0+IHtcclxuICAgICAgICBbXCJjbGlja1wiLCBcImtleWRvd25cIl0uZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uLCBldjIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImtleWRvd25cIiAmJiBldjIua2V5Q29kZSAhPT0gMTMpXHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICAvKiBDbG9zZSBzZWFyY2ggKi9cclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBIYWNrOiBwcmV2ZW50IGRlZmF1bHQsIGFzIHRoZSBuYXZpZ2F0aW9uIG5lZWRzIHRvIGJlIGRlbGF5ZWQgZHVlXHJcbiAgICAgICAgICAgICAgIHRvIHRoZSBzZWFyY2ggYm9keSBsb2NrIG9uIG1vYmlsZSAqL1xyXG4gICAgICAgICAgICBldjIucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYW5jaG9yLmhyZWZcclxuICAgICAgICAgICAgfSwgMTAwKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLyogVXBkYXRlIHNlYXJjaCBtZXRhZGF0YSAqL1xyXG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zaXplKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ubm9uZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5vbmVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VfLm90aGVyLnJlcGxhY2UoXCIjXCIsIHJlc3VsdC5zaXplKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2gvUmVzdWx0LmpzeCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoT3BlcmF0b3JzUmUgPSAvW3xcXFxce30oKVtcXF1eJCsqPy5dL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0cmV0dXJuIHN0ci5yZXBsYWNlKG1hdGNoT3BlcmF0b3JzUmUsICdcXFxcJCYnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCJsdW5yXCJdID0gcmVxdWlyZShcIi0hLi9sdW5yLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXI/bHVuciEuL25vZGVfbW9kdWxlcy9sdW5yL2x1bnIuanMtZXhwb3NlZFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBsdW5yIC0gaHR0cDovL2x1bnJqcy5jb20gLSBBIGJpdCBsaWtlIFNvbHIsIGJ1dCBtdWNoIHNtYWxsZXIgYW5kIG5vdCBhcyBicmlnaHQgLSAyLjEuNVxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuOyhmdW5jdGlvbigpe1xuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbmZpZ3VyaW5nIGFuZCBjb25zdHJ1Y3RpbmdcbiAqIGEgbmV3IGx1bnIgSW5kZXguXG4gKlxuICogQSBsdW5yLkJ1aWxkZXIgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBpcGVsaW5lIHNldHVwXG4gKiB3aXRoIGEgdHJpbW1lciwgc3RvcCB3b3JkIGZpbHRlciBhbmQgc3RlbW1lci5cbiAqXG4gKiBUaGlzIGJ1aWxkZXIgb2JqZWN0IGlzIHlpZWxkZWQgdG8gdGhlIGNvbmZpZ3VyYXRpb24gZnVuY3Rpb25cbiAqIHRoYXQgaXMgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLCBhbGxvd2luZyB0aGUgbGlzdCBvZiBmaWVsZHNcbiAqIGFuZCBvdGhlciBidWlsZGVyIHBhcmFtZXRlcnMgdG8gYmUgY3VzdG9taXNlZC5cbiAqXG4gKiBBbGwgZG9jdW1lbnRzIF9tdXN0XyBiZSBhZGRlZCB3aXRoaW4gdGhlIHBhc3NlZCBjb25maWcgZnVuY3Rpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBpZHggPSBsdW5yKGZ1bmN0aW9uICgpIHtcbiAqICAgdGhpcy5maWVsZCgndGl0bGUnKVxuICogICB0aGlzLmZpZWxkKCdib2R5JylcbiAqICAgdGhpcy5yZWYoJ2lkJylcbiAqXG4gKiAgIGRvY3VtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcbiAqICAgICB0aGlzLmFkZChkb2MpXG4gKiAgIH0sIHRoaXMpXG4gKiB9KVxuICpcbiAqIEBzZWUge0BsaW5rIGx1bnIuQnVpbGRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKiBAc2VlIHtAbGluayBsdW5yLnRyaW1tZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLnN0b3BXb3JkRmlsdGVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdGVtbWVyfVxuICogQG5hbWVzcGFjZSB7ZnVuY3Rpb259IGx1bnJcbiAqL1xudmFyIGx1bnIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHZhciBidWlsZGVyID0gbmV3IGx1bnIuQnVpbGRlclxuXG4gIGJ1aWxkZXIucGlwZWxpbmUuYWRkKFxuICAgIGx1bnIudHJpbW1lcixcbiAgICBsdW5yLnN0b3BXb3JkRmlsdGVyLFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgYnVpbGRlci5zZWFyY2hQaXBlbGluZS5hZGQoXG4gICAgbHVuci5zdGVtbWVyXG4gIClcblxuICBjb25maWcuY2FsbChidWlsZGVyLCBidWlsZGVyKVxuICByZXR1cm4gYnVpbGRlci5idWlsZCgpXG59XG5cbmx1bnIudmVyc2lvbiA9IFwiMi4xLjVcIlxuLyohXG4gKiBsdW5yLnV0aWxzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIG5hbWVzcGFjZSBjb250YWluaW5nIHV0aWxzIGZvciB0aGUgcmVzdCBvZiB0aGUgbHVuciBsaWJyYXJ5XG4gKi9cbmx1bnIudXRpbHMgPSB7fVxuXG4vKipcbiAqIFByaW50IGEgd2FybmluZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHByaW50ZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqL1xubHVuci51dGlscy53YXJuID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBpZiAoZ2xvYmFsLmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG59KSh0aGlzKVxuXG4vKipcbiAqIENvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLlxuICpcbiAqIEluIHRoZSBjYXNlIG9mIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgdGhlIGZ1bmN0aW9uIHJldHVybnNcbiAqIHRoZSBlbXB0eSBzdHJpbmcsIGluIGFsbCBvdGhlciBjYXNlcyB0aGUgcmVzdWx0IG9mIGNhbGxpbmdcbiAqIGB0b1N0cmluZ2Agb24gdGhlIHBhc3NlZCBvYmplY3QgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtBbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFzc2VkIG9iamVjdC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICovXG5sdW5yLnV0aWxzLmFzU3RyaW5nID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09PSB2b2lkIDAgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqLnRvU3RyaW5nKClcbiAgfVxufVxubHVuci5GaWVsZFJlZiA9IGZ1bmN0aW9uIChkb2NSZWYsIGZpZWxkTmFtZSwgc3RyaW5nVmFsdWUpIHtcbiAgdGhpcy5kb2NSZWYgPSBkb2NSZWZcbiAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWVcbiAgdGhpcy5fc3RyaW5nVmFsdWUgPSBzdHJpbmdWYWx1ZVxufVxuXG5sdW5yLkZpZWxkUmVmLmpvaW5lciA9IFwiL1wiXG5cbmx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzKSB7XG4gIHZhciBuID0gcy5pbmRleE9mKGx1bnIuRmllbGRSZWYuam9pbmVyKVxuXG4gIGlmIChuID09PSAtMSkge1xuICAgIHRocm93IFwibWFsZm9ybWVkIGZpZWxkIHJlZiBzdHJpbmdcIlxuICB9XG5cbiAgdmFyIGZpZWxkUmVmID0gcy5zbGljZSgwLCBuKSxcbiAgICAgIGRvY1JlZiA9IHMuc2xpY2UobiArIDEpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkUmVmLCBzKVxufVxuXG5sdW5yLkZpZWxkUmVmLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX3N0cmluZ1ZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3N0cmluZ1ZhbHVlID0gdGhpcy5maWVsZE5hbWUgKyBsdW5yLkZpZWxkUmVmLmpvaW5lciArIHRoaXMuZG9jUmVmXG4gIH1cblxuICByZXR1cm4gdGhpcy5fc3RyaW5nVmFsdWVcbn1cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGludmVyc2UgZG9jdW1lbnQgZnJlcXVlbmN5IGZvclxuICogYSBwb3N0aW5nLiBUaGlzIGlzIHNoYXJlZCBiZXR3ZWVuIHRoZSBidWlsZGVyIGFuZCB0aGUgaW5kZXhcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHBvc3RpbmcgLSBUaGUgcG9zdGluZyBmb3IgYSBnaXZlbiB0ZXJtXG4gKiBAcGFyYW0ge251bWJlcn0gZG9jdW1lbnRDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgZG9jdW1lbnRzLlxuICovXG5sdW5yLmlkZiA9IGZ1bmN0aW9uIChwb3N0aW5nLCBkb2N1bWVudENvdW50KSB7XG4gIHZhciBkb2N1bWVudHNXaXRoVGVybSA9IDBcblxuICBmb3IgKHZhciBmaWVsZE5hbWUgaW4gcG9zdGluZykge1xuICAgIGlmIChmaWVsZE5hbWUgPT0gJ19pbmRleCcpIGNvbnRpbnVlIC8vIElnbm9yZSB0aGUgdGVybSBpbmRleCwgaXRzIG5vdCBhIGZpZWxkXG4gICAgZG9jdW1lbnRzV2l0aFRlcm0gKz0gT2JqZWN0LmtleXMocG9zdGluZ1tmaWVsZE5hbWVdKS5sZW5ndGhcbiAgfVxuXG4gIHZhciB4ID0gKGRvY3VtZW50Q291bnQgLSBkb2N1bWVudHNXaXRoVGVybSArIDAuNSkgLyAoZG9jdW1lbnRzV2l0aFRlcm0gKyAwLjUpXG5cbiAgcmV0dXJuIE1hdGgubG9nKDEgKyBNYXRoLmFicyh4KSlcbn1cblxuLyoqXG4gKiBBIHRva2VuIHdyYXBzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdG9rZW5cbiAqIGFzIGl0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZSB0ZXh0IHByb2Nlc3NpbmcgcGlwZWxpbmUuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cj0nJ10gLSBUaGUgc3RyaW5nIHRva2VuIGJlaW5nIHdyYXBwZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhPXt9XSAtIE1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRva2VuLlxuICovXG5sdW5yLlRva2VuID0gZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAgdGhpcy5zdHIgPSBzdHIgfHwgXCJcIlxuICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGEgfHwge31cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b2tlbiBzdHJpbmcgdGhhdCBpcyBiZWluZyB3cmFwcGVkIGJ5IHRoaXMgb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5zdHJcbn1cblxuLyoqXG4gKiBBIHRva2VuIHVwZGF0ZSBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdXBkYXRpbmcgb3Igb3B0aW9uYWxseVxuICogd2hlbiBjbG9uaW5nIGEgdG9rZW4uXG4gKlxuICogQGNhbGxiYWNrIGx1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXRhZGF0YSAtIEFsbCBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyB0b2tlbi5cbiAqL1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIHRoZSB3cmFwcGVkIHN0cmluZyB0b2tlbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogdG9rZW4udXBkYXRlKGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gKiAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKVxuICogfSlcbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb259IGZuIC0gQSBmdW5jdGlvbiB0byBhcHBseSB0byB0aGUgdG9rZW4gc3RyaW5nLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLnN0ciA9IGZuKHRoaXMuc3RyLCB0aGlzLm1ldGFkYXRhKVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHRva2VuLiBPcHRpb25hbGx5IGEgZnVuY3Rpb24gY2FuIGJlXG4gKiBhcHBsaWVkIHRvIHRoZSBjbG9uZWQgdG9rZW4uXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9ufSBbZm5dIC0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIGNsb25lZCB0b2tlbi5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChmbikge1xuICBmbiA9IGZuIHx8IGZ1bmN0aW9uIChzKSB7IHJldHVybiBzIH1cbiAgcmV0dXJuIG5ldyBsdW5yLlRva2VuIChmbih0aGlzLnN0ciwgdGhpcy5tZXRhZGF0YSksIHRoaXMubWV0YWRhdGEpXG59XG4vKiFcbiAqIGx1bnIudG9rZW5pemVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBzcGxpdHRpbmcgYSBzdHJpbmcgaW50byB0b2tlbnMgcmVhZHkgdG8gYmUgaW5zZXJ0ZWQgaW50b1xuICogdGhlIHNlYXJjaCBpbmRleC4gVXNlcyBgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yYCB0byBzcGxpdCBzdHJpbmdzLCBjaGFuZ2VcbiAqIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IHRvIGNoYW5nZSBob3cgc3RyaW5ncyBhcmUgc3BsaXQgaW50byB0b2tlbnMuXG4gKlxuICogVGhpcyB0b2tlbml6ZXIgd2lsbCBjb252ZXJ0IGl0cyBwYXJhbWV0ZXIgdG8gYSBzdHJpbmcgYnkgY2FsbGluZyBgdG9TdHJpbmdgIGFuZFxuICogdGhlbiB3aWxsIHNwbGl0IHRoaXMgc3RyaW5nIG9uIHRoZSBjaGFyYWN0ZXIgaW4gYGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcmAuXG4gKiBBcnJheXMgd2lsbCBoYXZlIHRoZWlyIGVsZW1lbnRzIGNvbnZlcnRlZCB0byBzdHJpbmdzIGFuZCB3cmFwcGVkIGluIGEgbHVuci5Ub2tlbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gez8oc3RyaW5nfG9iamVjdHxvYmplY3RbXSl9IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCBpbnRvIHRva2Vuc1xuICogQHJldHVybnMge2x1bnIuVG9rZW5bXX1cbiAqL1xubHVuci50b2tlbml6ZXIgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBuZXcgbHVuci5Ub2tlbihsdW5yLnV0aWxzLmFzU3RyaW5nKHQpLnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBzdHIgPSBvYmoudG9TdHJpbmcoKS50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGgsXG4gICAgICB0b2tlbnMgPSBbXVxuXG4gIGZvciAodmFyIHNsaWNlRW5kID0gMCwgc2xpY2VTdGFydCA9IDA7IHNsaWNlRW5kIDw9IGxlbjsgc2xpY2VFbmQrKykge1xuICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChzbGljZUVuZCksXG4gICAgICAgIHNsaWNlTGVuZ3RoID0gc2xpY2VFbmQgLSBzbGljZVN0YXJ0XG5cbiAgICBpZiAoKGNoYXIubWF0Y2gobHVuci50b2tlbml6ZXIuc2VwYXJhdG9yKSB8fCBzbGljZUVuZCA9PSBsZW4pKSB7XG5cbiAgICAgIGlmIChzbGljZUxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9rZW5zLnB1c2goXG4gICAgICAgICAgbmV3IGx1bnIuVG9rZW4gKHN0ci5zbGljZShzbGljZVN0YXJ0LCBzbGljZUVuZCksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbc2xpY2VTdGFydCwgc2xpY2VMZW5ndGhdLFxuICAgICAgICAgICAgaW5kZXg6IHRva2Vucy5sZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHNsaWNlU3RhcnQgPSBzbGljZUVuZCArIDFcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBUaGUgc2VwYXJhdG9yIHVzZWQgdG8gc3BsaXQgYSBzdHJpbmcgaW50byB0b2tlbnMuIE92ZXJyaWRlIHRoaXMgcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBiZWhhdmlvdXIgb2ZcbiAqIGBsdW5yLnRva2VuaXplcmAgYmVoYXZpb3VyIHdoZW4gdG9rZW5pemluZyBzdHJpbmdzLiBCeSBkZWZhdWx0IHRoaXMgc3BsaXRzIG9uIHdoaXRlc3BhY2UgYW5kIGh5cGhlbnMuXG4gKlxuICogQHN0YXRpY1xuICogQHNlZSBsdW5yLnRva2VuaXplclxuICovXG5sdW5yLnRva2VuaXplci5zZXBhcmF0b3IgPSAvW1xcc1xcLV0rL1xuLyohXG4gKiBsdW5yLlBpcGVsaW5lXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLlBpcGVsaW5lcyBtYWludGFpbiBhbiBvcmRlcmVkIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGJlIGFwcGxpZWQgdG8gYWxsXG4gKiB0b2tlbnMgaW4gZG9jdW1lbnRzIGVudGVyaW5nIHRoZSBzZWFyY2ggaW5kZXggYW5kIHF1ZXJpZXMgYmVpbmcgcmFuIGFnYWluc3RcbiAqIHRoZSBpbmRleC5cbiAqXG4gKiBBbiBpbnN0YW5jZSBvZiBsdW5yLkluZGV4IGNyZWF0ZWQgd2l0aCB0aGUgbHVuciBzaG9ydGN1dCB3aWxsIGNvbnRhaW4gYVxuICogcGlwZWxpbmUgd2l0aCBhIHN0b3Agd29yZCBmaWx0ZXIgYW5kIGFuIEVuZ2xpc2ggbGFuZ3VhZ2Ugc3RlbW1lci4gRXh0cmFcbiAqIGZ1bmN0aW9ucyBjYW4gYmUgYWRkZWQgYmVmb3JlIG9yIGFmdGVyIGVpdGhlciBvZiB0aGVzZSBmdW5jdGlvbnMgb3IgdGhlc2VcbiAqIGRlZmF1bHQgZnVuY3Rpb25zIGNhbiBiZSByZW1vdmVkLlxuICpcbiAqIFdoZW4gcnVuIHRoZSBwaXBlbGluZSB3aWxsIGNhbGwgZWFjaCBmdW5jdGlvbiBpbiB0dXJuLCBwYXNzaW5nIGEgdG9rZW4sIHRoZVxuICogaW5kZXggb2YgdGhhdCB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgbGlzdCBvZiBhbGwgdG9rZW5zIGFuZCBmaW5hbGx5IGEgbGlzdCBvZlxuICogYWxsIHRoZSBvcmlnaW5hbCB0b2tlbnMuXG4gKlxuICogVGhlIG91dHB1dCBvZiBmdW5jdGlvbnMgaW4gdGhlIHBpcGVsaW5lIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBuZXh0IGZ1bmN0aW9uXG4gKiBpbiB0aGUgcGlwZWxpbmUuIFRvIGV4Y2x1ZGUgYSB0b2tlbiBmcm9tIGVudGVyaW5nIHRoZSBpbmRleCB0aGUgZnVuY3Rpb25cbiAqIHNob3VsZCByZXR1cm4gdW5kZWZpbmVkLCB0aGUgcmVzdCBvZiB0aGUgcGlwZWxpbmUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGhcbiAqIHRoaXMgdG9rZW4uXG4gKlxuICogRm9yIHNlcmlhbGlzYXRpb24gb2YgcGlwZWxpbmVzIHRvIHdvcmssIGFsbCBmdW5jdGlvbnMgdXNlZCBpbiBhbiBpbnN0YW5jZSBvZlxuICogYSBwaXBlbGluZSBzaG91bGQgYmUgcmVnaXN0ZXJlZCB3aXRoIGx1bnIuUGlwZWxpbmUuIFJlZ2lzdGVyZWQgZnVuY3Rpb25zIGNhblxuICogdGhlbiBiZSBsb2FkZWQuIElmIHRyeWluZyB0byBsb2FkIGEgc2VyaWFsaXNlZCBwaXBlbGluZSB0aGF0IHVzZXMgZnVuY3Rpb25zXG4gKiB0aGF0IGFyZSBub3QgcmVnaXN0ZXJlZCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBJZiBub3QgcGxhbm5pbmcgb24gc2VyaWFsaXNpbmcgdGhlIHBpcGVsaW5lIHRoZW4gcmVnaXN0ZXJpbmcgcGlwZWxpbmUgZnVuY3Rpb25zXG4gKiBpcyBub3QgbmVjZXNzYXJ5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlBpcGVsaW5lID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9zdGFjayA9IFtdXG59XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLyoqXG4gKiBBIHBpcGVsaW5lIGZ1bmN0aW9uIG1hcHMgbHVuci5Ub2tlbiB0byBsdW5yLlRva2VuLiBBIGx1bnIuVG9rZW4gY29udGFpbnMgdGhlIHRva2VuXG4gKiBzdHJpbmcgYXMgd2VsbCBhcyBhbGwga25vd24gbWV0YWRhdGEuIEEgcGlwZWxpbmUgZnVuY3Rpb24gY2FuIG11dGF0ZSB0aGUgdG9rZW4gc3RyaW5nXG4gKiBvciBtdXRhdGUgKG9yIGFkZCkgbWV0YWRhdGEgZm9yIGEgZ2l2ZW4gdG9rZW4uXG4gKlxuICogQSBwaXBlbGluZSBmdW5jdGlvbiBjYW4gaW5kaWNhdGUgdGhhdCB0aGUgcGFzc2VkIHRva2VuIHNob3VsZCBiZSBkaXNjYXJkZWQgYnkgcmV0dXJuaW5nXG4gKiBudWxsLiBUaGlzIHRva2VuIHdpbGwgbm90IGJlIHBhc3NlZCB0byBhbnkgZG93bnN0cmVhbSBwaXBlbGluZSBmdW5jdGlvbnMgYW5kIHdpbGwgbm90IGJlXG4gKiBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogTXVsdGlwbGUgdG9rZW5zIGNhbiBiZSByZXR1cm5lZCBieSByZXR1cm5pbmcgYW4gYXJyYXkgb2YgdG9rZW5zLiBFYWNoIHRva2VuIHdpbGwgYmUgcGFzc2VkXG4gKiB0byBhbnkgZG93bnN0cmVhbSBwaXBlbGluZSBmdW5jdGlvbnMgYW5kIGFsbCB3aWxsIHJldHVybmVkIHRva2VucyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBBbnkgbnVtYmVyIG9mIHBpcGVsaW5lIGZ1bmN0aW9ucyBtYXkgYmUgY2hhaW5lZCB0b2dldGhlciB1c2luZyBhIGx1bnIuUGlwZWxpbmUuXG4gKlxuICogQGludGVyZmFjZSBsdW5yLlBpcGVsaW5lRnVuY3Rpb25cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gLSBBIHRva2VuIGZyb20gdGhlIGRvY3VtZW50IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpIC0gVGhlIGluZGV4IG9mIHRoaXMgdG9rZW4gaW4gdGhlIGNvbXBsZXRlIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGlzIGRvY3VtZW50L2ZpZWxkLlxuICogQHBhcmFtIHtsdW5yLlRva2VuW119IHRva2VucyAtIEFsbCB0b2tlbnMgZm9yIHRoaXMgZG9jdW1lbnQvZmllbGQuXG4gKiBAcmV0dXJucyB7KD9sdW5yLlRva2VufGx1bnIuVG9rZW5bXSl9XG4gKi9cblxuLyoqXG4gKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHdpdGggdGhlIHBpcGVsaW5lLlxuICpcbiAqIEZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGluIHRoZSBwaXBlbGluZSBzaG91bGQgYmUgcmVnaXN0ZXJlZCBpZiB0aGUgcGlwZWxpbmVcbiAqIG5lZWRzIHRvIGJlIHNlcmlhbGlzZWQsIG9yIGEgc2VyaWFsaXNlZCBwaXBlbGluZSBuZWVkcyB0byBiZSBsb2FkZWQuXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBmdW5jdGlvbiBkb2VzIG5vdCBhZGQgaXQgdG8gYSBwaXBlbGluZSwgZnVuY3Rpb25zIG11c3Qgc3RpbGwgYmVcbiAqIGFkZGVkIHRvIGluc3RhbmNlcyBvZiB0aGUgcGlwZWxpbmUgZm9yIHRoZW0gdG8gYmUgdXNlZCB3aGVuIHJ1bm5pbmcgYSBwaXBlbGluZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIC0gVGhlIGxhYmVsIHRvIHJlZ2lzdGVyIHRoaXMgZnVuY3Rpb24gd2l0aFxuICovXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4sIGxhYmVsKSB7XG4gIGlmIChsYWJlbCBpbiB0aGlzLnJlZ2lzdGVyZWRGdW5jdGlvbnMpIHtcbiAgICBsdW5yLnV0aWxzLndhcm4oJ092ZXJ3cml0aW5nIGV4aXN0aW5nIHJlZ2lzdGVyZWQgZnVuY3Rpb246ICcgKyBsYWJlbClcbiAgfVxuXG4gIGZuLmxhYmVsID0gbGFiZWxcbiAgbHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zW2ZuLmxhYmVsXSA9IGZuXG59XG5cbi8qKlxuICogV2FybnMgaWYgdGhlIGZ1bmN0aW9uIGlzIG5vdCByZWdpc3RlcmVkIGFzIGEgUGlwZWxpbmUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvci5cbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBpc1JlZ2lzdGVyZWQgPSBmbi5sYWJlbCAmJiAoZm4ubGFiZWwgaW4gdGhpcy5yZWdpc3RlcmVkRnVuY3Rpb25zKVxuXG4gIGlmICghaXNSZWdpc3RlcmVkKSB7XG4gICAgbHVuci51dGlscy53YXJuKCdGdW5jdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIHBpcGVsaW5lLiBUaGlzIG1heSBjYXVzZSBwcm9ibGVtcyB3aGVuIHNlcmlhbGlzaW5nIHRoZSBpbmRleC5cXG4nLCBmbilcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgcHJldmlvdXNseSBzZXJpYWxpc2VkIHBpcGVsaW5lLlxuICpcbiAqIEFsbCBmdW5jdGlvbnMgdG8gYmUgbG9hZGVkIG11c3QgYWxyZWFkeSBiZSByZWdpc3RlcmVkIHdpdGggbHVuci5QaXBlbGluZS5cbiAqIElmIGFueSBmdW5jdGlvbiBmcm9tIHRoZSBzZXJpYWxpc2VkIGRhdGEgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgdGhlbiBhblxuICogZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNlcmlhbGlzZWQgLSBUaGUgc2VyaWFsaXNlZCBwaXBlbGluZSB0byBsb2FkLlxuICogQHJldHVybnMge2x1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIuUGlwZWxpbmUubG9hZCA9IGZ1bmN0aW9uIChzZXJpYWxpc2VkKSB7XG4gIHZhciBwaXBlbGluZSA9IG5ldyBsdW5yLlBpcGVsaW5lXG5cbiAgc2VyaWFsaXNlZC5mb3JFYWNoKGZ1bmN0aW9uIChmbk5hbWUpIHtcbiAgICB2YXIgZm4gPSBsdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnNbZm5OYW1lXVxuXG4gICAgaWYgKGZuKSB7XG4gICAgICBwaXBlbGluZS5hZGQoZm4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGxvYWQgdW5yZWdpc3RlcmVkIGZ1bmN0aW9uOiAnICsgZm5OYW1lKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcGlwZWxpbmVcbn1cblxuLyoqXG4gKiBBZGRzIG5ldyBmdW5jdGlvbnMgdG8gdGhlIGVuZCBvZiB0aGUgcGlwZWxpbmUuXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9uW119IGZ1bmN0aW9ucyAtIEFueSBudW1iZXIgb2YgZnVuY3Rpb25zIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcblxuICBmbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChmbilcbiAgICB0aGlzLl9zdGFjay5wdXNoKGZuKVxuICB9LCB0aGlzKVxufVxuXG4vKipcbiAqIEFkZHMgYSBzaW5nbGUgZnVuY3Rpb24gYWZ0ZXIgYSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZVxuICogcGlwZWxpbmUuXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBleGlzdGluZ0ZuIC0gQSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBwaXBlbGluZS5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBuZXdGbiAtIFRoZSBuZXcgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAoZXhpc3RpbmdGbiwgbmV3Rm4pIHtcbiAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQobmV3Rm4pXG5cbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZXhpc3RpbmdGbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZXhpc3RpbmdGbicpXG4gIH1cblxuICBwb3MgPSBwb3MgKyAxXG4gIHRoaXMuX3N0YWNrLnNwbGljZShwb3MsIDAsIG5ld0ZuKVxufVxuXG4vKipcbiAqIEFkZHMgYSBzaW5nbGUgZnVuY3Rpb24gYmVmb3JlIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAqIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZXhpc3RpbmdGbiAtIEEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gbmV3Rm4gLSBUaGUgbmV3IGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uIChleGlzdGluZ0ZuLCBuZXdGbikge1xuICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChuZXdGbilcblxuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihleGlzdGluZ0ZuKVxuICBpZiAocG9zID09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBleGlzdGluZ0ZuJylcbiAgfVxuXG4gIHRoaXMuX3N0YWNrLnNwbGljZShwb3MsIDAsIG5ld0ZuKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYSBmdW5jdGlvbiBmcm9tIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJlbW92ZSBmcm9tIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGZuKVxuICBpZiAocG9zID09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAxKVxufVxuXG4vKipcbiAqIFJ1bnMgdGhlIGN1cnJlbnQgbGlzdCBvZiBmdW5jdGlvbnMgdGhhdCBtYWtlIHVwIHRoZSBwaXBlbGluZSBhZ2FpbnN0IHRoZVxuICogcGFzc2VkIHRva2Vucy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB0b2tlbnMgVGhlIHRva2VucyB0byBydW4gdGhyb3VnaCB0aGUgcGlwZWxpbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgdmFyIHN0YWNrTGVuZ3RoID0gdGhpcy5fc3RhY2subGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFja0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZuID0gdGhpcy5fc3RhY2tbaV1cblxuICAgIHRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIHRva2VuLCBqKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZm4odG9rZW4sIGosIHRva2VucylcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwIHx8IHJlc3VsdCA9PT0gJycpIHJldHVybiBtZW1vXG5cbiAgICAgIHJldHVybiBtZW1vLmNvbmNhdChyZXN1bHQpXG4gICAgfSwgW10pXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBwYXNzaW5nIGEgc3RyaW5nIHRocm91Z2ggYSBwaXBlbGluZSBhbmQgZ2V0dGluZ1xuICogc3RyaW5ncyBvdXQuIFRoaXMgbWV0aG9kIHRha2VzIGNhcmUgb2Ygd3JhcHBpbmcgdGhlIHBhc3NlZCBzdHJpbmcgaW4gYVxuICogdG9rZW4gYW5kIG1hcHBpbmcgdGhlIHJlc3VsdGluZyB0b2tlbnMgYmFjayB0byBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHBhc3MgdGhyb3VnaCB0aGUgcGlwZWxpbmUuXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJ1blN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIHRva2VuID0gbmV3IGx1bnIuVG9rZW4gKHN0cilcblxuICByZXR1cm4gdGhpcy5ydW4oW3Rva2VuXSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQudG9TdHJpbmcoKVxuICB9KVxufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgcGlwZWxpbmUgYnkgcmVtb3ZpbmcgYW55IGV4aXN0aW5nIHByb2Nlc3NvcnMuXG4gKlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGlwZWxpbmUgcmVhZHkgZm9yIHNlcmlhbGlzYXRpb24uXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fc3RhY2subWFwKGZ1bmN0aW9uIChmbikge1xuICAgIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKGZuKVxuXG4gICAgcmV0dXJuIGZuLmxhYmVsXG4gIH0pXG59XG4vKiFcbiAqIGx1bnIuVmVjdG9yXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHZlY3RvciBpcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgdmVjdG9yIHNwYWNlIG9mIGRvY3VtZW50cyBhbmQgcXVlcmllcy4gVGhlc2VcbiAqIHZlY3RvcnMgc3VwcG9ydCBvcGVyYXRpb25zIHRvIGRldGVybWluZSB0aGUgc2ltaWxhcml0eSBiZXR3ZWVuIHR3byBkb2N1bWVudHMgb3JcbiAqIGEgZG9jdW1lbnQgYW5kIGEgcXVlcnkuXG4gKlxuICogTm9ybWFsbHkgbm8gcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQgZm9yIGluaXRpYWxpemluZyBhIHZlY3RvciwgYnV0IGluIHRoZSBjYXNlIG9mXG4gKiBsb2FkaW5nIGEgcHJldmlvdXNseSBkdW1wZWQgdmVjdG9yIHRoZSByYXcgZWxlbWVudHMgY2FuIGJlIHByb3ZpZGVkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucyB2ZWN0b3JzIGFyZSBpbXBsZW1lbnRlZCB3aXRoIGEgZmxhdCBhcnJheSwgd2hlcmUgYW4gZWxlbWVudHNcbiAqIGluZGV4IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGl0cyB2YWx1ZS4gRS5nLiBbaW5kZXgsIHZhbHVlLCBpbmRleCwgdmFsdWVdLiBUaGlzXG4gKiBhbGxvd3MgdGhlIHVuZGVybHlpbmcgYXJyYXkgdG8gYmUgYXMgc3BhcnNlIGFzIHBvc3NpYmxlIGFuZCBzdGlsbCBvZmZlciBkZWNlbnRcbiAqIHBlcmZvcm1hbmNlIHdoZW4gYmVpbmcgdXNlZCBmb3IgdmVjdG9yIGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyW119IFtlbGVtZW50c10gLSBUaGUgZmxhdCBsaXN0IG9mIGVsZW1lbnQgaW5kZXggYW5kIGVsZW1lbnQgdmFsdWUgcGFpcnMuXG4gKi9cbmx1bnIuVmVjdG9yID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gIHRoaXMuX21hZ25pdHVkZSA9IDBcbiAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzIHx8IFtdXG59XG5cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBwb3NpdGlvbiB3aXRoaW4gdGhlIHZlY3RvciB0byBpbnNlcnQgYSBnaXZlbiBpbmRleC5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBieSBpbnNlcnQgYW5kIHVwc2VydC4gSWYgdGhlcmUgYXJlIGR1cGxpY2F0ZSBpbmRleGVzIHRoZW5cbiAqIHRoZSBwb3NpdGlvbiBpcyByZXR1cm5lZCBhcyBpZiB0aGUgdmFsdWUgZm9yIHRoYXQgaW5kZXggd2VyZSB0byBiZSB1cGRhdGVkLCBidXQgaXRcbiAqIGlzIHRoZSBjYWxsZXJzIHJlc3BvbnNpYmlsaXR5IHRvIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYSBkdXBsaWNhdGUgYXQgdGhhdCBpbmRleFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnBvc2l0aW9uRm9ySW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgLy8gRm9yIGFuIGVtcHR5IHZlY3RvciB0aGUgdHVwbGUgY2FuIGJlIGluc2VydGVkIGF0IHRoZSBiZWdpbm5pbmdcbiAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgdmFyIHN0YXJ0ID0gMCxcbiAgICAgIGVuZCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoIC8gMixcbiAgICAgIHNsaWNlTGVuZ3RoID0gZW5kIC0gc3RhcnQsXG4gICAgICBwaXZvdFBvaW50ID0gTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpLFxuICAgICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG5cbiAgd2hpbGUgKHNsaWNlTGVuZ3RoID4gMSkge1xuICAgIGlmIChwaXZvdEluZGV4IDwgaW5kZXgpIHtcbiAgICAgIHN0YXJ0ID0gcGl2b3RQb2ludFxuICAgIH1cblxuICAgIGlmIChwaXZvdEluZGV4ID4gaW5kZXgpIHtcbiAgICAgIGVuZCA9IHBpdm90UG9pbnRcbiAgICB9XG5cbiAgICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzbGljZUxlbmd0aCA9IGVuZCAtIHN0YXJ0XG4gICAgcGl2b3RQb2ludCA9IHN0YXJ0ICsgTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpXG4gICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPiBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPCBpbmRleCkge1xuICAgIHJldHVybiAocGl2b3RQb2ludCArIDEpICogMlxuICB9XG59XG5cbi8qKlxuICogSW5zZXJ0cyBhbiBlbGVtZW50IGF0IGFuIGluZGV4IHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIERvZXMgbm90IGFsbG93IGR1cGxpY2F0ZXMsIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBlbnRyeVxuICogZm9yIHRoaXMgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbnNlcnRJZHgsIHZhbCkge1xuICB0aGlzLnVwc2VydChpbnNlcnRJZHgsIHZhbCwgZnVuY3Rpb24gKCkge1xuICAgIHRocm93IFwiZHVwbGljYXRlIGluZGV4XCJcbiAgfSlcbn1cblxuLyoqXG4gKiBJbnNlcnRzIG9yIHVwZGF0ZXMgYW4gZXhpc3RpbmcgaW5kZXggd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBmb3IgdXBkYXRlcywgdGhlIGV4aXN0aW5nIHZhbHVlIGFuZCB0aGVcbiAqIHJlcXVlc3RlZCB2YWx1ZSBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50c1xuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudXBzZXJ0ID0gZnVuY3Rpb24gKGluc2VydElkeCwgdmFsLCBmbikge1xuICB0aGlzLl9tYWduaXR1ZGUgPSAwXG4gIHZhciBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25Gb3JJbmRleChpbnNlcnRJZHgpXG5cbiAgaWYgKHRoaXMuZWxlbWVudHNbcG9zaXRpb25dID09IGluc2VydElkeCkge1xuICAgIHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSA9IGZuKHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSwgdmFsKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAwLCBpbnNlcnRJZHgsIHZhbClcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGlzIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fbWFnbml0dWRlKSByZXR1cm4gdGhpcy5fbWFnbml0dWRlXG5cbiAgdmFyIHN1bU9mU3F1YXJlcyA9IDAsXG4gICAgICBlbGVtZW50c0xlbmd0aCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBlbGVtZW50c0xlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuZWxlbWVudHNbaV1cbiAgICBzdW1PZlNxdWFyZXMgKz0gdmFsICogdmFsXG4gIH1cblxuICByZXR1cm4gdGhpcy5fbWFnbml0dWRlID0gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcylcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgdmVjdG9yIHRvIGNvbXB1dGUgdGhlIGRvdCBwcm9kdWN0IHdpdGguXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHZhciBkb3RQcm9kdWN0ID0gMCxcbiAgICAgIGEgPSB0aGlzLmVsZW1lbnRzLCBiID0gb3RoZXJWZWN0b3IuZWxlbWVudHMsXG4gICAgICBhTGVuID0gYS5sZW5ndGgsIGJMZW4gPSBiLmxlbmd0aCxcbiAgICAgIGFWYWwgPSAwLCBiVmFsID0gMCxcbiAgICAgIGkgPSAwLCBqID0gMFxuXG4gIHdoaWxlIChpIDwgYUxlbiAmJiBqIDwgYkxlbikge1xuICAgIGFWYWwgPSBhW2ldLCBiVmFsID0gYltqXVxuICAgIGlmIChhVmFsIDwgYlZhbCkge1xuICAgICAgaSArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID4gYlZhbCkge1xuICAgICAgaiArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID09IGJWYWwpIHtcbiAgICAgIGRvdFByb2R1Y3QgKz0gYVtpICsgMV0gKiBiW2ogKyAxXVxuICAgICAgaSArPSAyXG4gICAgICBqICs9IDJcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG90UHJvZHVjdFxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvc2luZSBzaW1pbGFyaXR5IGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAqIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVmVjdG9yfSBvdGhlclZlY3RvciAtIFRoZSBvdGhlciB2ZWN0b3IgdG8gY2FsY3VsYXRlIHRoZVxuICogc2ltaWxhcml0eSB3aXRoLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnNpbWlsYXJpdHkgPSBmdW5jdGlvbiAob3RoZXJWZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMuZG90KG90aGVyVmVjdG9yKSAvICh0aGlzLm1hZ25pdHVkZSgpICogb3RoZXJWZWN0b3IubWFnbml0dWRlKCkpXG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHZlY3RvciB0byBhbiBhcnJheSBvZiB0aGUgZWxlbWVudHMgd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcltdfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dHB1dCA9IG5ldyBBcnJheSAodGhpcy5lbGVtZW50cy5sZW5ndGggLyAyKVxuXG4gIGZvciAodmFyIGkgPSAxLCBqID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpICs9IDIsIGorKykge1xuICAgIG91dHB1dFtqXSA9IHRoaXMuZWxlbWVudHNbaV1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuLyoqXG4gKiBBIEpTT04gc2VyaWFsaXphYmxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcltdfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5lbGVtZW50c1xufVxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIVxuICogbHVuci5zdGVtbWVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKiBJbmNsdWRlcyBjb2RlIGZyb20gLSBodHRwOi8vdGFydGFydXMub3JnL35tYXJ0aW4vUG9ydGVyU3RlbW1lci9qcy50eHRcbiAqL1xuXG4vKipcbiAqIGx1bnIuc3RlbW1lciBpcyBhbiBlbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIsIHRoaXMgaXMgYSBKYXZhU2NyaXB0XG4gKiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUG9ydGVyU3RlbW1lciB0YWtlbiBmcm9tIGh0dHA6Ly90YXJ0YXJ1cy5vcmcvfm1hcnRpblxuICpcbiAqIEBzdGF0aWNcbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gVGhlIHN0cmluZyB0byBzdGVtXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIuc3RlbW1lciA9IChmdW5jdGlvbigpe1xuICB2YXIgc3RlcDJsaXN0ID0ge1xuICAgICAgXCJhdGlvbmFsXCIgOiBcImF0ZVwiLFxuICAgICAgXCJ0aW9uYWxcIiA6IFwidGlvblwiLFxuICAgICAgXCJlbmNpXCIgOiBcImVuY2VcIixcbiAgICAgIFwiYW5jaVwiIDogXCJhbmNlXCIsXG4gICAgICBcIml6ZXJcIiA6IFwiaXplXCIsXG4gICAgICBcImJsaVwiIDogXCJibGVcIixcbiAgICAgIFwiYWxsaVwiIDogXCJhbFwiLFxuICAgICAgXCJlbnRsaVwiIDogXCJlbnRcIixcbiAgICAgIFwiZWxpXCIgOiBcImVcIixcbiAgICAgIFwib3VzbGlcIiA6IFwib3VzXCIsXG4gICAgICBcIml6YXRpb25cIiA6IFwiaXplXCIsXG4gICAgICBcImF0aW9uXCIgOiBcImF0ZVwiLFxuICAgICAgXCJhdG9yXCIgOiBcImF0ZVwiLFxuICAgICAgXCJhbGlzbVwiIDogXCJhbFwiLFxuICAgICAgXCJpdmVuZXNzXCIgOiBcIml2ZVwiLFxuICAgICAgXCJmdWxuZXNzXCIgOiBcImZ1bFwiLFxuICAgICAgXCJvdXNuZXNzXCIgOiBcIm91c1wiLFxuICAgICAgXCJhbGl0aVwiIDogXCJhbFwiLFxuICAgICAgXCJpdml0aVwiIDogXCJpdmVcIixcbiAgICAgIFwiYmlsaXRpXCIgOiBcImJsZVwiLFxuICAgICAgXCJsb2dpXCIgOiBcImxvZ1wiXG4gICAgfSxcblxuICAgIHN0ZXAzbGlzdCA9IHtcbiAgICAgIFwiaWNhdGVcIiA6IFwiaWNcIixcbiAgICAgIFwiYXRpdmVcIiA6IFwiXCIsXG4gICAgICBcImFsaXplXCIgOiBcImFsXCIsXG4gICAgICBcImljaXRpXCIgOiBcImljXCIsXG4gICAgICBcImljYWxcIiA6IFwiaWNcIixcbiAgICAgIFwiZnVsXCIgOiBcIlwiLFxuICAgICAgXCJuZXNzXCIgOiBcIlwiXG4gICAgfSxcblxuICAgIGMgPSBcIlteYWVpb3VdXCIsICAgICAgICAgIC8vIGNvbnNvbmFudFxuICAgIHYgPSBcIlthZWlvdXldXCIsICAgICAgICAgIC8vIHZvd2VsXG4gICAgQyA9IGMgKyBcIlteYWVpb3V5XSpcIiwgICAgLy8gY29uc29uYW50IHNlcXVlbmNlXG4gICAgViA9IHYgKyBcIlthZWlvdV0qXCIsICAgICAgLy8gdm93ZWwgc2VxdWVuY2VcblxuICAgIG1ncjAgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMsICAgICAgICAgICAgICAgLy8gW0NdVkMuLi4gaXMgbT4wXG4gICAgbWVxMSA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQyArIFwiKFwiICsgViArIFwiKT8kXCIsICAvLyBbQ11WQ1tWXSBpcyBtPTFcbiAgICBtZ3IxID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDICsgViArIEMsICAgICAgIC8vIFtDXVZDVkMuLi4gaXMgbT4xXG4gICAgc192ID0gXCJeKFwiICsgQyArIFwiKT9cIiArIHY7ICAgICAgICAgICAgICAgICAgIC8vIHZvd2VsIGluIHN0ZW1cblxuICB2YXIgcmVfbWdyMCA9IG5ldyBSZWdFeHAobWdyMCk7XG4gIHZhciByZV9tZ3IxID0gbmV3IFJlZ0V4cChtZ3IxKTtcbiAgdmFyIHJlX21lcTEgPSBuZXcgUmVnRXhwKG1lcTEpO1xuICB2YXIgcmVfc192ID0gbmV3IFJlZ0V4cChzX3YpO1xuXG4gIHZhciByZV8xYSA9IC9eKC4rPykoc3N8aSllcyQvO1xuICB2YXIgcmUyXzFhID0gL14oLis/KShbXnNdKXMkLztcbiAgdmFyIHJlXzFiID0gL14oLis/KWVlZCQvO1xuICB2YXIgcmUyXzFiID0gL14oLis/KShlZHxpbmcpJC87XG4gIHZhciByZV8xYl8yID0gLy4kLztcbiAgdmFyIHJlMl8xYl8yID0gLyhhdHxibHxpeikkLztcbiAgdmFyIHJlM18xYl8yID0gbmV3IFJlZ0V4cChcIihbXmFlaW91eWxzel0pXFxcXDEkXCIpO1xuICB2YXIgcmU0XzFiXzIgPSBuZXcgUmVnRXhwKFwiXlwiICsgQyArIHYgKyBcIlteYWVpb3V3eHldJFwiKTtcblxuICB2YXIgcmVfMWMgPSAvXiguKz9bXmFlaW91XSl5JC87XG4gIHZhciByZV8yID0gL14oLis/KShhdGlvbmFsfHRpb25hbHxlbmNpfGFuY2l8aXplcnxibGl8YWxsaXxlbnRsaXxlbGl8b3VzbGl8aXphdGlvbnxhdGlvbnxhdG9yfGFsaXNtfGl2ZW5lc3N8ZnVsbmVzc3xvdXNuZXNzfGFsaXRpfGl2aXRpfGJpbGl0aXxsb2dpKSQvO1xuXG4gIHZhciByZV8zID0gL14oLis/KShpY2F0ZXxhdGl2ZXxhbGl6ZXxpY2l0aXxpY2FsfGZ1bHxuZXNzKSQvO1xuXG4gIHZhciByZV80ID0gL14oLis/KShhbHxhbmNlfGVuY2V8ZXJ8aWN8YWJsZXxpYmxlfGFudHxlbWVudHxtZW50fGVudHxvdXxpc218YXRlfGl0aXxvdXN8aXZlfGl6ZSkkLztcbiAgdmFyIHJlMl80ID0gL14oLis/KShzfHQpKGlvbikkLztcblxuICB2YXIgcmVfNSA9IC9eKC4rPyllJC87XG4gIHZhciByZV81XzEgPSAvbGwkLztcbiAgdmFyIHJlM181ID0gbmV3IFJlZ0V4cChcIl5cIiArIEMgKyB2ICsgXCJbXmFlaW91d3h5XSRcIik7XG5cbiAgdmFyIHBvcnRlclN0ZW1tZXIgPSBmdW5jdGlvbiBwb3J0ZXJTdGVtbWVyKHcpIHtcbiAgICB2YXIgc3RlbSxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIGZpcnN0Y2gsXG4gICAgICByZSxcbiAgICAgIHJlMixcbiAgICAgIHJlMyxcbiAgICAgIHJlNDtcblxuICAgIGlmICh3Lmxlbmd0aCA8IDMpIHsgcmV0dXJuIHc7IH1cblxuICAgIGZpcnN0Y2ggPSB3LnN1YnN0cigwLDEpO1xuICAgIGlmIChmaXJzdGNoID09IFwieVwiKSB7XG4gICAgICB3ID0gZmlyc3RjaC50b1VwcGVyQ2FzZSgpICsgdy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgLy8gU3RlcCAxYVxuICAgIHJlID0gcmVfMWFcbiAgICByZTIgPSByZTJfMWE7XG5cbiAgICBpZiAocmUudGVzdCh3KSkgeyB3ID0gdy5yZXBsYWNlKHJlLFwiJDEkMlwiKTsgfVxuICAgIGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7IHcgPSB3LnJlcGxhY2UocmUyLFwiJDEkMlwiKTsgfVxuXG4gICAgLy8gU3RlcCAxYlxuICAgIHJlID0gcmVfMWI7XG4gICAgcmUyID0gcmUyXzFiO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3QoZnBbMV0pKSB7XG4gICAgICAgIHJlID0gcmVfMWJfMjtcbiAgICAgICAgdyA9IHcucmVwbGFjZShyZSxcIlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZTIuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlMiA9IHJlX3NfdjtcbiAgICAgIGlmIChyZTIudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgICAgcmUyID0gcmUyXzFiXzI7XG4gICAgICAgIHJlMyA9IHJlM18xYl8yO1xuICAgICAgICByZTQgPSByZTRfMWJfMjtcbiAgICAgICAgaWYgKHJlMi50ZXN0KHcpKSB7IHcgPSB3ICsgXCJlXCI7IH1cbiAgICAgICAgZWxzZSBpZiAocmUzLnRlc3QodykpIHsgcmUgPSByZV8xYl8yOyB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlNC50ZXN0KHcpKSB7IHcgPSB3ICsgXCJlXCI7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDFjIC0gcmVwbGFjZSBzdWZmaXggeSBvciBZIGJ5IGkgaWYgcHJlY2VkZWQgYnkgYSBub24tdm93ZWwgd2hpY2ggaXMgbm90IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHdvcmQgKHNvIGNyeSAtPiBjcmksIGJ5IC0+IGJ5LCBzYXkgLT4gc2F5KVxuICAgIHJlID0gcmVfMWM7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICB3ID0gc3RlbSArIFwiaVwiO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMlxuICAgIHJlID0gcmVfMjtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHN1ZmZpeCA9IGZwWzJdO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW0gKyBzdGVwMmxpc3Rbc3VmZml4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDNcbiAgICByZSA9IHJlXzM7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICBzdWZmaXggPSBmcFsyXTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtICsgc3RlcDNsaXN0W3N1ZmZpeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCA0XG4gICAgcmUgPSByZV80O1xuICAgIHJlMiA9IHJlMl80O1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUgPSByZV9tZ3IxO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZTIudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUyLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV0gKyBmcFsyXTtcbiAgICAgIHJlMiA9IHJlX21ncjE7XG4gICAgICBpZiAocmUyLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCA1XG4gICAgcmUgPSByZV81O1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUgPSByZV9tZ3IxO1xuICAgICAgcmUyID0gcmVfbWVxMTtcbiAgICAgIHJlMyA9IHJlM181O1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkgfHwgKHJlMi50ZXN0KHN0ZW0pICYmICEocmUzLnRlc3Qoc3RlbSkpKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZSA9IHJlXzVfMTtcbiAgICByZTIgPSByZV9tZ3IxO1xuICAgIGlmIChyZS50ZXN0KHcpICYmIHJlMi50ZXN0KHcpKSB7XG4gICAgICByZSA9IHJlXzFiXzI7XG4gICAgICB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpO1xuICAgIH1cblxuICAgIC8vIGFuZCB0dXJuIGluaXRpYWwgWSBiYWNrIHRvIHlcblxuICAgIGlmIChmaXJzdGNoID09IFwieVwiKSB7XG4gICAgICB3ID0gZmlyc3RjaC50b0xvd2VyQ2FzZSgpICsgdy5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHc7XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbi51cGRhdGUocG9ydGVyU3RlbW1lcik7XG4gIH1cbn0pKCk7XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnN0ZW1tZXIsICdzdGVtbWVyJylcbi8qIVxuICogbHVuci5zdG9wV29yZEZpbHRlclxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyIGJ1aWxkcyBhIHN0b3BXb3JkRmlsdGVyIGZ1bmN0aW9uIGZyb20gdGhlIHByb3ZpZGVkXG4gKiBsaXN0IG9mIHN0b3Agd29yZHMuXG4gKlxuICogVGhlIGJ1aWx0IGluIGx1bnIuc3RvcFdvcmRGaWx0ZXIgaXMgYnVpbHQgdXNpbmcgdGhpcyBnZW5lcmF0b3IgYW5kIGNhbiBiZSB1c2VkXG4gKiB0byBnZW5lcmF0ZSBjdXN0b20gc3RvcFdvcmRGaWx0ZXJzIGZvciBhcHBsaWNhdGlvbnMgb3Igbm9uIEVuZ2xpc2ggbGFuZ3VhZ2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHRva2VuIFRoZSB0b2tlbiB0byBwYXNzIHRocm91Z2ggdGhlIGZpbHRlclxuICogQHJldHVybnMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBzZWUgbHVuci5QaXBlbGluZVxuICogQHNlZSBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gKi9cbmx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciA9IGZ1bmN0aW9uIChzdG9wV29yZHMpIHtcbiAgdmFyIHdvcmRzID0gc3RvcFdvcmRzLnJlZHVjZShmdW5jdGlvbiAobWVtbywgc3RvcFdvcmQpIHtcbiAgICBtZW1vW3N0b3BXb3JkXSA9IHN0b3BXb3JkXG4gICAgcmV0dXJuIG1lbW9cbiAgfSwge30pXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmICh0b2tlbiAmJiB3b3Jkc1t0b2tlbi50b1N0cmluZygpXSAhPT0gdG9rZW4udG9TdHJpbmcoKSkgcmV0dXJuIHRva2VuXG4gIH1cbn1cblxuLyoqXG4gKiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGFuIEVuZ2xpc2ggbGFuZ3VhZ2Ugc3RvcCB3b3JkIGxpc3QgZmlsdGVyLCBhbnkgd29yZHNcbiAqIGNvbnRhaW5lZCBpbiB0aGUgbGlzdCB3aWxsIG5vdCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgZmlsdGVyLlxuICpcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGUgUGlwZWxpbmUuIElmIHRoZSB0b2tlbiBkb2VzIG5vdCBwYXNzIHRoZVxuICogZmlsdGVyIHRoZW4gdW5kZWZpbmVkIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbXMge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiB0byBjaGVjayBmb3IgYmVpbmcgYSBzdG9wIHdvcmQuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIuc3RvcFdvcmRGaWx0ZXIgPSBsdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIoW1xuICAnYScsXG4gICdhYmxlJyxcbiAgJ2Fib3V0JyxcbiAgJ2Fjcm9zcycsXG4gICdhZnRlcicsXG4gICdhbGwnLFxuICAnYWxtb3N0JyxcbiAgJ2Fsc28nLFxuICAnYW0nLFxuICAnYW1vbmcnLFxuICAnYW4nLFxuICAnYW5kJyxcbiAgJ2FueScsXG4gICdhcmUnLFxuICAnYXMnLFxuICAnYXQnLFxuICAnYmUnLFxuICAnYmVjYXVzZScsXG4gICdiZWVuJyxcbiAgJ2J1dCcsXG4gICdieScsXG4gICdjYW4nLFxuICAnY2Fubm90JyxcbiAgJ2NvdWxkJyxcbiAgJ2RlYXInLFxuICAnZGlkJyxcbiAgJ2RvJyxcbiAgJ2RvZXMnLFxuICAnZWl0aGVyJyxcbiAgJ2Vsc2UnLFxuICAnZXZlcicsXG4gICdldmVyeScsXG4gICdmb3InLFxuICAnZnJvbScsXG4gICdnZXQnLFxuICAnZ290JyxcbiAgJ2hhZCcsXG4gICdoYXMnLFxuICAnaGF2ZScsXG4gICdoZScsXG4gICdoZXInLFxuICAnaGVycycsXG4gICdoaW0nLFxuICAnaGlzJyxcbiAgJ2hvdycsXG4gICdob3dldmVyJyxcbiAgJ2knLFxuICAnaWYnLFxuICAnaW4nLFxuICAnaW50bycsXG4gICdpcycsXG4gICdpdCcsXG4gICdpdHMnLFxuICAnanVzdCcsXG4gICdsZWFzdCcsXG4gICdsZXQnLFxuICAnbGlrZScsXG4gICdsaWtlbHknLFxuICAnbWF5JyxcbiAgJ21lJyxcbiAgJ21pZ2h0JyxcbiAgJ21vc3QnLFxuICAnbXVzdCcsXG4gICdteScsXG4gICduZWl0aGVyJyxcbiAgJ25vJyxcbiAgJ25vcicsXG4gICdub3QnLFxuICAnb2YnLFxuICAnb2ZmJyxcbiAgJ29mdGVuJyxcbiAgJ29uJyxcbiAgJ29ubHknLFxuICAnb3InLFxuICAnb3RoZXInLFxuICAnb3VyJyxcbiAgJ293bicsXG4gICdyYXRoZXInLFxuICAnc2FpZCcsXG4gICdzYXknLFxuICAnc2F5cycsXG4gICdzaGUnLFxuICAnc2hvdWxkJyxcbiAgJ3NpbmNlJyxcbiAgJ3NvJyxcbiAgJ3NvbWUnLFxuICAndGhhbicsXG4gICd0aGF0JyxcbiAgJ3RoZScsXG4gICd0aGVpcicsXG4gICd0aGVtJyxcbiAgJ3RoZW4nLFxuICAndGhlcmUnLFxuICAndGhlc2UnLFxuICAndGhleScsXG4gICd0aGlzJyxcbiAgJ3RpcycsXG4gICd0bycsXG4gICd0b28nLFxuICAndHdhcycsXG4gICd1cycsXG4gICd3YW50cycsXG4gICd3YXMnLFxuICAnd2UnLFxuICAnd2VyZScsXG4gICd3aGF0JyxcbiAgJ3doZW4nLFxuICAnd2hlcmUnLFxuICAnd2hpY2gnLFxuICAnd2hpbGUnLFxuICAnd2hvJyxcbiAgJ3dob20nLFxuICAnd2h5JyxcbiAgJ3dpbGwnLFxuICAnd2l0aCcsXG4gICd3b3VsZCcsXG4gICd5ZXQnLFxuICAneW91JyxcbiAgJ3lvdXInXG5dKVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci5zdG9wV29yZEZpbHRlciwgJ3N0b3BXb3JkRmlsdGVyJylcbi8qIVxuICogbHVuci50cmltbWVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLnRyaW1tZXIgaXMgYSBwaXBlbGluZSBmdW5jdGlvbiBmb3IgdHJpbW1pbmcgbm9uIHdvcmRcbiAqIGNoYXJhY3RlcnMgZnJvbSB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdG9rZW5zIGJlZm9yZSB0aGV5XG4gKiBlbnRlciB0aGUgaW5kZXguXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtYXkgbm90IHdvcmsgY29ycmVjdGx5IGZvciBub24gbGF0aW5cbiAqIGNoYXJhY3RlcnMgYW5kIHNob3VsZCBlaXRoZXIgYmUgcmVtb3ZlZCBvciBhZGFwdGVkIGZvciB1c2VcbiAqIHdpdGggbGFuZ3VhZ2VzIHdpdGggbm9uLWxhdGluIGNoYXJhY3RlcnMuXG4gKlxuICogQHN0YXRpY1xuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gVGhlIHRva2VuIHRvIHBhc3MgdGhyb3VnaCB0aGUgZmlsdGVyXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUgbHVuci5QaXBlbGluZVxuICovXG5sdW5yLnRyaW1tZXIgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnVwZGF0ZShmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXFcrLywgJycpLnJlcGxhY2UoL1xcVyskLywgJycpXG4gIH0pXG59XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnRyaW1tZXIsICd0cmltbWVyJylcbi8qIVxuICogbHVuci5Ub2tlblNldFxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSB0b2tlbiBzZXQgaXMgdXNlZCB0byBzdG9yZSB0aGUgdW5pcXVlIGxpc3Qgb2YgYWxsIHRva2Vuc1xuICogd2l0aGluIGFuIGluZGV4LiBUb2tlbiBzZXRzIGFyZSBhbHNvIHVzZWQgdG8gcmVwcmVzZW50IGFuXG4gKiBpbmNvbWluZyBxdWVyeSB0byB0aGUgaW5kZXgsIHRoaXMgcXVlcnkgdG9rZW4gc2V0IGFuZCBpbmRleFxuICogdG9rZW4gc2V0IGFyZSB0aGVuIGludGVyc2VjdGVkIHRvIGZpbmQgd2hpY2ggdG9rZW5zIHRvIGxvb2tcbiAqIHVwIGluIHRoZSBpbnZlcnRlZCBpbmRleC5cbiAqXG4gKiBBIHRva2VuIHNldCBjYW4gaG9sZCBtdWx0aXBsZSB0b2tlbnMsIGFzIGluIHRoZSBjYXNlIG9mIHRoZVxuICogaW5kZXggdG9rZW4gc2V0LCBvciBpdCBjYW4gaG9sZCBhIHNpbmdsZSB0b2tlbiBhcyBpbiB0aGVcbiAqIGNhc2Ugb2YgYSBzaW1wbGUgcXVlcnkgdG9rZW4gc2V0LlxuICpcbiAqIEFkZGl0aW9uYWxseSB0b2tlbiBzZXRzIGFyZSB1c2VkIHRvIHBlcmZvcm0gd2lsZGNhcmQgbWF0Y2hpbmcuXG4gKiBMZWFkaW5nLCBjb250YWluZWQgYW5kIHRyYWlsaW5nIHdpbGRjYXJkcyBhcmUgc3VwcG9ydGVkLCBhbmRcbiAqIGZyb20gdGhpcyBlZGl0IGRpc3RhbmNlIG1hdGNoaW5nIGNhbiBhbHNvIGJlIHByb3ZpZGVkLlxuICpcbiAqIFRva2VuIHNldHMgYXJlIGltcGxlbWVudGVkIGFzIGEgbWluaW1hbCBmaW5pdGUgc3RhdGUgYXV0b21hdGEsXG4gKiB3aGVyZSBib3RoIGNvbW1vbiBwcmVmaXhlcyBhbmQgc3VmZml4ZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRva2Vucy5cbiAqIFRoaXMgaGVscHMgdG8gcmVkdWNlIHRoZSBzcGFjZSB1c2VkIGZvciBzdG9yaW5nIHRoZSB0b2tlbiBzZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuVG9rZW5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZmluYWwgPSBmYWxzZVxuICB0aGlzLmVkZ2VzID0ge31cbiAgdGhpcy5pZCA9IGx1bnIuVG9rZW5TZXQuX25leHRJZFxuICBsdW5yLlRva2VuU2V0Ll9uZXh0SWQgKz0gMVxufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBuZXh0LCBhdXRvIGluY3JlbWVudCwgaWRlbnRpZmllciB0byBhc3NpZ25cbiAqIHRvIGEgbmV3IHRva2VuU2V0LlxuICpcbiAqIFRva2VuU2V0cyByZXF1aXJlIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gYmUgY29ycmVjdGx5IG1pbmltaXNlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlRva2VuU2V0Ll9uZXh0SWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlcyBhIFRva2VuU2V0IGluc3RhbmNlIGZyb20gdGhlIGdpdmVuIHNvcnRlZCBhcnJheSBvZiB3b3Jkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBhcnIgLSBBIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzIHRvIGNyZWF0ZSB0aGUgc2V0IGZyb20uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgaW5wdXQgYXJyYXkgaXMgbm90IHNvcnRlZC5cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHZhciBidWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlclxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBidWlsZGVyLmluc2VydChhcnJbaV0pXG4gIH1cblxuICBidWlsZGVyLmZpbmlzaCgpXG4gIHJldHVybiBidWlsZGVyLnJvb3Rcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IGZyb20gYSBxdWVyeSBjbGF1c2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGF1c2UgLSBBIHNpbmdsZSBjbGF1c2UgZnJvbSBsdW5yLlF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXVzZS50ZXJtIC0gVGhlIHF1ZXJ5IGNsYXVzZSB0ZXJtLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjbGF1c2UuZWRpdERpc3RhbmNlXSAtIFRoZSBvcHRpb25hbCBlZGl0IGRpc3RhbmNlIGZvciB0aGUgdGVybS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21DbGF1c2UgPSBmdW5jdGlvbiAoY2xhdXNlKSB7XG4gIGlmICgnZWRpdERpc3RhbmNlJyBpbiBjbGF1c2UpIHtcbiAgICByZXR1cm4gbHVuci5Ub2tlblNldC5mcm9tRnV6enlTdHJpbmcoY2xhdXNlLnRlcm0sIGNsYXVzZS5lZGl0RGlzdGFuY2UpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGx1bnIuVG9rZW5TZXQuZnJvbVN0cmluZyhjbGF1c2UudGVybSlcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgcmVwcmVzZW50aW5nIGEgc2luZ2xlIHN0cmluZyB3aXRoIGEgc3BlY2lmaWVkXG4gKiBlZGl0IGRpc3RhbmNlLlxuICpcbiAqIEluc2VydGlvbnMsIGRlbGV0aW9ucywgc3Vic3RpdHV0aW9ucyBhbmQgdHJhbnNwb3NpdGlvbnMgYXJlIGVhY2hcbiAqIHRyZWF0ZWQgYXMgYW4gZWRpdCBkaXN0YW5jZSBvZiAxLlxuICpcbiAqIEluY3JlYXNpbmcgdGhlIGFsbG93ZWQgZWRpdCBkaXN0YW5jZSB3aWxsIGhhdmUgYSBkcmFtYXRpYyBpbXBhY3RcbiAqIG9uIHRoZSBwZXJmb3JtYW5jZSBvZiBib3RoIGNyZWF0aW5nIGFuZCBpbnRlcnNlY3RpbmcgdGhlc2UgVG9rZW5TZXRzLlxuICogSXQgaXMgYWR2aXNlZCB0byBrZWVwIHRoZSBlZGl0IGRpc3RhbmNlIGxlc3MgdGhhbiAzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGNyZWF0ZSB0aGUgdG9rZW4gc2V0IGZyb20uXG4gKiBAcGFyYW0ge251bWJlcn0gZWRpdERpc3RhbmNlIC0gVGhlIGFsbG93ZWQgZWRpdCBkaXN0YW5jZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtsdW5yLlZlY3Rvcn1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tRnV6enlTdHJpbmcgPSBmdW5jdGlvbiAoc3RyLCBlZGl0RGlzdGFuY2UpIHtcbiAgdmFyIHJvb3QgPSBuZXcgbHVuci5Ub2tlblNldFxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgbm9kZTogcm9vdCxcbiAgICBlZGl0c1JlbWFpbmluZzogZWRpdERpc3RhbmNlLFxuICAgIHN0cjogc3RyXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIHZhciBmcmFtZSA9IHN0YWNrLnBvcCgpXG5cbiAgICAvLyBubyBlZGl0XG4gICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY2hhciA9IGZyYW1lLnN0ci5jaGFyQXQoMCksXG4gICAgICAgICAgbm9FZGl0Tm9kZVxuXG4gICAgICBpZiAoY2hhciBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIG5vRWRpdE5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub0VkaXROb2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyXSA9IG5vRWRpdE5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICBub0VkaXROb2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogbm9FZGl0Tm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWxldGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgZGVsZXRpb24gaWYgd2UgaGF2ZSBlbm91Z2ggZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIGlmIHRoZXJlIGFyZSBjaGFyYWN0ZXJzIGxlZnQgdG8gZGVsZXRlIGluIHRoZSBzdHJpbmdcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hhciA9IGZyYW1lLnN0ci5jaGFyQXQoMSksXG4gICAgICAgICAgZGVsZXRpb25Ob2RlXG5cbiAgICAgIGlmIChjaGFyIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyXSA9IGRlbGV0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IGRlbGV0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVsZXRpb25cbiAgICAvLyBqdXN0IHJlbW92aW5nIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIHRoZSBzdHJcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgZnJhbWUubm9kZS5maW5hbCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBzdWJzdGl0dXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIHN1YnN0aXR1dGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBzdWJzdGl0dXRlXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID49IDEpIHtcbiAgICAgIGlmIChcIipcIiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHZhciBzdWJzdGl0dXRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tcIipcIl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdWJzdGl0dXRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tcIipcIl0gPSBzdWJzdGl0dXRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IHN1YnN0aXR1dGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgxKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc2VydGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGluc2VydGlvbiBpZiB0aGVyZSBhcmUgZWRpdHMgcmVtYWluaW5nXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKFwiKlwiIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdmFyIGluc2VydGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGluc2VydGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXSA9IGluc2VydGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMCkge1xuICAgICAgICBpbnNlcnRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogaW5zZXJ0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJhbnNwb3NpdGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgdHJhbnNwb3NpdGlvbiBpZiB0aGVyZSBhcmUgZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIHRoZXJlIGFyZSBlbm91Z2ggY2hhcmFjdGVycyB0byB0cmFuc3Bvc2VcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hhckEgPSBmcmFtZS5zdHIuY2hhckF0KDApLFxuICAgICAgICAgIGNoYXJCID0gZnJhbWUuc3RyLmNoYXJBdCgxKSxcbiAgICAgICAgICB0cmFuc3Bvc2VOb2RlXG5cbiAgICAgIGlmIChjaGFyQiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJCXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhckJdID0gdHJhbnNwb3NlTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiB0cmFuc3Bvc2VOb2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBjaGFyQSArIGZyYW1lLnN0ci5zbGljZSgyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFRva2VuU2V0IGZyb20gYSBzdHJpbmcuXG4gKlxuICogVGhlIHN0cmluZyBtYXkgY29udGFpbiBvbmUgb3IgbW9yZSB3aWxkY2FyZCBjaGFyYWN0ZXJzICgqKVxuICogdGhhdCB3aWxsIGFsbG93IHdpbGRjYXJkIG1hdGNoaW5nIHdoZW4gaW50ZXJzZWN0aW5nIHdpdGhcbiAqIGFub3RoZXIgVG9rZW5TZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gY3JlYXRlIGEgVG9rZW5TZXQgZnJvbS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBub2RlID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICByb290ID0gbm9kZSxcbiAgICAgIHdpbGRjYXJkRm91bmQgPSBmYWxzZVxuXG4gIC8qXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIGNoYXJhY3RlcnMgd2l0aGluIHRoZSBwYXNzZWQgc3RyaW5nXG4gICAqIGFwcGVuZGluZyBhIG5vZGUgZm9yIGVhY2ggY2hhcmFjdGVyLlxuICAgKlxuICAgKiBBcyBzb29uIGFzIGEgd2lsZGNhcmQgY2hhcmFjdGVyIGlzIGZvdW5kIHRoZW4gYSBzZWxmXG4gICAqIHJlZmVyZW5jaW5nIGVkZ2UgaXMgaW50cm9kdWNlZCB0byBjb250aW51YWxseSBtYXRjaFxuICAgKiBhbnkgbnVtYmVyIG9mIGFueSBjaGFyYWN0ZXJzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBjaGFyID0gc3RyW2ldLFxuICAgICAgICBmaW5hbCA9IChpID09IGxlbiAtIDEpXG5cbiAgICBpZiAoY2hhciA9PSBcIipcIikge1xuICAgICAgd2lsZGNhcmRGb3VuZCA9IHRydWVcbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBub2RlXG4gICAgICBub2RlLmZpbmFsID0gZmluYWxcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV4dCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICBuZXh0LmZpbmFsID0gZmluYWxcblxuICAgICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5leHRcbiAgICAgIG5vZGUgPSBuZXh0XG5cbiAgICAgIC8vIFRPRE86IGlzIHRoaXMgbmVlZGVkIGFueW1vcmU/XG4gICAgICBpZiAod2lsZGNhcmRGb3VuZCkge1xuICAgICAgICBub2RlLmVkZ2VzW1wiKlwiXSA9IHJvb3RcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm9vdFxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoaXMgVG9rZW5TZXQgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzXG4gKiBjb250YWluZWQgd2l0aGluIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB3b3JkcyA9IFtdXG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBwcmVmaXg6IFwiXCIsXG4gICAgbm9kZTogdGhpc1xuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICB2YXIgZnJhbWUgPSBzdGFjay5wb3AoKSxcbiAgICAgICAgZWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5ub2RlLmVkZ2VzKSxcbiAgICAgICAgbGVuID0gZWRnZXMubGVuZ3RoXG5cbiAgICBpZiAoZnJhbWUubm9kZS5maW5hbCkge1xuICAgICAgd29yZHMucHVzaChmcmFtZS5wcmVmaXgpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGVkZ2UgPSBlZGdlc1tpXVxuXG4gICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgcHJlZml4OiBmcmFtZS5wcmVmaXguY29uY2F0KGVkZ2UpLFxuICAgICAgICBub2RlOiBmcmFtZS5ub2RlLmVkZ2VzW2VkZ2VdXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3b3Jkc1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYWxsb3cgVG9rZW5TZXRzIHRvIGJlIHVzZWQgYXMga2V5c1xuICogaW4gb2JqZWN0cywgbGFyZ2VseSB0byBhaWQgdGhlIGNvbnN0cnVjdGlvbiBhbmQgbWluaW1pc2F0aW9uXG4gKiBvZiBhIFRva2VuU2V0LiBBcyBzdWNoIGl0IGlzIG5vdCBkZXNpZ25lZCB0byBiZSBhIGh1bWFuXG4gKiBmcmllbmRseSByZXByZXNlbnRhdGlvbiBvZiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIE5PVEU6IFVzaW5nIE9iamVjdC5rZXlzIGhlcmUgYXMgdGhpcy5lZGdlcyBpcyB2ZXJ5IGxpa2VseVxuICAvLyB0byBlbnRlciAnaGFzaC1tb2RlJyB3aXRoIG1hbnkga2V5cyBiZWluZyBhZGRlZFxuICAvL1xuICAvLyBhdm9pZGluZyBhIGZvci1pbiBsb29wIGhlcmUgYXMgaXQgbGVhZHMgdG8gdGhlIGZ1bmN0aW9uXG4gIC8vIGJlaW5nIGRlLW9wdGltaXNlZCAoYXQgbGVhc3QgaW4gVjgpLiBGcm9tIHNvbWUgc2ltcGxlXG4gIC8vIGJlbmNobWFya3MgdGhlIHBlcmZvcm1hbmNlIGlzIGNvbXBhcmFibGUsIGJ1dCBhbGxvd2luZ1xuICAvLyBWOCB0byBvcHRpbWl6ZSBtYXkgbWVhbiBlYXN5IHBlcmZvcm1hbmNlIHdpbnMgaW4gdGhlIGZ1dHVyZS5cblxuICBpZiAodGhpcy5fc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0clxuICB9XG5cbiAgdmFyIHN0ciA9IHRoaXMuZmluYWwgPyAnMScgOiAnMCcsXG4gICAgICBsYWJlbHMgPSBPYmplY3Qua2V5cyh0aGlzLmVkZ2VzKS5zb3J0KCksXG4gICAgICBsZW4gPSBsYWJlbHMubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBsYWJlbCA9IGxhYmVsc1tpXSxcbiAgICAgICAgbm9kZSA9IHRoaXMuZWRnZXNbbGFiZWxdXG5cbiAgICBzdHIgPSBzdHIgKyBsYWJlbCArIG5vZGUuaWRcbiAgfVxuXG4gIHJldHVybiBzdHJcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IFRva2VuU2V0IHRoYXQgaXMgdGhlIGludGVyc2VjdGlvbiBvZlxuICogdGhpcyBUb2tlblNldCBhbmQgdGhlIHBhc3NlZCBUb2tlblNldC5cbiAqXG4gKiBUaGlzIGludGVyc2VjdGlvbiB3aWxsIHRha2UgaW50byBhY2NvdW50IGFueSB3aWxkY2FyZHNcbiAqIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFRva2VuU2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlblNldH0gYiAtIEFuIG90aGVyIFRva2VuU2V0IHRvIGludGVyc2VjdCB3aXRoLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uIChiKSB7XG4gIHZhciBvdXRwdXQgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgIGZyYW1lID0gdW5kZWZpbmVkXG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBxTm9kZTogYixcbiAgICBvdXRwdXQ6IG91dHB1dCxcbiAgICBub2RlOiB0aGlzXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIGZyYW1lID0gc3RhY2sucG9wKClcblxuICAgIC8vIE5PVEU6IEFzIHdpdGggdGhlICN0b1N0cmluZyBtZXRob2QsIHdlIGFyZSB1c2luZ1xuICAgIC8vIE9iamVjdC5rZXlzIGFuZCBhIGZvciBsb29wIGluc3RlYWQgb2YgYSBmb3ItaW4gbG9vcFxuICAgIC8vIGFzIGJvdGggb2YgdGhlc2Ugb2JqZWN0cyBlbnRlciAnaGFzaCcgbW9kZSwgY2F1c2luZ1xuICAgIC8vIHRoZSBmdW5jdGlvbiB0byBiZSBkZS1vcHRpbWlzZWQgaW4gVjhcbiAgICB2YXIgcUVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUucU5vZGUuZWRnZXMpLFxuICAgICAgICBxTGVuID0gcUVkZ2VzLmxlbmd0aCxcbiAgICAgICAgbkVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUubm9kZS5lZGdlcyksXG4gICAgICAgIG5MZW4gPSBuRWRnZXMubGVuZ3RoXG5cbiAgICBmb3IgKHZhciBxID0gMDsgcSA8IHFMZW47IHErKykge1xuICAgICAgdmFyIHFFZGdlID0gcUVkZ2VzW3FdXG5cbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbkxlbjsgbisrKSB7XG4gICAgICAgIHZhciBuRWRnZSA9IG5FZGdlc1tuXVxuXG4gICAgICAgIGlmIChuRWRnZSA9PSBxRWRnZSB8fCBxRWRnZSA9PSAnKicpIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbbkVkZ2VdLFxuICAgICAgICAgICAgICBxTm9kZSA9IGZyYW1lLnFOb2RlLmVkZ2VzW3FFZGdlXSxcbiAgICAgICAgICAgICAgZmluYWwgPSBub2RlLmZpbmFsICYmIHFOb2RlLmZpbmFsLFxuICAgICAgICAgICAgICBuZXh0ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgICBpZiAobkVkZ2UgaW4gZnJhbWUub3V0cHV0LmVkZ2VzKSB7XG4gICAgICAgICAgICAvLyBhbiBlZGdlIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGNoYXJhY3RlclxuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBjcmVhdGUgYSBuZXcgbm9kZSwganVzdCBzZXQgdGhlIGZpbmFsaXR5XG4gICAgICAgICAgICAvLyBiaXQgdW5sZXNzIHRoaXMgbm9kZSBpcyBhbHJlYWR5IGZpbmFsXG4gICAgICAgICAgICBuZXh0ID0gZnJhbWUub3V0cHV0LmVkZ2VzW25FZGdlXVxuICAgICAgICAgICAgbmV4dC5maW5hbCA9IG5leHQuZmluYWwgfHwgZmluYWxcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBlZGdlIGV4aXN0cyB5ZXQsIG11c3QgY3JlYXRlIG9uZVxuICAgICAgICAgICAgLy8gc2V0IHRoZSBmaW5hbGl0eSBiaXQgYW5kIGluc2VydCBpdFxuICAgICAgICAgICAgLy8gaW50byB0aGUgb3V0cHV0XG4gICAgICAgICAgICBuZXh0ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgICAgIG5leHQuZmluYWwgPSBmaW5hbFxuICAgICAgICAgICAgZnJhbWUub3V0cHV0LmVkZ2VzW25FZGdlXSA9IG5leHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgIHFOb2RlOiBxTm9kZSxcbiAgICAgICAgICAgIG91dHB1dDogbmV4dCxcbiAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxubHVuci5Ub2tlblNldC5CdWlsZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnByZXZpb3VzV29yZCA9IFwiXCJcbiAgdGhpcy5yb290ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgdGhpcy51bmNoZWNrZWROb2RlcyA9IFtdXG4gIHRoaXMubWluaW1pemVkTm9kZXMgPSB7fVxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gIHZhciBub2RlLFxuICAgICAgY29tbW9uUHJlZml4ID0gMFxuXG4gIGlmICh3b3JkIDwgdGhpcy5wcmV2aW91c1dvcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IgKFwiT3V0IG9mIG9yZGVyIHdvcmQgaW5zZXJ0aW9uXCIpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmQubGVuZ3RoICYmIGkgPCB0aGlzLnByZXZpb3VzV29yZC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh3b3JkW2ldICE9IHRoaXMucHJldmlvdXNXb3JkW2ldKSBicmVha1xuICAgIGNvbW1vblByZWZpeCsrXG4gIH1cblxuICB0aGlzLm1pbmltaXplKGNvbW1vblByZWZpeClcblxuICBpZiAodGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggPT0gMCkge1xuICAgIG5vZGUgPSB0aGlzLnJvb3RcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gdGhpcy51bmNoZWNrZWROb2Rlc1t0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCAtIDFdLmNoaWxkXG4gIH1cblxuICBmb3IgKHZhciBpID0gY29tbW9uUHJlZml4OyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXh0Tm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgICBjaGFyID0gd29yZFtpXVxuXG4gICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5leHROb2RlXG5cbiAgICB0aGlzLnVuY2hlY2tlZE5vZGVzLnB1c2goe1xuICAgICAgcGFyZW50OiBub2RlLFxuICAgICAgY2hhcjogY2hhcixcbiAgICAgIGNoaWxkOiBuZXh0Tm9kZVxuICAgIH0pXG5cbiAgICBub2RlID0gbmV4dE5vZGVcbiAgfVxuXG4gIG5vZGUuZmluYWwgPSB0cnVlXG4gIHRoaXMucHJldmlvdXNXb3JkID0gd29yZFxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5taW5pbWl6ZSgwKVxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLm1pbmltaXplID0gZnVuY3Rpb24gKGRvd25Ubykge1xuICBmb3IgKHZhciBpID0gdGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggLSAxOyBpID49IGRvd25UbzsgaS0tKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnVuY2hlY2tlZE5vZGVzW2ldLFxuICAgICAgICBjaGlsZEtleSA9IG5vZGUuY2hpbGQudG9TdHJpbmcoKVxuXG4gICAgaWYgKGNoaWxkS2V5IGluIHRoaXMubWluaW1pemVkTm9kZXMpIHtcbiAgICAgIG5vZGUucGFyZW50LmVkZ2VzW25vZGUuY2hhcl0gPSB0aGlzLm1pbmltaXplZE5vZGVzW2NoaWxkS2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYWNoZSB0aGUga2V5IGZvciB0aGlzIG5vZGUgc2luY2VcbiAgICAgIC8vIHdlIGtub3cgaXQgY2FuJ3QgY2hhbmdlIGFueW1vcmVcbiAgICAgIG5vZGUuY2hpbGQuX3N0ciA9IGNoaWxkS2V5XG5cbiAgICAgIHRoaXMubWluaW1pemVkTm9kZXNbY2hpbGRLZXldID0gbm9kZS5jaGlsZFxuICAgIH1cblxuICAgIHRoaXMudW5jaGVja2VkTm9kZXMucG9wKClcbiAgfVxufVxuLyohXG4gKiBsdW5yLkluZGV4XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBbiBpbmRleCBjb250YWlucyB0aGUgYnVpbHQgaW5kZXggb2YgYWxsIGRvY3VtZW50cyBhbmQgcHJvdmlkZXMgYSBxdWVyeSBpbnRlcmZhY2VcbiAqIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBVc3VhbGx5IGluc3RhbmNlcyBvZiBsdW5yLkluZGV4IHdpbGwgbm90IGJlIGNyZWF0ZWQgdXNpbmcgdGhpcyBjb25zdHJ1Y3RvciwgaW5zdGVhZFxuICogbHVuci5CdWlsZGVyIHNob3VsZCBiZSB1c2VkIHRvIGNvbnN0cnVjdCBuZXcgaW5kZXhlcywgb3IgbHVuci5JbmRleC5sb2FkIHNob3VsZCBiZVxuICogdXNlZCB0byBsb2FkIHByZXZpb3VzbHkgYnVpbHQgYW5kIHNlcmlhbGl6ZWQgaW5kZXhlcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyAtIFRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBidWlsdCBzZWFyY2ggaW5kZXguXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMuaW52ZXJ0ZWRJbmRleCAtIEFuIGluZGV4IG9mIHRlcm0vZmllbGQgdG8gZG9jdW1lbnQgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBsdW5yLlZlY3Rvcj59IGF0dHJzLmRvY3VtZW50VmVjdG9ycyAtIERvY3VtZW50IHZlY3RvcnMga2V5ZWQgYnkgZG9jdW1lbnQgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBhdHRycy50b2tlblNldCAtIEFuIHNldCBvZiBhbGwgY29ycHVzIHRva2Vucy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGF0dHJzLmZpZWxkcyAtIFRoZSBuYW1lcyBvZiBpbmRleGVkIGRvY3VtZW50IGZpZWxkcy5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZX0gYXR0cnMucGlwZWxpbmUgLSBUaGUgcGlwZWxpbmUgdG8gdXNlIGZvciBzZWFyY2ggdGVybXMuXG4gKi9cbmx1bnIuSW5kZXggPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gYXR0cnMuaW52ZXJ0ZWRJbmRleFxuICB0aGlzLmZpZWxkVmVjdG9ycyA9IGF0dHJzLmZpZWxkVmVjdG9yc1xuICB0aGlzLnRva2VuU2V0ID0gYXR0cnMudG9rZW5TZXRcbiAgdGhpcy5maWVsZHMgPSBhdHRycy5maWVsZHNcbiAgdGhpcy5waXBlbGluZSA9IGF0dHJzLnBpcGVsaW5lXG59XG5cbi8qKlxuICogQSByZXN1bHQgY29udGFpbnMgZGV0YWlscyBvZiBhIGRvY3VtZW50IG1hdGNoaW5nIGEgc2VhcmNoIHF1ZXJ5LlxuICogQHR5cGVkZWYge09iamVjdH0gbHVuci5JbmRleH5SZXN1bHRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWYgLSBUaGUgcmVmZXJlbmNlIG9mIHRoZSBkb2N1bWVudCB0aGlzIHJlc3VsdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjb3JlIC0gQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIHJlcHJlc2VudGluZyBob3cgc2ltaWxhciB0aGlzIGRvY3VtZW50IGlzIHRvIHRoZSBxdWVyeS5cbiAqIEBwcm9wZXJ0eSB7bHVuci5NYXRjaERhdGF9IG1hdGNoRGF0YSAtIENvbnRhaW5zIG1ldGFkYXRhIGFib3V0IHRoaXMgbWF0Y2ggaW5jbHVkaW5nIHdoaWNoIHRlcm0ocykgY2F1c2VkIHRoZSBtYXRjaC5cbiAqL1xuXG4vKipcbiAqIEFsdGhvdWdoIGx1bnIgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHF1ZXJpZXMgdXNpbmcgbHVuci5RdWVyeSwgaXQgYWxzbyBwcm92aWRlcyBhIHNpbXBsZVxuICogcXVlcnkgbGFuZ3VhZ2Ugd2hpY2ggaXRzZWxmIGlzIHBhcnNlZCBpbnRvIGFuIGluc3RhbmNlIG9mIGx1bnIuUXVlcnkuXG4gKlxuICogRm9yIHByb2dyYW1tYXRpY2FsbHkgYnVpbGRpbmcgcXVlcmllcyBpdCBpcyBhZHZpc2VkIHRvIGRpcmVjdGx5IHVzZSBsdW5yLlF1ZXJ5LCB0aGUgcXVlcnkgbGFuZ3VhZ2VcbiAqIGlzIGJlc3QgdXNlZCBmb3IgaHVtYW4gZW50ZXJlZCB0ZXh0IHJhdGhlciB0aGFuIHByb2dyYW0gZ2VuZXJhdGVkIHRleHQuXG4gKlxuICogQXQgaXRzIHNpbXBsZXN0IHF1ZXJpZXMgY2FuIGp1c3QgYmUgYSBzaW5nbGUgdGVybSwgZS5nLiBgaGVsbG9gLCBtdWx0aXBsZSB0ZXJtcyBhcmUgYWxzbyBzdXBwb3J0ZWRcbiAqIGFuZCB3aWxsIGJlIGNvbWJpbmVkIHdpdGggT1IsIGUuZyBgaGVsbG8gd29ybGRgIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHRoYXQgY29udGFpbiBlaXRoZXIgJ2hlbGxvJ1xuICogb3IgJ3dvcmxkJywgdGhvdWdoIHRob3NlIHRoYXQgY29udGFpbiBib3RoIHdpbGwgcmFuayBoaWdoZXIgaW4gdGhlIHJlc3VsdHMuXG4gKlxuICogV2lsZGNhcmRzIGNhbiBiZSBpbmNsdWRlZCBpbiB0ZXJtcyB0byBtYXRjaCBvbmUgb3IgbW9yZSB1bnNwZWNpZmllZCBjaGFyYWN0ZXJzLCB0aGVzZSB3aWxkY2FyZHMgY2FuXG4gKiBiZSBpbnNlcnRlZCBhbnl3aGVyZSB3aXRoaW4gdGhlIHRlcm0sIGFuZCBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGNhbiBleGlzdCBpbiBhIHNpbmdsZSB0ZXJtLiBBZGRpbmdcbiAqIHdpbGRjYXJkcyB3aWxsIGluY3JlYXNlIHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIHRoYXQgd2lsbCBiZSBmb3VuZCBidXQgY2FuIGFsc28gaGF2ZSBhIG5lZ2F0aXZlXG4gKiBpbXBhY3Qgb24gcXVlcnkgcGVyZm9ybWFuY2UsIGVzcGVjaWFsbHkgd2l0aCB3aWxkY2FyZHMgYXQgdGhlIGJlZ2lubmluZyBvZiBhIHRlcm0uXG4gKlxuICogVGVybXMgY2FuIGJlIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgZmllbGRzLCBlLmcuIGB0aXRsZTpoZWxsb2AsIG9ubHkgZG9jdW1lbnRzIHdpdGggdGhlIHRlcm1cbiAqIGhlbGxvIGluIHRoZSB0aXRsZSBmaWVsZCB3aWxsIG1hdGNoIHRoaXMgcXVlcnkuIFVzaW5nIGEgZmllbGQgbm90IHByZXNlbnQgaW4gdGhlIGluZGV4IHdpbGwgbGVhZFxuICogdG8gYW4gZXJyb3IgYmVpbmcgdGhyb3duLlxuICpcbiAqIE1vZGlmaWVycyBjYW4gYWxzbyBiZSBhZGRlZCB0byB0ZXJtcywgbHVuciBzdXBwb3J0cyBlZGl0IGRpc3RhbmNlIGFuZCBib29zdCBtb2RpZmllcnMgb24gdGVybXMuIEEgdGVybVxuICogYm9vc3Qgd2lsbCBtYWtlIGRvY3VtZW50cyBtYXRjaGluZyB0aGF0IHRlcm0gc2NvcmUgaGlnaGVyLCBlLmcuIGBmb29eNWAuIEVkaXQgZGlzdGFuY2UgaXMgYWxzbyBzdXBwb3J0ZWRcbiAqIHRvIHByb3ZpZGUgZnV6enkgbWF0Y2hpbmcsIGUuZy4gJ2hlbGxvfjInIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHdpdGggaGVsbG8gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDIuXG4gKiBBdm9pZCBsYXJnZSB2YWx1ZXMgZm9yIGVkaXQgZGlzdGFuY2UgdG8gaW1wcm92ZSBxdWVyeSBwZXJmb3JtYW5jZS5cbiAqXG4gKiBUbyBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoZSBiYWNrc2xhc2ggY2hhcmFjdGVyICdcXCcgY2FuIGJlIHVzZWQsIHRoaXMgYWxsb3dzIHNlYXJjaGVzIHRvIGluY2x1ZGVcbiAqIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBub3JtYWxseSBiZSBjb25zaWRlcmVkIG1vZGlmaWVycywgZS5nLiBgZm9vXFx+MmAgd2lsbCBzZWFyY2ggZm9yIGEgdGVybSBcImZvb34yXCIgaW5zdGVhZFxuICogb2YgYXR0ZW1wdGluZyB0byBhcHBseSBhIGJvb3N0IG9mIDIgdG8gdGhlIHNlYXJjaCB0ZXJtIFwiZm9vXCIuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ30gbHVuci5JbmRleH5RdWVyeVN0cmluZ1xuICogQGV4YW1wbGUgPGNhcHRpb24+U2ltcGxlIHNpbmdsZSB0ZXJtIHF1ZXJ5PC9jYXB0aW9uPlxuICogaGVsbG9cbiAqIEBleGFtcGxlIDxjYXB0aW9uPk11bHRpcGxlIHRlcm0gcXVlcnk8L2NhcHRpb24+XG4gKiBoZWxsbyB3b3JsZFxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSBzY29wZWQgdG8gYSBmaWVsZDwvY2FwdGlvbj5cbiAqIHRpdGxlOmhlbGxvXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHdpdGggYSBib29zdCBvZiAxMDwvY2FwdGlvbj5cbiAqIGhlbGxvXjEwXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHdpdGggYW4gZWRpdCBkaXN0YW5jZSBvZiAyPC9jYXB0aW9uPlxuICogaGVsbG9+MlxuICovXG5cbi8qKlxuICogUGVyZm9ybXMgYSBzZWFyY2ggYWdhaW5zdCB0aGUgaW5kZXggdXNpbmcgbHVuciBxdWVyeSBzeW50YXguXG4gKlxuICogUmVzdWx0cyB3aWxsIGJlIHJldHVybmVkIHNvcnRlZCBieSB0aGVpciBzY29yZSwgdGhlIG1vc3QgcmVsZXZhbnQgcmVzdWx0c1xuICogd2lsbCBiZSByZXR1cm5lZCBmaXJzdC5cbiAqXG4gKiBGb3IgbW9yZSBwcm9ncmFtbWF0aWMgcXVlcnlpbmcgdXNlIGx1bnIuSW5kZXgjcXVlcnkuXG4gKlxuICogQHBhcmFtIHtsdW5yLkluZGV4flF1ZXJ5U3RyaW5nfSBxdWVyeVN0cmluZyAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgYSBsdW5yIHF1ZXJ5LlxuICogQHRocm93cyB7bHVuci5RdWVyeVBhcnNlRXJyb3J9IElmIHRoZSBwYXNzZWQgcXVlcnkgc3RyaW5nIGNhbm5vdCBiZSBwYXJzZWQuXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH5SZXN1bHRbXX1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKHF1ZXJ5U3RyaW5nKSB7XG4gIHJldHVybiB0aGlzLnF1ZXJ5KGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciBwYXJzZXIgPSBuZXcgbHVuci5RdWVyeVBhcnNlcihxdWVyeVN0cmluZywgcXVlcnkpXG4gICAgcGFyc2VyLnBhcnNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHF1ZXJ5IGJ1aWxkZXIgY2FsbGJhY2sgcHJvdmlkZXMgYSBxdWVyeSBvYmplY3QgdG8gYmUgdXNlZCB0byBleHByZXNzXG4gKiB0aGUgcXVlcnkgdG8gcGVyZm9ybSBvbiB0aGUgaW5kZXguXG4gKlxuICogQGNhbGxiYWNrIGx1bnIuSW5kZXh+cXVlcnlCdWlsZGVyXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl9IHF1ZXJ5IC0gVGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB1cC5cbiAqIEB0aGlzIGx1bnIuUXVlcnlcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgcXVlcnkgYWdhaW5zdCB0aGUgaW5kZXggdXNpbmcgdGhlIHlpZWxkZWQgbHVuci5RdWVyeSBvYmplY3QuXG4gKlxuICogSWYgcGVyZm9ybWluZyBwcm9ncmFtbWF0aWMgcXVlcmllcyBhZ2FpbnN0IHRoZSBpbmRleCwgdGhpcyBtZXRob2QgaXMgcHJlZmVycmVkXG4gKiBvdmVyIGx1bnIuSW5kZXgjc2VhcmNoIHNvIGFzIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIHF1ZXJ5IHBhcnNpbmcgb3ZlcmhlYWQuXG4gKlxuICogQSBxdWVyeSBvYmplY3QgaXMgeWllbGRlZCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGV4cHJlc3MgdGhlIHF1ZXJ5IHRvIGJlIHJ1biBhZ2FpbnN0IHRoZSBpbmRleC5cbiAqXG4gKiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBmdW5jdGlvbiB0YWtlcyBhIGNhbGxiYWNrIHBhcmFtZXRlciBpdCBpcyBfbm90XyBhblxuICogYXN5bmNocm9ub3VzIG9wZXJhdGlvbiwgdGhlIGNhbGxiYWNrIGlzIGp1c3QgeWllbGRlZCBhIHF1ZXJ5IG9iamVjdCB0byBiZVxuICogY3VzdG9taXplZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuSW5kZXh+cXVlcnlCdWlsZGVyfSBmbiAtIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGJ1aWxkIHRoZSBxdWVyeS5cbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4flJlc3VsdFtdfVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBmb3IgZWFjaCBxdWVyeSBjbGF1c2VcbiAgLy8gKiBwcm9jZXNzIHRlcm1zXG4gIC8vICogZXhwYW5kIHRlcm1zIGZyb20gdG9rZW4gc2V0XG4gIC8vICogZmluZCBtYXRjaGluZyBkb2N1bWVudHMgYW5kIG1ldGFkYXRhXG4gIC8vICogZ2V0IGRvY3VtZW50IHZlY3RvcnNcbiAgLy8gKiBzY29yZSBkb2N1bWVudHNcblxuICB2YXIgcXVlcnkgPSBuZXcgbHVuci5RdWVyeSh0aGlzLmZpZWxkcyksXG4gICAgICBtYXRjaGluZ0ZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBxdWVyeVZlY3RvcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgdGVybUZpZWxkQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgZm4uY2FsbChxdWVyeSwgcXVlcnkpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVyeS5jbGF1c2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgLypcbiAgICAgKiBVbmxlc3MgdGhlIHBpcGVsaW5lIGhhcyBiZWVuIGRpc2FibGVkIGZvciB0aGlzIHRlcm0sIHdoaWNoIGlzXG4gICAgICogdGhlIGNhc2UgZm9yIHRlcm1zIHdpdGggd2lsZGNhcmRzLCB3ZSBuZWVkIHRvIHBhc3MgdGhlIGNsYXVzZVxuICAgICAqIHRlcm0gdGhyb3VnaCB0aGUgc2VhcmNoIHBpcGVsaW5lLiBBIHBpcGVsaW5lIHJldHVybnMgYW4gYXJyYXlcbiAgICAgKiBvZiBwcm9jZXNzZWQgdGVybXMuIFBpcGVsaW5lIGZ1bmN0aW9ucyBtYXkgZXhwYW5kIHRoZSBwYXNzZWRcbiAgICAgKiB0ZXJtLCB3aGljaCBtZWFucyB3ZSBtYXkgZW5kIHVwIHBlcmZvcm1pbmcgbXVsdGlwbGUgaW5kZXggbG9va3Vwc1xuICAgICAqIGZvciBhIHNpbmdsZSBxdWVyeSB0ZXJtLlxuICAgICAqL1xuICAgIHZhciBjbGF1c2UgPSBxdWVyeS5jbGF1c2VzW2ldLFxuICAgICAgICB0ZXJtcyA9IG51bGxcblxuICAgIGlmIChjbGF1c2UudXNlUGlwZWxpbmUpIHtcbiAgICAgIHRlcm1zID0gdGhpcy5waXBlbGluZS5ydW5TdHJpbmcoY2xhdXNlLnRlcm0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1zID0gW2NsYXVzZS50ZXJtXVxuICAgIH1cblxuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgdGVybXMubGVuZ3RoOyBtKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbbV1cblxuICAgICAgLypcbiAgICAgICAqIEVhY2ggdGVybSByZXR1cm5lZCBmcm9tIHRoZSBwaXBlbGluZSBuZWVkcyB0byB1c2UgdGhlIHNhbWUgcXVlcnlcbiAgICAgICAqIGNsYXVzZSBvYmplY3QsIGUuZy4gdGhlIHNhbWUgYm9vc3QgYW5kIG9yIGVkaXQgZGlzdGFuY2UuIFRoZVxuICAgICAgICogc2ltcGxlc3Qgd2F5IHRvIGRvIHRoaXMgaXMgdG8gcmUtdXNlIHRoZSBjbGF1c2Ugb2JqZWN0IGJ1dCBtdXRhdGVcbiAgICAgICAqIGl0cyB0ZXJtIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBjbGF1c2UudGVybSA9IHRlcm1cblxuICAgICAgLypcbiAgICAgICAqIEZyb20gdGhlIHRlcm0gaW4gdGhlIGNsYXVzZSB3ZSBjcmVhdGUgYSB0b2tlbiBzZXQgd2hpY2ggd2lsbCB0aGVuXG4gICAgICAgKiBiZSB1c2VkIHRvIGludGVyc2VjdCB0aGUgaW5kZXhlcyB0b2tlbiBzZXQgdG8gZ2V0IGEgbGlzdCBvZiB0ZXJtc1xuICAgICAgICogdG8gbG9va3VwIGluIHRoZSBpbnZlcnRlZCBpbmRleFxuICAgICAgICovXG4gICAgICB2YXIgdGVybVRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQ2xhdXNlKGNsYXVzZSksXG4gICAgICAgICAgZXhwYW5kZWRUZXJtcyA9IHRoaXMudG9rZW5TZXQuaW50ZXJzZWN0KHRlcm1Ub2tlblNldCkudG9BcnJheSgpXG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhwYW5kZWRUZXJtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAvKlxuICAgICAgICAgKiBGb3IgZWFjaCB0ZXJtIGdldCB0aGUgcG9zdGluZyBhbmQgdGVybUluZGV4LCB0aGlzIGlzIHJlcXVpcmVkIGZvclxuICAgICAgICAgKiBidWlsZGluZyB0aGUgcXVlcnkgdmVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGV4cGFuZGVkVGVybSA9IGV4cGFuZGVkVGVybXNbal0sXG4gICAgICAgICAgICBwb3N0aW5nID0gdGhpcy5pbnZlcnRlZEluZGV4W2V4cGFuZGVkVGVybV0sXG4gICAgICAgICAgICB0ZXJtSW5kZXggPSBwb3N0aW5nLl9pbmRleFxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2xhdXNlLmZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICogRm9yIGVhY2ggZmllbGQgdGhhdCB0aGlzIHF1ZXJ5IHRlcm0gaXMgc2NvcGVkIGJ5IChieSBkZWZhdWx0XG4gICAgICAgICAgICogYWxsIGZpZWxkcyBhcmUgaW4gc2NvcGUpIHdlIG5lZWQgdG8gZ2V0IGFsbCB0aGUgZG9jdW1lbnQgcmVmc1xuICAgICAgICAgICAqIHRoYXQgaGF2ZSB0aGlzIHRlcm0gaW4gdGhhdCBmaWVsZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRoZSBwb3N0aW5nIGlzIHRoZSBlbnRyeSBpbiB0aGUgaW52ZXJ0ZWRJbmRleCBmb3IgdGhlIG1hdGNoaW5nXG4gICAgICAgICAgICogdGVybSBmcm9tIGFib3ZlLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBmaWVsZCA9IGNsYXVzZS5maWVsZHNba10sXG4gICAgICAgICAgICAgIGZpZWxkUG9zdGluZyA9IHBvc3RpbmdbZmllbGRdLFxuICAgICAgICAgICAgICBtYXRjaGluZ0RvY3VtZW50UmVmcyA9IE9iamVjdC5rZXlzKGZpZWxkUG9zdGluZyksXG4gICAgICAgICAgICAgIHRlcm1GaWVsZCA9IGV4cGFuZGVkVGVybSArIFwiL1wiICsgZmllbGRcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogVG8gc3VwcG9ydCBmaWVsZCBsZXZlbCBib29zdHMgYSBxdWVyeSB2ZWN0b3IgaXMgY3JlYXRlZCBwZXJcbiAgICAgICAgICAgKiBmaWVsZC4gVGhpcyB2ZWN0b3IgaXMgcG9wdWxhdGVkIHVzaW5nIHRoZSB0ZXJtSW5kZXggZm91bmQgZm9yXG4gICAgICAgICAgICogdGhlIHRlcm0gYW5kIGEgdW5pdCB2YWx1ZSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBib29zdCBhcHBsaWVkLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogSWYgdGhlIHF1ZXJ5IHZlY3RvciBmb3IgdGhpcyBmaWVsZCBkb2VzIG5vdCBleGlzdCB5ZXQgaXQgbmVlZHNcbiAgICAgICAgICAgKiB0byBiZSBjcmVhdGVkLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChxdWVyeVZlY3RvcnNbZmllbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHF1ZXJ5VmVjdG9yc1tmaWVsZF0gPSBuZXcgbHVuci5WZWN0b3JcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIFVzaW5nIHVwc2VydCBiZWNhdXNlIHRoZXJlIGNvdWxkIGFscmVhZHkgYmUgYW4gZW50cnkgaW4gdGhlIHZlY3RvclxuICAgICAgICAgICAqIGZvciB0aGUgdGVybSB3ZSBhcmUgd29ya2luZyB3aXRoLiBJbiB0aGF0IGNhc2Ugd2UganVzdCBhZGQgdGhlIHNjb3Jlc1xuICAgICAgICAgICAqIHRvZ2V0aGVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHF1ZXJ5VmVjdG9yc1tmaWVsZF0udXBzZXJ0KHRlcm1JbmRleCwgMSAqIGNsYXVzZS5ib29zdCwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgKyBiIH0pXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB3ZSd2ZSBhbHJlYWR5IHNlZW4gdGhpcyB0ZXJtLCBmaWVsZCBjb21ibyB0aGVuIHdlJ3ZlIGFscmVhZHkgY29sbGVjdGVkXG4gICAgICAgICAgICogdGhlIG1hdGNoaW5nIGRvY3VtZW50cyBhbmQgbWV0YWRhdGEsIG5vIG5lZWQgdG8gZ28gdGhyb3VnaCBhbGwgdGhhdCBhZ2FpblxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbWF0Y2hpbmdEb2N1bWVudFJlZnMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBBbGwgbWV0YWRhdGEgZm9yIHRoaXMgdGVybS9maWVsZC9kb2N1bWVudCB0cmlwbGVcbiAgICAgICAgICAgICAqIGFyZSB0aGVuIGV4dHJhY3RlZCBhbmQgY29sbGVjdGVkIGludG8gYW4gaW5zdGFuY2VcbiAgICAgICAgICAgICAqIG9mIGx1bnIuTWF0Y2hEYXRhIHJlYWR5IHRvIGJlIHJldHVybmVkIGluIHRoZSBxdWVyeVxuICAgICAgICAgICAgICogcmVzdWx0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdEb2N1bWVudFJlZiA9IG1hdGNoaW5nRG9jdW1lbnRSZWZzW2xdLFxuICAgICAgICAgICAgICAgIG1hdGNoaW5nRmllbGRSZWYgPSBuZXcgbHVuci5GaWVsZFJlZiAobWF0Y2hpbmdEb2N1bWVudFJlZiwgZmllbGQpLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gZmllbGRQb3N0aW5nW21hdGNoaW5nRG9jdW1lbnRSZWZdLFxuICAgICAgICAgICAgICAgIGZpZWxkTWF0Y2hcblxuICAgICAgICAgICAgaWYgKChmaWVsZE1hdGNoID0gbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0pID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0gPSBuZXcgbHVuci5NYXRjaERhdGEgKGV4cGFuZGVkVGVybSwgZmllbGQsIG1ldGFkYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmllbGRNYXRjaC5hZGQoZXhwYW5kZWRUZXJtLCBmaWVsZCwgbWV0YWRhdGEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG1hdGNoaW5nRmllbGRSZWZzID0gT2JqZWN0LmtleXMobWF0Y2hpbmdGaWVsZHMpLFxuICAgICAgcmVzdWx0cyA9IFtdLFxuICAgICAgbWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nRmllbGRSZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgLypcbiAgICAgKiBDdXJyZW50bHkgd2UgaGF2ZSBkb2N1bWVudCBmaWVsZHMgdGhhdCBtYXRjaCB0aGUgcXVlcnksIGJ1dCB3ZVxuICAgICAqIG5lZWQgdG8gcmV0dXJuIGRvY3VtZW50cy4gVGhlIG1hdGNoRGF0YSBhbmQgc2NvcmVzIGFyZSBjb21iaW5lZFxuICAgICAqIGZyb20gbXVsdGlwbGUgZmllbGRzIGJlbG9uZ2luZyB0byB0aGUgc2FtZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIFNjb3JlcyBhcmUgY2FsY3VsYXRlZCBieSBmaWVsZCwgdXNpbmcgdGhlIHF1ZXJ5IHZlY3RvcnMgY3JlYXRlZFxuICAgICAqIGFib3ZlLCBhbmQgY29tYmluZWQgaW50byBhIGZpbmFsIGRvY3VtZW50IHNjb3JlIHVzaW5nIGFkZGl0aW9uLlxuICAgICAqL1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhtYXRjaGluZ0ZpZWxkUmVmc1tpXSksXG4gICAgICAgIGRvY1JlZiA9IGZpZWxkUmVmLmRvY1JlZixcbiAgICAgICAgZmllbGRWZWN0b3IgPSB0aGlzLmZpZWxkVmVjdG9yc1tmaWVsZFJlZl0sXG4gICAgICAgIHNjb3JlID0gcXVlcnlWZWN0b3JzW2ZpZWxkUmVmLmZpZWxkTmFtZV0uc2ltaWxhcml0eShmaWVsZFZlY3RvciksXG4gICAgICAgIGRvY01hdGNoXG5cbiAgICBpZiAoKGRvY01hdGNoID0gbWF0Y2hlc1tkb2NSZWZdKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2NNYXRjaC5zY29yZSArPSBzY29yZVxuICAgICAgZG9jTWF0Y2gubWF0Y2hEYXRhLmNvbWJpbmUobWF0Y2hpbmdGaWVsZHNbZmllbGRSZWZdKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2ggPSB7XG4gICAgICAgIHJlZjogZG9jUmVmLFxuICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgIG1hdGNoRGF0YTogbWF0Y2hpbmdGaWVsZHNbZmllbGRSZWZdXG4gICAgICB9XG4gICAgICBtYXRjaGVzW2RvY1JlZl0gPSBtYXRjaFxuICAgICAgcmVzdWx0cy5wdXNoKG1hdGNoKVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFNvcnQgdGhlIHJlc3VsdHMgb2JqZWN0cyBieSBzY29yZSwgaGlnaGVzdCBmaXJzdC5cbiAgICovXG4gIHJldHVybiByZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmVcbiAgfSlcbn1cblxuLyoqXG4gKiBQcmVwYXJlcyB0aGUgaW5kZXggZm9yIEpTT04gc2VyaWFsaXphdGlvbi5cbiAqXG4gKiBUaGUgc2NoZW1hIGZvciB0aGlzIEpTT04gYmxvYiB3aWxsIGJlIGRlc2NyaWJlZCBpbiBhXG4gKiBzZXBhcmF0ZSBKU09OIHNjaGVtYSBmaWxlLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGludmVydGVkSW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmludmVydGVkSW5kZXgpXG4gICAgLnNvcnQoKVxuICAgIC5tYXAoZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgIHJldHVybiBbdGVybSwgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dXVxuICAgIH0sIHRoaXMpXG5cbiAgdmFyIGZpZWxkVmVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRWZWN0b3JzKVxuICAgIC5tYXAoZnVuY3Rpb24gKHJlZikge1xuICAgICAgcmV0dXJuIFtyZWYsIHRoaXMuZmllbGRWZWN0b3JzW3JlZl0udG9KU09OKCldXG4gICAgfSwgdGhpcylcblxuICByZXR1cm4ge1xuICAgIHZlcnNpb246IGx1bnIudmVyc2lvbixcbiAgICBmaWVsZHM6IHRoaXMuZmllbGRzLFxuICAgIGZpZWxkVmVjdG9yczogZmllbGRWZWN0b3JzLFxuICAgIGludmVydGVkSW5kZXg6IGludmVydGVkSW5kZXgsXG4gICAgcGlwZWxpbmU6IHRoaXMucGlwZWxpbmUudG9KU09OKClcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgcHJldmlvdXNseSBzZXJpYWxpemVkIGx1bnIuSW5kZXhcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VyaWFsaXplZEluZGV4IC0gQSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgbHVuci5JbmRleFxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuSW5kZXgubG9hZCA9IGZ1bmN0aW9uIChzZXJpYWxpemVkSW5kZXgpIHtcbiAgdmFyIGF0dHJzID0ge30sXG4gICAgICBmaWVsZFZlY3RvcnMgPSB7fSxcbiAgICAgIHNlcmlhbGl6ZWRWZWN0b3JzID0gc2VyaWFsaXplZEluZGV4LmZpZWxkVmVjdG9ycyxcbiAgICAgIGludmVydGVkSW5kZXggPSB7fSxcbiAgICAgIHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4ID0gc2VyaWFsaXplZEluZGV4LmludmVydGVkSW5kZXgsXG4gICAgICB0b2tlblNldEJ1aWxkZXIgPSBuZXcgbHVuci5Ub2tlblNldC5CdWlsZGVyLFxuICAgICAgcGlwZWxpbmUgPSBsdW5yLlBpcGVsaW5lLmxvYWQoc2VyaWFsaXplZEluZGV4LnBpcGVsaW5lKVxuXG4gIGlmIChzZXJpYWxpemVkSW5kZXgudmVyc2lvbiAhPSBsdW5yLnZlcnNpb24pIHtcbiAgICBsdW5yLnV0aWxzLndhcm4oXCJWZXJzaW9uIG1pc21hdGNoIHdoZW4gbG9hZGluZyBzZXJpYWxpc2VkIGluZGV4LiBDdXJyZW50IHZlcnNpb24gb2YgbHVuciAnXCIgKyBsdW5yLnZlcnNpb24gKyBcIicgZG9lcyBub3QgbWF0Y2ggc2VyaWFsaXplZCBpbmRleCAnXCIgKyBzZXJpYWxpemVkSW5kZXgudmVyc2lvbiArIFwiJ1wiKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkVmVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0dXBsZSA9IHNlcmlhbGl6ZWRWZWN0b3JzW2ldLFxuICAgICAgICByZWYgPSB0dXBsZVswXSxcbiAgICAgICAgZWxlbWVudHMgPSB0dXBsZVsxXVxuXG4gICAgZmllbGRWZWN0b3JzW3JlZl0gPSBuZXcgbHVuci5WZWN0b3IoZWxlbWVudHMpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHR1cGxlID0gc2VyaWFsaXplZEludmVydGVkSW5kZXhbaV0sXG4gICAgICAgIHRlcm0gPSB0dXBsZVswXSxcbiAgICAgICAgcG9zdGluZyA9IHR1cGxlWzFdXG5cbiAgICB0b2tlblNldEJ1aWxkZXIuaW5zZXJ0KHRlcm0pXG4gICAgaW52ZXJ0ZWRJbmRleFt0ZXJtXSA9IHBvc3RpbmdcbiAgfVxuXG4gIHRva2VuU2V0QnVpbGRlci5maW5pc2goKVxuXG4gIGF0dHJzLmZpZWxkcyA9IHNlcmlhbGl6ZWRJbmRleC5maWVsZHNcblxuICBhdHRycy5maWVsZFZlY3RvcnMgPSBmaWVsZFZlY3RvcnNcbiAgYXR0cnMuaW52ZXJ0ZWRJbmRleCA9IGludmVydGVkSW5kZXhcbiAgYXR0cnMudG9rZW5TZXQgPSB0b2tlblNldEJ1aWxkZXIucm9vdFxuICBhdHRycy5waXBlbGluZSA9IHBpcGVsaW5lXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkluZGV4KGF0dHJzKVxufVxuLyohXG4gKiBsdW5yLkJ1aWxkZXJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuQnVpbGRlciBwZXJmb3JtcyBpbmRleGluZyBvbiBhIHNldCBvZiBkb2N1bWVudHMgYW5kXG4gKiByZXR1cm5zIGluc3RhbmNlcyBvZiBsdW5yLkluZGV4IHJlYWR5IGZvciBxdWVyeWluZy5cbiAqXG4gKiBBbGwgY29uZmlndXJhdGlvbiBvZiB0aGUgaW5kZXggaXMgZG9uZSB2aWEgdGhlIGJ1aWxkZXIsIHRoZVxuICogZmllbGRzIHRvIGluZGV4LCB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlLCB0aGUgdGV4dCBwcm9jZXNzaW5nXG4gKiBwaXBlbGluZSBhbmQgZG9jdW1lbnQgc2NvcmluZyBwYXJhbWV0ZXJzIGFyZSBhbGwgc2V0IG9uIHRoZVxuICogYnVpbGRlciBiZWZvcmUgaW5kZXhpbmcuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJvcGVydHkge3N0cmluZ30gX3JlZiAtIEludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlIGZpZWxkLlxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gX2ZpZWxkcyAtIEludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgZmllbGRzIHRvIGluZGV4LlxuICogQHByb3BlcnR5IHtvYmplY3R9IGludmVydGVkSW5kZXggLSBUaGUgaW52ZXJ0ZWQgaW5kZXggbWFwcyB0ZXJtcyB0byBkb2N1bWVudCBmaWVsZHMuXG4gKiBAcHJvcGVydHkge29iamVjdH0gZG9jdW1lbnRUZXJtRnJlcXVlbmNpZXMgLSBLZWVwcyB0cmFjayBvZiBkb2N1bWVudCB0ZXJtIGZyZXF1ZW5jaWVzLlxuICogQHByb3BlcnR5IHtvYmplY3R9IGRvY3VtZW50TGVuZ3RocyAtIEtlZXBzIHRyYWNrIG9mIHRoZSBsZW5ndGggb2YgZG9jdW1lbnRzIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7bHVuci50b2tlbml6ZXJ9IHRva2VuaXplciAtIEZ1bmN0aW9uIGZvciBzcGxpdHRpbmcgc3RyaW5ncyBpbnRvIHRva2VucyBmb3IgaW5kZXhpbmcuXG4gKiBAcHJvcGVydHkge2x1bnIuUGlwZWxpbmV9IHBpcGVsaW5lIC0gVGhlIHBpcGVsaW5lIHBlcmZvcm1zIHRleHQgcHJvY2Vzc2luZyBvbiB0b2tlbnMgYmVmb3JlIGluZGV4aW5nLlxuICogQHByb3BlcnR5IHtsdW5yLlBpcGVsaW5lfSBzZWFyY2hQaXBlbGluZSAtIEEgcGlwZWxpbmUgZm9yIHByb2Nlc3Npbmcgc2VhcmNoIHRlcm1zIGJlZm9yZSBxdWVyeWluZyB0aGUgaW5kZXguXG4gKiBAcHJvcGVydHkge251bWJlcn0gZG9jdW1lbnRDb3VudCAtIEtlZXBzIHRyYWNrIG9mIHRoZSB0b3RhbCBudW1iZXIgb2YgZG9jdW1lbnRzIGluZGV4ZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gX2IgLSBBIHBhcmFtZXRlciB0byBjb250cm9sIGZpZWxkIGxlbmd0aCBub3JtYWxpemF0aW9uLCBzZXR0aW5nIHRoaXMgdG8gMCBkaXNhYmxlZCBub3JtYWxpemF0aW9uLCAxIGZ1bGx5IG5vcm1hbGl6ZXMgZmllbGQgbGVuZ3RocywgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMC43NS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfazEgLSBBIHBhcmFtZXRlciB0byBjb250cm9sIGhvdyBxdWlja2x5IGFuIGluY3JlYXNlIGluIHRlcm0gZnJlcXVlbmN5IHJlc3VsdHMgaW4gdGVybSBmcmVxdWVuY3kgc2F0dXJhdGlvbiwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4yLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRlcm1JbmRleCAtIEEgY291bnRlciBpbmNyZW1lbnRlZCBmb3IgZWFjaCB1bmlxdWUgdGVybSwgdXNlZCB0byBpZGVudGlmeSBhIHRlcm1zIHBvc2l0aW9uIGluIHRoZSB2ZWN0b3Igc3BhY2UuXG4gKiBAcHJvcGVydHkge2FycmF5fSBtZXRhZGF0YVdoaXRlbGlzdCAtIEEgbGlzdCBvZiBtZXRhZGF0YSBrZXlzIHRoYXQgaGF2ZSBiZWVuIHdoaXRlbGlzdGVkIGZvciBlbnRyeSBpbiB0aGUgaW5kZXguXG4gKi9cbmx1bnIuQnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fcmVmID0gXCJpZFwiXG4gIHRoaXMuX2ZpZWxkcyA9IFtdXG4gIHRoaXMuaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyA9IHt9XG4gIHRoaXMuZmllbGRMZW5ndGhzID0ge31cbiAgdGhpcy50b2tlbml6ZXIgPSBsdW5yLnRva2VuaXplclxuICB0aGlzLnBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5zZWFyY2hQaXBlbGluZSA9IG5ldyBsdW5yLlBpcGVsaW5lXG4gIHRoaXMuZG9jdW1lbnRDb3VudCA9IDBcbiAgdGhpcy5fYiA9IDAuNzVcbiAgdGhpcy5fazEgPSAxLjJcbiAgdGhpcy50ZXJtSW5kZXggPSAwXG4gIHRoaXMubWV0YWRhdGFXaGl0ZWxpc3QgPSBbXVxufVxuXG4vKipcbiAqIFNldHMgdGhlIGRvY3VtZW50IGZpZWxkIHVzZWQgYXMgdGhlIGRvY3VtZW50IHJlZmVyZW5jZS4gRXZlcnkgZG9jdW1lbnQgbXVzdCBoYXZlIHRoaXMgZmllbGQuXG4gKiBUaGUgdHlwZSBvZiB0aGlzIGZpZWxkIGluIHRoZSBkb2N1bWVudCBzaG91bGQgYmUgYSBzdHJpbmcsIGlmIGl0IGlzIG5vdCBhIHN0cmluZyBpdCB3aWxsIGJlXG4gKiBjb2VyY2VkIGludG8gYSBzdHJpbmcgYnkgY2FsbGluZyB0b1N0cmluZy5cbiAqXG4gKiBUaGUgZGVmYXVsdCByZWYgaXMgJ2lkJy5cbiAqXG4gKiBUaGUgcmVmIHNob3VsZCBfbm90XyBiZSBjaGFuZ2VkIGR1cmluZyBpbmRleGluZywgaXQgc2hvdWxkIGJlIHNldCBiZWZvcmUgYW55IGRvY3VtZW50cyBhcmVcbiAqIGFkZGVkIHRvIHRoZSBpbmRleC4gQ2hhbmdpbmcgaXQgZHVyaW5nIGluZGV4aW5nIGNhbiBsZWFkIHRvIGluY29uc2lzdGVudCByZXN1bHRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSBUaGUgbmFtZSBvZiB0aGUgcmVmZXJlbmNlIGZpZWxkIGluIHRoZSBkb2N1bWVudC5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHRoaXMuX3JlZiA9IHJlZlxufVxuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCB0byB0aGUgbGlzdCBvZiBkb2N1bWVudCBmaWVsZHMgdGhhdCB3aWxsIGJlIGluZGV4ZWQuIEV2ZXJ5IGRvY3VtZW50IGJlaW5nXG4gKiBpbmRleGVkIHNob3VsZCBoYXZlIHRoaXMgZmllbGQuIE51bGwgdmFsdWVzIGZvciB0aGlzIGZpZWxkIGluIGluZGV4ZWQgZG9jdW1lbnRzIHdpbGxcbiAqIG5vdCBjYXVzZSBlcnJvcnMgYnV0IHdpbGwgbGltaXQgdGhlIGNoYW5jZSBvZiB0aGF0IGRvY3VtZW50IGJlaW5nIHJldHJpZXZlZCBieSBzZWFyY2hlcy5cbiAqXG4gKiBBbGwgZmllbGRzIHNob3VsZCBiZSBhZGRlZCBiZWZvcmUgYWRkaW5nIGRvY3VtZW50cyB0byB0aGUgaW5kZXguIEFkZGluZyBmaWVsZHMgYWZ0ZXJcbiAqIGEgZG9jdW1lbnQgaGFzIGJlZW4gaW5kZXhlZCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIGFscmVhZHkgaW5kZXhlZCBkb2N1bWVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIG5hbWUgb2YgYSBmaWVsZCB0byBpbmRleCBpbiBhbGwgZG9jdW1lbnRzLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24gKGZpZWxkKSB7XG4gIHRoaXMuX2ZpZWxkcy5wdXNoKGZpZWxkKVxufVxuXG4vKipcbiAqIEEgcGFyYW1ldGVyIHRvIHR1bmUgdGhlIGFtb3VudCBvZiBmaWVsZCBsZW5ndGggbm9ybWFsaXNhdGlvbiB0aGF0IGlzIGFwcGxpZWQgd2hlblxuICogY2FsY3VsYXRpbmcgcmVsZXZhbmNlIHNjb3Jlcy4gQSB2YWx1ZSBvZiAwIHdpbGwgY29tcGxldGVseSBkaXNhYmxlIGFueSBub3JtYWxpc2F0aW9uXG4gKiBhbmQgYSB2YWx1ZSBvZiAxIHdpbGwgZnVsbHkgbm9ybWFsaXNlIGZpZWxkIGxlbmd0aHMuIFRoZSBkZWZhdWx0IGlzIDAuNzUuIFZhbHVlcyBvZiBiXG4gKiB3aWxsIGJlIGNsYW1wZWQgdG8gdGhlIHJhbmdlIDAgLSAxLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBUaGUgdmFsdWUgdG8gc2V0IGZvciB0aGlzIHR1bmluZyBwYXJhbWV0ZXIuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYiA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgaWYgKG51bWJlciA8IDApIHtcbiAgICB0aGlzLl9iID0gMFxuICB9IGVsc2UgaWYgKG51bWJlciA+IDEpIHtcbiAgICB0aGlzLl9iID0gMVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2IgPSBudW1iZXJcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyYW1ldGVyIHRoYXQgY29udHJvbHMgdGhlIHNwZWVkIGF0IHdoaWNoIGEgcmlzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm1cbiAqIGZyZXF1ZW5jeSBzYXR1cmF0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLjIuIFNldHRpbmcgdGhpcyB0byBhIGhpZ2hlciB2YWx1ZSB3aWxsIGdpdmVcbiAqIHNsb3dlciBzYXR1cmF0aW9uIGxldmVscywgYSBsb3dlciB2YWx1ZSB3aWxsIHJlc3VsdCBpbiBxdWlja2VyIHNhdHVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5rMSA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgdGhpcy5fazEgPSBudW1iZXJcbn1cblxuLyoqXG4gKiBBZGRzIGEgZG9jdW1lbnQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEJlZm9yZSBhZGRpbmcgZmllbGRzIHRvIHRoZSBpbmRleCB0aGUgaW5kZXggc2hvdWxkIGhhdmUgYmVlbiBmdWxseSBzZXR1cCwgd2l0aCB0aGUgZG9jdW1lbnRcbiAqIHJlZiBhbmQgYWxsIGZpZWxkcyB0byBpbmRleCBhbHJlYWR5IGhhdmluZyBiZWVuIHNwZWNpZmllZC5cbiAqXG4gKiBUaGUgZG9jdW1lbnQgbXVzdCBoYXZlIGEgZmllbGQgbmFtZSBhcyBzcGVjaWZpZWQgYnkgdGhlIHJlZiAoYnkgZGVmYXVsdCB0aGlzIGlzICdpZCcpIGFuZFxuICogaXQgc2hvdWxkIGhhdmUgYWxsIGZpZWxkcyBkZWZpbmVkIGZvciBpbmRleGluZywgdGhvdWdoIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlcyB3aWxsIG5vdFxuICogY2F1c2UgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2MgLSBUaGUgZG9jdW1lbnQgdG8gYWRkIHRvIHRoZSBpbmRleC5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gIHZhciBkb2NSZWYgPSBkb2NbdGhpcy5fcmVmXVxuXG4gIHRoaXMuZG9jdW1lbnRDb3VudCArPSAxXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGROYW1lID0gdGhpcy5fZmllbGRzW2ldLFxuICAgICAgICBmaWVsZCA9IGRvY1tmaWVsZE5hbWVdLFxuICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VuaXplcihmaWVsZCksXG4gICAgICAgIHRlcm1zID0gdGhpcy5waXBlbGluZS5ydW4odG9rZW5zKSxcbiAgICAgICAgZmllbGRSZWYgPSBuZXcgbHVuci5GaWVsZFJlZiAoZG9jUmVmLCBmaWVsZE5hbWUpLFxuICAgICAgICBmaWVsZFRlcm1zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gICAgdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llc1tmaWVsZFJlZl0gPSBmaWVsZFRlcm1zXG4gICAgdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdID0gMFxuXG4gICAgLy8gc3RvcmUgdGhlIGxlbmd0aCBvZiB0aGlzIGZpZWxkIGZvciB0aGlzIGRvY3VtZW50XG4gICAgdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdICs9IHRlcm1zLmxlbmd0aFxuXG4gICAgLy8gY2FsY3VsYXRlIHRlcm0gZnJlcXVlbmNpZXMgZm9yIHRoaXMgZmllbGRcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW2pdXG5cbiAgICAgIGlmIChmaWVsZFRlcm1zW3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICBmaWVsZFRlcm1zW3Rlcm1dID0gMFxuICAgICAgfVxuXG4gICAgICBmaWVsZFRlcm1zW3Rlcm1dICs9IDFcblxuICAgICAgLy8gYWRkIHRvIGludmVydGVkIGluZGV4XG4gICAgICAvLyBjcmVhdGUgYW4gaW5pdGlhbCBwb3N0aW5nIGlmIG9uZSBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgcG9zdGluZyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgcG9zdGluZ1tcIl9pbmRleFwiXSA9IHRoaXMudGVybUluZGV4XG4gICAgICAgIHRoaXMudGVybUluZGV4ICs9IDFcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMuX2ZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIHBvc3RpbmdbdGhpcy5fZmllbGRzW2tdXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSA9IHBvc3RpbmdcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuIGVudHJ5IGZvciB0aGlzIHRlcm0vZmllbGROYW1lL2RvY1JlZiB0byB0aGUgaW52ZXJ0ZWRJbmRleFxuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIGFsbCB3aGl0ZWxpc3RlZCBtZXRhZGF0YSBhYm91dCB0aGlzIHRva2VuIGluIHRoZVxuICAgICAgLy8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdC5sZW5ndGg7IGwrKykge1xuICAgICAgICB2YXIgbWV0YWRhdGFLZXkgPSB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0W2xdLFxuICAgICAgICAgICAgbWV0YWRhdGEgPSB0ZXJtLm1ldGFkYXRhW21ldGFkYXRhS2V5XVxuXG4gICAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XS5wdXNoKG1ldGFkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYXZlcmFnZSBkb2N1bWVudCBsZW5ndGggZm9yIHRoaXMgaW5kZXhcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNhbGN1bGF0ZUF2ZXJhZ2VGaWVsZExlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRMZW5ndGhzKSxcbiAgICAgIG51bWJlck9mRmllbGRzID0gZmllbGRSZWZzLmxlbmd0aCxcbiAgICAgIGFjY3VtdWxhdG9yID0ge30sXG4gICAgICBkb2N1bWVudHNXaXRoRmllbGQgPSB7fVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZGaWVsZHM7IGkrKykge1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhmaWVsZFJlZnNbaV0pLFxuICAgICAgICBmaWVsZCA9IGZpZWxkUmVmLmZpZWxkTmFtZVxuXG4gICAgZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSB8fCAoZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSA9IDApXG4gICAgZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSArPSAxXG5cbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gfHwgKGFjY3VtdWxhdG9yW2ZpZWxkXSA9IDApXG4gICAgYWNjdW11bGF0b3JbZmllbGRdICs9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGQgPSB0aGlzLl9maWVsZHNbaV1cbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gPSBhY2N1bXVsYXRvcltmaWVsZF0gLyBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdXG4gIH1cblxuICB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aCA9IGFjY3VtdWxhdG9yXG59XG5cbi8qKlxuICogQnVpbGRzIGEgdmVjdG9yIHNwYWNlIG1vZGVsIG9mIGV2ZXJ5IGRvY3VtZW50IHVzaW5nIGx1bnIuVmVjdG9yXG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jcmVhdGVGaWVsZFZlY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmaWVsZFZlY3RvcnMgPSB7fSxcbiAgICAgIGZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXMpLFxuICAgICAgZmllbGRSZWZzTGVuZ3RoID0gZmllbGRSZWZzLmxlbmd0aCxcbiAgICAgIHRlcm1JZGZDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkUmVmc0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkID0gZmllbGRSZWYuZmllbGROYW1lLFxuICAgICAgICBmaWVsZExlbmd0aCA9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSxcbiAgICAgICAgZmllbGRWZWN0b3IgPSBuZXcgbHVuci5WZWN0b3IsXG4gICAgICAgIHRlcm1GcmVxdWVuY2llcyA9IHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXNbZmllbGRSZWZdLFxuICAgICAgICB0ZXJtcyA9IE9iamVjdC5rZXlzKHRlcm1GcmVxdWVuY2llcyksXG4gICAgICAgIHRlcm1zTGVuZ3RoID0gdGVybXMubGVuZ3RoXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zTGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal0sXG4gICAgICAgICAgdGYgPSB0ZXJtRnJlcXVlbmNpZXNbdGVybV0sXG4gICAgICAgICAgdGVybUluZGV4ID0gdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dLl9pbmRleCxcbiAgICAgICAgICBpZGYsIHNjb3JlLCBzY29yZVdpdGhQcmVjaXNpb25cblxuICAgICAgaWYgKHRlcm1JZGZDYWNoZVt0ZXJtXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlkZiA9IGx1bnIuaWRmKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSwgdGhpcy5kb2N1bWVudENvdW50KVxuICAgICAgICB0ZXJtSWRmQ2FjaGVbdGVybV0gPSBpZGZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkZiA9IHRlcm1JZGZDYWNoZVt0ZXJtXVxuICAgICAgfVxuXG4gICAgICBzY29yZSA9IGlkZiAqICgodGhpcy5fazEgKyAxKSAqIHRmKSAvICh0aGlzLl9rMSAqICgxIC0gdGhpcy5fYiArIHRoaXMuX2IgKiAoZmllbGRMZW5ndGggLyB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aFtmaWVsZF0pKSArIHRmKVxuICAgICAgc2NvcmVXaXRoUHJlY2lzaW9uID0gTWF0aC5yb3VuZChzY29yZSAqIDEwMDApIC8gMTAwMFxuICAgICAgLy8gQ29udmVydHMgMS4yMzQ1Njc4OSB0byAxLjIzNC5cbiAgICAgIC8vIFJlZHVjaW5nIHRoZSBwcmVjaXNpb24gc28gdGhhdCB0aGUgdmVjdG9ycyB0YWtlIHVwIGxlc3NcbiAgICAgIC8vIHNwYWNlIHdoZW4gc2VyaWFsaXNlZC4gRG9pbmcgaXQgbm93IHNvIHRoYXQgdGhleSBiZWhhdmVcbiAgICAgIC8vIHRoZSBzYW1lIGJlZm9yZSBhbmQgYWZ0ZXIgc2VyaWFsaXNhdGlvbi4gQWxzbywgdGhpcyBpc1xuICAgICAgLy8gdGhlIGZhc3Rlc3QgYXBwcm9hY2ggdG8gcmVkdWNpbmcgYSBudW1iZXIncyBwcmVjaXNpb24gaW5cbiAgICAgIC8vIEphdmFTY3JpcHQuXG5cbiAgICAgIGZpZWxkVmVjdG9yLmluc2VydCh0ZXJtSW5kZXgsIHNjb3JlV2l0aFByZWNpc2lvbilcbiAgICB9XG5cbiAgICBmaWVsZFZlY3RvcnNbZmllbGRSZWZdID0gZmllbGRWZWN0b3JcbiAgfVxuXG4gIHRoaXMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCBvZiBhbGwgdG9rZW5zIGluIHRoZSBpbmRleCB1c2luZyBsdW5yLlRva2VuU2V0XG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jcmVhdGVUb2tlblNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy50b2tlblNldCA9IGx1bnIuVG9rZW5TZXQuZnJvbUFycmF5KFxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW52ZXJ0ZWRJbmRleCkuc29ydCgpXG4gIClcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIGluZGV4LCBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBsdW5yLkluZGV4LlxuICpcbiAqIFRoaXMgY29tcGxldGVzIHRoZSBpbmRleGluZyBwcm9jZXNzIGFuZCBzaG91bGQgb25seSBiZSBjYWxsZWRcbiAqIG9uY2UgYWxsIGRvY3VtZW50cyBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4fVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhbGN1bGF0ZUF2ZXJhZ2VGaWVsZExlbmd0aHMoKVxuICB0aGlzLmNyZWF0ZUZpZWxkVmVjdG9ycygpXG4gIHRoaXMuY3JlYXRlVG9rZW5TZXQoKVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleCh7XG4gICAgaW52ZXJ0ZWRJbmRleDogdGhpcy5pbnZlcnRlZEluZGV4LFxuICAgIGZpZWxkVmVjdG9yczogdGhpcy5maWVsZFZlY3RvcnMsXG4gICAgdG9rZW5TZXQ6IHRoaXMudG9rZW5TZXQsXG4gICAgZmllbGRzOiB0aGlzLl9maWVsZHMsXG4gICAgcGlwZWxpbmU6IHRoaXMuc2VhcmNoUGlwZWxpbmVcbiAgfSlcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGx1Z2luIHRvIHRoZSBpbmRleCBidWlsZGVyLlxuICpcbiAqIEEgcGx1Z2luIGlzIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgY29udGV4dC5cbiAqIFBsdWdpbnMgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXNlIG9yIGV4dGVuZCB0aGUgYmVoYXZpb3VyIG9mIHRoZSBpbmRleFxuICogaW4gc29tZSB3YXkuIEEgcGx1Z2luIGlzIGp1c3QgYSBmdW5jdGlvbiwgdGhhdCBlbmNhcHN1bGF0ZWQgdGhlIGN1c3RvbVxuICogYmVoYXZpb3VyIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBidWlsZGluZyB0aGUgaW5kZXguXG4gKlxuICogVGhlIHBsdWdpbiBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBhcmd1bWVudCwgYWRkaXRpb25hbFxuICogYXJndW1lbnRzIGNhbiBhbHNvIGJlIHBhc3NlZCB3aGVuIGNhbGxpbmcgdXNlLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luIFRoZSBwbHVnaW4gdG8gYXBwbHkuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICBhcmdzLnVuc2hpZnQodGhpcylcbiAgZm4uYXBwbHkodGhpcywgYXJncylcbn1cbi8qKlxuICogQ29udGFpbnMgYW5kIGNvbGxlY3RzIG1ldGFkYXRhIGFib3V0IGEgbWF0Y2hpbmcgZG9jdW1lbnQuXG4gKiBBIHNpbmdsZSBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSBpcyByZXR1cm5lZCBhcyBwYXJ0IG9mIGV2ZXJ5XG4gKiBsdW5yLkluZGV4flJlc3VsdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKiBAcHJvcGVydHkge29iamVjdH0gbWV0YWRhdGEgLSBBIGNsb25lZCBjb2xsZWN0aW9uIG9mIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRvY3VtZW50LlxuICogQHNlZSB7QGxpbmsgbHVuci5JbmRleH5SZXN1bHR9XG4gKi9cbmx1bnIuTWF0Y2hEYXRhID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICB2YXIgY2xvbmVkTWV0YWRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgbWV0YWRhdGFLZXlzID0gT2JqZWN0LmtleXMobWV0YWRhdGEpXG5cbiAgLy8gQ2xvbmluZyB0aGUgbWV0YWRhdGEgdG8gcHJldmVudCB0aGUgb3JpZ2luYWxcbiAgLy8gYmVpbmcgbXV0YXRlZCBkdXJpbmcgbWF0Y2ggZGF0YSBjb21iaW5hdGlvbi5cbiAgLy8gTWV0YWRhdGEgaXMga2VwdCBpbiBhbiBhcnJheSB3aXRoaW4gdGhlIGludmVydGVkXG4gIC8vIGluZGV4IHNvIGNsb25pbmcgdGhlIGRhdGEgY2FuIGJlIGRvbmUgd2l0aFxuICAvLyBBcnJheSNzbGljZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cbiAgICBjbG9uZWRNZXRhZGF0YVtrZXldID0gbWV0YWRhdGFba2V5XS5zbGljZSgpXG4gIH1cblxuICB0aGlzLm1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IGNsb25lZE1ldGFkYXRhXG59XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgd2lsbCBiZSBjcmVhdGVkIGZvciBldmVyeSB0ZXJtIHRoYXQgbWF0Y2hlcyBhXG4gKiBkb2N1bWVudC4gSG93ZXZlciBvbmx5IG9uZSBpbnN0YW5jZSBpcyByZXF1aXJlZCBpbiBhIGx1bnIuSW5kZXh+UmVzdWx0LiBUaGlzXG4gKiBtZXRob2QgY29tYmluZXMgbWV0YWRhdGEgZnJvbSBhbm90aGVyIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIHdpdGggdGhpc1xuICogb2JqZWN0cyBtZXRhZGF0YS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuTWF0Y2hEYXRhfSBvdGhlck1hdGNoRGF0YSAtIEFub3RoZXIgaW5zdGFuY2Ugb2YgbWF0Y2ggZGF0YSB0byBtZXJnZSB3aXRoIHRoaXMgb25lLlxuICogQHNlZSB7QGxpbmsgbHVuci5JbmRleH5SZXN1bHR9XG4gKi9cbmx1bnIuTWF0Y2hEYXRhLnByb3RvdHlwZS5jb21iaW5lID0gZnVuY3Rpb24gKG90aGVyTWF0Y2hEYXRhKSB7XG4gIHZhciB0ZXJtcyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGVybXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGVybSA9IHRlcm1zW2ldLFxuICAgICAgICBmaWVsZHMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXSlcblxuICAgIGlmICh0aGlzLm1ldGFkYXRhW3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZpZWxkcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIGZpZWxkID0gZmllbGRzW2pdLFxuICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0pXG5cbiAgICAgIGlmICh0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXVxuXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSBvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldLmNvbmNhdChvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSlcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIG1ldGFkYXRhIGZvciBhIHRlcm0vZmllbGQgcGFpciB0byB0aGlzIGluc3RhbmNlIG9mIG1hdGNoIGRhdGEuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gLSBUaGUgdGVybSB0aGlzIG1hdGNoIGRhdGEgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgLSBUaGUgZmllbGQgaW4gd2hpY2ggdGhlIHRlcm0gd2FzIGZvdW5kXG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgLSBUaGUgbWV0YWRhdGEgcmVjb3JkZWQgYWJvdXQgdGhpcyB0ZXJtIGluIHRoaXMgZmllbGRcbiAqL1xubHVuci5NYXRjaERhdGEucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZXJtLCBmaWVsZCwgbWV0YWRhdGEpIHtcbiAgaWYgKCEodGVybSBpbiB0aGlzLm1ldGFkYXRhKSkge1xuICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBtZXRhZGF0YVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCEoZmllbGQgaW4gdGhpcy5tZXRhZGF0YVt0ZXJtXSkpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IG1ldGFkYXRhXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgbWV0YWRhdGFLZXlzID0gT2JqZWN0LmtleXMobWV0YWRhdGEpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhZGF0YUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbWV0YWRhdGFLZXlzW2ldXG5cbiAgICBpZiAoa2V5IGluIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdKSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XS5jb25jYXQobWV0YWRhdGFba2V5XSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IG1ldGFkYXRhW2tleV1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQSBsdW5yLlF1ZXJ5IHByb3ZpZGVzIGEgcHJvZ3JhbW1hdGljIHdheSBvZiBkZWZpbmluZyBxdWVyaWVzIHRvIGJlIHBlcmZvcm1lZFxuICogYWdhaW5zdCBhIHtAbGluayBsdW5yLkluZGV4fS5cbiAqXG4gKiBQcmVmZXIgY29uc3RydWN0aW5nIGEgbHVuci5RdWVyeSB1c2luZyB0aGUge0BsaW5rIGx1bnIuSW5kZXgjcXVlcnl9IG1ldGhvZFxuICogc28gdGhlIHF1ZXJ5IG9iamVjdCBpcyBwcmUtaW5pdGlhbGl6ZWQgd2l0aCB0aGUgcmlnaHQgaW5kZXggZmllbGRzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByb3BlcnR5IHtsdW5yLlF1ZXJ5fkNsYXVzZVtdfSBjbGF1c2VzIC0gQW4gYXJyYXkgb2YgcXVlcnkgY2xhdXNlcy5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGFsbEZpZWxkcyAtIEFuIGFycmF5IG9mIGFsbCBhdmFpbGFibGUgZmllbGRzIGluIGEgbHVuci5JbmRleC5cbiAqL1xubHVuci5RdWVyeSA9IGZ1bmN0aW9uIChhbGxGaWVsZHMpIHtcbiAgdGhpcy5jbGF1c2VzID0gW11cbiAgdGhpcy5hbGxGaWVsZHMgPSBhbGxGaWVsZHNcbn1cblxuLyoqXG4gKiBDb25zdGFudHMgZm9yIGluZGljYXRpbmcgd2hhdCBraW5kIG9mIGF1dG9tYXRpYyB3aWxkY2FyZCBpbnNlcnRpb24gd2lsbCBiZSB1c2VkIHdoZW4gY29uc3RydWN0aW5nIGEgcXVlcnkgY2xhdXNlLlxuICpcbiAqIFRoaXMgYWxsb3dzIHdpbGRjYXJkcyB0byBiZSBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSB0ZXJtIHdpdGhvdXQgaGF2aW5nIHRvIG1hbnVhbGx5IGRvIGFueSBzdHJpbmdcbiAqIGNvbmNhdGVuYXRpb24uXG4gKlxuICogVGhlIHdpbGRjYXJkIGNvbnN0YW50cyBjYW4gYmUgYml0d2lzZSBjb21iaW5lZCB0byBzZWxlY3QgYm90aCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aWxkY2FyZHMuXG4gKlxuICogQGNvbnN0YW50XG4gKiBAZGVmYXVsdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpbGRjYXJkLk5PTkUgLSBUaGUgdGVybSB3aWxsIGhhdmUgbm8gd2lsZGNhcmRzIGluc2VydGVkLCB0aGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW91clxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpbGRjYXJkLkxFQURJTkcgLSBQcmVwZW5kIHRoZSB0ZXJtIHdpdGggYSB3aWxkY2FyZCwgdW5sZXNzIGEgbGVhZGluZyB3aWxkY2FyZCBhbHJlYWR5IGV4aXN0c1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpbGRjYXJkLlRSQUlMSU5HIC0gQXBwZW5kIGEgd2lsZGNhcmQgdG8gdGhlIHRlcm0sIHVubGVzcyBhIHRyYWlsaW5nIHdpbGRjYXJkIGFscmVhZHkgZXhpc3RzXG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjY2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjdGVybVxuICogQGV4YW1wbGUgPGNhcHRpb24+cXVlcnkgdGVybSB3aXRoIHRyYWlsaW5nIHdpbGRjYXJkPC9jYXB0aW9uPlxuICogcXVlcnkudGVybSgnZm9vJywgeyB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyB9KVxuICogQGV4YW1wbGUgPGNhcHRpb24+cXVlcnkgdGVybSB3aXRoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdpbGRjYXJkPC9jYXB0aW9uPlxuICogcXVlcnkudGVybSgnZm9vJywge1xuICogICB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HIHwgbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElOR1xuICogfSlcbiAqL1xubHVuci5RdWVyeS53aWxkY2FyZCA9IG5ldyBTdHJpbmcgKFwiKlwiKVxubHVuci5RdWVyeS53aWxkY2FyZC5OT05FID0gMFxubHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HID0gMVxubHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyA9IDJcblxuLyoqXG4gKiBBIHNpbmdsZSBjbGF1c2UgaW4gYSB7QGxpbmsgbHVuci5RdWVyeX0gY29udGFpbnMgYSB0ZXJtIGFuZCBkZXRhaWxzIG9uIGhvdyB0b1xuICogbWF0Y2ggdGhhdCB0ZXJtIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGZpZWxkcyAtIFRoZSBmaWVsZHMgaW4gYW4gaW5kZXggdGhpcyBjbGF1c2Ugc2hvdWxkIGJlIG1hdGNoZWQgYWdhaW5zdC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYm9vc3Q9MV0gLSBBbnkgYm9vc3QgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB3aGVuIG1hdGNoaW5nIHRoaXMgY2xhdXNlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtlZGl0RGlzdGFuY2VdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgaGF2ZSBmdXp6eSBtYXRjaGluZyBhcHBsaWVkLCBhbmQgaG93IGZ1enp5IHRoZSBtYXRjaCBzaG91bGQgYmUuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt1c2VQaXBlbGluZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgc2VhcmNoIHBpcGVsaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWxkY2FyZD0wXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGhhdmUgd2lsZGNhcmRzIGFwcGVuZGVkIG9yIHByZXBlbmRlZC5cbiAqL1xuXG4vKipcbiAqIEFkZHMgYSB7QGxpbmsgbHVuci5RdWVyeX5DbGF1c2V9IHRvIHRoaXMgcXVlcnkuXG4gKlxuICogVW5sZXNzIHRoZSBjbGF1c2UgY29udGFpbnMgdGhlIGZpZWxkcyB0byBiZSBtYXRjaGVkIGFsbCBmaWVsZHMgd2lsbCBiZSBtYXRjaGVkLiBJbiBhZGRpdGlvblxuICogYSBkZWZhdWx0IGJvb3N0IG9mIDEgaXMgYXBwbGllZCB0byB0aGUgY2xhdXNlLlxuICpcbiAqIEBwYXJhbSB7bHVuci5RdWVyeX5DbGF1c2V9IGNsYXVzZSAtIFRoZSBjbGF1c2UgdG8gYWRkIHRvIHRoaXMgcXVlcnkuXG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAcmV0dXJucyB7bHVuci5RdWVyeX1cbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUuY2xhdXNlID0gZnVuY3Rpb24gKGNsYXVzZSkge1xuICBpZiAoISgnZmllbGRzJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLmZpZWxkcyA9IHRoaXMuYWxsRmllbGRzXG4gIH1cblxuICBpZiAoISgnYm9vc3QnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UuYm9vc3QgPSAxXG4gIH1cblxuICBpZiAoISgndXNlUGlwZWxpbmUnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UudXNlUGlwZWxpbmUgPSB0cnVlXG4gIH1cblxuICBpZiAoISgnd2lsZGNhcmQnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2Uud2lsZGNhcmQgPSBsdW5yLlF1ZXJ5LndpbGRjYXJkLk5PTkVcbiAgfVxuXG4gIGlmICgoY2xhdXNlLndpbGRjYXJkICYgbHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HKSAmJiAoY2xhdXNlLnRlcm0uY2hhckF0KDApICE9IGx1bnIuUXVlcnkud2lsZGNhcmQpKSB7XG4gICAgY2xhdXNlLnRlcm0gPSBcIipcIiArIGNsYXVzZS50ZXJtXG4gIH1cblxuICBpZiAoKGNsYXVzZS53aWxkY2FyZCAmIGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcpICYmIChjbGF1c2UudGVybS5zbGljZSgtMSkgIT0gbHVuci5RdWVyeS53aWxkY2FyZCkpIHtcbiAgICBjbGF1c2UudGVybSA9IFwiXCIgKyBjbGF1c2UudGVybSArIFwiKlwiXG4gIH1cblxuICB0aGlzLmNsYXVzZXMucHVzaChjbGF1c2UpXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBBZGRzIGEgdGVybSB0byB0aGUgY3VycmVudCBxdWVyeSwgdW5kZXIgdGhlIGNvdmVycyB0aGlzIHdpbGwgY3JlYXRlIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfVxuICogdG8gdGhlIGxpc3Qgb2YgY2xhdXNlcyB0aGF0IG1ha2UgdXAgdGhpcyBxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybSAtIFRoZSB0ZXJtIHRvIGFkZCB0byB0aGUgcXVlcnkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQW55IGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBhZGQgdG8gdGhlIHF1ZXJ5IGNsYXVzZS5cbiAqIEByZXR1cm5zIHtsdW5yLlF1ZXJ5fVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQGV4YW1wbGUgPGNhcHRpb24+YWRkaW5nIGEgc2luZ2xlIHRlcm0gdG8gYSBxdWVyeTwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oXCJmb29cIilcbiAqIEBleGFtcGxlIDxjYXB0aW9uPmFkZGluZyBhIHNpbmdsZSB0ZXJtIHRvIGEgcXVlcnkgYW5kIHNwZWNpZnlpbmcgc2VhcmNoIGZpZWxkcywgdGVybSBib29zdCBhbmQgYXV0b21hdGljIHRyYWlsaW5nIHdpbGRjYXJkPC9jYXB0aW9uPlxuICogcXVlcnkudGVybShcImZvb1wiLCB7XG4gKiAgIGZpZWxkczogW1widGl0bGVcIl0sXG4gKiAgIGJvb3N0OiAxMCxcbiAqICAgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkdcbiAqIH0pXG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLnRlcm0gPSBmdW5jdGlvbiAodGVybSwgb3B0aW9ucykge1xuICB2YXIgY2xhdXNlID0gb3B0aW9ucyB8fCB7fVxuICBjbGF1c2UudGVybSA9IHRlcm1cblxuICB0aGlzLmNsYXVzZShjbGF1c2UpXG5cbiAgcmV0dXJuIHRoaXNcbn1cbmx1bnIuUXVlcnlQYXJzZUVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHN0YXJ0LCBlbmQpIHtcbiAgdGhpcy5uYW1lID0gXCJRdWVyeVBhcnNlRXJyb3JcIlxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gIHRoaXMuc3RhcnQgPSBzdGFydFxuICB0aGlzLmVuZCA9IGVuZFxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3Jcbmx1bnIuUXVlcnlMZXhlciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdGhpcy5sZXhlbWVzID0gW11cbiAgdGhpcy5zdHIgPSBzdHJcbiAgdGhpcy5sZW5ndGggPSBzdHIubGVuZ3RoXG4gIHRoaXMucG9zID0gMFxuICB0aGlzLnN0YXJ0ID0gMFxuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMgPSBbXVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeUxleGVyLmxleFRleHRcblxuICB3aGlsZSAoc3RhdGUpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKHRoaXMpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5zbGljZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN1YlNsaWNlcyA9IFtdLFxuICAgICAgc2xpY2VTdGFydCA9IHRoaXMuc3RhcnQsXG4gICAgICBzbGljZUVuZCA9IHRoaXMucG9zXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBzbGljZUVuZCA9IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9uc1tpXVxuICAgIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHNsaWNlRW5kKSlcbiAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gIH1cblxuICBzdWJTbGljZXMucHVzaCh0aGlzLnN0ci5zbGljZShzbGljZVN0YXJ0LCB0aGlzLnBvcykpXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGggPSAwXG5cbiAgcmV0dXJuIHN1YlNsaWNlcy5qb2luKCcnKVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodHlwZSkge1xuICB0aGlzLmxleGVtZXMucHVzaCh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBzdHI6IHRoaXMuc2xpY2VTdHJpbmcoKSxcbiAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICBlbmQ6IHRoaXMucG9zXG4gIH0pXG5cbiAgdGhpcy5zdGFydCA9IHRoaXMucG9zXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZXNjYXBlQ2hhcmFjdGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMucHVzaCh0aGlzLnBvcyAtIDEpXG4gIHRoaXMucG9zICs9IDFcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLkVPU1xuICB9XG5cbiAgdmFyIGNoYXIgPSB0aGlzLnN0ci5jaGFyQXQodGhpcy5wb3MpXG4gIHRoaXMucG9zICs9IDFcbiAgcmV0dXJuIGNoYXJcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucG9zIC0gdGhpcy5zdGFydFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmlnbm9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3RhcnQgPT0gdGhpcy5wb3MpIHtcbiAgICB0aGlzLnBvcyArPSAxXG4gIH1cblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5iYWNrdXAgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucG9zIC09IDFcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5hY2NlcHREaWdpdFJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNoYXIsIGNoYXJDb2RlXG5cbiAgZG8ge1xuICAgIGNoYXIgPSB0aGlzLm5leHQoKVxuICAgIGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApXG4gIH0gd2hpbGUgKGNoYXJDb2RlID4gNDcgJiYgY2hhckNvZGUgPCA1OClcblxuICBpZiAoY2hhciAhPSBsdW5yLlF1ZXJ5TGV4ZXIuRU9TKSB7XG4gICAgdGhpcy5iYWNrdXAoKVxuICB9XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUubW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucG9zIDwgdGhpcy5sZW5ndGhcbn1cblxubHVuci5RdWVyeUxleGVyLkVPUyA9ICdFT1MnXG5sdW5yLlF1ZXJ5TGV4ZXIuRklFTEQgPSAnRklFTEQnXG5sdW5yLlF1ZXJ5TGV4ZXIuVEVSTSA9ICdURVJNJ1xubHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0UgPSAnRURJVF9ESVNUQU5DRSdcbmx1bnIuUXVlcnlMZXhlci5CT09TVCA9ICdCT09TVCdcblxubHVuci5RdWVyeUxleGVyLmxleEZpZWxkID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmJhY2t1cCgpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkZJRUxEKVxuICBsZXhlci5pZ25vcmUoKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleFRlcm0gPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgaWYgKGxleGVyLndpZHRoKCkgPiAxKSB7XG4gICAgbGV4ZXIuYmFja3VwKClcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG5cbiAgbGV4ZXIuaWdub3JlKClcblxuICBpZiAobGV4ZXIubW9yZSgpKSB7XG4gICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0UpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4Qm9vc3QgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuaWdub3JlKClcbiAgbGV4ZXIuYWNjZXB0RGlnaXRSdW4oKVxuICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5CT09TVClcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhFT1MgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgfVxufVxuXG4vLyBUaGlzIG1hdGNoZXMgdGhlIHNlcGFyYXRvciB1c2VkIHdoZW4gdG9rZW5pc2luZyBmaWVsZHNcbi8vIHdpdGhpbiBhIGRvY3VtZW50LiBUaGVzZSBzaG91bGQgbWF0Y2ggb3RoZXJ3aXNlIGl0IGlzXG4vLyBub3QgcG9zc2libGUgdG8gc2VhcmNoIGZvciBzb21lIHRva2VucyB3aXRoaW4gYSBkb2N1bWVudC5cbi8vXG4vLyBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHVzZXIgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3Igb24gdGhlXG4vLyB0b2tlbml6ZXIgc28gaXQgX21pZ2h0XyBjbGFzaCB3aXRoIGFueSBvdGhlciBvZiB0aGUgc3BlY2lhbFxuLy8gY2hhcmFjdGVycyBhbHJlYWR5IHVzZWQgd2l0aGluIHRoZSBzZWFyY2ggc3RyaW5nLCBlLmcuIDouXG4vL1xuLy8gVGhpcyBtZWFucyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgc2VwYXJhdG9yIGluXG4vLyBzdWNoIGEgd2F5IHRoYXQgbWFrZXMgc29tZSB3b3JkcyB1bnNlYXJjaGFibGUgdXNpbmcgYSBzZWFyY2hcbi8vIHN0cmluZy5cbmx1bnIuUXVlcnlMZXhlci50ZXJtU2VwYXJhdG9yID0gbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yXG5cbmx1bnIuUXVlcnlMZXhlci5sZXhUZXh0ID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGNoYXIgPSBsZXhlci5uZXh0KClcblxuICAgIGlmIChjaGFyID09IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RU9TXG4gICAgfVxuXG4gICAgLy8gRXNjYXBlIGNoYXJhY3RlciBpcyAnXFwnXG4gICAgaWYgKGNoYXIuY2hhckNvZGVBdCgwKSA9PSA5Mikge1xuICAgICAgbGV4ZXIuZXNjYXBlQ2hhcmFjdGVyKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT0gXCI6XCIpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGRcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIn5cIikge1xuICAgICAgbGV4ZXIuYmFja3VwKClcbiAgICAgIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFZGl0RGlzdGFuY2VcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIl5cIikge1xuICAgICAgbGV4ZXIuYmFja3VwKClcbiAgICAgIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhCb29zdFxuICAgIH1cblxuICAgIGlmIChjaGFyLm1hdGNoKGx1bnIuUXVlcnlMZXhlci50ZXJtU2VwYXJhdG9yKSkge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXJtXG4gICAgfVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIgPSBmdW5jdGlvbiAoc3RyLCBxdWVyeSkge1xuICB0aGlzLmxleGVyID0gbmV3IGx1bnIuUXVlcnlMZXhlciAoc3RyKVxuICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgdGhpcy5jdXJyZW50Q2xhdXNlID0ge31cbiAgdGhpcy5sZXhlbWVJZHggPSAwXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxleGVyLnJ1bigpXG4gIHRoaXMubGV4ZW1lcyA9IHRoaXMubGV4ZXIubGV4ZW1lc1xuXG4gIHZhciBzdGF0ZSA9IGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZE9yVGVybVxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxuXG4gIHJldHVybiB0aGlzLnF1ZXJ5XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBlZWtMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxleGVtZXNbdGhpcy5sZXhlbWVJZHhdXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLmNvbnN1bWVMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZXhlbWUgPSB0aGlzLnBlZWtMZXhlbWUoKVxuICB0aGlzLmxleGVtZUlkeCArPSAxXG4gIHJldHVybiBsZXhlbWVcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUubmV4dENsYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbXBsZXRlZENsYXVzZSA9IHRoaXMuY3VycmVudENsYXVzZVxuICB0aGlzLnF1ZXJ5LmNsYXVzZShjb21wbGV0ZWRDbGF1c2UpXG4gIHRoaXMuY3VycmVudENsYXVzZSA9IHt9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZE9yVGVybSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChsZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0ZWQgZWl0aGVyIGEgZmllbGQgb3IgYSB0ZXJtLCBmb3VuZCBcIiArIGxleGVtZS50eXBlXG5cbiAgICAgIGlmIChsZXhlbWUuc3RyLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBcIiB3aXRoIHZhbHVlICdcIiArIGxleGVtZS5zdHIgKyBcIidcIlxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHBhcnNlci5xdWVyeS5hbGxGaWVsZHMuaW5kZXhPZihsZXhlbWUuc3RyKSA9PSAtMSkge1xuICAgIHZhciBwb3NzaWJsZUZpZWxkcyA9IHBhcnNlci5xdWVyeS5hbGxGaWVsZHMubWFwKGZ1bmN0aW9uIChmKSB7IHJldHVybiBcIidcIiArIGYgKyBcIidcIiB9KS5qb2luKCcsICcpLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBcInVucmVjb2duaXNlZCBmaWVsZCAnXCIgKyBsZXhlbWUuc3RyICsgXCInLCBwb3NzaWJsZSBmaWVsZHM6IFwiICsgcG9zc2libGVGaWVsZHNcblxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5maWVsZHMgPSBbbGV4ZW1lLnN0cl1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSwgZm91bmQgbm90aGluZ1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSwgZm91bmQgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UudGVybSA9IGxleGVtZS5zdHIudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChsZXhlbWUuc3RyLmluZGV4T2YoXCIqXCIpICE9IC0xKSB7XG4gICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UudXNlUGlwZWxpbmUgPSBmYWxzZVxuICB9XG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgZWRpdERpc3RhbmNlID0gcGFyc2VJbnQobGV4ZW1lLnN0ciwgMTApXG5cbiAgaWYgKGlzTmFOKGVkaXREaXN0YW5jZSkpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJlZGl0IGRpc3RhbmNlIG11c3QgYmUgbnVtZXJpY1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmVkaXREaXN0YW5jZSA9IGVkaXREaXN0YW5jZVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0ID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYm9vc3QgPSBwYXJzZUludChsZXhlbWUuc3RyLCAxMClcblxuICBpZiAoaXNOYU4oYm9vc3QpKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiYm9vc3QgbXVzdCBiZSBudW1lcmljXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuYm9vc3QgPSBib29zdFxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxuICAvKipcbiAgICogZXhwb3J0IHRoZSBtb2R1bGUgdmlhIEFNRCwgQ29tbW9uSlMgb3IgYXMgYSBicm93c2VyIGdsb2JhbFxuICAgKiBFeHBvcnQgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvcmV0dXJuRXhwb3J0cy5qc1xuICAgKi9cbiAgOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgIGRlZmluZShmYWN0b3J5KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAvKipcbiAgICAgICAqIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICogb25seSBDb21tb25KUy1saWtlIGVudmlyb21lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAqIGxpa2UgTm9kZS5cbiAgICAgICAqL1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgIHJvb3QubHVuciA9IGZhY3RvcnkoKVxuICAgIH1cbiAgfSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogSnVzdCByZXR1cm4gYSB2YWx1ZSB0byBkZWZpbmUgdGhlIG1vZHVsZSBleHBvcnQuXG4gICAgICogVGhpcyBleGFtcGxlIHJldHVybnMgYW4gb2JqZWN0LCBidXQgdGhlIG1vZHVsZVxuICAgICAqIGNhbiByZXR1cm4gYSBmdW5jdGlvbiBhcyB0aGUgZXhwb3J0ZWQgdmFsdWUuXG4gICAgICovXG4gICAgcmV0dXJuIGx1bnJcbiAgfSkpXG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuL1NpZGViYXIvUG9zaXRpb25cIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBvc2l0aW9uXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBzaWRlYmFycyB0byBsb2NrZWQgc3RhdGUgYW5kIGxpbWl0IGhlaWdodCB0byBwYXJlbnQgbm9kZVxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBTaWRlYmFyXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gcGFyZW50XyAtIFNpZGViYXIgY29udGFpbmVyXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHRfIC0gQ3VycmVudCBzaWRlYmFyIGhlaWdodFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBwYWRfIC0gUGFkIHdoZW4gaGVhZGVyIGlzIGZpeGVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGhlYWRlciAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcclxuICAgIGxldCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgICEocmVmLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuICAgIHRoaXMucGFyZW50XyA9IHJlZi5wYXJlbnROb2RlXHJcblxyXG4gICAgLyogUmV0cmlldmUgaGVhZGVyICovXHJcbiAgICByZWYgPSAodHlwZW9mIGhlYWRlciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlcilcclxuICAgICAgOiBoZWFkZXJcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIGN1cnJlbnQgaGVpZ2h0IGFuZCB0ZXN0IHdoZXRoZXIgaGVhZGVyIGlzIGZpeGVkICovXHJcbiAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgICB0aGlzLnBhZF8gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmhlYWRlcl8pLnBvc2l0aW9uID09PSBcImZpeGVkXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgc2lkZWJhciBzdGF0ZVxyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgY29uc3QgdG9wID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKFxyXG4gICAgICB0aGlzLnBhcmVudF8uY2hpbGRyZW4sIChvZmZzZXQsIGNoaWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG9mZnNldCwgY2hpbGQub2Zmc2V0VG9wKVxyXG4gICAgICB9LCAwKVxyXG5cclxuICAgIC8qIFNldCBsb2NrIG9mZnNldCBmb3IgZWxlbWVudCB3aXRoIGxhcmdlc3QgdG9wIG9mZnNldCAqL1xyXG4gICAgdGhpcy5vZmZzZXRfID0gdG9wIC0gKHRoaXMucGFkXyA/IHRoaXMuaGVhZGVyXy5vZmZzZXRIZWlnaHQgOiAwKVxyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGxvY2tlZCBzdGF0ZSBhbmQgaGVpZ2h0XHJcbiAgICpcclxuICAgKiBUaGUgaW5uZXIgaGVpZ2h0IG9mIHRoZSB3aW5kb3cgKD0gdGhlIHZpc2libGUgYXJlYSkgaXMgdGhlIG1heGltdW1cclxuICAgKiBwb3NzaWJsZSBoZWlnaHQgZm9yIHRoZSBzdHJldGNoaW5nIHNpZGViYXIuIFRoaXMgaGVpZ2h0IG11c3QgYmUgZGVkdWN0ZWRcclxuICAgKiBieSB0aGUgaGVpZ2h0IG9mIHRoZSBmaXhlZCBoZWFkZXIgKDU2cHgpLiBEZXBlbmRpbmcgb24gdGhlIHBhZ2UgeS1vZmZzZXQsXHJcbiAgICogdGhlIHRvcCBvZmZzZXQgb2YgdGhlIHNpZGViYXIgbXVzdCBiZSB0YWtlbiBpbnRvIGFjY291bnQsIGFzIHdlbGwgYXMgdGhlXHJcbiAgICogY2FzZSB3aGVyZSB0aGUgd2luZG93IGlzIHNjcm9sbGVkIGJleW9uZCB0aGUgc2lkZWJhciBjb250YWluZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50P30gZXYgLSBFdmVudFxyXG4gICAqL1xyXG4gIHVwZGF0ZShldikge1xyXG4gICAgY29uc3Qgb2Zmc2V0ICA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAgIC8qIFVwZGF0ZSBvZmZzZXQsIGluIGNhc2Ugd2luZG93IGlzIHJlc2l6ZWQgKi9cclxuICAgIGlmIChldiAmJiBldi50eXBlID09PSBcInJlc2l6ZVwiKVxyXG4gICAgICB0aGlzLnNldHVwKClcclxuXHJcbiAgICAvKiBTZXQgYm91bmRzIG9mIHNpZGViYXIgY29udGFpbmVyIC0gbXVzdCBiZSBjYWxjdWxhdGVkIG9uIGV2ZXJ5IHJ1biwgYXNcclxuICAgICAgIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQgbWlnaHQgY2hhbmdlIGR1ZSB0byBsb2FkaW5nIGltYWdlcyBldGMuICovXHJcbiAgICBjb25zdCBib3VuZHMgPSB7XHJcbiAgICAgIHRvcDogdGhpcy5wYWRfID8gdGhpcy5oZWFkZXJfLm9mZnNldEhlaWdodCA6IDAsXHJcbiAgICAgIGJvdHRvbTogdGhpcy5wYXJlbnRfLm9mZnNldFRvcCArIHRoaXMucGFyZW50Xy5vZmZzZXRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICAvKiBDYWxjdWxhdGUgbmV3IG9mZnNldCBhbmQgaGVpZ2h0ICovXHJcbiAgICBjb25zdCBoZWlnaHQgPSB2aXNpYmxlIC0gYm91bmRzLnRvcFxyXG4gICAgICAgICAgICAgICAgIC0gTWF0aC5tYXgoMCwgdGhpcy5vZmZzZXRfIC0gb2Zmc2V0KVxyXG4gICAgICAgICAgICAgICAgIC0gTWF0aC5tYXgoMCwgb2Zmc2V0ICsgdmlzaWJsZSAtIGJvdW5kcy5ib3R0b20pXHJcblxyXG4gICAgLyogSWYgaGVpZ2h0IGNoYW5nZWQsIHVwZGF0ZSBlbGVtZW50ICovXHJcbiAgICBpZiAoaGVpZ2h0ICE9PSB0aGlzLmhlaWdodF8pXHJcbiAgICAgIHRoaXMuZWxfLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaGVpZ2h0XyA9IGhlaWdodH1weGBcclxuXHJcbiAgICAvKiBTaWRlYmFyIHNob3VsZCBiZSBsb2NrZWQsIGFzIHdlJ3JlIGJlbG93IHBhcmVudCBvZmZzZXQgKi9cclxuICAgIGlmIChvZmZzZXQgPj0gdGhpcy5vZmZzZXRfKSB7XHJcbiAgICAgIGlmICh0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgIT09IFwibG9ja1wiKVxyXG4gICAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwibG9ja1wiXHJcblxyXG4gICAgLyogU2lkZWJhciBzaG91bGQgYmUgdW5sb2NrZWQsIGlmIGxvY2tlZCAqL1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPT09IFwibG9ja1wiKSB7XHJcbiAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGxvY2tlZCBzdGF0ZSBhbmQgaGVpZ2h0XHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5oZWlnaHQgPSBcIlwiXHJcbiAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TaWRlYmFyL1Bvc2l0aW9uLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBBZGFwdGVyIGZyb20gXCIuL1NvdXJjZS9BZGFwdGVyXCJcclxuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSBcIi4vU291cmNlL1JlcG9zaXRvcnlcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEFkYXB0ZXIsXHJcbiAgUmVwb3NpdG9yeVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi9BZGFwdGVyL0dpdEh1YlwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgR2l0SHViXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBBYnN0cmFjdCBmcm9tIFwiLi9BYnN0cmFjdFwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdEh1YiBleHRlbmRzIEFic3RyYWN0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgcmVwb3NpdG9yeSBpbmZvcm1hdGlvbiBmcm9tIEdpdEh1YlxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZV8gLSBOYW1lIG9mIHRoZSByZXBvc2l0b3J5XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEFuY2hvckVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBzdXBlcihlbClcclxuXHJcbiAgICAvKiBFeHRyYWN0IHVzZXIgKGFuZCByZXBvc2l0b3J5IG5hbWUpIGZyb20gVVJMLCBhcyB3ZSBoYXZlIHRvIHF1ZXJ5IGZvciBhbGxcclxuICAgICAgIHJlcG9zaXRvcmllcywgdG8gb21pdCA0MDQgZXJyb3JzIGZvciBwcml2YXRlIHJlcG9zaXRvcmllcyAqL1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eLitnaXRodWJcXC5jb21cXC8oW14vXSspXFwvPyhbXi9dKyk/LiokL1xyXG4gICAgICAuZXhlYyh0aGlzLmJhc2VfKVxyXG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgY29uc3QgWywgdXNlciwgbmFtZV0gPSBtYXRjaGVzXHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIGJhc2UgVVJMIGFuZCByZXBvc2l0b3J5IG5hbWUgKi9cclxuICAgICAgdGhpcy5iYXNlXyA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcn0vcmVwb3NgXHJcbiAgICAgIHRoaXMubmFtZV8gPSBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCByZWxldmFudCByZXBvc2l0b3J5IGluZm9ybWF0aW9uIGZyb20gR2l0SHViXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PHN0cmluZz4+fSBQcm9taXNlIHJldHVybmluZyBhbiBhcnJheSBvZiBmYWN0c1xyXG4gICAqL1xyXG4gIGZldGNoXygpIHtcclxuICAgIGNvbnN0IHBhZ2luYXRlID0gKHBhZ2UgPSAwKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VffT9wZXJfcGFnZT0zMCZwYWdlPSR7cGFnZX1gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3JcclxuXHJcbiAgICAgICAgICAvKiBEaXNwbGF5IG51bWJlciBvZiBzdGFycyBhbmQgZm9ya3MsIGlmIHJlcG9zaXRvcnkgaXMgZ2l2ZW4gKi9cclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVfKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcG8gPSBkYXRhLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRoaXMubmFtZV8pXHJcbiAgICAgICAgICAgIGlmICghcmVwbyAmJiBkYXRhLmxlbmd0aCA9PT0gMzApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhZ2luYXRlKHBhZ2UgKyAxKVxyXG5cclxuICAgICAgICAgICAgLyogSWYgd2UgZm91bmQgYSByZXBvLCBleHRyYWN0IHRoZSBmYWN0cyAqL1xyXG4gICAgICAgICAgICByZXR1cm4gcmVwb1xyXG4gICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5mb3JtYXRfKHJlcG8uc3RhcmdhemVyc19jb3VudCl9IFN0YXJzYCxcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0XyhyZXBvLmZvcmtzX2NvdW50KX0gRm9ya3NgXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIDogW11cclxuXHJcbiAgICAgICAgICAvKiBEaXNwbGF5IG51bWJlciBvZiByZXBvc2l0b3JpZXMsIG90aGVyd2lzZSAqL1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICBgJHtkYXRhLmxlbmd0aH0gUmVwb3NpdG9yaWVzYFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQYWdpbmF0ZSB0aHJvdWdoIHJlcG9zICovXHJcbiAgICByZXR1cm4gcGFnaW5hdGUoKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MQW5jaG9yRWxlbWVudH0gZWxfIC0gTGluayB0byByZXBvc2l0b3J5XHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJhc2VfIC0gQVBJIGJhc2UgVVJMXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhbHRfIC0gVW5pcXVlIGlkZW50aWZpZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MQW5jaG9yRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogUmV0cmlldmUgYmFzZSBVUkwgKi9cclxuICAgIHRoaXMuYmFzZV8gPSB0aGlzLmVsXy5ocmVmXHJcbiAgICB0aGlzLnNhbHRfID0gdGhpcy5oYXNoXyh0aGlzLmJhc2VfKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgZGF0YSBmcm9tIENvb2tpZSBvciBmZXRjaCBmcm9tIHJlc3BlY3RpdmUgQVBJXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PHN0cmluZz4+fSBQcm9taXNlIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBmYWN0c1xyXG4gICAqL1xyXG4gIGZldGNoKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBjYWNoZWQgPSBDb29raWVzLmdldEpTT04oYCR7dGhpcy5zYWx0X30uY2FjaGUtc291cmNlYClcclxuICAgICAgaWYgKHR5cGVvZiBjYWNoZWQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXNvbHZlKGNhY2hlZClcclxuXHJcbiAgICAgIC8qIElmIHRoZSBkYXRhIGlzIG5vdCBjYWNoZWQgaW4gYSBjb29raWUsIGludm9rZSBmZXRjaCBhbmQgc2V0XHJcbiAgICAgICAgIGEgY29va2llIHRoYXQgYXV0b21hdGljYWxseSBleHBpcmVzIGluIDE1IG1pbnV0ZXMgKi9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZldGNoXygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBDb29raWVzLnNldChgJHt0aGlzLnNhbHRffS5jYWNoZS1zb3VyY2VgLCBkYXRhLCB7IGV4cGlyZXM6IDEgLyA5NiB9KVxyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBYnN0cmFjdCBwcml2YXRlIGZ1bmN0aW9uIHRoYXQgZmV0Y2hlcyByZWxldmFudCByZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAYWJzdHJhY3RcclxuICAgKi9cclxuICBmZXRjaF8oKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmZXRjaF8oKTogTm90IGltcGxlbWVudGVkXCIpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXQgYSBudW1iZXIgd2l0aCBzdWZmaXhcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBOdW1iZXIgdG8gZm9ybWF0XHJcbiAgICogQHJldHVybiB7c3RyaW5nfSBGb3JtYXR0ZWQgbnVtYmVyXHJcbiAgICovXHJcbiAgZm9ybWF0XyhudW1iZXIpIHtcclxuICAgIGlmIChudW1iZXIgPiAxMDAwMClcclxuICAgICAgcmV0dXJuIGAkeyhudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDApfWtgXHJcbiAgICBlbHNlIGlmIChudW1iZXIgPiAxMDAwKVxyXG4gICAgICByZXR1cm4gYCR7KG51bWJlciAvIDEwMDApLnRvRml4ZWQoMSl9a2BcclxuICAgIHJldHVybiBgJHtudW1iZXJ9YFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2ltcGxlIGhhc2ggZnVuY3Rpb25cclxuICAgKlxyXG4gICAqIFRha2VuIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzYxNjQ4NC8xMDY1NTg0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gSW5wdXQgc3RyaW5nXHJcbiAgICogQHJldHVybiB7bnVtYmVyfSBIYXNoZWQgc3RyaW5nXHJcbiAgICovXHJcbiAgaGFzaF8oc3RyKSB7XHJcbiAgICBsZXQgaGFzaCA9IDBcclxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaFxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgc3RyLmNoYXJDb2RlQXQoaSlcclxuICAgICAgaGFzaCB8PSAwIC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhc2hcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyL0Fic3RyYWN0LmpzIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSBmYWxzZTtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV3JpdGVcblxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdGlmICghY29udmVydGVyLndyaXRlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblxuXHRcdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVhZFxuXG5cdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRyZXN1bHQgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXG5cdFx0XHQvLyBjYWxsaW5nIFwiZ2V0KClcIlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciByZGVjb2RlID0gLyglWzAtOUEtWl17Mn0pKy9nO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghdGhpcy5qc29uICYmIGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0XHRjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG5cdFx0XHRcdFx0XHRjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5qc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGNvb2tpZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBhcGk7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBhcGkuY2FsbChhcGksIGtleSk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBhcGkuYXBwbHkoe1xuXHRcdFx0XHRqc29uOiB0cnVlXG5cdFx0XHR9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdH07XG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0YXBpKGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3NpdG9yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlciByZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFJlcG9zaXRvcnkgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHRoZSByZXBvc2l0b3J5XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGZhY3RzIC0gRmFjdHMgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBpbml0aWFsaXplKGZhY3RzKSB7XHJcbiAgICBpZiAoZmFjdHMubGVuZ3RoICYmIHRoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aClcclxuICAgICAgdGhpcy5lbF8uY2hpbGRyZW5bdGhpcy5lbF8uY2hpbGRyZW4ubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibWQtc291cmNlX19mYWN0c1wiPlxyXG4gICAgICAgICAge2ZhY3RzLm1hcChmYWN0ID0+IDxsaSBjbGFzcz1cIm1kLXNvdXJjZV9fZmFjdFwiPntmYWN0fTwvbGk+KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApXHJcblxyXG4gICAgLyogRmluaXNoIHJlbmRlcmluZyB3aXRoIGFuaW1hdGlvbiAqL1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJkb25lXCJcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RhYnMvVG9nZ2xlXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBUb2dnbGVcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0YWJzIHZpc2liaWxpdHkgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIFRvZ2dsZSBwYWdlLXkgb2Zmc2V0XHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gVGFicyB2aXNpYmlsaXR5XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIE5vZGUpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBvZmZzZXQgYW5kIHN0YXRlICovXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHZpc2liaWxpdHlcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj1cclxuICAgICAgdGhpcy5lbF8uY2hpbGRyZW5bMF0ub2Zmc2V0VG9wICsgKDUgLSA0OCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBxdWljayBoYWNrIHRvIGVuYWJsZSBzYW1lIGhhbmRsaW5nIGZvciBoZXJvXHJcbiAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXHJcbiAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJoaWRkZW5cIiA6IFwiXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHZpc2liaWxpdHlcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJzL1RvZ2dsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=