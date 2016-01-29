/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://ifxc.github.io/vue-wzmui/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(38);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(40);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _App = __webpack_require__(41);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _IndexView = __webpack_require__(53);
	
	var _IndexView2 = _interopRequireDefault(_IndexView);
	
	var _ButtonView = __webpack_require__(66);
	
	var _ButtonView2 = _interopRequireDefault(_ButtonView);
	
	var _ToastView = __webpack_require__(71);
	
	var _ToastView2 = _interopRequireDefault(_ToastView);
	
	var _DialogView = __webpack_require__(91);
	
	var _DialogView2 = _interopRequireDefault(_DialogView);
	
	var _ActionSheetView = __webpack_require__(99);
	
	var _ActionSheetView2 = _interopRequireDefault(_ActionSheetView);
	
	var _MsgView = __webpack_require__(112);
	
	var _MsgView2 = _interopRequireDefault(_MsgView);
	
	var _ArticleView = __webpack_require__(120);
	
	var _ArticleView2 = _interopRequireDefault(_ArticleView);
	
	var _CellView = __webpack_require__(125);
	
	var _CellView2 = _interopRequireDefault(_CellView);
	
	var _ProgressView = __webpack_require__(138);
	
	var _ProgressView2 = _interopRequireDefault(_ProgressView);
	
	var _IconsView = __webpack_require__(146);
	
	var _IconsView2 = _interopRequireDefault(_IconsView);
	
	var _flexible = __webpack_require__(151);
	
	var _flexible2 = _interopRequireDefault(_flexible);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// install router
	_vue2.default.use(_vueRouter2.default);
	
	// register filters globally
	
	// routing
	var router = new _vueRouter2.default();
	
	router.map({
	  '/': {
	    name: 'index', // 路径别名
	    component: _IndexView2.default,
	    isShowHeader: 'hide'
	  },
	  '/button': {
	    name: 'button',
	    component: _ButtonView2.default
	  },
	  '/toast': {
	    component: _ToastView2.default
	  },
	  '/dialog': {
	    component: _DialogView2.default
	  },
	  '/actionsheet': {
	    component: _ActionSheetView2.default
	  },
	  '/msg': {
	    component: _MsgView2.default
	  },
	  '/article': {
	    component: _ArticleView2.default
	  },
	  '/cell': {
	    component: _CellView2.default
	  },
	  '/progress': {
	    component: _ProgressView2.default
	  },
	  '/icons': {
	    component: _IconsView2.default
	  }
	});
	
	router.redirect({
	  '*': '/'
	});
	router.start(_App2.default, '#app');
	
	// flexible

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.15
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind$1(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;
	
	var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    timerFunc = setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE$1 = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE$1.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text$1 = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether or not to handle fully object properties which
	   * are already backed by getters and seters. Depending on
	   * use case and environment, this might introduce non-neglible
	   * performance penalties.
	   */
	  convertAllProperties: false,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function on$1(el, event, cb) {
	  el.addEventListener(event, cb);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !(el instanceof SVGElement)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  trim(node, node.firstChild);
	  trim(node, node.lastChild);
	}
	
	function trim(parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node);
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__vue_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	var reservedTagRE = /^(slot|partial|component)$/;
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly?');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var uid$3 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$3++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment(target, src) {
	  target.__proto__ = src;
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  // cater for pre-defined getter/setters
	  var getter, setter;
	  if (config.convertAllProperties) {
	    var property = Object.getOwnPropertyDescriptor(obj, key);
	    if (property && property.configurable === false) {
	      return;
	    }
	    getter = property && property.get;
	    setter = property && property.set;
	  }
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on$1,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		coerceProp: coerceProp,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush');
	    }
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value);
	      } else {
	        el.setAttribute(attr, value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	var on = {
	
	  acceptStatement: true,
	  priority: ON,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on$1(self.el.contentWindow, self.arg, self.handler);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on$1(this.el, this.arg, this.handler);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener);
	      if (!lazy) {
	        jQuery(el).on('input', this.listener);
	      }
	    } else {
	      this.on('change', this.listener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener);
	      jQuery(el).off('input', this.listener);
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && node.content instanceof DocumentFragment;
	}
	
	var tagRE$1 = /<([\w:]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    var templateStringToUse = raw ? templateString : templateString.trim();
	    node.innerHTML = prefix + templateStringToUse + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	
	  templateCache.put(templateString, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__vue_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__vfrag__ = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__vfrag__ = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML);
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var vIf = {
	
	  priority: IF,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var uid$1 = 0;
	
	var vFor = {
	
	  priority: FOR,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$1;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__vfrag__ = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number') {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__vfrag__;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__vfrag__;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(n);
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	var text = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	// must export plain object
	var publicDirectives = {
	  text: text,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on,
	  bind: bind,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind$1(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on$1(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}
	
	var transition = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHook = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent;
	      activateHook.call(newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains$1(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains$1(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition
	};
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (options.required) {
	      // warn missing required
	      process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, getDefault(vm, options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath);
	            initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          }
	        } else {
	            process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
	          }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (!destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) return;
	  // special case: give named slot a higher priority
	  // than unnamed slots
	  if (tag === 'slot' && hasBindAttr(el, 'name')) {
	    tag = '_namedSlot';
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    value = el.getAttribute('v-' + dirName);
	    if (value != null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', publicDirectives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', publicDirectives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', publicDirectives.bind);
	            }
	          } else
	
	            // normal directives
	            if (name.indexOf('v-') === 0) {
	              // check arg
	              arg = (arg = name.match(argRE)) && arg[1];
	              if (arg) {
	                name = name.replace(argRE, '');
	              }
	              // extract directive name
	              dirName = name.slice(2);
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		terminalDirectives: terminalDirectives,
		transclude: transclude
	});
	
	function stateMixin (Vue) {
	
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
	          def.set = userDef.set ? bind$1(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind$1(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */
	
	Directive.prototype.on = function (event, handler) {
	  on$1(this.el, event, handler);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   * @return {Element}
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	    return el;
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (el instanceof DocumentFragment) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory(function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	function globalAPI (Vue) {
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text$1,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]+$/.test(name)) {
	        warn('Invalid component name: ' + name);
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}
	
	var filterRE = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install APIs
	globalAPI(Vue);
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	// We are exporting two versions, one for named and one
	// for unnamed, because the unnamed slots must be compiled
	// AFTER all named slots have selected their content. So
	// we need to give them different priorities in the compilation
	// process. (See #1965)
	
	var slot = {
	
	  priority: SLOT,
	
	  bind: function bind() {
	    var host = this.vm;
	    var raw = host.$options._content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var slotName = this.params && this.params.name;
	    if (!slotName) {
	      // Default slot
	      this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host);
	    } else {
	      // Named slot
	      var selector = '[slot="' + slotName + '"]';
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        this.tryCompile(extractFragment(nodes, raw), context, host);
	      } else {
	        this.fallback();
	      }
	    }
	  },
	
	  tryCompile: function tryCompile(content, context, host) {
	    if (content.hasChildNodes()) {
	      this.compile(content, context, host);
	    } else {
	      this.fallback();
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var namedSlot = extend(extend({}, slot), {
	  priority: slot.priority + 1,
	  params: ['name']
	});
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node);
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      append(node);
	    }
	  }
	  return frag;
	
	  function append(node) {
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      node = parseTemplate(node);
	    }
	    node = cloneNode(node);
	    frag.appendChild(node);
	  }
	}
	
	var elementDirectives = {
	  slot: slot,
	  _namedSlot: namedSlot, // same as slot but with higher priority
	  partial: partial
	};
	
	Vue.version = '1.0.15';
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  directives: publicDirectives,
	  elementDirectives: elementDirectives,
	  filters: filters,
	  transitions: {},
	  components: {},
	  partials: {},
	  replace: true
	};
	
	// devtools global hook
	/* istanbul ignore if */
	if (process.env.NODE_ENV !== 'production' && inBrowser) {
	  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
	  } else if (/Chrome\/\d+/.test(navigator.userAgent)) {
	    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 39 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.10
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return decodeURIComponent(part);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path) {
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        queryParams = this.parseQueryString(queryString);
	      }
	
	      path = decodeURI(path);
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  RouteRecognizer.VERSION = '0.1.9';
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn(msg) {
	    /* istanbul ignore next */
	    if (window.console) {
	      console.warn('[vue-router] ' + msg);
	      if (!exports$1.Vue || exports$1.Vue.config.debug) {
	        console.warn(new Error('warning stack trace:').stack);
	      }
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root) {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = decodeURI(location.pathname + location.search);
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '');
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, { cleanup: cleanup });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function (data, onError) {
	      // merge data from multiple data hooks
	      if (Array.isArray(data) && data._needMerge) {
	        data = data.reduce(function (res, obj) {
	          if (isPlainObject(obj)) {
	            Object.keys(obj).forEach(function (key) {
	              res[key] = obj[key];
	            });
	          }
	          return res;
	        }, Object.create(null));
	      }
	      // handle promise sugar syntax
	      var promises = [];
	      if (isPlainObject(data)) {
	        Object.keys(data).forEach(function (key) {
	          var val = data[key];
	          if (isPromise(val)) {
	            promises.push(val.then(function (resolvedVal) {
	              component.$set(key, resolvedVal);
	            }));
	          } else {
	            component.$set(key, val);
	          }
	        });
	      }
	      if (!promises.length) {
	        component.$loadingRouteData = false;
	        component.$emit('route-data-loaded', component);
	        cb && cb();
	      } else {
	        promises[0].constructor.all(promises).then(function () {
	          component.$loadingRouteData = false;
	          component.$emit('route-data-loaded', component);
	          cb && cb();
	        }, onError);
	      }
	    }, {
	      cleanup: cleanup,
	      expectData: true
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} expectData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$expectData = _ref.expectData;
	      var expectData = _ref$expectData === undefined ? false : _ref$expectData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        // cleanup indicates an after-activation hook,
	        // so instead of aborting we just let the transition
	        // finish.
	        cleanup ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next(data) {
	        if (nextCalled) {
	          warn('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb(data, onError);
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      // handle boolean/promise return values
	      var resIsPromise = isPromise(res);
	      if (expectBoolean) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (resIsPromise) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onError);
	        } else if (!hook.length) {
	          next(res);
	        }
	      } else if (resIsPromise) {
	        res.then(next, onError);
	      } else if (expectData && isPlainOjbect(res) || !hook.length) {
	        next(res);
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        (function () {
	          var res = [];
	          res._needMerge = true;
	          var onError = undefined;
	          _this.runQueue(hooks, function (hook, _, next) {
	            if (!_this.aborted) {
	              _this.callHook(hook, context, function (r, onError) {
	                if (r) res.push(r);
	                onError = onError;
	                next();
	              }, options);
	            }
	          }, function () {
	            cb(res, onError);
	          });
	        })();
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    this.router = router;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    Vue.directive('link-active', {
	      priority: 1001,
	      bind: function bind() {
	        this.el.__v_link_active = true;
	      }
	    });
	
	    Vue.directive('link', {
	      priority: 1000,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check if active classes should be applied to a different element
	        this.activeEl = this.el;
	        var parent = this.el.parentNode;
	        while (parent) {
	          if (parent.__v_link_active) {
	            this.activeEl = parent;
	            break;
	          }
	          parent = parent.parentNode;
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.el.addEventListener('click', _bind(this.onClick, this));
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            this.router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router._stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router._stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        this.updateClasses(route.path);
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path) {
	        var el = this.activeEl;
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass !== activeClass) {
	          removeClass(el, this.prevActiveClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this._stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype._stringifyPath = function _stringifyPath(path) {
	      var fullPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          if (path.query) {
	            params.queryParams = path.query;
	          }
	          fullPath = this._recognizer.generate(path.name, params);
	        } else if (path.path) {
	          fullPath = path.path;
	          if (path.query) {
	            var query = this._recognizer.generateQueryString(path.query);
	            if (fullPath.indexOf('?') > -1) {
	              fullPath += '&' + query.slice(1);
	            } else {
	              fullPath += query;
	            }
	          }
	        }
	      } else {
	        fullPath = path ? path + '' : '';
	      }
	      return encodeURI(fullPath);
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(42)
	__vue_script__ = __webpack_require__(46)
	__vue_template__ = __webpack_require__(52)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f93391a4&file=App.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f93391a4&file=App.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  line-height: 1.6;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\na img {\n  border: 0;\n}\na {\n  text-decoration: none;\n}\nhtml,\nbody {\n  height: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\nbody,\n.page {\n  background-color: #f3f3f3;\n}\n.page {\n  padding: 44px 0;\n}\n.container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  background: #f3f3f3;\n}\n.page {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.hd {\n  padding: 2em 0;\n}\n.page_desc {\n  text-align: center;\n  color: #888;\n  font-size: 14px;\n}\n.bd.spacing {\n  padding: 0 15px;\n}\n.page_title {\n  text-align: center;\n  font-size: 34px;\n  color: #1677cb;\n  font-weight: 400;\n  margin: 0 15%;\n}\n.global_navs {\n  background-color: transparent;\n}\n.global_navs:before,\n.global_navs:after {\n  border-color: #D9DBDA;\n}\n.global_navs .cell {\n  padding-top: .5em;\n  padding-bottom: .5em;\n}\n.global_navs .cell:before {\n  border-color: #D9DBDA;\n}\n.global_navs .icon_nav {\n  width: 28px;\n  height: 28px;\n  display: block;\n  margin-right: .7em;\n}\n.page.button .page_title {\n  color: #225FBA;\n}\n.page.button .bd {\n  padding: 0 15px;\n}\n.page.button .button_sp_area {\n  padding: 10px 0;\n  width: 60%;\n  margin: 0 auto;\n  text-align: justify;\n  text-justify: distribute-all-lines;\n  /*ie6-9*/\n  font-size: 0;\n}\n.page.button .button_sp_area:after {\n  display: inline-block;\n  width: 100%;\n  height: 0;\n  font-size: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  content: \".\";\n}\n.page.cell .page_title {\n  color: #225FBA;\n}\n.page.cell .bd {\n  padding-bottom: 30px;\n}\n.page.toast {\n  background-color: #FFFFFF;\n}\n.page.toast .bd {\n  padding: 120px 15px 0;\n}\n.page.dialog {\n  background-color: #FFFFFF;\n}\n.page.dialog .bd {\n  padding: 120px 15px 0;\n}\n.page.msg {\n  background-color: #FFFFFF;\n}\n.page.article {\n  background-color: #FFFFFF;\n}\n.page.article .page_title {\n  color: #DE7C23;\n}\n.page.icons {\n  background-color: #FFFFFF;\n  text-align: center;\n}\n.page.icons .page_title {\n  color: #3E24BD;\n}\n.page.icons .bd {\n  padding: 30px 0;\n  text-align: center;\n}\n.page.icons .icon_sp_area {\n  padding: 10px 20px;\n  text-align: left;\n}\n.page.icons i {\n  margin: 0 5px 10px;\n}\nbody {\n  overflow-x: hidden;\n}\n@-webkit-keyframes slideIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes slideOut {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes slideOut {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n.page.slideIn {\n  -webkit-animation: slideIn .2s forwards;\n          animation: slideIn .2s forwards;\n}\n.page.slideOut {\n  -webkit-animation: slideOut .2s forwards;\n          animation: slideOut .2s forwards;\n}\n.slide-transition {\n  -webkit-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n  width: 100%;\n}\n.slide-enter,\n.slide-leave {\n  left: 100%;\n}\n.slide-leave {\n  left: 100%;\n}\n.app-transition {\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n}\n.app-enter,\n.app-leave {\n  opacity: 0;\n}\n", "", {"version":3,"sources":["/./example/modules/App.vue.style"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,+BAA+B;CAChC;AACD;EACE,iBAAiB;EACjB,4DAA4D;CAC7D;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,UAAU;CACX;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,aAAa;EACb,yCAAyC;CAC1C;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,iBAAiB;EACjB,kCAAkC;CACnC;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;CACf;AACD;EACE,8BAA8B;CAC/B;AACD;;EAEE,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,mCAAmC;EACnC,SAAS;EACT,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,UAAU;EACV,aAAa;EACb,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE;IACE,2CAAmC;YAAnC,mCAAmC;GACpC;EACD;IACE,wCAAgC;YAAhC,gCAAgC;GACjC;CACF;AAPD;EACE;IACE,2CAAmC;YAAnC,mCAAmC;GACpC;EACD;IACE,wCAAgC;YAAhC,gCAAgC;GACjC;CACF;AACD;EACE;IACE,wCAAgC;YAAhC,gCAAgC;GACjC;EACD;IACE,2CAAmC;YAAnC,mCAAmC;GACpC;CACF;AAPD;EACE;IACE,wCAAgC;YAAhC,gCAAgC;GACjC;EACD;IACE,2CAAmC;YAAnC,mCAAmC;GACpC;CACF;AACD;EACE,wCAAgC;UAAhC,gCAAgC;CACjC;AACD;EACE,yCAAiC;UAAjC,iCAAiC;CAClC;AACD;EACE,mCAA2B;EAA3B,2BAA2B;EAC3B,YAAY;CACb;AACD;;EAEE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,sCAA8B;EAA9B,8BAA8B;CAC/B;AACD;;EAEE,WAAW;CACZ","file":"App.vue","sourcesContent":["html {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  line-height: 1.6;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\na img {\n  border: 0;\n}\na {\n  text-decoration: none;\n}\nhtml,\nbody {\n  height: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\nbody,\n.page {\n  background-color: #f3f3f3;\n}\n.page {\n  padding: 44px 0;\n}\n.container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  background: #f3f3f3;\n}\n.page {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.hd {\n  padding: 2em 0;\n}\n.page_desc {\n  text-align: center;\n  color: #888;\n  font-size: 14px;\n}\n.bd.spacing {\n  padding: 0 15px;\n}\n.page_title {\n  text-align: center;\n  font-size: 34px;\n  color: #1677cb;\n  font-weight: 400;\n  margin: 0 15%;\n}\n.global_navs {\n  background-color: transparent;\n}\n.global_navs:before,\n.global_navs:after {\n  border-color: #D9DBDA;\n}\n.global_navs .cell {\n  padding-top: .5em;\n  padding-bottom: .5em;\n}\n.global_navs .cell:before {\n  border-color: #D9DBDA;\n}\n.global_navs .icon_nav {\n  width: 28px;\n  height: 28px;\n  display: block;\n  margin-right: .7em;\n}\n.page.button .page_title {\n  color: #225FBA;\n}\n.page.button .bd {\n  padding: 0 15px;\n}\n.page.button .button_sp_area {\n  padding: 10px 0;\n  width: 60%;\n  margin: 0 auto;\n  text-align: justify;\n  text-justify: distribute-all-lines;\n  /*ie6-9*/\n  font-size: 0;\n}\n.page.button .button_sp_area:after {\n  display: inline-block;\n  width: 100%;\n  height: 0;\n  font-size: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  content: \".\";\n}\n.page.cell .page_title {\n  color: #225FBA;\n}\n.page.cell .bd {\n  padding-bottom: 30px;\n}\n.page.toast {\n  background-color: #FFFFFF;\n}\n.page.toast .bd {\n  padding: 120px 15px 0;\n}\n.page.dialog {\n  background-color: #FFFFFF;\n}\n.page.dialog .bd {\n  padding: 120px 15px 0;\n}\n.page.msg {\n  background-color: #FFFFFF;\n}\n.page.article {\n  background-color: #FFFFFF;\n}\n.page.article .page_title {\n  color: #DE7C23;\n}\n.page.icons {\n  background-color: #FFFFFF;\n  text-align: center;\n}\n.page.icons .page_title {\n  color: #3E24BD;\n}\n.page.icons .bd {\n  padding: 30px 0;\n  text-align: center;\n}\n.page.icons .icon_sp_area {\n  padding: 10px 20px;\n  text-align: left;\n}\n.page.icons i {\n  margin: 0 5px 10px;\n}\nbody {\n  overflow-x: hidden;\n}\n@keyframes slideIn {\n  from {\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideOut {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.page.slideIn {\n  animation: slideIn .2s forwards;\n}\n.page.slideOut {\n  animation: slideOut .2s forwards;\n}\n.slide-transition {\n  transition: left 0.3s ease;\n  width: 100%;\n}\n.slide-enter,\n.slide-leave {\n  left: 100%;\n}\n.slide-leave {\n  left: 100%;\n}\n.app-transition {\n  transition: opacity 0.3s ease;\n}\n.app-enter,\n.app-leave {\n  opacity: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _HeaderBar = __webpack_require__(47);
	
	var _HeaderBar2 = _interopRequireDefault(_HeaderBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'AppView',
	    components: { HeaderBar: _HeaderBar2.default },
	    data: function data() {
	        return {
	            item: {}
	        };
	    }
	};
	// </script>
	//
	/* generated by vue-loader */
	// <template>
	//   <div class="container js_container">
	//       <header-bar v-show="this.$route.isShowHeader=='hide'?false:true">sd</header-bar>
	//       <!-- main view -->
	//       <router-view
	//         class="view"
	//         keep-alive
	//         transition="slide">
	//       </router-view>
	//   </div>
	// </template>
	//
	// <style lang="less">
	// @import "../../src/style/base/reset";
	//
	// html, body {
	//     height: 100%;
	//     -webkit-tap-highlight-color: transparent;
	// }
	//
	// body, .page {
	//     background-color: #f3f3f3;
	// }
	// .page{
	//     padding: 44px 0;
	// }
	// .container {
	//     position: absolute;
	//     top: 0;
	//     right: 0;
	//     bottom: 0;
	//     left: 0;
	//     overflow: hidden;
	//     background: #f3f3f3;
	// }
	//
	// .page {
	//     position: absolute;
	//     top: 0;
	//     right: 0;
	//     bottom: 0;
	//     left: 0;
	//     overflow-y: auto;
	//     -webkit-overflow-scrolling: touch;
	// }
	//
	// .hd {
	//     padding: 2em 0;
	// }
	//
	// .page_desc {
	//     text-align: center;
	//     color: #888;
	//     font-size: 14px;
	// }
	//
	// .bd.spacing {
	//     padding: 0 15px;
	// }
	//
	// .page_title {
	//     text-align: center;
	//     font-size: 34px;
	//     color: #1677cb;
	//     font-weight: 400;
	//     margin: 0 15%;
	// }
	//
	// // index
	// .global_navs {
	//     background-color: transparent;
	//     &:before, &:after {
	//         border-color: #D9DBDA;
	//     }
	//     .cell {
	//         padding-top: .5em;
	//         padding-bottom: .5em;
	//         &:before {
	//             border-color: #D9DBDA;
	//         }
	//
	//     }
	//     .icon_nav {
	//         width: 28px;
	//         height: 28px;
	//         display: block;
	//         margin-right: .7em;
	//     }
	// }
	//
	// // button
	// .page {
	//     &.button {
	//         .page_title {
	//             color: #225FBA;
	//         }
	//         .bd {
	//             padding: 0 15px;
	//         }
	//         .button_sp_area {
	//             padding: 10px 0;
	//             width: 60%;
	//             margin: 0 auto;
	//             text-align: justify;
	//             text-justify: distribute-all-lines; /*ie6-9*/
	//             //text-align-last:justify;/* ie9*/
	//             //-moz-text-align-last:justify;/*ff*/
	//             //-webkit-text-align-last:justify;/*chrome 20+*/
	//
	//             font-size: 0;
	//             &:after {
	//                 display: inline-block;
	//                 width: 100%;
	//                 height: 0;
	//                 font-size: 0;
	//                 margin: 0;
	//                 padding: 0;
	//                 overflow: hidden;
	//                 content: ".";
	//             }
	//         }
	//     }
	// }
	//
	// // table view
	// .page {
	//     &.cell {
	//         .page_title {
	//             color: #225FBA;
	//         }
	//         .bd {
	//             padding-bottom: 30px;
	//         }
	//     }
	// }
	//
	// // toast
	// .page {
	//     &.toast {
	//         background-color: #FFFFFF;
	//         .bd {
	//             padding: 120px 15px 0;
	//         }
	//     }
	// }
	//
	// // dialog
	// .page {
	//     &.dialog {
	//         background-color: #FFFFFF;
	//         .bd {
	//             padding: 120px 15px 0;
	//         }
	//     }
	// }
	//
	// // msg page
	// .page {
	//     &.msg {
	//         background-color: #FFFFFF;
	//     }
	// }
	//
	// // article page
	// .page {
	//     &.article {
	//         background-color: #FFFFFF;
	//         .page_title {
	//             color: #DE7C23;
	//         }
	//     }
	// }
	//
	// // icons
	// .page {
	//     &.icons {
	//         background-color: #FFFFFF;
	//         text-align: center;
	//         .page_title {
	//             color: #3E24BD;
	//         }
	//         .bd {
	//             padding: 30px 0;
	//             text-align: center;
	//         }
	//         .icon_sp_area {
	//             padding: 10px 20px;
	//             text-align: left;
	//         }
	//         i {
	//             margin: 0 5px 10px;
	//         }
	//     }
	// }
	// @import '../../src/style/slide';
	// </style>
	//
	// <script>

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(48)
	__vue_script__ = __webpack_require__(50)
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\HeaderBar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c691d8bc&file=HeaderBar.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HeaderBar.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c691d8bc&file=HeaderBar.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HeaderBar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".header_bar {\n  position: absolute;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 5px;\n  height: 44px;\n  background-color: #1677cb;\n  z-index: 10;\n  color: #fff;\n  font-size: 18px;\n}\n.header_bar .left,\n.header_bar .right {\n  position: absolute;\n  top: 5px;\n  bottom: 5px;\n  line-height: 34px;\n}\n.header_bar .left i,\n.header_bar .right i {\n  font-style: normal;\n  font-size: 22px;\n}\n.header_bar .left i:before,\n.header_bar .right i:before {\n  font-family: \"iconfont\" !important;\n}\n.header_bar .left {\n  left: 5px;\n}\n.header_bar .left i.prev:before {\n  content: \"\\E626\";\n}\n.header_bar .right {\n  right: 5px;\n}\n.header_bar .right i.next:before {\n  content: \"\\E628\";\n}\n.header_bar .center {\n  line-height: 34px;\n  font-size: 18px;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/./src/HeaderBar.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,SAAS;EACT,QAAQ;EACR,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,0BAA0B;EAC1B,YAAY;EACZ,YAAY;EACZ,gBAAgB;CACjB;AACD;;EAEE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,kBAAkB;CACnB;AACD;;EAEE,mBAAmB;EACnB,gBAAgB;CACjB;AACD;;EAEE,mCAAmC;CACpC;AACD;EACE,UAAU;CACX;AACD;EACE,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;CACpB","file":"HeaderBar.vue","sourcesContent":[".header_bar {\n  position: absolute;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 5px;\n  height: 44px;\n  background-color: #1677cb;\n  z-index: 10;\n  color: #fff;\n  font-size: 18px;\n}\n.header_bar .left,\n.header_bar .right {\n  position: absolute;\n  top: 5px;\n  bottom: 5px;\n  line-height: 34px;\n}\n.header_bar .left i,\n.header_bar .right i {\n  font-style: normal;\n  font-size: 22px;\n}\n.header_bar .left i:before,\n.header_bar .right i:before {\n  font-family: \"iconfont\" !important;\n}\n.header_bar .left {\n  left: 5px;\n}\n.header_bar .left i.prev:before {\n  content: \"\\E626\";\n}\n.header_bar .right {\n  right: 5px;\n}\n.header_bar .right i.next:before {\n  content: \"\\E628\";\n}\n.header_bar .center {\n  line-height: 34px;\n  font-size: 18px;\n  text-align: center;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <header class="header_bar">
	//         <div class="left" v-link="'index'"><i class="prev"></i></div>
	//         <h1 class="center">HeaderBar</h1>
	//         <div class="right" v-link="'index'"><span>确定</span></div>
	//     </header>
	// </template>
	// <style lang="less">
	//     @import './style/base/fn';
	//     .header_bar {
	//         position: absolute;
	//         right: 0;
	//         left: 0;
	//         box-sizing:border-box;
	//         padding: 5px;
	//         height: 44px;
	//         background-color: @gColorPrimary;
	//         z-index: 10;
	//         color: #fff;
	//         font-size: 18px;
	//         .left,.right{
	//             position: absolute;
	//             top: 5px;
	//             bottom: 5px;
	//             line-height: 34px;
	//             i{
	//                 font-style: normal;
	//                 font-size: 22px;
	//                 &:before{
	//                      font-family: "iconfont" !important;
	//                  }
	//             }
	//         }
	//         .left{
	//             left:5px;
	//             i.prev:before{
	//                 content: "\E626";
	//             }
	//         }
	//         .right{
	//             right:5px;
	//             i.next:before{
	//                 content: "\E628";
	//             }
	//         }
	//         .center{
	//             line-height: 34px;
	//             font-size: 18px;
	//             text-align: center;
	//         }
	//     }
	// </style>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            msg: 'hello vue'
	        };
	    },
	
	    components: {}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "\r\n    <header class=\"header_bar\">\r\n        <div class=\"left\" v-link=\"'index'\"><i class=\"prev\"></i></div>\r\n        <h1 class=\"center\">HeaderBar</h1>\r\n        <div class=\"right\" v-link=\"'index'\"><span>确定</span></div>\r\n    </header>\r\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"container js_container\">\n      <header-bar v-show=\"this.$route.isShowHeader=='hide'?false:true\">sd</header-bar>\n      <!-- main view -->\n      <router-view\n        class=\"view\"\n        keep-alive\n        transition=\"slide\">\n      </router-view>\n  </div>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(54)
	__vue_script__ = __webpack_require__(56)
	__vue_template__ = __webpack_require__(57)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\IndexView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-50c43638&file=IndexView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-50c43638&file=IndexView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".grids {\n  position: relative;\n  overflow: hidden;\n}\n.grids:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.grids:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.grid {\n  position: relative;\n  float: left;\n  padding: 20px 10px;\n  width: 33.33333333%;\n  box-sizing: border-box;\n}\n.grid:before {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n  right: -1px;\n}\n.grid:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.grid:active {\n  background-color: #E4E4E4;\n}\n.grid_icon {\n  width: 28px;\n  height: 28px;\n  margin: 0 auto;\n}\n.grid_icon img {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.grid_icon + .grid_label {\n  margin-top: 5px;\n}\n.grid_label {\n  display: block;\n  text-align: center;\n  color: #000;\n  font-size: 14px;\n}\n", "", {"version":3,"sources":["/./example/modules/IndexView.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,8BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,8BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,iCAAyB;UAAzB,yBAAyB;EACzB,+BAAuB;UAAvB,uBAAuB;EACvB,YAAY;CACb;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,iCAAyB;UAAzB,yBAAyB;EACzB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;CAChB;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;CACjB","file":"IndexView.vue","sourcesContent":[".grids {\n  position: relative;\n  overflow: hidden;\n}\n.grids:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.grids:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.grid {\n  position: relative;\n  float: left;\n  padding: 20px 10px;\n  width: 33.33333333%;\n  box-sizing: border-box;\n}\n.grid:before {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleX(0.5);\n  right: -1px;\n}\n.grid:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.grid:active {\n  background-color: #E4E4E4;\n}\n.grid_icon {\n  width: 28px;\n  height: 28px;\n  margin: 0 auto;\n}\n.grid_icon img {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.grid_icon + .grid_label {\n  margin-top: 5px;\n}\n.grid_label {\n  display: block;\n  text-align: center;\n  color: #000;\n  font-size: 14px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="page" transition="app">
	//     <div class="hd">
	//         <h1 class="page_title">WZMUI</h1>
	//         <p class="page_desc">Base on WeUI,thank for vue-weui。</p>
	//     </div>
	//     <div class="bd">
	//         <div class="grids">
	//             <a class="grid js_grid" v-link="'button'" data-id="button">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_button.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Button
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'cell'" data-id="cell">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_cell.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Cell
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'toast'" data-id="toast">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_toast.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Toast
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'dialog'" data-id="dialog">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_dialog.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Dialog
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'progress'" data-id="progress">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_button.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Progress
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'msg'" data-id="msg">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_msg.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Msg
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'article'" data-id="article">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_article.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Article
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'actionsheet'" data-id="actionsheet">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_actionSheet.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     ActionSheet
	//                 </p>
	//             </a>
	//             <a class="grid js_grid" v-link="'icons'" data-id="icons">
	//                 <div class="grid_icon">
	//                     <img src="../images/icon_nav_icons.png" alt="">
	//                 </div>
	//                 <p class="grid_label">
	//                     Icons
	//                 </p>
	//             </a>
	//         </div>
	//     </div>
	// </div>
	// </template>
	//
	// <script>
	// import store from '../store'
	// import Item from './Item.vue'
	
	exports.default = {
	
	  name: 'IndexView',
	
	  components: {
	    // Item
	  },
	
	  data: function data() {
	    return {
	      // page: 1,
	      // items: []
	    };
	  },
	
	  route: {
	    data: function data(_ref) {
	      var to = _ref.to;
	
	      // This is the route data hook. It gets called every time the route
	      // changes while this component is active.
	      //
	      // What we are doing:
	      //
	      // 1. Get the `to` route using ES2015 argument destructuring;
	      // 2. Get the `page` param and cast it to a Number;
	      // 3. Fetch the items from the store, which returns a Promise containing
	      //    the fetched items;
	      // 4. Chain the Promise and return the final data for the component.
	      //    Note we are waiting until the items are resolved before resolving
	      //    the entire object, because we don't want to update the page before
	      //    the items are fetched.
	      var page = +to.params.page;
	      // return store.fetchItemsByPage(page).then(items => ({
	      //   page,
	      //   items
	      // }))
	    }
	  },
	
	  created: function created() {
	    // store.on('topstories-updated', this.update)
	  },
	  destroyed: function destroyed() {
	    // store.removeListener('topstories-updated', this.update)
	  },
	
	  methods: {
	    update: function update() {
	      // store.fetchItemsByPage(this.page).then(items => {
	      //   this.items = items
	      // })
	    }
	  },
	
	  filters: {
	    formatItemIndex: function formatItemIndex(index) {
	      return (this.page - 1) * store.storiesPerPage + index + 1;
	    }
	  }
	};
	// </script>
	//
	// <style lang="less">
	//     @import '../../src/style/grid';
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <div class=\"page\" transition=\"app\">\n    <div class=\"hd\">\n        <h1 class=\"page_title\">WZMUI</h1>\n        <p class=\"page_desc\">Base on WeUI,thank for vue-weui。</p>\n    </div>\n    <div class=\"bd\">\n        <div class=\"grids\">\n            <a class=\"grid js_grid\" v-link=\"'button'\" data-id=\"button\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(58) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Button\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'cell'\" data-id=\"cell\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(59) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Cell\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'toast'\" data-id=\"toast\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(60) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Toast\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'dialog'\" data-id=\"dialog\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(61) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Dialog\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'progress'\" data-id=\"progress\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(58) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Progress\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'msg'\" data-id=\"msg\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(62) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Msg\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'article'\" data-id=\"article\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(63) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Article\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'actionsheet'\" data-id=\"actionsheet\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(64) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    ActionSheet\n                </p>\n            </a>\n            <a class=\"grid js_grid\" v-link=\"'icons'\" data-id=\"icons\">\n                <div class=\"grid_icon\">\n                    <img src=\"" + __webpack_require__(65) + "\" alt=\"\">\n                </div>\n                <p class=\"grid_label\">\n                    Icons\n                </p>\n            </a>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABIpJREFUaAXtWk9IVEEYn2/LSomIiAJDMLU6GWkQ/TtoGQSdDDL04iYdulqXDhF76FBQdO0Q/iFIMqhLQaCmh0oI0sgumlYQGkVERGilven7vX2zvre7rr6debgub2D3zXvzfd/8fvPNm/m+4QkRlnAEcnoEKB26A60vCr/9mD4qhagUUq5NJ5Mzz4j+MImRzRuL+gZvHpxJxpVCcNfZ3t2zs+K+EHJnsnBu39NYQYE4NXq77o0bp4cgPPfl+/RrkCNBw+zBJxGSf90KuVa3JK1hEselkFVC0NjWTUV73J5c7QaMaanIlWxftW8gVjvnbs/Vek2s//KnD/9egmScg3iksEZUBVf7nYtfn6wUcsANrJhtqCsOqKN4CKoFJdenZRy69z+BOWlR9BL06uTFXUhwpbsx9GDowRwfgbyfop5IJghnSClpR8vTKkuIXWTJYvQhIzTFIzv6ru3IMBHx3hxcCYxg+bnnW+TM74sV0b4GDqG2gUKCiSUFExbcNlnW3NdNheuuTtw69DUImoFM0fLm3gtiZmZCCKvVJkf0kQPiLorQDfvHdcHP4sStVsjaOgEwNOrBmmj/uk9yro2BNwIrZyQPmdCV8fajQ+mwV5zpq5aWvMTy9dx+vby5Z28JrW4Z6Kj9nU4+m2dGCcbJiUb21k+ejk0TnXWPM4FyiJ8sa+45wTp3WaeRbUClKZOenzZjUxRTDABtciQOv+88lpGcGyRkJes4A9NocroaIYgFhQHHABqee99xbAR1PwU60HV0Yo5NPybSyhohiNWS36P1eOf8eC4ZEXRhA7ZgM7k9m3ttgtjniKzT6BwLSjYg3DrKBgnZANvutmzq2gQrov3VUopiLPsLrZZ+gNk2nC0Etv3oppPVJigj8dM3knIwXQfZPFO2lO1sbCgdbYIq/BIcfimj2lfHVsK2hkFtghp9L6pK/CIuKrSIgDZBBM52H04gvUh/S2uWwo5dLaLPS1NYWEqbIFk0BvO8lh5YuBt/Ley2/dBgcKP+NFOltQmOd9QO8VSa4iPHUsSWqV34e2LbYFu8H04infKnnSqtTRD5nJSRezCNwDm1C39PlA0pqNtErqhNEPCLCuQ1HvFfyAoQOPujNC8NXdiALeSI8y3Z14wQfHu77gtDiAEGsoKyaE8l6n4KdKDr6MRMJcBGCAIUp0Y3GGAXLxAb+BDimR9P2ukS69i6bAO2/AxOJlljBNEJklVFkm8fcdrzINPCgzbIQFaRgw3YMlWMJrxOJt7EoF8xwBjeJ1406suivR/t8Mu1Z2JbsSyrFETwzkEenuNzDqPFKEGFDEA5n7sjOOVBpsHLbCl7qFTwYVOicISO7cVegQM8dAqEIEg4i8R5JnfBzjg4KFexJaIfBAjj7dhDV+ixofKUQwBTFj9PoU7PbSA3RheZQBBqGg0Jag7gsquHHlx2F2gCCD2oOYDLru71IH/YBkT4PGrZkfkEkMDscFDqHoIcKNtH7nw9zp9HBRblqM5NXYEVmGFPcVC2+X6+5OPHeB6CoJrXn1MqX+bTB7GKU3gNRyBHR+A/KFjbvWAqMXEAAAAASUVORK5CYII="

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAH5JREFUaAXt17ERgDAIAEDiKs5i4zlERnOJVO7iKvFsc0fvmacDGvikIUIQIECAAIFUoGSdtV6t99iz/ufqJdp9bsc41zIW5AQIECBAgAABAgQIECDwCrgH/QMCBAgQIECAAAECBAjMKeAenPPdbU2AAAECBAgQIECAAIHfCzxT3RUKkM/E+AAAAABJRU5ErkJggg=="

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAndJREFUaAXtmj9PGzEYxv0eCd0YOlGBGEpAbP0IFHVCQkyZGAKqKhADQ1XxJVrEwtSqlRjZq3ZJUGBj7daKjJXYOlQMQC4xfiKMfH8gUXjP54vs5Xw5n9/n9z7OnZ1YCF98BnwG8swApQWvNN9Ny077k5RyUV1/kdbGsc8uiOiUxsq7raWvf01tCUDAdcP2LyHkc7NhMer0LyiVX5mQpbhwOAc4Rf6TSuNbZuN4W1fO70bcFzXilmXY/qh0rWltga7o492wFEWBg26YoIbnJupSyNc46pIAVBd637kiOKchcDT0Rp4ZaYDmfYWve8CiW+gd9A46ngE/RB03qK8872DfFDnewGkHK/X197ONGibPQxdnAWcb63tdIfcV2XblfOfZsIROAgJOrWo+qCXbDVGw1po7uB4ZwAhcEFRbbw6/DwuH+5xykBvOKcAs4JwBzArOCcAs4VgB549rU5WznQl0OmjJGg46WB4yeE91pPjdvfz/Z765sTAIoA04NkC8p6SkUyHlZNiRzX6QtuDYANHRTImqgqjeD9ImHCvgydLh1cwYrT4GaRuOFRCdPQaZBxw74EOQLxu1b/dzS4bpF+IMWlieovFgcSfV7+lvexNny3DQlQkgOr6HFPSDSFxSDnDQkfh3CR9yFUCqvlbwnnzKkucpejJz0BSVFxw0WAE0YW3XPaDtjHPH8w5yZ9R2f95B2xnnjucd5M6o7f68g7Yzzh0vzcELBMH2KO5gWfZn6O3p17ESgNi1h4syvPls3KTbO3nUe9UgTuvXQtU6NFrQeJR2GyYcxJ4vbElUmThS6BG7o6lw6gz7RY/iWymdUujF+AykZ+AWhzA7O83zvaIAAAAASUVORK5CYII="

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAwBJREFUaAXtWk1oU0EQntmXNFKLFg+i/TlVvMQiYtWIBz0J9ZLGn5MXvdhTDwqiUrSb9qAogngQ2osXwWJtbaV49aKYtJJQ9ebfRZSCgvhDqUl2nUl8Ni9GHiG23djdQ2Znd97u9823b99hAmCbzYDNgM2AzYDNwMrNAJZSP5iQLTnQVwD1Xq1hY+m8uT6+AgGTodV4fiQsv7k4PQR/kZvRoNe5ATVnEWZCDWInkfzB2APFBFg5JoeADxzA7rGIfFc8b2pfa42HU/H2bEYN06nbmvmuegjrVcYrPKDpWLJfS+QYLyLq0e3ymQDnHPtK4z623DwE3XeuVpQrUFj41YD5E4da/747PAQXQv+fniVY61paBa2ChmfAHlHDBfKFZxX0TZHhAVZBwwXyhWcV9E2R4QFWQcMF8oVnFfRNkeEBVkHDBfKFZxX0TZHhAVZBwwXyhWcV9E2R4QErTEHELyzI0YRcY7gwZeEp0AXcCHkeHORREEFP8+BXAWfZ1lLreXk9hJg7yZipCJPnwX1PATSW7N+tIPeI6m2CZt7SpG99MCDEsdEd8g0vVtyiyXgMoLBh8fhi9Kk8iIR1M9U211PnU319KHy7vXeW9/IQ5IHotDxABbZBItnCvl+jYumliUg8X5dzYw9N9YezKpegDRvcsaWxmAoG8TjXCt39/iDoTnQ9HWjTOd3k+qUWUbUppW7S+OyGQHPrUEd3hmO60rJRzfNR15uI/DCgc6P02X/tC4dKnhB8PdbR+6F07b8SLA0s50eTfc9J6S0I4shERN6VWopUUk1SbCcdlXRdU+OekdZTc+WeXaoxzyVT6aZ0KQ3xMxrUCbbpKT1AppNqyh+dYF1suckxpqoU5OOo59V7Oh+raK0zxPQyLZmly3n//UjfQ95guVtVCo5vk581ijt8LxfI8XcHT5tCjpNbFUFewAExyLbQ8NZ4RF5zPRNs1QTv7brwhL5CL/hSCTWvzb+LJhBzMXj+COQOVm7xohMMPjbhUqkcu33CZsBmYDEz8BMtGM9Haz/txgAAAABJRU5ErkJggg=="

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA5CAYAAABj2ui7AAAAAXNSR0IArs4c6QAACSNJREFUaAXtmn1sm8Udx+8e20lwlzQppXsR2pTYTSmd6F5QC9WGmsYZZYpKK6BM25SXtmxjiEmbaDcYIw2gSmNsk1YYg7Y0zaTRUEAtqnhR7YShia2MsUEHbVI7QIfGtrY4L2ua2H7u9v3d43MfJ/FrYsebdn/4OT/3u999P8+9PHf3HGP/44EXku8m+aTj9ZderDVMs9Y0WCUXvJLKk4YcdQpjxHTwdz+3+tp3DvCNZqF0zCrg1a9896LT4x82ScHXSCZWc8mWSsbK0omHgIjk7DhnxkvckL2XVCw48vtVPz+fLk8uabMCWB9oWRGT7JsAuhFAVQkBnOEvO4VCQogNMc5GVZpklYhXI9GD/59EWkIHIiMAfsrJ2aMDjd2vJnzlGUk4zif/Zf5b6iMssoNJeYPOzzl7H8KfdTDj4EJ3ze8y1QbV+pmx8BdMJtZDzDop2aXaF+P86TJWdtcJ366BxL0cI3kBftq/5aNjMtrBubwFgpwo8xzn/GHpcBwYbHj8tRw1JJnX9W26kpuxjfD7bSTMwwOLScl3ubmr86++3f9MMs7iT86AnkDLBib5PillJRWO+O4KJ+98q6HrH1mUl7XJsr62j43HZAfjcgs9RDxANG/eEvJ1HczaCQxzAvQcab1bcnkv9RnAHXKx8m0zaT7ZCKVuEGUTDwDyeqhF8fyeUNO++7PJSzZZAVI/+dfY2b0o5GbkMQ1ubAv6un6WbSGzYef1t31PSPEAfDnwcHsWuS9uz9S/qdyMgJ9/7RvucHi8F7YrYT6MqvsKmskLlLnYweNvW4uusR9v0vko+2hNTcWaP1352Fg6HUa6RDjj4aGJbtisBFjI6eRXzRUc6aSySQO0DJIm0kYaKS1VSAu42N/eoV4BnIWli1830NB1IpWjYt0nDdCyFm0vTNqUxjSFp6T3BtpuQpvvwYAinNy5dsD3uD+Nn6In1fs3+WIy9gJADdTSxqCv+6npREwLuDSw+VMTIvY22rob+b8TauraOV3mub7nOdJ2O57/LzA2jJUbzsuPN+55b7KmaZtoRETvU3Cc7y9VOAIhbeiPNOi4Lc2T8RibAljfu2k5XnNf44xPSFn+/alZSusOaVRaoZm0T1Y3BdA0Yz/GE6H7OwebHjs1OUOp/Y9rRBeSWJWR9uSQBOgJtGOZw66lEcpd4d6RbFq6/5RWGumhnRjsSpMAmTBvo0S0658e++IjYbthKcdJK2lWGuMMWm8CcNkrmxfgZjMlOKTjCW0wV1dv35ZLV/dtp5VKVsGmuTnOovIlAMfPm+tQxVh982N459FMYc5CXaDtW8KMnPqb+e5D2YqwNPNjxEAsOl8CEFOeRrrJDXZIJ87FleCYFL+0yuZ9uWjQ2jUL5U0A4o3fQDek4ZgzQDsc9Nwa8u3tIU3ZBq1ds1A+xBm7zH/bxRE5egZ/RkJN3TRTL3qYCtf9aK4iaOLt9bcOoZlWlfHKhSd8D59VNRjlY0vizvLe+8hVjN1+NuDIH0ZSsDHFoJkUIJdmnVUgP2ldi/c7W3AXFFsMmineB7lqllhZfXjBsPCx2YfDGJJgsJgUoJDWjjPWV9jYKU4oBJxSHmfQTOpFanBhCLRezg2RK57a0hga78E+yYuhxu6s3lsFg4N4YpBSMGIiFvUjpWHVHBfq20EukMOjYgFG37XwudMTaP1hpryFhFNlxxk0k9UHDb2lbrXbTCLt6cGG3e/jqX2V9kilkPengyw4HAmTcYY4kwXI+CmVJmWdXXy28WBj14FMkEWBIz7NIMV7pF8BOpjZT3+wcNTvQ/qbU0gHWSw4EqwZnBXOOFMco87fSrtU1dzpWhxq2BPMic5mTJtV6OS/UdvtBr8buwNn9dwSfRXTr9xnKDb3aaOevs1eGYuepPXsoK+bVkf2uaj8rcptxq5P6yVD4uSaZEI8QlkKDadkxbWjrJe1TNVErT+cdq+pDa/Xifle7ZAgo53Zgtac1nlBu8VC9xOAZdx5iMTgWa/yvtx+ic6U75Ug8Y1wFT4krC5ks9T6LM18FTEolnhCApD2FDFVRdXiC3p05rVI/gd8XX882bgPPgsfZERsIO3EYN8fTQCSBMzGd9FVCnHnsre2p/22TnalEkgrmucPSI9m0NqSAL/eWPsELN5EYu35DwZv1Ualfo1rrSXtisEmGP0/OeAL7nWYdj2HmckZ/pH5nuBVO0eSLUrrn/cPt1fJfw+H8FpaiC2LL2M+/LxdYVINUgIZoJr7KIMYHb7TblyKcdKo4KB5MhzpnQJIN3GYYJs1orKt3kDrl+heKYa4tq2kVWmeRuS0gNZJCb4d9g4so3roO/k0eef0FmkibaQRX8A6Up3umNIHtWqMStjAadsvmdyIJzRQ5TBW/qWha0inz+X1M31t1SOmOIq3dj3mnk/iUMLNqfRMW4NkTBs41TXl7bi+To5GTfkMdehUjop1nzSQFgUHbaQxXdkpa1Bnoi10EYvQkaqPw/g4c7rWzWQyrv3mc6XJNItFn8V0aynyf2A4y1bQejSdr5Q1qDORg3LDdTWa6RvkWMZiR+t6W9UuuLYpxpXKpLIVHLSQpkxwpCtjDWrxV7xxx7xzp0//Gn1zA63eMQDfu8hd82A2Z1W0j3yu1hmd8B2MiXvUEoyxZ+YtWtTy5vIHz2XjL2tAcqYGnkBrJwr6Ef1HB/87jkB2fHZN897ZPvNJZ03/3Hu4HUczOzHQfUKVx9l9wcZ9OCOnNnjpVsaQE6D2tjjQeo0p2U9AvILuocC3MYvonF9VfjjTwRztI9WVdumGRyaaMZvqwAO9XNlx/ireBVvzmbjnBajFef0tN+JtsgNPeLElhJ3HWbIj+AB+0HAZh4PX7D2tbdNdaakjoqKZC7Yeh9GaMEJeRPZoISdRWXelOiKSzqdOmxEgOcETd4WHI5uxBMFnL7ZcO4Y8gb56HLXcjyoOoqAhiFfbk3gIlRgsqpHmRdoSNHmMiupcgJUdgwi+4/2qZn7ZHrSI6AWfucdmDGgvcom/5QqT8Ruw87oGzXYlmpjLnp4qDtsobI8anPc6mHy639dNK5pZCbMKaFekTvJOhJcIk2pIYikjqzA0WIfS6Wiz5CMAe8dwyP6F5TX9hR6N7dr+H/9vegL/Adaw8oJ/tgxLAAAAAElFTkSuQmCC"

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAWNJREFUaAXtmssNwjAMhpOKMTjwkNgF2IMpgAMwBXsAuyDxODAHISlVTzGylMS41Z9T5Dqx/X9GTVGMwYACqhWwVHbP7Wz+du+jcW5I+aiwW/uqbLUa7a6XWD5VzBhsnSguJOoB1LmGeWQMIravqSE3OdxIyuRawQf39dT96jKSoGCORUOhwKLyCmwOggIiFw0BgkXlFdgcBAVELhoCBIvKK7A5fRZlBn9spifnzILpHnWz1pzH+9sy+jDR2PsWTSZYSvlEcO3y3hNEgS3rjk5AsKPg2rRBsJWio5Pk92COkwylXY4TjuoWdf5fT6p4rj2ZIE4yXKkL+alu0Rw1o8AcKv5zDxD8p/o5YveeYPJ7ECeZhD7DSYYhXu9/gyiQ0QWqXUBQNR5GciDIEEm1CwiqxsNIDgQZIql2ob8m/D3McIuvvs2nugSfXMiVGGSLhkumvxYS+8mbmwux8oEREQpkUeADV8xGaoJtaEsAAAAASUVORK5CYII="

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "icon_nav_actionSheet.png?610c6bab9d5a2f510228cbe7bb45a1c7";

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABoFJREFUaAXtml9oHEUcx2c2SZu0RlohtVYQSWK1tNSH9sWUJHdJWxHB9KWCvvpilCAIUfrU6otoQFDR+OKrPvSlEURsmsv1SutLRSwttTUJIqi1AVvU/G1ux+93ZmfdXDZ3m8ttbhPch5vb2Zn5fT8zszt/fiPEBr9knHxHWy7umHVmnxCu+6gSzv1CqkZtT8m/pXD/Eo7zc71b/+PZ8UO349JRUcDU3tGd7my+RwjVpYRICyWaIgmX4jaEZIWQGae+Zih7LX0rUr4IiSoC2NGaeU4pt1cqdQRgNf/ZlXekVDeUkmMI70q0HJ8ptCTitiGuFeHjiNlu80BQXkk5LKUzmBvr+tLGlxuuCjDdkjmUF+57Sqk2IwAIUn0nhHPGEc5Qdjx9NYqwVMvoPle4aHn3GIAPsAqYT0p5qUY4b4yOd12MUk5YmrIAOx47v0e4994BGERBiJC3lJDv1tWK05mb3b+GGYoa17V75OF7C+K4FOpNJdROXb6UQ8KpO5H7qfN61HJsuhUDtjePvIxW+ghwtahidrmBhq1N75+98uSULbQS4dH9P2ydmZp8HWX1C6Ua0ZoLaN2+CxPdn66k/MiAqdRorftL/gPU6iuegcH7nM0nvx7rmFyJwZWm5Zd4Rk2fQr5e5kVv+cR5pOa1bDa9wPtSVyTAp/deemBmdvo0Wq0LJmYcIV86P9H9RanCK/m8s3nkBVeoz/B+NqA1Mw31W45/c63tz1I2SgISbnpm+lsUvBvV91uNqu3JTqQvlyo4juep5tGDebkwhOFnFyr65paGLU+VgnSKCWG3ZMsRDrX2vdi0+WC14KhT24YGrQWaqI0aizEUBdTvHLslWk5t2vTshesdvxcrbC2eUQO1aE3QRo3F7C4L2Nk83Gs+KHKG3TIJcBaEWqiJ3wNq5JfdPisMQ99Bb5y7wqEAA/aLa/1BKRS53L358LifcwjBOLk/bJwMb0EziLNvDyYVjtCetkE9JkNzWEUsAeT0Cxl6OIhznAvLlKQ4rRFaqZnaC7UtAeTc0ks0EPcgXiimnHtP4wDzBrT7RS0CNKsC1ca5JadffqqE/6FWPR/GpJ8MQbmLALnk4UNOnCs9twwarfR/aqVmrd1jsDZ8QC5WuZ7Dp1dxVWATrCZMtQ6nOlqHTzFcTTlR8hrNWK6BgSw2jw/IlTgXqxg3Lq92yWMLd4VIKVecZGjj4gqpmWtRMphdBWPJB0TH7NJRXHut28s5Y6R7LLjxAUGe5kOuxE2i9fdrtYMlZdVrwO595x40G0TyTtRtBltAkkKjXd4Byw7NBHEa8N4cN37wecEGUZIEl6PFMlgm00Wxb8nCsCUwVk6hScrjM3hMGlBvykIl6O8mSWw5WiyDZTIt6O04YxTR+5blFJyUPD6Dx2QAk6IuBh0GMLDjHIONNS2Su+baoMekAbUjBLF4QbetqZoYjFkGy2Q2bODlEXmXH5nWGGyi4oSek0YtG7WezY4dyUZNH0xHBtjDAAgmXBqwbrO6MT+tW1CPh3xQ0UuJThjtjFqma16cbNT0wXRoQTAoQbcc4zXgyNXDf7S3DE+iqptScIRUajbDlvDEBjWU/M98JROFJKD2vFrYjh2329bnaLooEmMVMYqWfd54eUQkr1CIjUVRXjfLLoqM8cbTThbfpukM2qjMGNvusRg1xFy01W5ZAqsJelZBnkcfPkAXVsxKKl48NVM7GchiDfgtSLcxPat4QSX9czbBegmNZoyCYAi6wH1AgtBtrEM4H+mfWy9w1EqHaZDBal8ESJ84dokv0bPqOR9tukSH1ErN1F7o118ESAr6xD2a/mdac9FOSVQR39PYX6DdV7QEkA5/1AR8cKrxH3fuLT9lQv9Mqbm3qZWaww4rLAHUHHD4IwNdxL10cCSUTVAbZkg4M6CdLyfCdIYC0kuDT24fM9BtTM9qWOZqxlGTcWnrKWZfmGeJ+jBsLH91NJ/7WPsI4QCldzcpPsL2PbmHxPzcZUw5d/FQQm7i8KvLUYS2oE3M0wxo/owuaH7+K12wfVilkBoktGhN0EaNxaQUbUFm3NCHEAjIUww8zWBbMi/yuWp8eGiTtm3LRTlhQf0lW5CJeFXrIBDHOW+4iu8gkEE0v/pwgpQfarfxRjrKFYTc0IfxgqChxynhfsOsfais45Tws2PRjTG3yscpg5D8v2EPxBaCbtgjzYWg9p4uLO3lKXIonTt63PSyef4PV1gD/wI5yUbEbEhJuAAAAABJRU5ErkJggg=="

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(67)
	__vue_script__ = __webpack_require__(69)
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\ButtonView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07ee090c&file=ButtonView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ButtonView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07ee090c&file=ButtonView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ButtonView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".btn.btn_mini {\n  line-height: 180%;\n  font-size: 14.4px;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: inline-block;\n}\nbutton.weui_btn,\ninput.weui_btn {\n  width: 100%;\n  border-width: 0;\n  outline: 0;\n  -webkit-appearance: none;\n}\nbutton.weui_btn:focus,\ninput.weui_btn:focus {\n  outline: 0;\n}\nbutton.weui_btn_inline,\ninput.weui_btn_inline,\nbutton.weui_btn_mini,\ninput.weui_btn_mini {\n  width: auto;\n}\n/*gap between btn*/\n.btn + .btn {\n  margin-top: 15px;\n}\n.btn.btn_inline + .btn.btn_inline {\n  margin-top: auto;\n  margin-left: 15px;\n}\n.btn_area {\n  margin: 15px;\n}\n.btn_area.btn_area_inline {\n  -webkit-display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.btn_area.btn_area_inline .btn {\n  margin-top: auto;\n  margin-right: 15px;\n  width: 100%;\n  -webkit-flex: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.btn_area.btn_area_inline .btn:last-child {\n  margin-right: 0;\n}\n.btn {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  color: #FFFFFF;\n  line-height: 240%;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  overflow: hidden;\n}\n.btn:after {\n  content: \" \";\n  width: 200%;\n  height: 200%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n.btn.btn_inline {\n  display: inline-block;\n}\n.btn_default {\n  color: #666666;\n  background-color: #FFFFFF;\n}\n.btn_default:not(.btn_disabled):visited {\n  background-color: #FFFFFF;\n}\n.btn_default:not(.btn_disabled):active {\n  color: #666666;\n  background-color: #F3F3F3;\n}\n.btn_default.btn_disabled {\n  color: #FFFFFF;\n  background-color: #D9D9D9;\n}\n.btn_primary {\n  background-color: #1677CB;\n}\n.btn_primary:not(.btn_disabled):visited {\n  color: #FFFFFF;\n}\n.btn_primary:not(.btn_disabled):active {\n  color: #FFFFFF;\n  background-color: #1B598F;\n}\n.btn_warn {\n  background-color: #EF4F4F;\n}\n.btn_warn:not(.btn_disabled):visited {\n  color: #FFFFFF;\n}\n.btn_warn:not(.btn_disabled):active {\n  color: #FFFFFF;\n  background-color: #C13E3E;\n}\n.weui_btn_disabled {\n  color: #FFFFFF;\n}\n.weui_btn_disabled.weui_btn_default {\n  color: #FFFFFF;\n}\n.btn_plain_primary {\n  color: #1677CB;\n  border: 1px solid #1677CB;\n}\nbutton.btn_plain_primary,\ninput.btn_plain_primary {\n  border-width: 1px;\n  background-color: transparent;\n}\n.btn_plain_primary:active {\n  border-color: #1B598F;\n}\n.btn_plain_primary:after {\n  border-width: 0;\n}\n.btn_plain_warn {\n  color: #EF4F4F;\n  border: 1px solid #EF4F4F;\n}\nbutton.btn_plain_warn,\ninput.btn_plain_warn {\n  border-width: 1px;\n  background-color: transparent;\n}\n.btn_plain_warn:active {\n  border-color: #EF4F4F;\n}\n.btn_plain_warn:after {\n  border-width: 0;\n}\n.btn_plain_default {\n  color: #666666;\n  border: 1px solid #F3F3F3;\n}\nbutton.btn_plain_default,\ninput.btn_plain_default {\n  border-width: 1px;\n  background-color: transparent;\n}\n.btn_plain_default:active {\n  border-color: #D9D9D9;\n}\n.btn_plain_default:after {\n  border-width: 0;\n}\n", "", {"version":3,"sources":["/./example/modules/ButtonView.vue.style"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;CACvB;AACD;;EAEE,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,yBAAyB;CAC1B;AACD;;EAEE,WAAW;CACZ;AACD;;;;EAIE,YAAY;CACb;AACD,mBAAmB;AACnB;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,qBAAc;EAAd,qBAAc;EAAd,cAAc;CACf;AACD;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,oBAAQ;MAAR,YAAQ;UAAR,QAAQ;CACT;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,8CAA8C;EAC9C,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,qCAAqC;EACrC,8BAAsB;UAAtB,sBAAsB;EACtB,8BAAsB;UAAtB,sBAAsB;EACtB,uBAAuB;EACvB,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,kBAAkB;EAClB,8BAA8B;CAC/B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,kBAAkB;EAClB,8BAA8B;CAC/B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,kBAAkB;EAClB,8BAA8B;CAC/B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,gBAAgB;CACjB","file":"ButtonView.vue","sourcesContent":[".btn.btn_mini {\n  line-height: 180%;\n  font-size: 14.4px;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: inline-block;\n}\nbutton.weui_btn,\ninput.weui_btn {\n  width: 100%;\n  border-width: 0;\n  outline: 0;\n  -webkit-appearance: none;\n}\nbutton.weui_btn:focus,\ninput.weui_btn:focus {\n  outline: 0;\n}\nbutton.weui_btn_inline,\ninput.weui_btn_inline,\nbutton.weui_btn_mini,\ninput.weui_btn_mini {\n  width: auto;\n}\n/*gap between btn*/\n.btn + .btn {\n  margin-top: 15px;\n}\n.btn.btn_inline + .btn.btn_inline {\n  margin-top: auto;\n  margin-left: 15px;\n}\n.btn_area {\n  margin: 15px;\n}\n.btn_area.btn_area_inline {\n  -webkit-display: flex;\n  display: flex;\n}\n.btn_area.btn_area_inline .btn {\n  margin-top: auto;\n  margin-right: 15px;\n  width: 100%;\n  -webkit-flex: 1;\n  flex: 1;\n}\n.btn_area.btn_area_inline .btn:last-child {\n  margin-right: 0;\n}\n.btn {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  color: #FFFFFF;\n  line-height: 240%;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  overflow: hidden;\n}\n.btn:after {\n  content: \" \";\n  width: 200%;\n  height: 200%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  transform: scale(0.5);\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n.btn.btn_inline {\n  display: inline-block;\n}\n.btn_default {\n  color: #666666;\n  background-color: #FFFFFF;\n}\n.btn_default:not(.btn_disabled):visited {\n  background-color: #FFFFFF;\n}\n.btn_default:not(.btn_disabled):active {\n  color: #666666;\n  background-color: #F3F3F3;\n}\n.btn_default.btn_disabled {\n  color: #FFFFFF;\n  background-color: #D9D9D9;\n}\n.btn_primary {\n  background-color: #1677CB;\n}\n.btn_primary:not(.btn_disabled):visited {\n  color: #FFFFFF;\n}\n.btn_primary:not(.btn_disabled):active {\n  color: #FFFFFF;\n  background-color: #1B598F;\n}\n.btn_warn {\n  background-color: #EF4F4F;\n}\n.btn_warn:not(.btn_disabled):visited {\n  color: #FFFFFF;\n}\n.btn_warn:not(.btn_disabled):active {\n  color: #FFFFFF;\n  background-color: #C13E3E;\n}\n.weui_btn_disabled {\n  color: #FFFFFF;\n}\n.weui_btn_disabled.weui_btn_default {\n  color: #FFFFFF;\n}\n.btn_plain_primary {\n  color: #1677CB;\n  border: 1px solid #1677CB;\n}\nbutton.btn_plain_primary,\ninput.btn_plain_primary {\n  border-width: 1px;\n  background-color: transparent;\n}\n.btn_plain_primary:active {\n  border-color: #1B598F;\n}\n.btn_plain_primary:after {\n  border-width: 0;\n}\n.btn_plain_warn {\n  color: #EF4F4F;\n  border: 1px solid #EF4F4F;\n}\nbutton.btn_plain_warn,\ninput.btn_plain_warn {\n  border-width: 1px;\n  background-color: transparent;\n}\n.btn_plain_warn:active {\n  border-color: #EF4F4F;\n}\n.btn_plain_warn:after {\n  border-width: 0;\n}\n.btn_plain_default {\n  color: #666666;\n  border: 1px solid #F3F3F3;\n}\nbutton.btn_plain_default,\ninput.btn_plain_default {\n  border-width: 1px;\n  background-color: transparent;\n}\n.btn_plain_default:active {\n  border-color: #D9D9D9;\n}\n.btn_plain_default:after {\n  border-width: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="page">
	//       <div class="hd">
	//           <h1 class="page_title">Button</h1>
	//       </div>
	//       <div class="bd spacing">
	//           <a href="javascript:;" class="btn btn_default">默认</a>
	//           <a href="javascript:;" class="btn btn_disabled btn_default">不可点击</a>
	//
	//           <a href="javascript:;" class="btn btn_primary">按钮</a>
	//           <a href="javascript:;" class="btn btn_warn">警告按钮</a>
	//
	//           <div class="button_sp_area">
	//               <a href="javascript:;" class="btn btn_plain_default">边框1</a>
	//               <a href="javascript:;" class="btn btn_plain_primary">边框2</a>
	//
	//               <a href="javascript:;" class="btn btn_mini btn_default">按钮</a>
	//               <a href="javascript:;" class="btn btn_mini btn_disabled btn_default">按钮</a>
	//               <a href="javascript:;" class="btn btn_mini btn_primary">按钮</a>
	//               <a href="javascript:;" class="btn btn_mini btn_warn">按钮</a>
	//           </div>
	//           <div class="btn_area btn_area_inline">
	//               <a href="javascript:;" class="btn btn_default">默认</a>
	//               <a href="javascript:;" class="btn btn_disabled btn_default">no</a>
	//               <a href="javascript:;" class="btn btn_primary">按钮</a>
	//               <a href="javascript:;" class="btn btn_warn">警告</a>
	//           </div>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'ButtonView',
	  data: function data() {
	    return {
	      item: {}
	    };
	  }
	};
	// </script>
	//
	// <style lang="less">
	// @import "../../src/style/widget/button/button.less";
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page\">\n      <div class=\"hd\">\n          <h1 class=\"page_title\">Button</h1>\n      </div>\n      <div class=\"bd spacing\">\n          <a href=\"javascript:;\" class=\"btn btn_default\">默认</a>\n          <a href=\"javascript:;\" class=\"btn btn_disabled btn_default\">不可点击</a>\n\n          <a href=\"javascript:;\" class=\"btn btn_primary\">按钮</a>\n          <a href=\"javascript:;\" class=\"btn btn_warn\">警告按钮</a>\n\n          <div class=\"button_sp_area\">\n              <a href=\"javascript:;\" class=\"btn btn_plain_default\">边框1</a>\n              <a href=\"javascript:;\" class=\"btn btn_plain_primary\">边框2</a>\n\n              <a href=\"javascript:;\" class=\"btn btn_mini btn_default\">按钮</a>\n              <a href=\"javascript:;\" class=\"btn btn_mini btn_disabled btn_default\">按钮</a>\n              <a href=\"javascript:;\" class=\"btn btn_mini btn_primary\">按钮</a>\n              <a href=\"javascript:;\" class=\"btn btn_mini btn_warn\">按钮</a>\n          </div>\n          <div class=\"btn_area btn_area_inline\">\n              <a href=\"javascript:;\" class=\"btn btn_default\">默认</a>\n              <a href=\"javascript:;\" class=\"btn btn_disabled btn_default\">no</a>\n              <a href=\"javascript:;\" class=\"btn btn_primary\">按钮</a>\n              <a href=\"javascript:;\" class=\"btn btn_warn\">警告</a>\n          </div>\n      </div>\n  </div>\n";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(72)
	__vue_template__ = __webpack_require__(90)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\ToastView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Toast = __webpack_require__(73);
	
	var _Toast2 = _interopRequireDefault(_Toast);
	
	var _Loading = __webpack_require__(85);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="page">
	//     <div class="hd">
	//         <h1 class="page_title">Toast</h1>
	//     </div>
	//     <div class="bd spacing">
	//         <!-- <a href="javascript:;" class="weui_btn weui_btn_primary" id="showToast" v-on:click="show_toast()">点击弹出Toast</a> -->
	//         <a href="javascript:;" class="btn btn_primary" v-on:click="showToast = true;">点击弹出Toast(手动关闭)</a>
	//         <a href="javascript:;" class="btn btn_primary" v-on:click="showToast3000 = true;">点击弹出Toast(持续300毫秒)</a>
	//         <a href="javascript:;" class="btn btn_primary" v-on:click="showLoadingToast = true;">点击弹出Loading Toast</a>
	//     </div>
	//
	//     <Toast :show.sync="showToast" :duration="0"></Toast>
	//     <Toast :show.sync="showToast3000" :duration="3000">我只持续3秒哦</Toast>
	//
	//     <Loading v-show="showLoadingToast"></Loading>
	//
	//   </div>
	// </template>
	//
	// <script>
	
	exports.default = {
	  name: 'ToastView',
	  components: {
	    Toast: _Toast2.default,
	    Loading: _Loading2.default
	  },
	  data: function data() {
	    return {
	      showToast: false,
	      showToast3000: false,
	      showLoadingToast: false
	    };
	  },
	  created: function created() {
	    //模拟关闭
	    this.$watch('showLoadingToast', function (newVal, oldVal) {
	      var _this = this;
	
	      var _t = setTimeout(function () {
	        _this.showLoadingToast = false;
	        clearTimeout(_t);
	      }, 3000);
	    });
	  },
	
	  methods: {}
	};
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(74)
	__vue_script__ = __webpack_require__(76)
	__vue_template__ = __webpack_require__(84)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Toast.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-eee54dfa&file=Toast.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Toast.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-eee54dfa&file=Toast.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Toast.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".toast {\n  position: fixed;\n  z-index: 3;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(40, 40, 40, 0.75);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n.toast .icon {\n  font-size: 56px;\n}\n.toast .icon:before {\n  color: #c8c8c8;\n}\n.icon_toast {\n  margin: 22px 0 0;\n  display: block;\n}\n.icon_toast:before {\n  content: '\\EA08';\n  color: #FFFFFF;\n  font-size: 55px;\n}\n.toast_content {\n  margin: 0 0 15px;\n}\n.loading_toast .toast_content {\n  margin-top: 64%;\n  font-size: 14px;\n}\n.loading {\n  position: absolute;\n  width: 0;\n  z-index: 2000000000;\n  left: 50%;\n  top: 38%;\n}\n.loading_leaf {\n  position: absolute;\n  top: -1px;\n  opacity: 0.25;\n}\n.loading_leaf:before {\n  content: \" \";\n  position: absolute;\n  width: 8.14px;\n  height: 3.08px;\n  background: #d1d1d5;\n  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n  border-radius: 1px;\n  -webkit-transform-origin: left 50% 0px;\n          transform-origin: left 50% 0px;\n}\n.loading_leaf_0 {\n  -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;\n          animation: opacity-60-25-0-12 1.25s linear infinite;\n}\n.loading_leaf_0:before {\n  -webkit-transform: rotate(0deg) translate(7.92px, 0px);\n          transform: rotate(0deg) translate(7.92px, 0px);\n}\n.loading_leaf_1 {\n  -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;\n          animation: opacity-60-25-1-12 1.25s linear infinite;\n}\n.loading_leaf_1:before {\n  -webkit-transform: rotate(30deg) translate(7.92px, 0px);\n          transform: rotate(30deg) translate(7.92px, 0px);\n}\n.loading_leaf_2 {\n  -webkit-animation: opacity-60-25-2-12 1.25s linear infinite;\n          animation: opacity-60-25-2-12 1.25s linear infinite;\n}\n.loading_leaf_2:before {\n  -webkit-transform: rotate(60deg) translate(7.92px, 0px);\n          transform: rotate(60deg) translate(7.92px, 0px);\n}\n.loading_leaf_3 {\n  -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;\n          animation: opacity-60-25-3-12 1.25s linear infinite;\n}\n.loading_leaf_3:before {\n  -webkit-transform: rotate(90deg) translate(7.92px, 0px);\n          transform: rotate(90deg) translate(7.92px, 0px);\n}\n.loading_leaf_4 {\n  -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;\n          animation: opacity-60-25-4-12 1.25s linear infinite;\n}\n.loading_leaf_4:before {\n  -webkit-transform: rotate(120deg) translate(7.92px, 0px);\n          transform: rotate(120deg) translate(7.92px, 0px);\n}\n.loading_leaf_5 {\n  -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;\n          animation: opacity-60-25-5-12 1.25s linear infinite;\n}\n.loading_leaf_5:before {\n  -webkit-transform: rotate(150deg) translate(7.92px, 0px);\n          transform: rotate(150deg) translate(7.92px, 0px);\n}\n.loading_leaf_6 {\n  -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;\n          animation: opacity-60-25-6-12 1.25s linear infinite;\n}\n.loading_leaf_6:before {\n  -webkit-transform: rotate(180deg) translate(7.92px, 0px);\n          transform: rotate(180deg) translate(7.92px, 0px);\n}\n.loading_leaf_7 {\n  -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;\n          animation: opacity-60-25-7-12 1.25s linear infinite;\n}\n.loading_leaf_7:before {\n  -webkit-transform: rotate(210deg) translate(7.92px, 0px);\n          transform: rotate(210deg) translate(7.92px, 0px);\n}\n.loading_leaf_8 {\n  -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;\n          animation: opacity-60-25-8-12 1.25s linear infinite;\n}\n.loading_leaf_8:before {\n  -webkit-transform: rotate(240deg) translate(7.92px, 0px);\n          transform: rotate(240deg) translate(7.92px, 0px);\n}\n.loading_leaf_9 {\n  -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;\n          animation: opacity-60-25-9-12 1.25s linear infinite;\n}\n.loading_leaf_9:before {\n  -webkit-transform: rotate(270deg) translate(7.92px, 0px);\n          transform: rotate(270deg) translate(7.92px, 0px);\n}\n.loading_leaf_10 {\n  -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;\n          animation: opacity-60-25-10-12 1.25s linear infinite;\n}\n.loading_leaf_10:before {\n  -webkit-transform: rotate(300deg) translate(7.92px, 0px);\n          transform: rotate(300deg) translate(7.92px, 0px);\n}\n.loading_leaf_11 {\n  -webkit-animation: opacity-60-25-11-12 1.25s linear infinite;\n          animation: opacity-60-25-11-12 1.25s linear infinite;\n}\n.loading_leaf_11:before {\n  -webkit-transform: rotate(330deg) translate(7.92px, 0px);\n          transform: rotate(330deg) translate(7.92px, 0px);\n}\n@-webkit-keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25;\n  }\n  0.01% {\n    opacity: 0.25;\n  }\n  0.02% {\n    opacity: 1;\n  }\n  60.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n  8.34333% {\n    opacity: 0.25;\n  }\n  8.35333% {\n    opacity: 1;\n  }\n  68.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n  16.6767% {\n    opacity: 0.25;\n  }\n  16.6867% {\n    opacity: 1;\n  }\n  76.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n  25.01% {\n    opacity: 0.25;\n  }\n  25.02% {\n    opacity: 1;\n  }\n  85.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n  33.3433% {\n    opacity: 0.25;\n  }\n  33.3533% {\n    opacity: 1;\n  }\n  93.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333;\n  }\n  41.6767% {\n    opacity: 0.25;\n  }\n  41.6867% {\n    opacity: 1;\n  }\n  1.67667% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.270958333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125;\n  }\n  50.01% {\n    opacity: 0.25;\n  }\n  50.02% {\n    opacity: 1;\n  }\n  10.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.375125;\n  }\n}\n@-webkit-keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667;\n  }\n  58.3433% {\n    opacity: 0.25;\n  }\n  58.3533% {\n    opacity: 1;\n  }\n  18.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.479291666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333;\n  }\n  66.6767% {\n    opacity: 0.25;\n  }\n  66.6867% {\n    opacity: 1;\n  }\n  26.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.583458333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625;\n  }\n  75.01% {\n    opacity: 0.25;\n  }\n  75.02% {\n    opacity: 1;\n  }\n  35.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.687625;\n  }\n}\n@-webkit-keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667;\n  }\n  83.3433% {\n    opacity: 0.25;\n  }\n  83.3533% {\n    opacity: 1;\n  }\n  43.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.791791666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333;\n  }\n  91.6767% {\n    opacity: 0.25;\n  }\n  91.6867% {\n    opacity: 1;\n  }\n  51.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.895958333333333;\n  }\n}\n", "", {"version":3,"sources":["/./src/Toast.vue.style"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,oBAAoB;EACpB,mCAAmC;EACnC,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,oBAAoB;EACpB,UAAU;EACV,SAAS;CACV;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,cAAc;CACf;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,iDAAiD;EACjD,mBAAmB;EACnB,uCAA+B;UAA/B,+BAA+B;CAChC;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,uDAA+C;UAA/C,+CAA+C;CAChD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,wDAAgD;UAAhD,gDAAgD;CACjD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,wDAAgD;UAAhD,gDAAgD;CACjD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,wDAAgD;UAAhD,gDAAgD;CACjD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE,4DAAoD;UAApD,oDAAoD;CACrD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE,6DAAqD;UAArD,qDAAqD;CACtD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE,6DAAqD;UAArD,qDAAqD;CACtD;AACD;EACE,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;CACF;AACD;EACE;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;CACF;AACD;EACE;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;CACF;AACD;EACE;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;CACF;AACD;EACE;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,cAAc;GACf;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,kBAAkB;GACnB;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,kBAAkB;GACnB;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,kBAAkB;GACnB;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;EACD;IACE,cAAc;GACf;EACD;IACE,WAAW;GACZ;EACD;IACE,cAAc;GACf;EACD;IACE,2BAA2B;GAC5B;CACF","file":"Toast.vue","sourcesContent":[".toast {\n  position: fixed;\n  z-index: 3;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(40, 40, 40, 0.75);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n.toast .icon {\n  font-size: 56px;\n}\n.toast .icon:before {\n  color: #c8c8c8;\n}\n.icon_toast {\n  margin: 22px 0 0;\n  display: block;\n}\n.icon_toast:before {\n  content: '\\EA08';\n  color: #FFFFFF;\n  font-size: 55px;\n}\n.toast_content {\n  margin: 0 0 15px;\n}\n.loading_toast .toast_content {\n  margin-top: 64%;\n  font-size: 14px;\n}\n.loading {\n  position: absolute;\n  width: 0;\n  z-index: 2000000000;\n  left: 50%;\n  top: 38%;\n}\n.loading_leaf {\n  position: absolute;\n  top: -1px;\n  opacity: 0.25;\n}\n.loading_leaf:before {\n  content: \" \";\n  position: absolute;\n  width: 8.14px;\n  height: 3.08px;\n  background: #d1d1d5;\n  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n  border-radius: 1px;\n  transform-origin: left 50% 0px;\n}\n.loading_leaf_0 {\n  animation: opacity-60-25-0-12 1.25s linear infinite;\n}\n.loading_leaf_0:before {\n  transform: rotate(0deg) translate(7.92px, 0px);\n}\n.loading_leaf_1 {\n  animation: opacity-60-25-1-12 1.25s linear infinite;\n}\n.loading_leaf_1:before {\n  transform: rotate(30deg) translate(7.92px, 0px);\n}\n.loading_leaf_2 {\n  animation: opacity-60-25-2-12 1.25s linear infinite;\n}\n.loading_leaf_2:before {\n  transform: rotate(60deg) translate(7.92px, 0px);\n}\n.loading_leaf_3 {\n  animation: opacity-60-25-3-12 1.25s linear infinite;\n}\n.loading_leaf_3:before {\n  transform: rotate(90deg) translate(7.92px, 0px);\n}\n.loading_leaf_4 {\n  animation: opacity-60-25-4-12 1.25s linear infinite;\n}\n.loading_leaf_4:before {\n  transform: rotate(120deg) translate(7.92px, 0px);\n}\n.loading_leaf_5 {\n  animation: opacity-60-25-5-12 1.25s linear infinite;\n}\n.loading_leaf_5:before {\n  transform: rotate(150deg) translate(7.92px, 0px);\n}\n.loading_leaf_6 {\n  animation: opacity-60-25-6-12 1.25s linear infinite;\n}\n.loading_leaf_6:before {\n  transform: rotate(180deg) translate(7.92px, 0px);\n}\n.loading_leaf_7 {\n  animation: opacity-60-25-7-12 1.25s linear infinite;\n}\n.loading_leaf_7:before {\n  transform: rotate(210deg) translate(7.92px, 0px);\n}\n.loading_leaf_8 {\n  animation: opacity-60-25-8-12 1.25s linear infinite;\n}\n.loading_leaf_8:before {\n  transform: rotate(240deg) translate(7.92px, 0px);\n}\n.loading_leaf_9 {\n  animation: opacity-60-25-9-12 1.25s linear infinite;\n}\n.loading_leaf_9:before {\n  transform: rotate(270deg) translate(7.92px, 0px);\n}\n.loading_leaf_10 {\n  animation: opacity-60-25-10-12 1.25s linear infinite;\n}\n.loading_leaf_10:before {\n  transform: rotate(300deg) translate(7.92px, 0px);\n}\n.loading_leaf_11 {\n  animation: opacity-60-25-11-12 1.25s linear infinite;\n}\n.loading_leaf_11:before {\n  transform: rotate(330deg) translate(7.92px, 0px);\n}\n@-webkit-keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25;\n  }\n  0.01% {\n    opacity: 0.25;\n  }\n  0.02% {\n    opacity: 1;\n  }\n  60.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n  8.34333% {\n    opacity: 0.25;\n  }\n  8.35333% {\n    opacity: 1;\n  }\n  68.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n  16.6767% {\n    opacity: 0.25;\n  }\n  16.6867% {\n    opacity: 1;\n  }\n  76.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n  25.01% {\n    opacity: 0.25;\n  }\n  25.02% {\n    opacity: 1;\n  }\n  85.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n  33.3433% {\n    opacity: 0.25;\n  }\n  33.3533% {\n    opacity: 1;\n  }\n  93.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333;\n  }\n  41.6767% {\n    opacity: 0.25;\n  }\n  41.6867% {\n    opacity: 1;\n  }\n  1.67667% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.270958333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125;\n  }\n  50.01% {\n    opacity: 0.25;\n  }\n  50.02% {\n    opacity: 1;\n  }\n  10.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.375125;\n  }\n}\n@-webkit-keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667;\n  }\n  58.3433% {\n    opacity: 0.25;\n  }\n  58.3533% {\n    opacity: 1;\n  }\n  18.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.479291666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333;\n  }\n  66.6767% {\n    opacity: 0.25;\n  }\n  66.6867% {\n    opacity: 1;\n  }\n  26.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.583458333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625;\n  }\n  75.01% {\n    opacity: 0.25;\n  }\n  75.02% {\n    opacity: 1;\n  }\n  35.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.687625;\n  }\n}\n@-webkit-keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667;\n  }\n  83.3433% {\n    opacity: 0.25;\n  }\n  83.3533% {\n    opacity: 1;\n  }\n  43.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.791791666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333;\n  }\n  91.6767% {\n    opacity: 0.25;\n  }\n  91.6867% {\n    opacity: 1;\n  }\n  51.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.895958333333333;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(77);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 组件内部自动关闭
	 */
	exports.default = {
	
	  name: 'Toast',
	  props: {
	    show: {
	      type: Boolean,
	      required: true,
	      default: false,
	      twoWay: true
	    },
	    // 类型：暂不提供
	    type: {
	      type: String
	      // default:
	
	    },
	    // 持续时间(毫秒)
	    duration: {
	      type: Number,
	      default: 3000
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && !!this.duration) {
	        this._timeout = setTimeout(function () {
	          return _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	};
	// </script>
	//
	// <style lang="less">
	// @import "./style/base/fn";
	//
	// .toast {
	//     position: fixed;
	//     z-index: 3;
	//     width: 7.6em;
	//     min-height: 7.6em;
	//     top: 180px;
	//     left: 50%;
	//     margin-left: -3.8em;
	//     background: rgba(40, 40, 40, 0.75);
	//     text-align: center;
	//     border-radius: 5px;
	//     color: #FFFFFF;
	//     .icon{
	//         font-size:56px;
	//         &:before{
	//              color: @gColorAidGray;
	//          }
	//     }
	// }
	// .icon_toast {
	//     margin: 22px 0 0;
	//     display: block;
	//     &:before {
	//         content: '\EA08';
	//         color: #FFFFFF;
	//         font-size: 55px;
	//     }
	// }
	// .toast_content {
	//     margin: 0 0 15px;
	// }
	//
	// // loading toast
	// .loading_toast{
	//     .toast_content{
	//       margin-top:64%;
	//       font-size:14px;
	//     }
	// }
	// .loading{
	//     position: absolute;
	//     width: 0;
	//     z-index: 2000000000;
	//     left: 50%;
	//     top: 38%;
	// }
	// .loading_leaf{
	//     position: absolute;
	//     top: -1px;
	//     opacity: 0.25;
	//     &:before{
	//         content:" ";
	//         position: absolute;
	//         width: 8.14px;
	//         height: 3.08px;
	//         background: rgb(209, 209, 213);
	//         box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;
	//         border-radius: 1px;
	//         transform-origin: left 50% 0px;
	//     }
	//     &_0{
	//         animation: opacity-60-25-0-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(0deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_1{
	//         animation: opacity-60-25-1-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(30deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_2{
	//         animation: opacity-60-25-2-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(60deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_3{
	//         animation: opacity-60-25-3-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(90deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_4{
	//         animation: opacity-60-25-4-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(120deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_5{
	//         animation: opacity-60-25-5-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(150deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_6{
	//         animation: opacity-60-25-6-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(180deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_7{
	//         animation: opacity-60-25-7-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(210deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_8{
	//         animation: opacity-60-25-8-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(240deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_9{
	//         animation: opacity-60-25-9-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(270deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_10{
	//         animation: opacity-60-25-10-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(300deg) translate(7.92px, 0px);
	//         }
	//     }
	//     &_11{
	//         animation: opacity-60-25-11-12 1.25s linear infinite;
	//         &:before{
	//             transform: rotate(330deg) translate(7.92px, 0px);
	//         }
	//     }
	// }
	// @-webkit-keyframes opacity-60-25-0-12 {
	//   0% { opacity: 0.25; }
	//   0.01% { opacity: 0.25; }
	//   0.02% { opacity: 1; }
	//   60.01% { opacity: 0.25; }
	//   100% { opacity: 0.25; }
	// }@-webkit-keyframes opacity-60-25-1-12 {
	//   0% { opacity: 0.25; }
	//   8.34333% { opacity: 0.25; }
	//   8.35333% { opacity: 1; }
	//   68.3433% { opacity: 0.25; }
	//   100% { opacity: 0.25; }
	// }@-webkit-keyframes opacity-60-25-2-12 {
	//   0% { opacity: 0.25; }
	//   16.6767% { opacity: 0.25; }
	//   16.6867% { opacity: 1; }
	//   76.6767% { opacity: 0.25; }
	//   100% { opacity: 0.25; }
	// }@-webkit-keyframes opacity-60-25-3-12 {
	//   0% { opacity: 0.25; }
	//   25.01% { opacity: 0.25; }
	//   25.02% { opacity: 1; }
	//   85.01% { opacity: 0.25; }
	//   100% { opacity: 0.25; }
	// }@-webkit-keyframes opacity-60-25-4-12 {
	//   0% { opacity: 0.25; }
	//   33.3433% { opacity: 0.25; }
	//   33.3533% { opacity: 1; }
	//   93.3433% { opacity: 0.25; }
	//   100% { opacity: 0.25; }
	// }@-webkit-keyframes opacity-60-25-5-12 {
	//   0% { opacity: 0.270958333333333; }
	//   41.6767% { opacity: 0.25; }
	//   41.6867% { opacity: 1; }
	//   1.67667% { opacity: 0.25; }
	//   100% { opacity: 0.270958333333333; }
	// }@-webkit-keyframes opacity-60-25-6-12 {
	//   0% { opacity: 0.375125; }
	//   50.01% { opacity: 0.25; }
	//   50.02% { opacity: 1; }
	//   10.01% { opacity: 0.25; }
	//   100% { opacity: 0.375125; }
	// }@-webkit-keyframes opacity-60-25-7-12 {
	//   0% { opacity: 0.479291666666667; }
	//   58.3433% { opacity: 0.25; }
	//   58.3533% { opacity: 1; }
	//   18.3433% { opacity: 0.25; }
	//   100% { opacity: 0.479291666666667; }
	// }@-webkit-keyframes opacity-60-25-8-12 {
	//   0% { opacity: 0.583458333333333; }
	//   66.6767% { opacity: 0.25; }
	//   66.6867% { opacity: 1; }
	//   26.6767% { opacity: 0.25; }
	//   100% { opacity: 0.583458333333333; }
	// }@-webkit-keyframes opacity-60-25-9-12 {
	//   0% { opacity: 0.687625; }
	//   75.01% { opacity: 0.25; }
	//   75.02% { opacity: 1; }
	//   35.01% { opacity: 0.25; }
	//   100% { opacity: 0.687625; }
	// }@-webkit-keyframes opacity-60-25-10-12 {
	//   0% { opacity: 0.791791666666667; }
	//   83.3433% { opacity: 0.25; }
	//   83.3533% { opacity: 1; }
	//   43.3433% { opacity: 0.25; }
	//   100% { opacity: 0.791791666666667; }
	// }@-webkit-keyframes opacity-60-25-11-12 {
	//   0% { opacity: 0.895958333333333; }
	//   91.6767% { opacity: 0.25; }
	//   91.6867% { opacity: 1; }
	//   51.6767% { opacity: 0.25; }
	//   100% { opacity: 0.895958333333333; }
	// }
	// </style>
	//
	/* generated by vue-loader */
	// <template>
	//   <div v-show="show">
	//       <div class="mask_transparent"></div>
	//       <div class="toast">
	//           <i class="icon i-bighook"></i>
	//           <p class="toast_content"><slot>已完成</slot></p>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-643d064d&file=Icon.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Icon.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-643d064d&file=Icon.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "/*字体图标*/\n@font-face {\n  font-family: 'iconfont';\n  /*src: url('./font/iconfont.eot'); !*IE9*!*/\n  src: url(" + __webpack_require__(80) + "?#iefix) format('embedded-opentype'),  url(" + __webpack_require__(81) + ") format('woff'),  url(" + __webpack_require__(82) + ") format('truetype'),  url(" + __webpack_require__(83) + "#iconfont) format('svg');\n  /* iOS 4.1- */\n}\n[class^=\"icon-\"]:before,\n[class*=\"icon-\"]::before,\n.icon {\n  font-family: \"iconfont\" !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em;\n  margin-left: .2em;\n  vertical-align: middle;\n  font-size: 22px;\n  color: #1677CB;\n}\n.i-searchmini:before {\n  content: \"\\E624\";\n}\n.i-triangleWarning:before {\n  content: \"\\F02FE\";\n}\n.i-right:before {\n  content: \"\\E628\";\n}\n.i-roundwarning:before {\n  content: \"\\E64F\";\n}\n.i-sad:before {\n  content: \"\\E820\";\n}\n.i-add:before {\n  content: \"\\E64A\";\n}\n.i-minus:before {\n  content: \"\\E64B\";\n}\n.i-left:before {\n  content: \"\\E626\";\n}\n.i-top:before {\n  content: \"\\E627\";\n}\n.i-ight:before {\n  content: \"\\E628\";\n}\n.i-down:before {\n  content: \"\\E629\";\n}\n.i-warning:before {\n  content: \"\\E62C\";\n}\n.i-help:before {\n  content: \"\\E62D\";\n}\n.i-cross:before {\n  content: \"\\E622\";\n}\n.i-questions:before {\n  content: \"\\E639\";\n}\n.i-backtop:before {\n  content: \"\\E6C6\";\n}\n.i-mapfill:before {\n  content: \"\\E668\";\n}\n.i-map:before {\n  content: \"\\E669\";\n}\n.i-refresh:before {\n  content: \"\\E66A\";\n}\n.i-smile:before {\n  content: \"\\E670\";\n}\n.i-delete:before {\n  content: \"\\E67E\";\n}\n.i-more:before {\n  content: \"\\E6AD\";\n}\n.i-close:before {\n  content: \"\\E6A7\";\n}\n.i-closefill:before {\n  content: \"\\E6A6\";\n}\n.i-scan:before {\n  content: \"\\E69A\";\n}\n.i-search:before {\n  content: \"\\E699\";\n}\n.i-share:before {\n  content: \"\\E6F3\";\n}\n.i-wifi:before {\n  content: \"\\E6F2\";\n}\n.i-moreandroid:before {\n  content: \"\\E6A5\";\n}\n.i-sadfill:before {\n  content: \"\\E672\";\n}\n.i-download:before {\n  content: \"\\F0304\";\n}\n.i-check:before {\n  content: \"\\E60B\";\n}\n.i-forbid:before {\n  content: \"\\E650\";\n}\n.i-caozuo:before {\n  content: \"\\E649\";\n}\n.i-ddown:before {\n  content: \"\\E695\";\n}\n.i-dleft:before {\n  content: \"\\E696\";\n}\n.i-dright:before {\n  content: \"\\E697\";\n}\n.i-dup:before {\n  content: \"\\E698\";\n}\n.i-arrowdown:before {\n  content: \"\\E69D\";\n}\n.i-arrowleft:before {\n  content: \"\\E69E\";\n}\n.i-arrowright:before {\n  content: \"\\E69F\";\n}\n.i-arrowup:before {\n  content: \"\\E6A0\";\n}\n.i-collect1e:before {\n  content: \"\\E647\";\n}\n.i-collect1f:before {\n  content: \"\\E648\";\n}\n.i-share:before {\n  content: \"\\E646\";\n}\n.i-addroud:before {\n  content: \"\\E65E\";\n}\n.i-addroudfill:before {\n  content: \"\\E65F\";\n}\n.i-minusroud:before {\n  content: \"\\E65B\";\n}\n.i-minusroudfill:before {\n  content: \"\\E65C\";\n}\n.i-zoomin:before {\n  content: \"\\EDAF\";\n}\n.i-zoomout:before {\n  content: \"\\EDB0\";\n}\n.i-hook:before {\n  content: \"\\EB14\";\n}\n.i-refresh:before {\n  content: \"\\E631\";\n}\n.i-searchbig:before {\n  content: \"\\E60B\";\n}\n.i-round:before {\n  content: \"\\E60C\";\n}\n.i-play:before {\n  content: \"\\E6A8\";\n}\n.i-pause:before {\n  content: \"\\E6A9\";\n}\n.i-stop:before {\n  content: \"\\E6A7\";\n}\n.i-iconfontfemale:before {\n  content: \"\\E604\";\n}\n.i-iconfontmale:before {\n  content: \"\\E607\";\n}\n.i-search:before {\n  content: \"\\E624\";\n}\n.i-bighook:before {\n  content: \"\\E616\";\n}\n.i-radiochecked:before {\n  content: \"\\E62A\";\n}\n.i-radiooff:before {\n  content: \"\\E60C\";\n}\n.i-xiazai1:before {\n  content: \"\\E647\";\n}\n.i-search2:before {\n  content: \"\\E60B\";\n}\n.i-loading:before {\n  content: \"\\E7E3\";\n}\n.i-star:before {\n  content: \"\\E603\";\n}\n.i-starfill:before {\n  content: \"\\E604\";\n}\n.i-heart:before {\n  content: \"\\E605\";\n}\n.i-heartfill:before {\n  content: \"\\E606\";\n}\n.i-checksquare:before {\n  content: \"\\E649\";\n}\n.i-checksquareoff:before {\n  content: \"\\E642\";\n}\n.i-code:before {\n  content: \"\\E601\";\n}\n.i-barcode:before {\n  content: \"\\E600\";\n}\n", "", {"version":3,"sources":["/./src/Icon.vue.style"],"names":[],"mappings":"AAAA,QAAQ;AACR;EACE,wBAAwB;EACxB,4CAA4C;EAC5C,+MAAgS;EAChS,cAAc;CACf;AACD;;;EAGE,mCAAmC;EACnC,mBAAmB;EACnB,oCAAoC;EACpC,iCAAiC;EACjC,mCAAmC;EACnC,yBAAyB;EACzB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB","file":"Icon.vue","sourcesContent":["/*字体图标*/\n@font-face {\n  font-family: 'iconfont';\n  /*src: url('./font/iconfont.eot'); !*IE9*!*/\n  src: url('font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('font/iconfont.woff') format('woff'), /* chrome、firefox */ url('font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/ url('font/iconfont.svg#iconfont') format('svg');\n  /* iOS 4.1- */\n}\n[class^=\"icon-\"]:before,\n[class*=\"icon-\"]::before,\n.icon {\n  font-family: \"iconfont\" !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em;\n  margin-left: .2em;\n  vertical-align: middle;\n  font-size: 22px;\n  color: #1677CB;\n}\n.i-searchmini:before {\n  content: \"\\e624\";\n}\n.i-triangleWarning:before {\n  content: \"\\f02fe\";\n}\n.i-right:before {\n  content: \"\\e628\";\n}\n.i-roundwarning:before {\n  content: \"\\e64f\";\n}\n.i-sad:before {\n  content: \"\\e820\";\n}\n.i-add:before {\n  content: \"\\e64a\";\n}\n.i-minus:before {\n  content: \"\\e64b\";\n}\n.i-left:before {\n  content: \"\\e626\";\n}\n.i-top:before {\n  content: \"\\e627\";\n}\n.i-ight:before {\n  content: \"\\e628\";\n}\n.i-down:before {\n  content: \"\\e629\";\n}\n.i-warning:before {\n  content: \"\\e62c\";\n}\n.i-help:before {\n  content: \"\\e62d\";\n}\n.i-cross:before {\n  content: \"\\e622\";\n}\n.i-questions:before {\n  content: \"\\e639\";\n}\n.i-backtop:before {\n  content: \"\\e6c6\";\n}\n.i-mapfill:before {\n  content: \"\\e668\";\n}\n.i-map:before {\n  content: \"\\e669\";\n}\n.i-refresh:before {\n  content: \"\\e66a\";\n}\n.i-smile:before {\n  content: \"\\e670\";\n}\n.i-delete:before {\n  content: \"\\e67e\";\n}\n.i-more:before {\n  content: \"\\e6ad\";\n}\n.i-close:before {\n  content: \"\\e6a7\";\n}\n.i-closefill:before {\n  content: \"\\e6a6\";\n}\n.i-scan:before {\n  content: \"\\e69a\";\n}\n.i-search:before {\n  content: \"\\e699\";\n}\n.i-share:before {\n  content: \"\\e6f3\";\n}\n.i-wifi:before {\n  content: \"\\e6f2\";\n}\n.i-moreandroid:before {\n  content: \"\\e6a5\";\n}\n.i-sadfill:before {\n  content: \"\\e672\";\n}\n.i-download:before {\n  content: \"\\f0304\";\n}\n.i-check:before {\n  content: \"\\e60b\";\n}\n.i-forbid:before {\n  content: \"\\e650\";\n}\n.i-caozuo:before {\n  content: \"\\e649\";\n}\n.i-ddown:before {\n  content: \"\\e695\";\n}\n.i-dleft:before {\n  content: \"\\e696\";\n}\n.i-dright:before {\n  content: \"\\e697\";\n}\n.i-dup:before {\n  content: \"\\e698\";\n}\n.i-arrowdown:before {\n  content: \"\\e69d\";\n}\n.i-arrowleft:before {\n  content: \"\\e69e\";\n}\n.i-arrowright:before {\n  content: \"\\e69f\";\n}\n.i-arrowup:before {\n  content: \"\\e6a0\";\n}\n.i-collect1e:before {\n  content: \"\\e647\";\n}\n.i-collect1f:before {\n  content: \"\\e648\";\n}\n.i-share:before {\n  content: \"\\e646\";\n}\n.i-addroud:before {\n  content: \"\\e65e\";\n}\n.i-addroudfill:before {\n  content: \"\\e65f\";\n}\n.i-minusroud:before {\n  content: \"\\e65b\";\n}\n.i-minusroudfill:before {\n  content: \"\\e65c\";\n}\n.i-zoomin:before {\n  content: \"\\edaf\";\n}\n.i-zoomout:before {\n  content: \"\\edb0\";\n}\n.i-hook:before {\n  content: \"\\eb14\";\n}\n.i-refresh:before {\n  content: \"\\e631\";\n}\n.i-searchbig:before {\n  content: \"\\e60b\";\n}\n.i-round:before {\n  content: \"\\e60c\";\n}\n.i-play:before {\n  content: \"\\e6a8\";\n}\n.i-pause:before {\n  content: \"\\e6a9\";\n}\n.i-stop:before {\n  content: \"\\e6a7\";\n}\n.i-iconfontfemale:before {\n  content: \"\\e604\";\n}\n.i-iconfontmale:before {\n  content: \"\\e607\";\n}\n.i-search:before {\n  content: \"\\e624\";\n}\n.i-bighook:before {\n  content: \"\\e616\";\n}\n.i-radiochecked:before {\n  content: \"\\e62a\";\n}\n.i-radiooff:before {\n  content: \"\\e60c\";\n}\n.i-xiazai1:before {\n  content: \"\\e647\";\n}\n.i-search2:before {\n  content: \"\\e60b\";\n}\n.i-loading:before {\n  content: \"\\e7e3\";\n}\n.i-star:before {\n  content: \"\\e603\";\n}\n.i-starfill:before {\n  content: \"\\e604\";\n}\n.i-heart:before {\n  content: \"\\e605\";\n}\n.i-heartfill:before {\n  content: \"\\e606\";\n}\n.i-checksquare:before {\n  content: \"\\e649\";\n}\n.i-checksquareoff:before {\n  content: \"\\e642\";\n}\n.i-code:before {\n  content: \"\\e601\";\n}\n.i-barcode:before {\n  content: \"\\e600\";\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/iconfont.eot";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/iconfont.woff";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/iconfont.ttf";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "font/iconfont.svg";

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "\n  <div v-show=\"show\">\n      <div class=\"mask_transparent\"></div>\n      <div class=\"toast\">\n          <i class=\"icon i-bighook\"></i>\n          <p class=\"toast_content\"><slot>已完成</slot></p>\n      </div>\n  </div>\n";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(86)
	__vue_script__ = __webpack_require__(88)
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-03a23098&file=Loading.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Loading.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-03a23098&file=Loading.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Loading.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="loading_toast">
	//       <div class="mask_transparent"></div>
	//       <div class="toast">
	//           <div class="loading">
	//               <div v-for="n in 12" class="loading_leaf" :class="'loading_leaf_' + n"></div>
	//           </div>
	//           <p class="toast_content">数据加载中</p>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>
	/**
	 * 组件外部手动关闭
	 */
	exports.default = {
	
	  name: 'Loading'
	};
	// </script>
	//
	// <style lang="less">
	// @import "./style/base/fn";
	//
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"loading_toast\">\n      <div class=\"mask_transparent\"></div>\n      <div class=\"toast\">\n          <div class=\"loading\">\n              <div v-for=\"n in 12\" class=\"loading_leaf\" :class=\"'loading_leaf_' + n\"></div>\n          </div>\n          <p class=\"toast_content\">数据加载中</p>\n      </div>\n  </div>\n";

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page\">\n    <div class=\"hd\">\n        <h1 class=\"page_title\">Toast</h1>\n    </div>\n    <div class=\"bd spacing\">\n        <!-- <a href=\"javascript:;\" class=\"weui_btn weui_btn_primary\" id=\"showToast\" v-on:click=\"show_toast()\">点击弹出Toast</a> -->\n        <a href=\"javascript:;\" class=\"btn btn_primary\" v-on:click=\"showToast = true;\">点击弹出Toast(手动关闭)</a>\n        <a href=\"javascript:;\" class=\"btn btn_primary\" v-on:click=\"showToast3000 = true;\">点击弹出Toast(持续300毫秒)</a>\n        <a href=\"javascript:;\" class=\"btn btn_primary\" v-on:click=\"showLoadingToast = true;\">点击弹出Loading Toast</a>\n    </div>\n\n    <Toast :show.sync=\"showToast\" :duration=\"0\"></Toast>\n    <Toast :show.sync=\"showToast3000\" :duration=\"3000\">我只持续3秒哦</Toast>\n\n    <Loading v-show=\"showLoadingToast\"></Loading>\n\n  </div>\n";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(92)
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\DialogView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Dialog = __webpack_require__(93);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'DialogView',
	    components: {
	        Dialog: _Dialog2.default
	        // Button
	    },
	    data: function data() {
	        return {
	            showAlert: false,
	            showConfirm: false
	        };
	    },
	    created: function created() {
	        this.$on('on-alert-confirm', function () {
	            this.showAlert = false;
	        });
	        this.$on('on-confirm-cancel', function () {
	            alert('你是要取消吗？这不太好吧');
	            // this.showConfirm = false;
	        });
	        this.$on('on-confirm-confirm', function () {
	            // this.showAlert = true;
	            alert('恩，这才乖嘛！');
	            this.showConfirm = false;
	        });
	    }
	};

	// </script>
	//
	/* generated by vue-loader */
	// <template>
	//
	// <div class="page">
	//     <div class="hd">
	//         <h1 class="page_title">Dialog</h1>
	//     </div>
	//     <div class="bd spacing">
	//         <a href="javascript:;" class="btn btn_primary" v-on:click="showAlert=true;">点击弹出Dialog Alert</a>
	//         <a href="javascript:;" class="btn btn_primary" v-on:click="showConfirm=true;">点击弹出Dialog Confirm</a>
	//     </div>
	//
	//     <Dialog :show.sync="showAlert"></Dialog>
	//
	//     <Dialog :show.sync="showConfirm" type="confirm" title="弹窗标题">
	//         自定义弹窗内容
	//         <br> ...
	//     </Dialog>
	//
	// </div>
	//
	// </template>
	//
	// <script>

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(94)
	__vue_script__ = __webpack_require__(96)
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-531ac89c&file=Dialog.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-531ac89c&file=Dialog.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".dialog {\n  position: fixed;\n  z-index: 13;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #FAFAFC;\n  text-align: center;\n  border-radius: 3px;\n}\n.dialog_confirm .dialog .dialog_hd {\n  text-align: center;\n  padding: 1.2em 20px .5em;\n}\n.dialog_confirm .dialog .dialog_bd {\n  text-align: left;\n}\n.dialog_mask {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.dialog_hd {\n  padding: 1.2em 0 .5em;\n}\n.dialog_title {\n  font-weight: 400;\n  font-size: 17px;\n}\n.dialog_bd {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #888;\n}\n.dialog_ft {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px;\n}\n.dialog_ft a {\n  display: block;\n  color: #666666;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.dialog_ft a:active,\n.dialog_ft a:hover {\n  text-decoration: none;\n}\n.dialog_ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #c8c8c8;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.dialog_confirm .dialog_ft a {\n  position: relative;\n  float: left;\n  width: 50%;\n}\n.dialog_confirm .dialog_ft a:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #666666;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.dialog_confirm .dialog_ft a:first-child:after {\n  display: none;\n}\n.dialog_confirm .dialog_ft a:last-child {\n  float: none;\n  width: auto;\n  overflow: hidden;\n  *zoom: 1;\n}\n.btn_dialog.default {\n  color: #666666;\n}\n.btn_dialog.primary {\n  color: #1677cb;\n}\n@media screen and (min-width: 1024px) {\n  .dialog {\n    width: 35%;\n  }\n}\n", "", {"version":3,"sources":["/./src/Dialog.vue.style","/./src/Dialog.vue"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,SAAS;EACT,UAAU;EACV,yCAAiC;UAAjC,iCAAiC;EACjC,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,yBAAyB;CAC1B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ;EACR,+BAA+B;CAChC;AACD;EACE,sBAAsB;CACvB;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,eAAe;EACf,sBAAsB;EACtB,8CAA8C;CAC/C;AACD;;EAEE,sBAAsB;CACvB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,8BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;CACZ;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,8BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,cAAc;CACf;AACD;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;GCMjB,QDLS;CACV;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE;IACE,WAAW;GACZ;CACF","file":"Dialog.vue","sourcesContent":[".dialog {\n  position: fixed;\n  z-index: 13;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #FAFAFC;\n  text-align: center;\n  border-radius: 3px;\n}\n.dialog_confirm .dialog .dialog_hd {\n  text-align: center;\n  padding: 1.2em 20px .5em;\n}\n.dialog_confirm .dialog .dialog_bd {\n  text-align: left;\n}\n.dialog_mask {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.dialog_hd {\n  padding: 1.2em 0 .5em;\n}\n.dialog_title {\n  font-weight: 400;\n  font-size: 17px;\n}\n.dialog_bd {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #888;\n}\n.dialog_ft {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px;\n}\n.dialog_ft a {\n  display: block;\n  color: #666666;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.dialog_ft a:active,\n.dialog_ft a:hover {\n  text-decoration: none;\n}\n.dialog_ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #c8c8c8;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.dialog_confirm .dialog_ft a {\n  position: relative;\n  float: left;\n  width: 50%;\n}\n.dialog_confirm .dialog_ft a:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #666666;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.dialog_confirm .dialog_ft a:first-child:after {\n  display: none;\n}\n.dialog_confirm .dialog_ft a:last-child {\n  float: none;\n  width: auto;\n  overflow: hidden;\n  *zoom: 1;\n}\n.btn_dialog.default {\n  color: #666666;\n}\n.btn_dialog.primary {\n  color: #1677cb;\n}\n@media screen and (min-width: 1024px) {\n  .dialog {\n    width: 35%;\n  }\n}\n",".dialog {\n  position: fixed;\n  z-index: 13;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #FAFAFC;\n  text-align: center;\n  border-radius: 3px;\n}\n.dialog_confirm .dialog .dialog_hd {\n  text-align: center;\n  padding: 1.2em 20px .5em;\n}\n.dialog_confirm .dialog .dialog_bd {\n  text-align: left;\n}\n.dialog_mask {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.dialog_hd {\n  padding: 1.2em 0 .5em;\n}\n.dialog_title {\n  font-weight: 400;\n  font-size: 17px;\n}\n.dialog_bd {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #888;\n}\n.dialog_ft {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px;\n}\n.dialog_ft a {\n  display: block;\n  color: #666666;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.dialog_ft a:active,\n.dialog_ft a:hover {\n  text-decoration: none;\n}\n.dialog_ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #c8c8c8;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.dialog_confirm .dialog_ft a {\n  position: relative;\n  float: left;\n  width: 50%;\n}\n.dialog_confirm .dialog_ft a:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #666666;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.dialog_confirm .dialog_ft a:first-child:after {\n  display: none;\n}\n.dialog_confirm .dialog_ft a:last-child {\n  float: none;\n  width: auto;\n  overflow: hidden;\n  *zoom: 1;\n}\n.btn_dialog.default {\n  color: #666666;\n}\n.btn_dialog.primary {\n  color: #1677cb;\n}\n@media screen and (min-width: 1024px) {\n  .dialog {\n    width: 35%;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less">
	//
	// @import "./style/base/fn";
	// @dialogBackgroudColor: #FAFAFC;
	// @dialogLineColor: @gColorTitle;
	// @dialogLinkColor: @gColorTitle;
	// .dialog {
	//     position: fixed;
	//     z-index: 13;
	//     width: 85%;
	//     top: 50%;
	//     left: 50%;
	//     transform: translate(-50%, -50%);
	//     background-color: @dialogBackgroudColor;
	//     text-align: center;
	//     border-radius: 3px;
	//     .dialog_confirm & {
	//         .dialog_hd {
	//             text-align: center;
	//             padding: 1.2em 20px .5em;
	//         }
	//         .dialog_bd {
	//             text-align: left;
	//         }
	//     }
	// }
	// .dialog_mask {
	//     position: fixed;
	//     z-index: 1;
	//     width: 100%;
	//     height: 100%;
	//     top: 0;
	//     left: 0;
	//     background: rgba(0, 0, 0, 0.6);
	// }
	// .dialog_hd {
	//     padding: 1.2em 0 .5em;
	// }
	//
	// .dialog_title {
	//     font-weight: 400;
	//     font-size: 17px;
	// }
	//
	// .dialog_bd {
	//     padding: 0 20px;
	//     font-size: 15px;
	//     color: @globalTextColor;
	// }
	//
	// .dialog_ft {
	//     position: relative;
	//     line-height: 42px;
	//     margin-top: 20px;
	//     font-size: 17px;
	//     a {
	//         display: block;
	//         color: @dialogLinkColor;
	//         text-decoration: none;
	//         .setTapColor;
	//         &:active,
	//         &:hover {
	//             text-decoration: none;
	//         }
	//     }
	//     &:after {
	//         content: " ";
	//         .setLine(@gColorHr);
	//     }
	//     .dialog_confirm & {
	//         a {
	//             position: relative;
	//             float: left;
	//             width: 50%;
	//             &:after {
	//                 content: " ";
	//                 .setLine(@dialogLineColor, V);
	//             }
	//             &:first-child {
	//                 &:after {
	//                     display: none;
	//                 }
	//             }
	//             &:last-child {
	//                 float: none;
	//                 width: auto;
	//                 overflow: hidden;
	//                 *zoom: 1;
	//             }
	//         }
	//     }
	// }
	//
	// .btn_dialog {
	//     &.default {
	//         color: @gColorTitle;
	//     }
	//     &.primary {
	//         color: @gColorPrimary;
	//     }
	// }
	//
	// @media screen and (min-width: 1024px) {
	//     .dialog {
	//         width: 35%;
	//     }
	// }
	//
	// </style>
	//
	// <template>
	//
	// <div :class="'dialog_' + type" v-show="show">
	//     <div class="dialog_mask"></div>
	//     <div class="dialog">
	//         <div class="dialog_hd">
	//             <strong class="dialog_title">{{title}}</strong>
	//         </div>
	//         <div class="dialog_bd">
	//             <slot>请注意，这里可以自定义(支持html)</slot>
	//         </div>
	//         <div class="dialog_ft">
	//             <a href="javascript:;" class="btn_dialog default" v-if="type === 'confirm'" @click="dispatch($event,  'on-' + type + '-cancel')">{{cancelBtn}}</a>
	//             <a href="javascript:;" class="btn_dialog primary" @click="dispatch($event, 'on-' + type + '-confirm')">{{confirmBtn}}</a>
	//         </div>
	//     </div>
	// </div>
	//
	// </template>
	//
	// <script>
	
	exports.default = {
	    name: 'Dialog',
	    props: {
	        //类型：alert,confirm
	        type: {
	            type: String,
	            required: false,
	            default: 'alert'
	        },
	        //标题
	        title: {
	            type: String,
	            required: false,
	            default: '温馨提示'
	        },
	        show: {
	            type: Boolean,
	            required: true,
	            default: true
	        },
	        cancelBtn: {
	            type: String,
	            required: false,
	            default: '取消'
	        },
	        confirmBtn: {
	            type: String,
	            required: false,
	            default: '确定'
	        }
	    },
	    methods: {
	        // cancel() {
	        //     this.show = false;
	        // },
	        // confirm() {
	        //     this.show = false;
	        // }，
	
	        dispatch: function dispatch(event, eventStr) {
	            this.$dispatch(eventStr);
	            // this.show = false;
	        }
	    }
	};

	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"'dialog_' + type\" v-show=\"show\">\n    <div class=\"dialog_mask\"></div>\n    <div class=\"dialog\">\n        <div class=\"dialog_hd\">\n            <strong class=\"dialog_title\">{{title}}</strong>\n        </div>\n        <div class=\"dialog_bd\">\n            <slot>请注意，这里可以自定义(支持html)</slot>\n        </div>\n        <div class=\"dialog_ft\">\n            <a href=\"javascript:;\" class=\"btn_dialog default\" v-if=\"type === 'confirm'\" @click=\"dispatch($event,  'on-' + type + '-cancel')\">{{cancelBtn}}</a>\n            <a href=\"javascript:;\" class=\"btn_dialog primary\" @click=\"dispatch($event, 'on-' + type + '-confirm')\">{{confirmBtn}}</a>\n        </div>\n    </div>\n</div>\n\n";

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"page\">\n    <div class=\"hd\">\n        <h1 class=\"page_title\">Dialog</h1>\n    </div>\n    <div class=\"bd spacing\">\n        <a href=\"javascript:;\" class=\"btn btn_primary\" v-on:click=\"showAlert=true;\">点击弹出Dialog Alert</a>\n        <a href=\"javascript:;\" class=\"btn btn_primary\" v-on:click=\"showConfirm=true;\">点击弹出Dialog Confirm</a>\n    </div>\n\n    <Dialog :show.sync=\"showAlert\"></Dialog>\n\n    <Dialog :show.sync=\"showConfirm\" type=\"confirm\" title=\"弹窗标题\">\n        自定义弹窗内容\n        <br> ...\n    </Dialog>\n\n</div>\n\n";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(100)
	__vue_template__ = __webpack_require__(111)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\ActionSheetView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ActionSheet = __webpack_require__(101);
	
	var _ActionSheet2 = _interopRequireDefault(_ActionSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'ActionSheetView',
	  components: {
	    Actionsheet: _ActionSheet2.default
	  },
	  data: function data() {
	    return {
	      showActionSheet: false
	    };
	  }
	};
	// </script>
	//
	/* generated by vue-loader */
	// <template>
	//   <div class="page actionSheet" style="overflow: hidden">
	//       <div class="hd">
	//           <h1 class="page_title">ActionSheet</h1>
	//       </div>
	//       <div class="bd spacing">
	//           <a href="javascript:;" class="btn btn_primary" v-on:click="showActionSheet=true;">点击上拉ActionSheet</a>
	//       </div>
	//       <ActionSheet :is-show.sync="showActionSheet"></ActionSheet>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(102)
	__vue_script__ = __webpack_require__(104)
	__vue_template__ = __webpack_require__(110)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\ActionSheet.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4a211fa5&file=ActionSheet.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ActionSheet.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4a211fa5&file=ActionSheet.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ActionSheet.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".actionsheet {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translate(0, 100%);\n          transform: translate(0, 100%);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 2;\n  width: 100%;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.actionsheet_menu {\n  background-color: #FFFFFF;\n}\n.actionsheet_action {\n  margin-top: 6px;\n  background-color: #FFFFFF;\n}\n.actionsheet_cell {\n  position: relative;\n  padding: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.actionsheet_cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.actionsheet_cell:active {\n  background-color: #ECECEC;\n}\n.actionsheet_cell:first-child:before {\n  display: none;\n}\n.actionsheet_toggle {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n", "", {"version":3,"sources":["/./src/ActionSheet.vue.style"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,QAAQ;EACR,UAAU;EACV,sCAA8B;UAA9B,8BAA8B;EAC9B,oCAA4B;UAA5B,4BAA4B;EAC5B,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,0CAA0B;EAA1B,kCAA0B;EAA1B,0BAA0B;EAA1B,iDAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,gBAAgB;EAChB,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,8BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,cAAc;CACf;AACD;EACE,mCAA2B;UAA3B,2BAA2B;CAC5B","file":"ActionSheet.vue","sourcesContent":[".actionsheet {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  transform: translate(0, 100%);\n  backface-visibility: hidden;\n  z-index: 2;\n  width: 100%;\n  background-color: #EFEFF4;\n  transition: transform .3s;\n}\n.actionsheet_menu {\n  background-color: #FFFFFF;\n}\n.actionsheet_action {\n  margin-top: 6px;\n  background-color: #FFFFFF;\n}\n.actionsheet_cell {\n  position: relative;\n  padding: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.actionsheet_cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.actionsheet_cell:active {\n  background-color: #ECECEC;\n}\n.actionsheet_cell:first-child:before {\n  display: none;\n}\n.actionsheet_toggle {\n  transform: translate(0, 0);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Mask = __webpack_require__(105);
	
	var _Mask2 = _interopRequireDefault(_Mask);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'ActionSheet',
	  components: {
	    Mask: _Mask2.default
	  },
	  props: {
	    isShow: {
	      type: Boolean,
	      default: false
	    }
	  },
	  // data(){
	  //   return {
	  //     isShow:false
	  //   };
	  // },
	  created: function created() {
	    // this.open();
	  },
	
	  methods: {
	    open: function open() {
	      this.isShow = true;
	      //TODO 事件操作欠缺
	    },
	    close: function close() {
	      this.isShow = false;
	    }
	  }
	
	  // function hideActionSheet(weuiActionsheet, mask) {
	  //       weuiActionsheet.removeClass('actionsheet_toggle');
	  //       mask.removeClass('fade_toggle');
	  //       weuiActionsheet.on('transitionend', function () {
	  //           mask.hide();
	  //       }).on('webkitTransitionEnd', function () {
	  //           mask.hide();
	  //       })
	  //   }
	  //   $container.on('click','#showActionSheet', function () {
	  //       var mask = $('#mask');
	  //       var weuiActionsheet = $('#actionsheet');
	  //       weuiActionsheet.addClass('actionsheet_toggle');
	  //       mask.show().addClass('fade_toggle').click(function () {
	  //           hideActionSheet(weuiActionsheet, mask);
	  //       });
	  //       $('#actionsheet_cancel').click(function () {
	  //           hideActionSheet(weuiActionsheet, mask);
	  //       });
	  //       weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');
	  //   });
	};
	// </script>
	//
	// <style lang="less">
	// @import "./style/base/fn.less";
	//
	// @bgColor:#ECECEC;
	// .actionsheet {
	//     position: fixed;
	//     left: 0;
	//     bottom: 0;
	//     transform: translate(0, 100%);
	//     backface-visibility: hidden;
	//     z-index: 2;
	//     width: 100%;
	//     background-color: @pageDefaultBackgroundColor;
	//     transition: transform .3s;
	// }
	// .actionsheet_menu{
	//     background-color: #FFFFFF;
	// }
	// .actionsheet_action {
	//     margin-top: 6px;
	//     background-color: #FFFFFF;
	// }
	// .actionsheet_cell {
	//     position: relative;
	//     padding: 10px 0;
	//     text-align: center;
	//     font-size: 18px;
	//     &:before {
	//         .setTopLine(@cellBorderColor);
	//     }
	//     &:active{
	//         background-color: @bgColor;
	//     }
	//     &:first-child{
	//         &:before{
	//             display: none;
	//         }
	//     }
	// }
	//
	// .actionsheet_toggle{
	//     transform: translate(0, 0);
	// }
	// </style>
	//
	/* generated by vue-loader */
	// <template>
	//   <div id="actionSheet_wrap">
	//       <!-- fade_toggle -->
	//       <!-- style="display:block" -->
	//       <!-- <div class="mask_transition" :class="{fade_toggle:isShow}" id="mask" v-show="isShow" v-on:click="close()"></div> -->
	//       <Mask :is-show.sync="isShow"></Mask>
	//       <!-- actionsheet_toggle -->
	//       <div class="actionsheet" :class="{actionsheet_toggle:isShow}" id="actionsheet">
	//           <div class="actionsheet_menu">
	//               <div class="actionsheet_cell" v-on:click="close()">示例菜单2</div>
	//               <div class="actionsheet_cell" v-on:click="close()">示例菜单</div>
	//               <div class="actionsheet_cell" v-on:click="close()">示例菜单</div>
	//               <div class="actionsheet_cell">示例菜单(我没有关闭功能)</div>
	//           </div>
	//           <div class="actionsheet_action">
	//               <div class="actionsheet_cell" id="actionsheet_cancel" v-on:click="close()">取消</div>
	//           </div>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(106)
	__vue_script__ = __webpack_require__(108)
	__vue_template__ = __webpack_require__(109)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Mask.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-bec34180&file=Mask.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Mask.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-bec34180&file=Mask.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Mask.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".weui_mask {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transparent {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.weui_mask_transition {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0);\n  -webkit-transition: background .3s;\n  transition: background .3s;\n}\n.weui_fade_toggle {\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transition {\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/Mask.vue.style"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ;EACR,+BAA+B;CAChC;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ;CACT;AACD;EACE,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ;EACR,6BAA6B;EAC7B,mCAA2B;EAA3B,2BAA2B;CAC5B;AACD;EACE,+BAA+B;CAChC;AACD;EACE,eAAe;CAChB","file":"Mask.vue","sourcesContent":[".weui_mask {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transparent {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.weui_mask_transition {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0);\n  transition: background .3s;\n}\n.weui_fade_toggle {\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transition {\n  display: block;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="weui_mask_transition" :class="{weui_fade_toggle:isShow}" id="mask" v-show="isShow" v-on:click="close()"></div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'Mask',
	  props: {
	    isShow: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    close: function close() {
	      //TODO 广播
	      this.isShow = false;
	    }
	  }
	};
	// </script>
	//
	// <style lang="less">
	// @import "./style/base/fn";
	//
	// .weui_mask {
	//     position: fixed;
	//     z-index: 1;
	//     width: 100%;
	//     height: 100%;
	//     top: 0;
	//     left: 0;
	//     background: rgba(0, 0, 0, .6);
	// }
	//
	// .weui_mask_transparent {
	//     position: fixed;
	//     z-index: 1;
	//     width: 100%;
	//     height: 100%;
	//     top: 0;
	//     left: 0;
	// }
	//
	// .weui_mask_transition{
	//     display: none;
	//     position: fixed;
	//     z-index: 1;
	//     width: 100%;
	//     height: 100%;
	//     top: 0;
	//     left: 0;
	//     background: rgba(0,0,0,0);
	//     transition:background .3s;
	// }
	// .weui_fade_toggle{
	//     background: rgba(0,0,0,.6);
	// }
	//
	// //TODO my add
	// .weui_mask_transition{
	//   display: block;
	// }
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"weui_mask_transition\" :class=\"{weui_fade_toggle:isShow}\" id=\"mask\" v-show=\"isShow\" v-on:click=\"close()\"></div>\n";

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "\n  <div id=\"actionSheet_wrap\">\n      <!-- fade_toggle -->\n      <!-- style=\"display:block\" -->\n      <!-- <div class=\"mask_transition\" :class=\"{fade_toggle:isShow}\" id=\"mask\" v-show=\"isShow\" v-on:click=\"close()\"></div> -->\n      <Mask :is-show.sync=\"isShow\"></Mask>\n      <!-- actionsheet_toggle -->\n      <div class=\"actionsheet\" :class=\"{actionsheet_toggle:isShow}\" id=\"actionsheet\">\n          <div class=\"actionsheet_menu\">\n              <div class=\"actionsheet_cell\" v-on:click=\"close()\">示例菜单2</div>\n              <div class=\"actionsheet_cell\" v-on:click=\"close()\">示例菜单</div>\n              <div class=\"actionsheet_cell\" v-on:click=\"close()\">示例菜单</div>\n              <div class=\"actionsheet_cell\">示例菜单(我没有关闭功能)</div>\n          </div>\n          <div class=\"actionsheet_action\">\n              <div class=\"actionsheet_cell\" id=\"actionsheet_cancel\" v-on:click=\"close()\">取消</div>\n          </div>\n      </div>\n  </div>\n";

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page actionSheet\" style=\"overflow: hidden\">\n      <div class=\"hd\">\n          <h1 class=\"page_title\">ActionSheet</h1>\n      </div>\n      <div class=\"bd spacing\">\n          <a href=\"javascript:;\" class=\"btn btn_primary\" v-on:click=\"showActionSheet=true;\">点击上拉ActionSheet</a>\n      </div>\n      <ActionSheet :is-show.sync=\"showActionSheet\"></ActionSheet>\n  </div>\n";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(113)
	__vue_template__ = __webpack_require__(119)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\MsgView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Msg = __webpack_require__(114);
	
	var _Msg2 = _interopRequireDefault(_Msg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'MsgView',
	  components: {
	    Msg: _Msg2.default
	  }
	};
	// </script>
	//
	/* generated by vue-loader */
	// <template>
	//   <div class="page">
	//     <Msg></Msg>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(115)
	__vue_script__ = __webpack_require__(117)
	__vue_template__ = __webpack_require__(118)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Msg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5cf04e5d&file=Msg.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Msg.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5cf04e5d&file=Msg.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Msg.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".msg {\n  padding-top: 36px;\n  text-align: center;\n}\n.msg .icon_area {\n  margin-bottom: 30px;\n}\n.msg .icon_area i:before {\n  font-size: 68px;\n}\n.msg .text_area {\n  margin-bottom: 25px;\n  padding: 0 20px;\n}\n.msg .msg_title {\n  margin-bottom: 5px;\n  font-weight: 400;\n  font-size: 20px;\n}\n.msg .msg_desc {\n  font-size: 14px;\n  color: #888;\n}\n.msg .opr_area {\n  margin-bottom: 25px;\n}\n.msg .extra_area {\n  margin-bottom: 15px;\n  font-size: 14px;\n  color: #888;\n}\n.msg .extra_area a {\n  color: #61749B;\n}\n@media screen and (min-height: 438px) {\n  .extra_area {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n}\n", "", {"version":3,"sources":["/./src/Msg.vue.style"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE;IACE,gBAAgB;IAChB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,mBAAmB;GACpB;CACF","file":"Msg.vue","sourcesContent":[".msg {\n  padding-top: 36px;\n  text-align: center;\n}\n.msg .icon_area {\n  margin-bottom: 30px;\n}\n.msg .icon_area i:before {\n  font-size: 68px;\n}\n.msg .text_area {\n  margin-bottom: 25px;\n  padding: 0 20px;\n}\n.msg .msg_title {\n  margin-bottom: 5px;\n  font-weight: 400;\n  font-size: 20px;\n}\n.msg .msg_desc {\n  font-size: 14px;\n  color: #888;\n}\n.msg .opr_area {\n  margin-bottom: 25px;\n}\n.msg .extra_area {\n  margin-bottom: 15px;\n  font-size: 14px;\n  color: #888;\n}\n.msg .extra_area a {\n  color: #61749B;\n}\n@media screen and (min-height: 438px) {\n  .extra_area {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="msg">
	//       <div class="icon_area"><i class="icon i-bighook"></i></div>
	//       <div class="text_area">
	//           <h2 class="msg_title">操作成功</h2>
	//           <p class="msg_desc">内容详情，可根据实际需要安排</p>
	//       </div>
	//       <div class="opr_area">
	//           <p class="btn_area">
	//               <a href="javascript:;" class="btn btn_primary">确定</a>
	//               <a href="javascript:;" class="btn btn_default">取消</a>
	//           </p>
	//       </div>
	//       <div class="extra_area">
	//           <a href="">查看详情</a>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>
	// Button
	
	exports.default = {
	  name: 'Msg',
	  props: {}
	};
	// </script>
	//
	// <style lang="less">
	// @import "./style/base/fn";
	// // @import "./weui_button";
	//
	// .msg {
	//     padding-top: @msgPaddingTop;
	//     text-align: center;
	//
	//     .icon_area {
	//         margin-bottom: @msgIconGap;
	//         i:before{
	//             font-size: 68px;
	//          }
	//     }
	//     .text_area {
	//         margin-bottom: @msgTextGap;
	//         padding:0 20px;
	//     }
	//     .msg_title {
	//         margin-bottom: @msgTitleGap;
	//         font-weight: 400;
	//         font-size: 20px;
	//     }
	//     .msg_desc {
	//         font-size: 14px;
	//         color: @globalTextColor;
	//     }
	//
	//     .opr_area {
	//         margin-bottom: @msgOprGap;
	//     }
	//
	//     .extra_area {
	//         margin-bottom: @msgExtraAreaGap;
	//         font-size: 14px;
	//         color: @globalTextColor;
	//         a{color: @globalLinkColor;}
	//     }
	// }
	//
	// @media screen and (min-height: @msgExtraAreaOfMinHeight) {
	//     .extra_area {
	//         position: fixed;
	//         left: 0;
	//         bottom: 0;
	//         width: 100%;
	//         text-align: center;
	//     }
	// }
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"msg\">\n      <div class=\"icon_area\"><i class=\"icon i-bighook\"></i></div>\n      <div class=\"text_area\">\n          <h2 class=\"msg_title\">操作成功</h2>\n          <p class=\"msg_desc\">内容详情，可根据实际需要安排</p>\n      </div>\n      <div class=\"opr_area\">\n          <p class=\"btn_area\">\n              <a href=\"javascript:;\" class=\"btn btn_primary\">确定</a>\n              <a href=\"javascript:;\" class=\"btn btn_default\">取消</a>\n          </p>\n      </div>\n      <div class=\"extra_area\">\n          <a href=\"\">查看详情</a>\n      </div>\n  </div>\n";

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page\">\n    <Msg></Msg>\n  </div>\n";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(121)
	__vue_script__ = __webpack_require__(123)
	__vue_template__ = __webpack_require__(124)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\ArticleView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-00c62bc8&file=ArticleView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ArticleView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-00c62bc8&file=ArticleView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ArticleView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".article {\n  padding: 20px 15px;\n  font-size: 15px;\n  color: #999999;\n}\n.article section {\n  margin-bottom: 1.5em;\n}\n.article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: .75em;\n  color: #666666;\n}\n.article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: .3em;\n  color: #666666;\n}\n.article h3 {\n  font-weight: 400;\n  font-size: 15px;\n  color: #666666;\n}\n", "", {"version":3,"sources":["/./example/modules/ArticleView.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;CAChB","file":"ArticleView.vue","sourcesContent":[".article {\n  padding: 20px 15px;\n  font-size: 15px;\n  color: #999999;\n}\n.article section {\n  margin-bottom: 1.5em;\n}\n.article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: .75em;\n  color: #666666;\n}\n.article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: .3em;\n  color: #666666;\n}\n.article h3 {\n  font-weight: 400;\n  font-size: 15px;\n  color: #666666;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 123 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="page">
	//       <div class="hd">
	//           <h1 class="page_title">Article</h1>
	//       </div>
	//       <div class="bd">
	//           <article class="article">
	//               <h1>大标题</h1>
	//               <section>
	//                   <h2 class="title">章标题</h2>
	//                   <section>
	//                       <h3>1.1 节标题</h3>
	//                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	//                           consequat. Duis aute</p>
	//                   </section>
	//                   <section>
	//                       <h3>1.2 节标题</h3>
	//                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	//                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	//                           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	//                           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	//                   </section>
	//               </section>
	//           </article>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'ArticleView'
	};
	// </script>
	//
	// <style lang="less">
	//     @import "../../src/style/article";
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page\">\n      <div class=\"hd\">\n          <h1 class=\"page_title\">Article</h1>\n      </div>\n      <div class=\"bd\">\n          <article class=\"article\">\n              <h1>大标题</h1>\n              <section>\n                  <h2 class=\"title\">章标题</h2>\n                  <section>\n                      <h3>1.1 节标题</h3>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                          consequat. Duis aute</p>\n                  </section>\n                  <section>\n                      <h3>1.2 节标题</h3>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                  </section>\n              </section>\n          </article>\n      </div>\n  </div>\n";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(126)
	__vue_script__ = __webpack_require__(128)
	__vue_template__ = __webpack_require__(137)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\CellView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(127);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-26130c6a&file=CellView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CellView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-26130c6a&file=CellView.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CellView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".cell {\n  position: relative;\n}\n.cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.cell:first-child:before {\n  display: none;\n}\n.cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.cells_title {\n  margin-top: .77em;\n  margin-bottom: .3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #888;\n  font-size: 14px;\n}\n.cells_title + .cells {\n  margin-top: 0;\n}\n.cells_tips {\n  margin-top: .3em;\n  color: #888;\n  font-size: 14px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.cell {\n  padding: 10px 15px;\n  display: block;\n  position: relative;\n}\n.cell_hd,\n.cell_bd,\n.cell_ft {\n  display: table-cell;\n  vertical-align: middle;\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: nowrap;\n}\n.cell_ft {\n  text-align: right;\n  color: #888;\n}\n.cell_primary {\n  width: 2000px;\n  white-space: normal;\n}\n.cells_access .cell:not(.no_access) {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.cells_access .cell:not(.no_access):active {\n  background-color: #c8c8c8;\n}\n.cells_access a.cell {\n  color: inherit;\n}\n.cells_access .cell_ft:after {\n  content: \" \";\n  display: inline-block;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  top: -1px;\n}\n.check_label {\n  display: block;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.check {\n  position: absolute;\n  left: -9999em;\n}\n.cells_radio .cell_ft {\n  padding-left: 0.35em;\n}\n.cells_radio .cell:active {\n  background-color: #ECECEC;\n}\n.cells_radio .check:checked + .i_checked {\n  margin: 0;\n}\n.cells_radio .check:checked + .i_checked:before {\n  content: '\\EB14';\n  color: #1677cb;\n  font-size: 16px;\n}\n.cells_checkbox .cell_hd {\n  padding-right: 0.35em;\n}\n.cells_checkbox .cell:active {\n  background-color: #c8c8c8;\n}\n.cells_checkbox .i_checked {\n  margin: 0;\n}\n.cells_checkbox .i_checked:before {\n  content: '\\E60C';\n  color: #1677cb;\n  font-size: 23px;\n  display: block;\n}\n.cells_checkbox .check:checked + .i_checked {\n  margin: 0;\n}\n.cells_checkbox .check:checked + .i_checked:before {\n  content: '\\E62A';\n  color: #1677cb;\n}\n.label {\n  display: block;\n  width: 3em;\n}\n.input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.input::-webkit-outer-spin-button,\n.input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.textarea_counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.toptips {\n  display: none;\n  position: fixed;\n  -webkit-transform: translateZ(0);\n  width: 100%;\n  top: 0;\n  line-height: 2.3;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 2;\n}\n.toptips.warn {\n  background-color: #E64340;\n}\n.cells_form .cell_warn {\n  color: #E64340;\n}\n.cells_form .cell_warn .icon_warn {\n  display: inline-block;\n}\n.cells_form .cell_hd {\n  padding-right: .3em;\n}\n.cells_form .cell_ft {\n  font-size: 0;\n}\n.cells_form .cell_ft i:before {\n  color: #E64340;\n}\n.cells_form .icon_warn {\n  display: none;\n}\n.cell_select {\n  padding: 0;\n}\n.cell_select .select {\n  padding-right: 30px;\n}\n.cell_select .cell_bd:after {\n  content: \" \";\n  display: inline-block;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n}\n.select {\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  width: 100%;\n  font-size: inherit;\n  height: 44px;\n  position: relative;\n  z-index: 1;\n  padding-left: 15px;\n}\n.select_before {\n  padding-right: 15px;\n}\n.select_before .select {\n  width: auto;\n}\n.select_before .cell_hd {\n  position: relative;\n}\n.select_before .cell_hd:after {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.select_before .cell_hd:before {\n  content: \" \";\n  display: inline-block;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n}\n.select_before .cell_bd {\n  padding-left: 15px;\n}\n.select_before .cell_bd:after {\n  display: none;\n}\n.select_after {\n  padding-left: 15px;\n}\n.vcode {\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n.vcode .cell_ft img {\n  margin-left: 5px;\n  height: 44px;\n  vertical-align: middle;\n}\n.cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.switch {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background: #DFDFDF;\n}\n.switch:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.switch:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.switch:checked {\n  border-color: #1677cb;\n  background-color: #1677cb;\n}\n.switch:checked:before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.switch:checked:after {\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.uploader_hd {\n  padding-top: 0;\n  padding-right: 0;\n  padding-left: 0;\n}\n.uploader_hd .cell_ft {\n  font-size: 1em;\n}\n.uploader_bd {\n  margin-bottom: -4px;\n  margin-right: -9px;\n  overflow: hidden;\n}\n.uploader_files {\n  list-style: none;\n}\n.uploader_file {\n  float: left;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 79px;\n  height: 79px;\n  background: no-repeat center center;\n  background-size: cover;\n}\n.uploader_status {\n  position: relative;\n}\n.uploader_status:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.uploader_status .uploader_status_content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #FFFFFF;\n}\n.uploader_status .uploader_status_content i.icon:before {\n  color: #fff;\n}\n.uploader_status .icon_warn {\n  display: block;\n}\n.uploader_input_wrp {\n  float: left;\n  position: relative;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 77px;\n  height: 77px;\n  border: 1px solid #D9D9D9;\n}\n.uploader_input_wrp:before,\n.uploader_input_wrp:after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #D9D9D9;\n}\n.uploader_input_wrp:before {\n  width: 2px;\n  height: 39.5px;\n}\n.uploader_input_wrp:after {\n  width: 39.5px;\n  height: 2px;\n}\n.uploader_input_wrp:active {\n  border-color: #999999;\n}\n.uploader_input_wrp:active:before,\n.uploader_input_wrp:active:after {\n  background-color: #999999;\n}\n.uploader_input {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n", "", {"version":3,"sources":["/./example/modules/CellView.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,8BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;UAAvB,uBAAuB;EACvB,WAAW;CACZ;AACD;EACE,cAAc;CACf;AACD;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,8BAA8B;EAC9B,8BAAsB;UAAtB,sBAAsB;EACtB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,iCAAyB;UAAzB,yBAAyB;EACzB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,cAAc;CACf;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;CACpB;AACD;;;EAGE,oBAAoB;EACpB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,cAAc;EACd,oBAAoB;CACrB;AACD;EACE,8CAA8C;CAC/C;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,aAAa;EACb,sBAAsB;EACtB,iCAAyB;UAAzB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,UAAU;CACX;AACD;EACE,eAAe;EACf,8CAA8C;CAC/C;AACD;EACE,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,qBAAqB;CACtB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,UAAU;CACX;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,UAAU;CACX;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,UAAU;CACX;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,eAAe;EACf,WAAW;CACZ;AACD;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,wBAAwB;CACzB;AACD;;EAEE,yBAAyB;EACzB,UAAU;CACX;AACD;EACE,eAAe;EACf,UAAU;EACV,aAAa;EACb,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,WAAW;CACZ;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,gBAAgB;EAChB,iCAAiC;EACjC,YAAY;EACZ,OAAO;EACP,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,WAAW;CACZ;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,cAAc;CACf;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,sBAAsB;EACtB,iCAAyB;UAAzB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,yBAAyB;EACzB,UAAU;EACV,WAAW;EACX,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,iCAAyB;UAAzB,yBAAyB;EACzB,+BAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,sBAAsB;EACtB,iCAAyB;UAAzB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,cAAc;CACf;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,WAAW;EACX,oBAAoB;EACpB,uBAAuB;EACvB,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,0CAA0B;EAA1B,kCAA0B;EAA1B,0BAA0B;EAA1B,iDAA0B;CAC3B;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,0BAA0B;EAC1B,yCAAyC;EACzC,0CAA0B;EAA1B,kCAA0B;EAA1B,0BAA0B;EAA1B,iDAA0B;CAC3B;AACD;EACE,sBAAsB;EACtB,0BAA0B;CAC3B;AACD;EACE,4BAAoB;UAApB,oBAAoB;CACrB;AACD;EACE,oCAA4B;UAA5B,4BAA4B;CAC7B;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,qCAAqC;CACtC;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;UAAjC,iCAAiC;EACjC,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,0BAA0B;CAC3B;AACD;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;UAAjC,iCAAiC;EACjC,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,eAAe;CAChB;AACD;EACE,cAAc;EACd,YAAY;CACb;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,WAAW;EACX,8CAA8C;CAC/C","file":"CellView.vue","sourcesContent":[".cell {\n  position: relative;\n}\n.cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n  left: 15px;\n}\n.cell:first-child:before {\n  display: none;\n}\n.cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.cells_title {\n  margin-top: .77em;\n  margin-bottom: .3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #888;\n  font-size: 14px;\n}\n.cells_title + .cells {\n  margin-top: 0;\n}\n.cells_tips {\n  margin-top: .3em;\n  color: #888;\n  font-size: 14px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.cell {\n  padding: 10px 15px;\n  display: block;\n  position: relative;\n}\n.cell_hd,\n.cell_bd,\n.cell_ft {\n  display: table-cell;\n  vertical-align: middle;\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: nowrap;\n}\n.cell_ft {\n  text-align: right;\n  color: #888;\n}\n.cell_primary {\n  width: 2000px;\n  white-space: normal;\n}\n.cells_access .cell:not(.no_access) {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.cells_access .cell:not(.no_access):active {\n  background-color: #c8c8c8;\n}\n.cells_access a.cell {\n  color: inherit;\n}\n.cells_access .cell_ft:after {\n  content: \" \";\n  display: inline-block;\n  transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  top: -1px;\n}\n.check_label {\n  display: block;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.check {\n  position: absolute;\n  left: -9999em;\n}\n.cells_radio .cell_ft {\n  padding-left: 0.35em;\n}\n.cells_radio .cell:active {\n  background-color: #ECECEC;\n}\n.cells_radio .check:checked + .i_checked {\n  margin: 0;\n}\n.cells_radio .check:checked + .i_checked:before {\n  content: '\\EB14';\n  color: #1677cb;\n  font-size: 16px;\n}\n.cells_checkbox .cell_hd {\n  padding-right: 0.35em;\n}\n.cells_checkbox .cell:active {\n  background-color: #c8c8c8;\n}\n.cells_checkbox .i_checked {\n  margin: 0;\n}\n.cells_checkbox .i_checked:before {\n  content: '\\E60C';\n  color: #1677cb;\n  font-size: 23px;\n  display: block;\n}\n.cells_checkbox .check:checked + .i_checked {\n  margin: 0;\n}\n.cells_checkbox .check:checked + .i_checked:before {\n  content: '\\E62A';\n  color: #1677cb;\n}\n.label {\n  display: block;\n  width: 3em;\n}\n.input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.input::-webkit-outer-spin-button,\n.input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.textarea_counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.toptips {\n  display: none;\n  position: fixed;\n  -webkit-transform: translateZ(0);\n  width: 100%;\n  top: 0;\n  line-height: 2.3;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 2;\n}\n.toptips.warn {\n  background-color: #E64340;\n}\n.cells_form .cell_warn {\n  color: #E64340;\n}\n.cells_form .cell_warn .icon_warn {\n  display: inline-block;\n}\n.cells_form .cell_hd {\n  padding-right: .3em;\n}\n.cells_form .cell_ft {\n  font-size: 0;\n}\n.cells_form .cell_ft i:before {\n  color: #E64340;\n}\n.cells_form .icon_warn {\n  display: none;\n}\n.cell_select {\n  padding: 0;\n}\n.cell_select .select {\n  padding-right: 30px;\n}\n.cell_select .cell_bd:after {\n  content: \" \";\n  display: inline-block;\n  transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n}\n.select {\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  width: 100%;\n  font-size: inherit;\n  height: 44px;\n  position: relative;\n  z-index: 1;\n  padding-left: 15px;\n}\n.select_before {\n  padding-right: 15px;\n}\n.select_before .select {\n  width: auto;\n}\n.select_before .cell_hd {\n  position: relative;\n}\n.select_before .cell_hd:after {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleX(0.5);\n}\n.select_before .cell_hd:before {\n  content: \" \";\n  display: inline-block;\n  transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n}\n.select_before .cell_bd {\n  padding-left: 15px;\n}\n.select_before .cell_bd:after {\n  display: none;\n}\n.select_after {\n  padding-left: 15px;\n}\n.vcode {\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n.vcode .cell_ft img {\n  margin-left: 5px;\n  height: 44px;\n  vertical-align: middle;\n}\n.cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.switch {\n  appearance: none;\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background: #DFDFDF;\n}\n.switch:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  transition: transform .3s;\n}\n.switch:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  transition: transform .3s;\n}\n.switch:checked {\n  border-color: #1677cb;\n  background-color: #1677cb;\n}\n.switch:checked:before {\n  transform: scale(0);\n}\n.switch:checked:after {\n  transform: translateX(20px);\n}\n.uploader_hd {\n  padding-top: 0;\n  padding-right: 0;\n  padding-left: 0;\n}\n.uploader_hd .cell_ft {\n  font-size: 1em;\n}\n.uploader_bd {\n  margin-bottom: -4px;\n  margin-right: -9px;\n  overflow: hidden;\n}\n.uploader_files {\n  list-style: none;\n}\n.uploader_file {\n  float: left;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 79px;\n  height: 79px;\n  background: no-repeat center center;\n  background-size: cover;\n}\n.uploader_status {\n  position: relative;\n}\n.uploader_status:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.uploader_status .uploader_status_content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #FFFFFF;\n}\n.uploader_status .uploader_status_content i.icon:before {\n  color: #fff;\n}\n.uploader_status .icon_warn {\n  display: block;\n}\n.uploader_input_wrp {\n  float: left;\n  position: relative;\n  margin-right: 9px;\n  margin-bottom: 9px;\n  width: 77px;\n  height: 77px;\n  border: 1px solid #D9D9D9;\n}\n.uploader_input_wrp:before,\n.uploader_input_wrp:after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #D9D9D9;\n}\n.uploader_input_wrp:before {\n  width: 2px;\n  height: 39.5px;\n}\n.uploader_input_wrp:after {\n  width: 39.5px;\n  height: 2px;\n}\n.uploader_input_wrp:active {\n  border-color: #999999;\n}\n.uploader_input_wrp:active:before,\n.uploader_input_wrp:active:after {\n  background-color: #999999;\n}\n.uploader_input {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Select = __webpack_require__(129);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Tooltips = __webpack_require__(132);
	
	var _Tooltips2 = _interopRequireDefault(_Tooltips);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="page">
	//     <div class="hd">
	//         <h1 class="page_title">Cell</h1>
	//     </div>
	//     <div class="bd">
	//         <div class="cells_title">带说明的列表项</div>
	//         <div class="cells">
	//             <div class="cell">
	//                 <div class="cell_bd cell_primary">
	//                     <p>标题文字</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     说明文字
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="cells_title">带图标、说明的列表项</div>
	//         <div class="cells cells_split">
	//             <div class="cell">
	//                 <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
	//                 <div class="cell_bd cell_primary">
	//                     <p>标题文字</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     说明文字
	//                 </div>
	//             </div>
	//             <div class="cell">
	//                 <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
	//                 <div class="cell_bd cell_primary">
	//                     <p>标题文字</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     说明文字
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div class="cells_title">带跳转的列表项</div>
	//         <div class="cells cells_access">
	//             <a class="cell" href="javascript:;">
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                 </div>
	//             </a>
	//             <a class="cell" href="javascript:;">
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                 </div>
	//             </a>
	//         </div>
	//
	//         <div class="cells_title">带说明、跳转的列表项</div>
	//         <div class="cells cells_access">
	//             <a class="cell" href="javascript:;">
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     说明文字
	//                 </div>
	//             </a>
	//             <a class="cell" href="javascript:;">
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     说明文字
	//                 </div>
	//             </a>
	//
	//         </div>
	//
	//         <div class="cells_title">带图标、说明、跳转的列表项</div>
	//         <div class="cells cells_access">
	//
	//             <a class="cell" href="javascript:;">
	//                 <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     说明文字
	//                 </div>
	//             </a>
	//             <a class="cell" href="javascript:;">
	//                 <div class="cell_hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     说明文字
	//                 </div>
	//             </a>
	//         </div>
	//
	//         <div class="cells_title">单选列表项</div>
	//         <div class="cells cells_radio">
	//             <label class="cell check_label" for="x11">
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     <input type="radio" class="check" name="radio1" id="x11">
	//                     <span class="icon i_checked"></span>
	//                 </div>
	//             </label>
	//             <label class="cell check_label" for="x12">
	//
	//                 <div class="cell_bd cell_primary">
	//                     <p>cell standard</p>
	//                 </div>
	//                 <div class="cell_ft">
	//                     <input type="radio" name="radio1" class="check" id="x12" checked="checked">
	//                     <span class="icon i_checked"></span>
	//                 </div>
	//             </label>
	//         </div>
	//         <div class="cells_title">复选列表项</div>
	//         <div class="cells cells_checkbox">
	//             <label class="cell check_label" for="s11">
	//                 <div class="cell_hd">
	//                     <input type="checkbox" class="check" name="checkbox1" id="s11" checked="checked">
	//                     <i class="icon i_checked"></i>
	//                 </div>
	//                 <div class="cell_bd cell_primary">
	//                     <p>standard is dealt for u.</p>
	//                 </div>
	//             </label>
	//             <label class="cell check_label" for="s12">
	//                 <div class="cell_hd">
	//                     <input type="checkbox" name="checkbox1" class="check" id="s12">
	//                     <i class="icon i_checked"></i>
	//                 </div>
	//                 <div class="cell_bd cell_primary">
	//                     <p>standard is dealicient for u.</p>
	//                 </div>
	//             </label>
	//         </div>
	//
	//         <div class="cells_title">开关</div>
	//         <div class="cells cells_form">
	//             <div class="cell cell_switch">
	//                 <div class="cell_hd cell_primary">标题文字</div>
	//                 <div class="cell_ft">
	//                     <input class="switch" type="checkbox"/>
	//                 </div>
	//             </div>
	//         </div>
	//
	//         <div class="cells_title">表单</div>
	//         <div class="cells cells_form">
	//             <div class="cell">
	//                 <div class="cell_hd"><label class="label">qq</label></div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="number" placeholder="请输入qq号"/>
	//                 </div>
	//             </div>
	//             <div class="cell vcode">
	//                 <div class="cell_hd"><label class="label">验证码</label></div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="number" placeholder="请输入验证码"/>
	//                 </div>
	//                 <div class="cell_ft">
	//                     <img src="/example/images/vcode.jpg" />
	//                 </div>
	//             </div>
	//             <div class="cell">
	//                 <div class="cell_hd"><label class="label">银行卡</label></div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="number" placeholder="请输入银行卡号"/>
	//                 </div>
	//             </div>
	//             <div class="cell vcode cell_warn">
	//                 <div class="cell_hd"><label class="label">验证码</label></div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="number" placeholder="请输入验证码"/>
	//                 </div>
	//                 <div class="cell_ft">
	//                     <i class="icon i-roundwarning"></i>
	//                     <img src="/example/images/vcode.jpg" />
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="cells_tips">底部说明文字底部说明文字</div>
	//         <div class="btn_area">
	//             <a class="btn btn_primary" href="javascript:">确定</a>
	//         </div>
	//         <div class="cells_title">上传</div>
	//         <div class="cells cells_form">
	//             <div class="cell">
	//                 <div class="cell_bd cell_primary">
	//                     <div class="uploader">
	//                         <div class="uploader_hd cell">
	//                             <div class="cell_bd cell_primary">图片上传</div>
	//                             <div class="cell_ft">0/2</div>
	//                         </div>
	//                         <div class="uploader_bd">
	//                             <ul class="uploader_files">
	//                                 <li class="uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
	//                                 <li class="uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
	//                                 <li class="uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
	//                                 <li class="uploader_file uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
	//                                     <div class="uploader_status_content">
	//                                         <i class="icon i-roundwarning"></i>
	//                                     </div>
	//                                 </li>
	//                                 <li class="uploader_file uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
	//                                     <div class="uploader_status_content">50%</div>
	//                                 </li>
	//                             </ul>
	//                             <div class="uploader_input_wrp">
	//                                 <input class="uploader_input" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" multiple />
	//                             </div>
	//                         </div>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="cells_title">文本域</div>
	//         <div class="cells cells_form">
	//             <div class="cell">
	//                 <div class="cell_bd cell_primary">
	//                     <textarea class="textarea" placeholder="请输入评论" rows="3"></textarea>
	//                     <div class="textarea_counter"><span>0</span>/200</div>
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="cells_title">表单报错</div>
	//         <div class="cells cells_form">
	//             <div class="cell cell_warn">
	//                 <div class="cell_hd"><label for="" class="label">卡号</label></div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="tel" value="weui input error" placeholder="请输入卡号"/>
	//                 </div>
	//                 <div class="cell_ft">
	//                     <i class="icon i-roundwarning"></i>
	//                 </div>
	//             </div>
	//             <div class="cell">
	//                 <div class="cell_hd"><label for="" class="label">日期</label></div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="date" value=""/>
	//                 </div>
	//             </div>
	//             <div class="cell">
	//                 <div class="cell_hd"><label for="" class="label">时间</label></div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="datetime-local" value="" placeholder=""/>
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="cells_title">选择</div>
	//         <div class="cells cells_split">
	//
	//             <div class="cell cell_select select_before">
	//                 <div class="cell_hd">
	//                   <we-select :options="areaCodeOptions" :selected.sync="areaCodeSelected"></we-select>
	//                 </div>
	//                 <div class="cell_bd cell_primary">
	//                     <input class="input" type="text" placeholder="请输入号码"/>
	//                 </div>
	//             </div>
	//         </div>
	//         <div class="cells_title">选择</div>
	//         <div class="cells cells_split">
	//             <div class="cell cell_select">
	//                 <div class="cell_bd cell_primary">
	//                     <we-select :options="contactOptions" :selected.sync="contactSelected"></we-select>
	//                 </div>
	//             </div>
	//             <div class="cell cell_select select_after">
	//                 <div class="cell_hd">
	//                     国家/地区{{nationSelected}}
	//                 </div>
	//                 <div class="cell_bd cell_primary">
	//                     <we-select :after="true" :options="nationOptions" :selected.sync="nationSelected">
	//                         <span slot="header">国家/地区</span>
	//                     </we-select>
	//                 </div>
	//             </div>
	//         </div>
	//         <Tooltips :text.sync="tooltipsWarn" :type="'warn'"></Tooltips>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'CellView',
	  components: {
	    WeSelect: _Select2.default,
	    Tooltips: _Tooltips2.default
	  },
	  data: function data() {
	    return {
	      areaCodeOptions: ['+86', '+80', '+84', '+87'],
	      areaCodeSelected: 1,
	      contactOptions: ['微信号', 'QQ号', 'Email'],
	      contactSelected: 2,
	      nationOptions: ['中国', '美国', '英国'],
	      nationSelected: 1,
	      errorCount: 3,
	      errorTooltips: false,
	      tooltipsWarn: ''
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this.tooltipsWarn = '温馨提示：你写错啦你知不知道';
	    var handler = setInterval(function () {
	      if (_this.errorCount === 1) {
	        clearInterval(handler);
	      }
	      _this.errorCount -= 1;
	    }, 1000);
	  }
	};
	// </script>
	//
	// <style lang="less">
	// @import "../../src/style/widget/cell/cell_global";
	//
	// @import "../../src/style/widget/cell/access";
	// @import "../../src/style/widget/cell/check";
	// @import "../../src/style/widget/cell/form";
	// @import "../../src/style/widget/cell/switch";
	// @import "../../src/style/widget/cell/uploader";
	// </style>
	//
	/* generated by vue-loader */

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(130)
	__vue_template__ = __webpack_require__(131)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//
	// <select class="select" v-model="selected">
	//     <option v-for="(index, option) in options" :value="index + 1">{{option}}</option>
	// </select>
	//
	// </template>
	//
	// <script>
	
	exports.default = {
	    props: {
	        selected: {
	            type: null,
	            required: true,
	            //指定这个 prop 为双向绑定
	            //如果绑定类型不对将抛出一条警告
	            twoWay: true
	        },
	        options: {
	            type: Array,
	            required: true
	        }
	    }
	};

	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n\n<select class=\"select\" v-model=\"selected\">\n    <option v-for=\"(index, option) in options\" :value=\"index + 1\">{{option}}</option>\n</select>\n\n";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(133)
	__vue_script__ = __webpack_require__(135)
	__vue_template__ = __webpack_require__(136)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Tooltips.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2d8db924&file=Tooltips.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltips.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2d8db924&file=Tooltips.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltips.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".toptips {\n  display: block;\n}\n.toptips.weui_success {\n  background-color: #039702;\n}\n", "", {"version":3,"sources":["/./src/Tooltips.vue.style"],"names":[],"mappings":"AAAA;EACE,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B","file":"Tooltips.vue","sourcesContent":[".toptips {\n  display: block;\n}\n.toptips.weui_success {\n  background-color: #039702;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 135 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style lang="less">
	//
	// .toptips {
	//   display: block;
	// }
	// .toptips.weui_success {
	//   background-color: #039702;
	// }
	// </style>
	//
	// <template>
	//
	// <div v-show="text"
	//   :class="{
	//     'toptips': true,
	//     'warn': (type == 'warn'),
	//     'success': (type == 'success')
	//   }">{{text}}</div>
	//
	// </template>
	//
	// <script>
	
	exports.default = {
	  name: 'Tooltips',
	  props: {
	    text: {
	      type: String
	    },
	    // 类型：warn,success
	    type: {
	      type: String,
	      default: 'warn'
	
	    },
	    // 持续时间(毫秒)
	    duration: {
	      type: Number,
	      default: 3000
	    }
	  },
	  watch: {
	    text: function text(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && !!this.duration) {
	        this._timeout = setTimeout(function () {
	          return _this.text = '';
	        }, this.duration);
	      }
	    }
	  }
	};

	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "\n\n<div v-show=\"text\"\n  :class=\"{\n    'toptips': true,\n    'warn': (type == 'warn'),\n    'success': (type == 'success')\n  }\">{{text}}</div>\n\n";

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page\">\n    <div class=\"hd\">\n        <h1 class=\"page_title\">Cell</h1>\n    </div>\n    <div class=\"bd\">\n        <div class=\"cells_title\">带说明的列表项</div>\n        <div class=\"cells\">\n            <div class=\"cell\">\n                <div class=\"cell_bd cell_primary\">\n                    <p>标题文字</p>\n                </div>\n                <div class=\"cell_ft\">\n                    说明文字\n                </div>\n            </div>\n        </div>\n        <div class=\"cells_title\">带图标、说明的列表项</div>\n        <div class=\"cells cells_split\">\n            <div class=\"cell\">\n                <div class=\"cell_hd\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=\" alt=\"\" style=\"width:20px;margin-right:5px;display:block\"></div>\n                <div class=\"cell_bd cell_primary\">\n                    <p>标题文字</p>\n                </div>\n                <div class=\"cell_ft\">\n                    说明文字\n                </div>\n            </div>\n            <div class=\"cell\">\n                <div class=\"cell_hd\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=\" alt=\"\" style=\"width:20px;margin-right:5px;display:block\"></div>\n                <div class=\"cell_bd cell_primary\">\n                    <p>标题文字</p>\n                </div>\n                <div class=\"cell_ft\">\n                    说明文字\n                </div>\n            </div>\n        </div>\n\n        <div class=\"cells_title\">带跳转的列表项</div>\n        <div class=\"cells cells_access\">\n            <a class=\"cell\" href=\"javascript:;\">\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                </div>\n            </a>\n            <a class=\"cell\" href=\"javascript:;\">\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                </div>\n            </a>\n        </div>\n\n        <div class=\"cells_title\">带说明、跳转的列表项</div>\n        <div class=\"cells cells_access\">\n            <a class=\"cell\" href=\"javascript:;\">\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                    说明文字\n                </div>\n            </a>\n            <a class=\"cell\" href=\"javascript:;\">\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                    说明文字\n                </div>\n            </a>\n\n        </div>\n\n        <div class=\"cells_title\">带图标、说明、跳转的列表项</div>\n        <div class=\"cells cells_access\">\n\n            <a class=\"cell\" href=\"javascript:;\">\n                <div class=\"cell_hd\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=\" alt=\"\" style=\"width:20px;margin-right:5px;display:block\"></div>\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                    说明文字\n                </div>\n            </a>\n            <a class=\"cell\" href=\"javascript:;\">\n                <div class=\"cell_hd\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=\" alt=\"\" style=\"width:20px;margin-right:5px;display:block\"></div>\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                    说明文字\n                </div>\n            </a>\n        </div>\n\n        <div class=\"cells_title\">单选列表项</div>\n        <div class=\"cells cells_radio\">\n            <label class=\"cell check_label\" for=\"x11\">\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                    <input type=\"radio\" class=\"check\" name=\"radio1\" id=\"x11\">\n                    <span class=\"icon i_checked\"></span>\n                </div>\n            </label>\n            <label class=\"cell check_label\" for=\"x12\">\n\n                <div class=\"cell_bd cell_primary\">\n                    <p>cell standard</p>\n                </div>\n                <div class=\"cell_ft\">\n                    <input type=\"radio\" name=\"radio1\" class=\"check\" id=\"x12\" checked=\"checked\">\n                    <span class=\"icon i_checked\"></span>\n                </div>\n            </label>\n        </div>\n        <div class=\"cells_title\">复选列表项</div>\n        <div class=\"cells cells_checkbox\">\n            <label class=\"cell check_label\" for=\"s11\">\n                <div class=\"cell_hd\">\n                    <input type=\"checkbox\" class=\"check\" name=\"checkbox1\" id=\"s11\" checked=\"checked\">\n                    <i class=\"icon i_checked\"></i>\n                </div>\n                <div class=\"cell_bd cell_primary\">\n                    <p>standard is dealt for u.</p>\n                </div>\n            </label>\n            <label class=\"cell check_label\" for=\"s12\">\n                <div class=\"cell_hd\">\n                    <input type=\"checkbox\" name=\"checkbox1\" class=\"check\" id=\"s12\">\n                    <i class=\"icon i_checked\"></i>\n                </div>\n                <div class=\"cell_bd cell_primary\">\n                    <p>standard is dealicient for u.</p>\n                </div>\n            </label>\n        </div>\n\n        <div class=\"cells_title\">开关</div>\n        <div class=\"cells cells_form\">\n            <div class=\"cell cell_switch\">\n                <div class=\"cell_hd cell_primary\">标题文字</div>\n                <div class=\"cell_ft\">\n                    <input class=\"switch\" type=\"checkbox\"/>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"cells_title\">表单</div>\n        <div class=\"cells cells_form\">\n            <div class=\"cell\">\n                <div class=\"cell_hd\"><label class=\"label\">qq</label></div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"number\" placeholder=\"请输入qq号\"/>\n                </div>\n            </div>\n            <div class=\"cell vcode\">\n                <div class=\"cell_hd\"><label class=\"label\">验证码</label></div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"number\" placeholder=\"请输入验证码\"/>\n                </div>\n                <div class=\"cell_ft\">\n                    <img src=\"/example/images/vcode.jpg\" />\n                </div>\n            </div>\n            <div class=\"cell\">\n                <div class=\"cell_hd\"><label class=\"label\">银行卡</label></div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"number\" placeholder=\"请输入银行卡号\"/>\n                </div>\n            </div>\n            <div class=\"cell vcode cell_warn\">\n                <div class=\"cell_hd\"><label class=\"label\">验证码</label></div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"number\" placeholder=\"请输入验证码\"/>\n                </div>\n                <div class=\"cell_ft\">\n                    <i class=\"icon i-roundwarning\"></i>\n                    <img src=\"/example/images/vcode.jpg\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"cells_tips\">底部说明文字底部说明文字</div>\n        <div class=\"btn_area\">\n            <a class=\"btn btn_primary\" href=\"javascript:\">确定</a>\n        </div>\n        <div class=\"cells_title\">上传</div>\n        <div class=\"cells cells_form\">\n            <div class=\"cell\">\n                <div class=\"cell_bd cell_primary\">\n                    <div class=\"uploader\">\n                        <div class=\"uploader_hd cell\">\n                            <div class=\"cell_bd cell_primary\">图片上传</div>\n                            <div class=\"cell_ft\">0/2</div>\n                        </div>\n                        <div class=\"uploader_bd\">\n                            <ul class=\"uploader_files\">\n                                <li class=\"uploader_file\" style=\"background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)\"></li>\n                                <li class=\"uploader_file\" style=\"background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)\"></li>\n                                <li class=\"uploader_file\" style=\"background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)\"></li>\n                                <li class=\"uploader_file uploader_status\" style=\"background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)\">\n                                    <div class=\"uploader_status_content\">\n                                        <i class=\"icon i-roundwarning\"></i> \n                                    </div>\n                                </li>\n                                <li class=\"uploader_file uploader_status\" style=\"background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)\">\n                                    <div class=\"uploader_status_content\">50%</div>\n                                </li>\n                            </ul>\n                            <div class=\"uploader_input_wrp\">\n                                <input class=\"uploader_input\" type=\"file\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" multiple />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"cells_title\">文本域</div>\n        <div class=\"cells cells_form\">\n            <div class=\"cell\">\n                <div class=\"cell_bd cell_primary\">\n                    <textarea class=\"textarea\" placeholder=\"请输入评论\" rows=\"3\"></textarea>\n                    <div class=\"textarea_counter\"><span>0</span>/200</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"cells_title\">表单报错</div>\n        <div class=\"cells cells_form\">\n            <div class=\"cell cell_warn\">\n                <div class=\"cell_hd\"><label for=\"\" class=\"label\">卡号</label></div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"tel\" value=\"weui input error\" placeholder=\"请输入卡号\"/>\n                </div>\n                <div class=\"cell_ft\">\n                    <i class=\"icon i-roundwarning\"></i>\n                </div>\n            </div>\n            <div class=\"cell\">\n                <div class=\"cell_hd\"><label for=\"\" class=\"label\">日期</label></div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"date\" value=\"\"/>\n                </div>\n            </div>\n            <div class=\"cell\">\n                <div class=\"cell_hd\"><label for=\"\" class=\"label\">时间</label></div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"datetime-local\" value=\"\" placeholder=\"\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"cells_title\">选择</div>\n        <div class=\"cells cells_split\">\n\n            <div class=\"cell cell_select select_before\">\n                <div class=\"cell_hd\">\n                  <we-select :options=\"areaCodeOptions\" :selected.sync=\"areaCodeSelected\"></we-select>\n                </div>\n                <div class=\"cell_bd cell_primary\">\n                    <input class=\"input\" type=\"text\" placeholder=\"请输入号码\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"cells_title\">选择</div>\n        <div class=\"cells cells_split\">\n            <div class=\"cell cell_select\">\n                <div class=\"cell_bd cell_primary\">\n                    <we-select :options=\"contactOptions\" :selected.sync=\"contactSelected\"></we-select>\n                </div>\n            </div>\n            <div class=\"cell cell_select select_after\">\n                <div class=\"cell_hd\">\n                    国家/地区{{nationSelected}}\n                </div>\n                <div class=\"cell_bd cell_primary\">\n                    <we-select :after=\"true\" :options=\"nationOptions\" :selected.sync=\"nationSelected\">\n                        <span slot=\"header\">国家/地区</span>\n                    </we-select>\n                </div>\n            </div>\n        </div>\n        <Tooltips :text.sync=\"tooltipsWarn\" :type=\"'warn'\"></Tooltips>\n    </div>\n  </div>\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(139)
	__vue_template__ = __webpack_require__(145)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\ProgressView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Progress = __webpack_require__(140);
	
	var _Progress2 = _interopRequireDefault(_Progress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'ProgressView',
	    components: {
	        Progress: _Progress2.default
	    },
	    data: function data() {
	        return {
	            size: 50,
	            size1: 1,
	            size2: 100
	        };
	    },
	    created: function created() {
	        var _this = this;
	
	        //模拟
	        setInterval(function () {
	            _this.size1 += 1;
	        }, 1000);
	
	        setInterval(function () {
	            _this.size2 -= 1;
	        }, 500);
	    }
	};

	// </script>
	//
	/* generated by vue-loader */
	// <template>
	//
	// <div class="page">
	//     <div class="hd">
	//         <h1 class="page_title">Progress</h1>
	//     </div>
	//     <div class="bd spacing">
	//         <h3>静态</h3>
	//         <Progress :size="0"></Progress>
	//         </br>
	//         <Progress :size="50"></Progress>
	//         </br>
	//         <Progress :size="100"></Progress>
	//         </br>
	//         <Progress :size="50" :show-close-btn="false"></Progress>
	//         </br>
	//         <h3>自动变更</h3>
	//         <Progress :size="size1"></Progress>
	//         </br>
	//         <Progress :size="size2"></Progress>
	//         <h3>手动变更</h3>
	//         <Progress :size="size"></Progress>
	//         <a href="javascript:;" class="btn btn_mini btn_primary" v-on:click="size=0">0%</a>
	//         <a href="javascript:;" class="btn btn_mini btn_primary" v-on:click="size=50">50%</a>
	//         <a href="javascript:;" class="btn btn_mini btn_primary" v-on:click="size=100">100%</a>
	//     </div>
	// </div>
	//
	// </template>
	//
	// <script>

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(141)
	__vue_script__ = __webpack_require__(143)
	__vue_template__ = __webpack_require__(144)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\src\\Progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-49e25401&file=Progress.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Progress.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-49e25401&file=Progress.vue!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, ".progress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.progress_bar {\n  background-color: #EBEBEB;\n  height: 3px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.progress_inner_bar {\n  width: 0;\n  height: 100%;\n  background-color: #1677CB;\n}\n.progress_opr {\n  display: block;\n  margin-left: 15px;\n  font-size: 0;\n  color: #EF4F4F;\n}\n.progress_opr i:before {\n  color: #EF4F4F;\n}\n", "", {"version":3,"sources":["/./src/Progress.vue.style"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,YAAY;EACZ,oBAAQ;EAAR,gBAAQ;MAAR,YAAQ;UAAR,QAAQ;CACT;AACD;EACE,SAAS;EACT,aAAa;EACb,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,eAAe;CAChB;AACD;EACE,eAAe;CAChB","file":"Progress.vue","sourcesContent":[".progress {\n  display: flex;\n  align-items: center;\n}\n.progress_bar {\n  background-color: #EBEBEB;\n  height: 3px;\n  flex: 1;\n}\n.progress_inner_bar {\n  width: 0;\n  height: 100%;\n  background-color: #1677CB;\n}\n.progress_opr {\n  display: block;\n  margin-left: 15px;\n  font-size: 0;\n  color: #EF4F4F;\n}\n.progress_opr i:before {\n  color: #EF4F4F;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Icon = __webpack_require__(77);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'Progress',
	    props: {
	        //进度条长度:[1~100]
	        size: {
	            // type:Number,
	            default: 0
	        },
	        //TODO size=0 bug
	        // validator: function (value) {
	        //   // console.log(value)
	        //   if(value < 0){
	        //     return false;
	        //   }
	        //   if(value > 100){
	        //     return false;
	        //   }
	        //   return value;
	        // }
	        showCloseBtn: {
	            type: Boolean,
	            required: false,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            show: true
	        };
	    },
	
	    methods: {
	        dispatch: function dispatch(eventStr) {
	            this.$dispatch(eventStr);
	            this.show = false;
	        }
	    }
	};

	// </script>
	//
	/* generated by vue-loader */
	// <style lang="less">
	//
	// @import "./style/base/fn.less";
	// .progress {
	//     display: flex;
	//     align-items: center;
	// }
	//
	// .progress_bar {
	//     background-color: @progressBg;
	//     height: @progressHeight;
	//     flex: 1;
	// }
	//
	// .progress_inner_bar {
	//     width: 0;
	//     height: 100%;
	//     background-color: @progressColor;
	// }
	//
	// .progress_opr {
	//     display: block;
	//     margin-left: 15px;
	//     font-size: 0;
	//     color: @progressClose;
	//     i:before{
	//         color: @progressClose;
	//     }
	// }
	//
	// </style>
	//
	// <template>
	//
	// <div v-if="show" class="progress">
	//     <div class="progress_bar">
	//         <div class="progress_inner_bar" :style="{ width: size + '%' }"></div>
	//     </div>
	//     <a v-if="showCloseBtn" href="javascript:;" class="progress_opr" @click="dispatch('on-progress-cancel')">
	//         <i class="icon i-cross"></i>
	//     </a>
	// </div>
	//
	// </template>
	//
	// <script>

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "\n\n<div v-if=\"show\" class=\"progress\">\n    <div class=\"progress_bar\">\n        <div class=\"progress_inner_bar\" :style=\"{ width: size + '%' }\"></div>\n    </div>\n    <a v-if=\"showCloseBtn\" href=\"javascript:;\" class=\"progress_opr\" @click=\"dispatch('on-progress-cancel')\">\n        <i class=\"icon i-cross\"></i>\n    </a>\n</div>\n\n";

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"page\">\n    <div class=\"hd\">\n        <h1 class=\"page_title\">Progress</h1>\n    </div>\n    <div class=\"bd spacing\">\n        <h3>静态</h3>\n        <Progress :size=\"0\"></Progress>\n        </br>\n        <Progress :size=\"50\"></Progress>\n        </br>\n        <Progress :size=\"100\"></Progress>\n        </br>\n        <Progress :size=\"50\" :show-close-btn=\"false\"></Progress>\n        </br>\n        <h3>自动变更</h3>\n        <Progress :size=\"size1\"></Progress>\n        </br>\n        <Progress :size=\"size2\"></Progress>\n        <h3>手动变更</h3>\n        <Progress :size=\"size\"></Progress>\n        <a href=\"javascript:;\" class=\"btn btn_mini btn_primary\" v-on:click=\"size=0\">0%</a>\n        <a href=\"javascript:;\" class=\"btn btn_mini btn_primary\" v-on:click=\"size=50\">50%</a>\n        <a href=\"javascript:;\" class=\"btn btn_mini btn_primary\" v-on:click=\"size=100\">100%</a>\n    </div>\n</div>\n\n";

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(147)
	__vue_script__ = __webpack_require__(149)
	__vue_template__ = __webpack_require__(150)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\fxc\\Desktop\\vue-weui-master\\example\\modules\\IconsView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(148);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(45)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-cbe371a8&file=IconsView.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IconsView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-cbe371a8&file=IconsView.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IconsView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(44)();
	// imports
	
	
	// module
	exports.push([module.id, "\n    .tip-title{\n        font-size: 16px;\n        color: #DE7C23;\n        margin-top: 10px;\n    }\n", "", {"version":3,"sources":["/./example/modules/IconsView.vue.style"],"names":[],"mappings":";IA0FA;QACA,gBAAA;QACA,eAAA;QACA,iBAAA;KACA","file":"IconsView.vue","sourcesContent":["<template>\n  <div class=\"page\">\n      <div class=\"hd\">\n          <h1 class=\"page_title\">Icons</h1>\n      </div>\n      <div class=\"bd spacing\">\n          <p class=\"tip-title\">箭头</p>\n          <i class=\"icon i-left\"></i>\n          <i class=\"icon i-top\"></i>\n          <i class=\"icon i-right\"></i>\n          <i class=\"icon i-down\"></i>\n          <i class=\"icon i-arrowdown\"></i>\n          <i class=\"icon i-arrowleft\"></i>\n          <i class=\"icon i-arrowright\"></i>\n          <i class=\"icon i-arrowup\"></i>\n          <i class=\"icon i-dup\"></i>\n          <i class=\"icon i-ddown\"></i>\n          <i class=\"icon i-dleft\"></i>\n          <i class=\"icon i-dright\"></i>\n          <i class=\"icon i-backtop\"></i>\n          <i class=\"icon i-collect1e\"></i>\n          <i class=\"icon i-download\"></i>\n          <p class=\"tip-title\">提示</p>\n          <i class=\"icon i-triangleWarning\"></i>\n          <i class=\"icon i-roundwarning\"></i>\n          <i class=\"icon i-warning\"></i>\n          <i class=\"icon i-help\"></i>\n          <i class=\"icon i-questions\"></i>\n          <i class=\"icon i-forbid\"></i>\n          <p class=\"tip-title\">checkbox</p>\n          <i class=\"icon i-checksquare\"></i>\n          <i class=\"icon i-checksquareoff\"></i>\n          <i class=\"icon i-radiochecked\"></i>\n          <i class=\"icon i-radiooff\"></i>\n          <i class=\"icon i-hook\"></i>\n          <i class=\"icon i-bighook\"></i>\n          <p class=\"tip-title\">操作</p>\n          <i class=\"icon i-star\"></i>\n          <i class=\"icon i-starfill\"></i>\n          <i class=\"icon i-heart\"></i>\n          <i class=\"icon i-heartfill\"></i>\n          <i class=\"icon i-addroud\"></i>\n          <i class=\"icon i-addroudfill\"></i>\n          <i class=\"icon i-minusroud\"></i>\n          <i class=\"icon i-minusroudfill\"></i>\n          <i class=\"icon i-zoomin\"></i>\n          <i class=\"icon i-zoomout\"></i>\n          <i class=\"icon i-sad\"></i>\n          <i class=\"icon i-sadfill\"></i>\n          <i class=\"icon i-searchbig\"></i>\n          <i class=\"icon i-search\"></i>\n          <i class=\"icon i-round\"></i>\n          <i class=\"icon i-play\"></i>\n          <i class=\"icon i-pause\"></i>\n          <i class=\"icon i-stop\"></i>\n          <i class=\"icon i-closefill\"></i>\n          <i class=\"icon i-smile\"></i>\n          <p class=\"tip-title\">其他</p>\n          <i class=\"icon i-add\"></i>\n          <i class=\"icon i-minus\"></i>\n          <i class=\"icon i-cross\"></i>\n          <i class=\"icon i-mapfill\"></i>\n          <i class=\"icon i-map\"></i>\n          <i class=\"icon i-delete\"></i>\n          <i class=\"icon i-more\"></i>\n          <i class=\"icon i-scan\"></i>\n          <i class=\"icon i-share\"></i>\n          <i class=\"icon i-wifi\"></i>\n          <i class=\"icon i-moreandroid\"></i>\n          <i class=\"icon i-share\"></i>\n          <i class=\"icon i-refresh\"></i>\n          <i class=\"icon i-loading\"></i>\n          <i class=\"icon i-code\"></i>\n          <i class=\"icon i-barcode\"></i>\n      </div>\n  </div>\n</template>\n\n<script>\nimport Icon from './../../src/Icon.vue'\n\nexport default {\n  name: 'IconsView',\n  components:{\n    // Icon\n  }\n}\n</script>\n\n<style>\n    .tip-title{\n        font-size: 16px;\n        color: #DE7C23;\n        margin-top: 10px;\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(77);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'IconsView',
	  components: {
	    // Icon
	  }
	};
	// </script>
	//
	// <style>
	//     .tip-title{
	//         font-size: 16px;
	//         color: #DE7C23;
	//         margin-top: 10px;
	//     }
	// </style>
	/* generated by vue-loader */
	// <template>
	//   <div class="page">
	//       <div class="hd">
	//           <h1 class="page_title">Icons</h1>
	//       </div>
	//       <div class="bd spacing">
	//           <p class="tip-title">箭头</p>
	//           <i class="icon i-left"></i>
	//           <i class="icon i-top"></i>
	//           <i class="icon i-right"></i>
	//           <i class="icon i-down"></i>
	//           <i class="icon i-arrowdown"></i>
	//           <i class="icon i-arrowleft"></i>
	//           <i class="icon i-arrowright"></i>
	//           <i class="icon i-arrowup"></i>
	//           <i class="icon i-dup"></i>
	//           <i class="icon i-ddown"></i>
	//           <i class="icon i-dleft"></i>
	//           <i class="icon i-dright"></i>
	//           <i class="icon i-backtop"></i>
	//           <i class="icon i-collect1e"></i>
	//           <i class="icon i-download"></i>
	//           <p class="tip-title">提示</p>
	//           <i class="icon i-triangleWarning"></i>
	//           <i class="icon i-roundwarning"></i>
	//           <i class="icon i-warning"></i>
	//           <i class="icon i-help"></i>
	//           <i class="icon i-questions"></i>
	//           <i class="icon i-forbid"></i>
	//           <p class="tip-title">checkbox</p>
	//           <i class="icon i-checksquare"></i>
	//           <i class="icon i-checksquareoff"></i>
	//           <i class="icon i-radiochecked"></i>
	//           <i class="icon i-radiooff"></i>
	//           <i class="icon i-hook"></i>
	//           <i class="icon i-bighook"></i>
	//           <p class="tip-title">操作</p>
	//           <i class="icon i-star"></i>
	//           <i class="icon i-starfill"></i>
	//           <i class="icon i-heart"></i>
	//           <i class="icon i-heartfill"></i>
	//           <i class="icon i-addroud"></i>
	//           <i class="icon i-addroudfill"></i>
	//           <i class="icon i-minusroud"></i>
	//           <i class="icon i-minusroudfill"></i>
	//           <i class="icon i-zoomin"></i>
	//           <i class="icon i-zoomout"></i>
	//           <i class="icon i-sad"></i>
	//           <i class="icon i-sadfill"></i>
	//           <i class="icon i-searchbig"></i>
	//           <i class="icon i-search"></i>
	//           <i class="icon i-round"></i>
	//           <i class="icon i-play"></i>
	//           <i class="icon i-pause"></i>
	//           <i class="icon i-stop"></i>
	//           <i class="icon i-closefill"></i>
	//           <i class="icon i-smile"></i>
	//           <p class="tip-title">其他</p>
	//           <i class="icon i-add"></i>
	//           <i class="icon i-minus"></i>
	//           <i class="icon i-cross"></i>
	//           <i class="icon i-mapfill"></i>
	//           <i class="icon i-map"></i>
	//           <i class="icon i-delete"></i>
	//           <i class="icon i-more"></i>
	//           <i class="icon i-scan"></i>
	//           <i class="icon i-share"></i>
	//           <i class="icon i-wifi"></i>
	//           <i class="icon i-moreandroid"></i>
	//           <i class="icon i-share"></i>
	//           <i class="icon i-refresh"></i>
	//           <i class="icon i-loading"></i>
	//           <i class="icon i-code"></i>
	//           <i class="icon i-barcode"></i>
	//       </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"page\">\n      <div class=\"hd\">\n          <h1 class=\"page_title\">Icons</h1>\n      </div>\n      <div class=\"bd spacing\">\n          <p class=\"tip-title\">箭头</p>\n          <i class=\"icon i-left\"></i>\n          <i class=\"icon i-top\"></i>\n          <i class=\"icon i-right\"></i>\n          <i class=\"icon i-down\"></i>\n          <i class=\"icon i-arrowdown\"></i>\n          <i class=\"icon i-arrowleft\"></i>\n          <i class=\"icon i-arrowright\"></i>\n          <i class=\"icon i-arrowup\"></i>\n          <i class=\"icon i-dup\"></i>\n          <i class=\"icon i-ddown\"></i>\n          <i class=\"icon i-dleft\"></i>\n          <i class=\"icon i-dright\"></i>\n          <i class=\"icon i-backtop\"></i>\n          <i class=\"icon i-collect1e\"></i>\n          <i class=\"icon i-download\"></i>\n          <p class=\"tip-title\">提示</p>\n          <i class=\"icon i-triangleWarning\"></i>\n          <i class=\"icon i-roundwarning\"></i>\n          <i class=\"icon i-warning\"></i>\n          <i class=\"icon i-help\"></i>\n          <i class=\"icon i-questions\"></i>\n          <i class=\"icon i-forbid\"></i>\n          <p class=\"tip-title\">checkbox</p>\n          <i class=\"icon i-checksquare\"></i>\n          <i class=\"icon i-checksquareoff\"></i>\n          <i class=\"icon i-radiochecked\"></i>\n          <i class=\"icon i-radiooff\"></i>\n          <i class=\"icon i-hook\"></i>\n          <i class=\"icon i-bighook\"></i>\n          <p class=\"tip-title\">操作</p>\n          <i class=\"icon i-star\"></i>\n          <i class=\"icon i-starfill\"></i>\n          <i class=\"icon i-heart\"></i>\n          <i class=\"icon i-heartfill\"></i>\n          <i class=\"icon i-addroud\"></i>\n          <i class=\"icon i-addroudfill\"></i>\n          <i class=\"icon i-minusroud\"></i>\n          <i class=\"icon i-minusroudfill\"></i>\n          <i class=\"icon i-zoomin\"></i>\n          <i class=\"icon i-zoomout\"></i>\n          <i class=\"icon i-sad\"></i>\n          <i class=\"icon i-sadfill\"></i>\n          <i class=\"icon i-searchbig\"></i>\n          <i class=\"icon i-search\"></i>\n          <i class=\"icon i-round\"></i>\n          <i class=\"icon i-play\"></i>\n          <i class=\"icon i-pause\"></i>\n          <i class=\"icon i-stop\"></i>\n          <i class=\"icon i-closefill\"></i>\n          <i class=\"icon i-smile\"></i>\n          <p class=\"tip-title\">其他</p>\n          <i class=\"icon i-add\"></i>\n          <i class=\"icon i-minus\"></i>\n          <i class=\"icon i-cross\"></i>\n          <i class=\"icon i-mapfill\"></i>\n          <i class=\"icon i-map\"></i>\n          <i class=\"icon i-delete\"></i>\n          <i class=\"icon i-more\"></i>\n          <i class=\"icon i-scan\"></i>\n          <i class=\"icon i-share\"></i>\n          <i class=\"icon i-wifi\"></i>\n          <i class=\"icon i-moreandroid\"></i>\n          <i class=\"icon i-share\"></i>\n          <i class=\"icon i-refresh\"></i>\n          <i class=\"icon i-loading\"></i>\n          <i class=\"icon i-code\"></i>\n          <i class=\"icon i-barcode\"></i>\n      </div>\n  </div>\n";

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';
	
	;(function (win, lib) {
	    var doc = win.document;
	    var docEl = doc.documentElement;
	    var metaEl = doc.querySelector('meta[name="viewport"]');
	    var flexibleEl = doc.querySelector('meta[name="flexible"]');
	    var dpr = 0;
	    var scale = 0;
	    var tid;
	    var flexible = lib.flexible || (lib.flexible = {});
	
	    if (metaEl) {
	        console.warn('将根据已有的meta标签来设置缩放比例');
	        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
	        if (match) {
	            scale = parseFloat(match[1]);
	            dpr = parseInt(1 / scale);
	        }
	    } else if (flexibleEl) {
	        var content = flexibleEl.getAttribute('content');
	        if (content) {
	            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
	            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
	            if (initialDpr) {
	                dpr = parseFloat(initialDpr[1]);
	                scale = parseFloat((1 / dpr).toFixed(2));
	            }
	            if (maximumDpr) {
	                dpr = parseFloat(maximumDpr[1]);
	                scale = parseFloat((1 / dpr).toFixed(2));
	            }
	        }
	    }
	
	    if (!dpr && !scale) {
	        var isAndroid = win.navigator.appVersion.match(/android/gi);
	        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
	        var devicePixelRatio = win.devicePixelRatio;
	        if (isIPhone) {
	            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
	            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
	                dpr = 3;
	            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
	                dpr = 2;
	            } else {
	                dpr = 1;
	            }
	        } else {
	            // 其他设备下，仍旧使用1倍的方案
	            dpr = 1;
	        }
	        scale = 1 / dpr;
	    }
	
	    docEl.setAttribute('data-dpr', dpr);
	    if (!metaEl) {
	        metaEl = doc.createElement('meta');
	        metaEl.setAttribute('name', 'viewport');
	        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	        if (docEl.firstElementChild) {
	            docEl.firstElementChild.appendChild(metaEl);
	        } else {
	            var wrap = doc.createElement('div');
	            wrap.appendChild(metaEl);
	            doc.write(wrap.innerHTML);
	        }
	    }
	
	    function refreshRem() {
	        var width = docEl.getBoundingClientRect().width;
	        if (width / dpr > 540) {
	            width = 540 * dpr;
	        }
	        var rem = width / 10;
	        docEl.style.fontSize = rem + 'px';
	        flexible.rem = win.rem = rem;
	    }
	
	    win.addEventListener('resize', function () {
	        clearTimeout(tid);
	        tid = setTimeout(refreshRem, 300);
	    }, false);
	    win.addEventListener('pageshow', function (e) {
	        if (e.persisted) {
	            clearTimeout(tid);
	            tid = setTimeout(refreshRem, 300);
	        }
	    }, false);
	
	    if (doc.readyState === 'complete') {
	        doc.body.style.fontSize = 12 * dpr + 'px';
	    } else {
	        doc.addEventListener('DOMContentLoaded', function (e) {
	            doc.body.style.fontSize = 12 * dpr + 'px';
	        }, false);
	    }
	
	    refreshRem();
	
	    flexible.dpr = win.dpr = dpr;
	    flexible.refreshRem = refreshRem;
	    flexible.rem2px = function (d) {
	        var val = parseFloat(d) * this.rem;
	        if (typeof d === 'string' && d.match(/rem$/)) {
	            val += 'px';
	        }
	        return val;
	    };
	    flexible.px2rem = function (d) {
	        var val = parseFloat(d) / this.rem;
	        if (typeof d === 'string' && d.match(/px$/)) {
	            val += 'rem';
	        }
	        return val;
	    };
	})(window, window['lib'] || (window['lib'] = {}));

/***/ }
/******/ ]);
//# sourceMappingURL=example.js.map