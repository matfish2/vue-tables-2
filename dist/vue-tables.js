var VueTables =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bus.js":
/*!********************!*\
  !*** ./lib/bus.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ \"vue\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar bus = new _vue[\"default\"]();\nvar _default = bus;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://VueTables/./lib/bus.js?");

/***/ }),

/***/ "./lib/computed/all-columns.js":
/*!*************************************!*\
  !*** ./lib/computed/all-columns.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  var display = this.columnsDisplay; // default - return all columns\n\n  if (!display && !this.userControlsColumns) {\n    return this.Columns.filter(function (col) {\n      return _this._shouldShowColumnOnInit(col);\n    });\n  } // user toggled columns - return user selected columns\n\n\n  if (this.userControlsColumns) {\n    return this.columns.filter(function (column) {\n      return _this.userColumnsDisplay.includes(column);\n    });\n  }\n\n  if (this.opts.ssr) return this.Columns; // developer defined columns display\n\n  return this.Columns.filter(function (column) {\n    if (!_this._shouldShowColumnOnInit(column)) {\n      return false;\n    }\n\n    if (!display[column]) return true;\n    var range = display[column];\n    var operator = range[2];\n    var inRange = (!range[0] || _this.windowWidth >= range[0]) && (!range[1] || _this.windowWidth < range[1]);\n    return operator == 'not' ? !inRange : inRange;\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/all-columns.js?");

/***/ }),

/***/ "./lib/computed/colspan.js":
/*!*********************************!*\
  !*** ./lib/computed/colspan.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.hasChildRow ? this.allColumns.length + 1 : this.allColumns.length;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/colspan.js?");

/***/ }),

/***/ "./lib/computed/custom-q.js":
/*!**********************************!*\
  !*** ./lib/computed/custom-q.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return JSON.stringify(this.customQueries);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/custom-q.js?");

/***/ }),

/***/ "./lib/computed/datepicker-columns.js":
/*!********************************************!*\
  !*** ./lib/computed/datepicker-columns.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar intersect = __webpack_require__(/*! array-intersect */ \"./node_modules/array-intersect/dist/array-intersect.module.js\")[\"default\"];\n\nmodule.exports = function () {\n  if (this.opts.filterable === true) {\n    return this.opts.dateColumns;\n  }\n\n  if (this.opts.filterable === false) {\n    return [];\n  }\n\n  return intersect(this.opts.filterable, this.opts.dateColumns);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/datepicker-columns.js?");

/***/ }),

/***/ "./lib/computed/filterable-columns.js":
/*!********************************************!*\
  !*** ./lib/computed/filterable-columns.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.opts.filterable && this.opts.filterable.length ? this.opts.filterable : this.Columns;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/filterable-columns.js?");

/***/ }),

/***/ "./lib/computed/filtered-data.js":
/*!***************************************!*\
  !*** ./lib/computed/filtered-data.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar clone = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n\nmodule.exports = {\n  get: function get() {\n    var data = clone(this.tableData);\n    var column = this.orderBy.column;\n    data = this.search(data);\n\n    if (column) {\n      // dummy var to force compilation\n      if (this.time) this.time = this.time;\n      data = this.opts.sortingAlgorithm.call(this, data, column);\n    } else if (this.opts.groupBy) {\n      data = this.opts.sortingAlgorithm.call(this, data, this.opts.groupBy);\n    }\n\n    if (this.vuex) {\n      if (this.count != data.length) this.commit('SET_COUNT', data.length);\n    } else {\n      this.count = data.length;\n    }\n\n    var offset = (this.page - 1) * this.limit;\n    this.allFilteredData = JSON.parse(JSON.stringify(data));\n    data = data.splice(offset, this.limit);\n    return this.applyFilters(data);\n  },\n  set: function set(val) {\n    console.log(val);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/filtered-data.js?");

/***/ }),

/***/ "./lib/computed/filtered-query.js":
/*!****************************************!*\
  !*** ./lib/computed/filtered-query.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function () {\n  if (_typeof(this.query) !== 'object' || this.opts.sendEmptyFilters) {\n    return this.query;\n  }\n\n  var result = {};\n\n  for (var key in this.query) {\n    if (this.query[key] !== '' && this.filterable(key)) {\n      result[key] = this.query[key];\n    }\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/filtered-query.js?");

/***/ }),

/***/ "./lib/computed/has-child-row.js":
/*!***************************************!*\
  !*** ./lib/computed/has-child-row.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.opts.childRow || this.$scopedSlots.child_row;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/has-child-row.js?");

/***/ }),

/***/ "./lib/computed/has-generic-filter.js":
/*!********************************************!*\
  !*** ./lib/computed/has-generic-filter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function () {\n  return !this.opts.filterByColumn && (typeof this.opts.filterable === 'boolean' && this.opts.filterable || _typeof(this.opts.filterable) === 'object' && this.opts.filterable.length);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/has-generic-filter.js?");

/***/ }),

/***/ "./lib/computed/list-columns-object.js":
/*!*********************************************!*\
  !*** ./lib/computed/list-columns-object.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var columns = Object.keys(this.opts.listColumns);\n  var res = {};\n  columns.forEach(function (column) {\n    res[column] = {};\n    this.opts.listColumns[column].forEach(function (item) {\n      res[column][item.id] = item.text;\n    });\n  }.bind(this));\n  return res;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/list-columns-object.js?");

/***/ }),

/***/ "./lib/computed/opts.js":
/*!******************************!*\
  !*** ./lib/computed/opts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var defaults = __webpack_require__(/*! ../config/defaults */ \"./lib/config/defaults.js\")();\n\n  return this.initOptions(defaults, this.globalOptions, this.options);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/opts.js?");

/***/ }),

/***/ "./lib/computed/q.js":
/*!***************************!*\
  !*** ./lib/computed/q.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.opts.filterByColumn ? JSON.stringify(this.query) : this.query;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/q.js?");

/***/ }),

/***/ "./lib/computed/storage.js":
/*!*********************************!*\
  !*** ./lib/computed/storage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (typeof localStorage === 'undefined') return {};\n  return this.opts.storage === 'local' ? localStorage : sessionStorage;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/storage.js?");

/***/ }),

/***/ "./lib/computed/table-data.js":
/*!************************************!*\
  !*** ./lib/computed/table-data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return this.data;\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/table-data.js?");

/***/ }),

/***/ "./lib/computed/templates-keys.js":
/*!****************************************!*\
  !*** ./lib/computed/templates-keys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return Object.keys(this.opts.templates);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/templates-keys.js?");

/***/ }),

/***/ "./lib/computed/total-pages.js":
/*!*************************************!*\
  !*** ./lib/computed/total-pages.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return Math.ceil(this.count / this.limit);\n};\n\n//# sourceURL=webpack://VueTables/./lib/computed/total-pages.js?");

/***/ }),

/***/ "./lib/config/defaults.js":
/*!********************************!*\
  !*** ./lib/config/defaults.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    alwaysShowPerPageSelect: false,\n    hidePerPageSelect: false,\n    dateColumns: [],\n    listColumns: {},\n    datepickerOptions: {\n      locale: {\n        cancelLabel: \"Clear\"\n      }\n    },\n    datepickerPerColumnOptions: {},\n    initialPage: 1,\n    perPage: 10,\n    perPageValues: [10, 25, 50, 100],\n    groupBy: false,\n    collapseGroups: false,\n    destroyEventBus: false,\n    sendEmptyFilters: false,\n    params: {},\n    sortable: true,\n    filterable: true,\n    groupMeta: [],\n    initFilters: {},\n    sendInitialRequest: true,\n    customFilters: [],\n    templates: {},\n    debounce: 250,\n    dateFormat: \"DD/MM/YYYY\",\n    dateFormatPerColumn: {},\n    toMomentFormat: false,\n    skin: false,\n    columnsDisplay: {},\n    columnsDropdown: false,\n    texts: {\n      count: \"Showing {from} to {to} of {count} records|{count} records|One record\",\n      first: \"First\",\n      last: \"Last\",\n      filter: \"Filter:\",\n      filterPlaceholder: \"Search query\",\n      limit: \"Records:\",\n      page: \"Page:\",\n      noResults: \"No matching records\",\n      filterBy: \"Filter by {column}\",\n      loading: \"Loading...\",\n      defaultOption: \"Select {column}\",\n      columns: \"Columns\"\n    },\n    sortIcon: {\n      is: \"glyphicon-sort\",\n      base: \"glyphicon\",\n      up: \"glyphicon-chevron-up\",\n      down: \"glyphicon-chevron-down\"\n    },\n    sortingAlgorithm: function sortingAlgorithm(data, column) {\n      return data.sort(this.getSortFn(column));\n    },\n    filterAlgorithm: {},\n    customSorting: {},\n    multiSorting: {},\n    clientMultiSorting: true,\n    serverMultiSorting: false,\n    filterByColumn: false,\n    highlightMatches: false,\n    orderBy: false,\n    descOrderColumns: [],\n    footerHeadings: false,\n    headings: {},\n    headingsTooltips: {},\n    pagination: {\n      dropdown: false,\n      chunk: 10,\n      edge: false,\n      align: \"center\",\n      nav: \"fixed\"\n    },\n    childRow: false,\n    childRowTogglerFirst: true,\n    showChildRowToggler: true,\n    uniqueKey: \"id\",\n    requestFunction: false,\n    requestAdapter: function requestAdapter(data) {\n      return data;\n    },\n    responseAdapter: function responseAdapter(resp) {\n      var data = this.getResponseData(resp);\n      return {\n        data: data.data,\n        count: data.count\n      };\n    },\n    requestKeys: {\n      query: \"query\",\n      limit: \"limit\",\n      orderBy: \"orderBy\",\n      ascending: \"ascending\",\n      page: \"page\",\n      byColumn: \"byColumn\"\n    },\n    rowClassCallback: false,\n    preserveState: false,\n    saveState: false,\n    storage: \"local\",\n    columnsClasses: {},\n    summary: false,\n    caption: false,\n    cellClasses: {},\n    visibleColumns: false,\n    hiddenColumns: false,\n    resizableColumns: true,\n    editableColumns: []\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/config/defaults.js?");

/***/ }),

/***/ "./lib/filters/custom-filters.js":
/*!***************************************!*\
  !*** ./lib/filters/custom-filters.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (data, customFilters, customQueries) {\n  var passing;\n  return data.filter(function (row) {\n    passing = true;\n    customFilters.forEach(function (filter) {\n      var value = customQueries[filter.name];\n      if (value && !filter.callback(row, value)) passing = false;\n    });\n    return passing;\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/filters/custom-filters.js?");

/***/ }),

/***/ "./lib/filters/format-date.js":
/*!************************************!*\
  !*** ./lib/filters/format-date.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar validMoment = __webpack_require__(/*! ../helpers/is-valid-moment-object */ \"./lib/helpers/is-valid-moment-object.js\");\n\nmodule.exports = function (value, dateFormat) {\n  if (!validMoment(value)) return value;\n  return value.format(dateFormat);\n};\n\n//# sourceURL=webpack://VueTables/./lib/filters/format-date.js?");

/***/ }),

/***/ "./lib/filters/highlight-matches.js":
/*!******************************************!*\
  !*** ./lib/filters/highlight-matches.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value, column, h) {\n  var query = this.opts.filterByColumn ? this.query[column] : this.query;\n  if (!query) return value;\n  query = new RegExp(\"(\" + escapeRegex(query) + \")\", \"i\");\n  return h(\"span\", {\n    \"class\": 'VueTables__highlight'\n  }, matches(value, query, h));\n};\n\nfunction matches(value, query, h) {\n  var pieces = String(value).split(query);\n  return pieces.map(function (piece) {\n    if (query.test(piece)) {\n      return h(\"b\", {}, piece);\n    }\n\n    return piece;\n  });\n}\n\nfunction escapeRegex(s) {\n  return typeof s === 'string' ? s.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&') : s;\n}\n\n;\n\n//# sourceURL=webpack://VueTables/./lib/filters/highlight-matches.js?");

/***/ }),

/***/ "./lib/filters/option-text.js":
/*!************************************!*\
  !*** ./lib/filters/option-text.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value, column) {\n  var list = this.listColumnsObject[column];\n  if (typeof list[value] == 'undefined') return value;\n  return list[value];\n};\n\n//# sourceURL=webpack://VueTables/./lib/filters/option-text.js?");

/***/ }),

/***/ "./lib/helpers/is-empty.js":
/*!*********************************!*\
  !*** ./lib/helpers/is-empty.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (obj) {\n  // null and undefined are \"empty\"\n  if (obj == null) return true; // Assume if it has a length property with a non-zero value\n  // that that property is correct.\n\n  if (obj.length > 0) return false;\n  if (obj.length === 0) return true; // Otherwise, does it have any properties of its own?\n\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/is-empty.js?");

/***/ }),

/***/ "./lib/helpers/is-valid-moment-object.js":
/*!***********************************************!*\
  !*** ./lib/helpers/is-valid-moment-object.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (val) {\n  return val && typeof val.isValid == 'function' && val.isValid();\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/is-valid-moment-object.js?");

/***/ }),

/***/ "./lib/helpers/object-filled-keys-count.js":
/*!*************************************************!*\
  !*** ./lib/helpers/object-filled-keys-count.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (obj) {\n  var count = 0;\n\n  for (var prop in obj) {\n    var isDateRange = _typeof(obj[prop]) == 'object';\n    if (isDateRange || obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim())) count++;\n  }\n\n  return count;\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/object-filled-keys-count.js?");

/***/ }),

/***/ "./lib/helpers/resizeable-columns.js":
/*!*******************************************!*\
  !*** ./lib/helpers/resizeable-columns.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (table, hasChildRow, isChildRowTogglerFirst, resizeableColumns) {\n  var row = table.getElementsByTagName(\"tr\")[0],\n      cols = row ? Array.from(row.children) : undefined;\n  if (!cols) return;\n\n  if (_typeof(resizeableColumns) === 'object') {\n    cols = cols.filter(function (col) {\n      return resizeableColumns.includes(col.id.split('--')[1]);\n    });\n  }\n\n  table.style.overflow = \"hidden\";\n  var tableHeight = table.offsetHeight;\n  var i = hasChildRow && isChildRowTogglerFirst ? 1 : 0;\n  var till = hasChildRow && !isChildRowTogglerFirst ? cols.length - 2 : cols.length;\n  var documentListeners = [];\n\n  for (; i < till; i++) {\n    var div = createDiv(tableHeight);\n    div.className = \"resize-handle\";\n    cols[i].appendChild(div);\n    cols[i].style.position = \"relative\";\n    setListeners(div);\n  }\n\n  function setListeners(div) {\n    var pageX, curCol, nxtCol, curColWidth, nxtColWidth;\n    div.addEventListener(\"mousedown\", function (e) {\n      e.preventDefault();\n      e.stopPropagation();\n      curCol = e.target.parentElement;\n      nxtCol = curCol.nextElementSibling;\n      pageX = e.pageX;\n      var padding = paddingDiff(curCol);\n      curColWidth = curCol.offsetWidth - padding;\n      if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;\n    }); // div.addEventListener(\"mouseover\", function(e) {\n    //   e.target.style.borderRight = \"2px solid #0000ff\";\n    // });\n\n    div.addEventListener(\"mouseout\", function (e) {\n      e.target.style.borderRight = \"\";\n    });\n\n    function onMouseMove(e) {\n      if (curCol) {\n        var diffX = e.pageX - pageX;\n        if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + \"px\";\n        curCol.style.width = curColWidth + diffX + \"px\";\n      }\n    }\n\n    function onMouseUp(e) {\n      if (e.target.nodeName === 'INPUT') return;\n      e.preventDefault();\n      e.stopPropagation();\n      curCol = undefined;\n      nxtCol = undefined;\n      pageX = undefined;\n      nxtColWidth = undefined;\n      curColWidth = undefined;\n    }\n\n    document.addEventListener(\"mousemove\", onMouseMove);\n    document.addEventListener(\"mouseup\", onMouseUp);\n    documentListeners.push({\n      event: \"mousemove\",\n      handler: onMouseMove\n    }, {\n      event: \"mouseup\",\n      handler: onMouseUp\n    });\n  }\n\n  function createDiv(height) {\n    var div = document.createElement(\"div\");\n    div.style.top = 0;\n    div.style.right = 0;\n    div.style.width = \"5px\";\n    div.style.position = \"absolute\";\n    div.style.cursor = \"col-resize\";\n    div.style.userSelect = \"none\";\n    div.style.height = height + \"px\";\n    return div;\n  }\n\n  function paddingDiff(col) {\n    if (getStyleVal(col, \"box-sizing\") == \"border-box\") {\n      return 0;\n    }\n\n    var padLeft = getStyleVal(col, \"padding-left\");\n    var padRight = getStyleVal(col, \"padding-right\");\n    return parseInt(padLeft) + parseInt(padRight);\n  }\n\n  function getStyleVal(elm, css) {\n    return window.getComputedStyle(elm, null).getPropertyValue(css);\n  }\n\n  function removeDocumentListeners() {\n    documentListeners.forEach(function (listener) {\n      document.removeEventListener(listener.event, listener.handler);\n    });\n  }\n\n  return removeDocumentListeners;\n};\n\n//# sourceURL=webpack://VueTables/./lib/helpers/resizeable-columns.js?");

/***/ }),

/***/ "./lib/helpers/ucfirst.js":
/*!********************************!*\
  !*** ./lib/helpers/ucfirst.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nfunction _default(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\n//# sourceURL=webpack://VueTables/./lib/helpers/ucfirst.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ./bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar ClientTable = __webpack_require__(/*! ./v-client-table */ \"./lib/v-client-table.js\");\n\nvar ServerTable = __webpack_require__(/*! ./v-server-table */ \"./lib/v-server-table.js\");\n\nmodule.exports = {\n  ClientTable: ClientTable,\n  ServerTable: ServerTable,\n  Event: _bus[\"default\"]\n};\n\n//# sourceURL=webpack://VueTables/./lib/index.js?");

/***/ }),

/***/ "./lib/methods/apply-filters.js":
/*!**************************************!*\
  !*** ./lib/methods/apply-filters.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (data) {\n  var _this = this;\n\n  try {\n    return data.map(function (row) {\n      for (var column in row) {\n        if (_this.source === 'client') row[column] = _this.formatDate(row[column], _this.dateFormat(column));\n\n        if (_this.isListFilter(column) && !_this.opts.templates[column] && !_this.$scopedSlots[column]) {\n          row[column] = _this.optionText(row[column], column);\n        }\n      }\n\n      return row;\n    });\n  } catch (e) {\n    console.error(\"vue-tables-2: non-iterable data property. Expected array, got \".concat(_typeof(data), \". Make sure that your response conforms to the expected format, or use the 'responseAdapter' option to match the currently returned format\"));\n    console.error('Data equals', data);\n    throw new Error();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/apply-filters.js?");

/***/ }),

/***/ "./lib/methods/cell-classes.js":
/*!*************************************!*\
  !*** ./lib/methods/cell-classes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, row) {\n  if (!this.opts.cellClasses[column]) return '';\n  return this.opts.cellClasses[column].filter(function (item) {\n    return item.condition(row);\n  }).map(function (item) {\n    return item[\"class\"];\n  }).join(' ');\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/cell-classes.js?");

/***/ }),

/***/ "./lib/methods/child-row-toggler-class.js":
/*!************************************************!*\
  !*** ./lib/methods/child-row-toggler-class.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowId) {\n  return this.openChildRows.includes(rowId) ? 'VueTables__child-row-toggler--open' : 'VueTables__child-row-toggler--closed';\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/child-row-toggler-class.js?");

/***/ }),

/***/ "./lib/methods/client-search.js":
/*!**************************************!*\
  !*** ./lib/methods/client-search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar object_filled_keys_count = __webpack_require__(/*! ../helpers/object-filled-keys-count */ \"./lib/helpers/object-filled-keys-count.js\");\n\nvar is_valid_moment_object = __webpack_require__(/*! ../helpers/is-valid-moment-object */ \"./lib/helpers/is-valid-moment-object.js\");\n\nvar filterByCustomFilters = __webpack_require__(/*! ../filters/custom-filters */ \"./lib/filters/custom-filters.js\");\n\nmodule.exports = function (data, e) {\n  if (e) {\n    var _query = this.query;\n    this.setPage(1, true);\n    var name = this.getName(e.target.name);\n    var value = _typeof(e.target.value) === 'object' ? e.target.value : '' + e.target.value;\n\n    if (name) {\n      _query[name] = value;\n    } else {\n      _query = value;\n    }\n\n    this.vuex ? this.commit('SET_FILTER', _query) : this.query = _query;\n    this.updateState('query', _query);\n\n    if (name) {\n      this.dispatch('filter', {\n        name: name,\n        value: value\n      });\n      this.dispatch(\"filter::\".concat(name), value);\n    } else {\n      this.dispatch('filter', value);\n    }\n  }\n\n  var query = this.query;\n  var totalQueries = !query ? 0 : 1;\n  if (!this.opts) return data;\n\n  if (this.opts.filterByColumn) {\n    totalQueries = object_filled_keys_count(query);\n  }\n\n  var value;\n  var found;\n  var currentQuery;\n  var dateFormat;\n  var filterByDate;\n  var isListFilter;\n  var data = filterByCustomFilters(data, this.opts.customFilters, this.customQueries);\n  if (!totalQueries) return data;\n  return data.filter(function (row, index) {\n    found = 0;\n    this.filterableColumns.forEach(function (column) {\n      filterByDate = this.opts.dateColumns.indexOf(column) > -1 && this.opts.filterByColumn;\n      isListFilter = this.isListFilter(column) && this.opts.filterByColumn;\n      dateFormat = this.dateFormat(column);\n      value = this._getValue(row, column);\n\n      if (is_valid_moment_object(value) && !filterByDate) {\n        value = value.format(dateFormat);\n      }\n\n      currentQuery = this.opts.filterByColumn ? query[column] : query;\n      currentQuery = setCurrentQuery(currentQuery);\n\n      if (currentQuery) {\n        if (this.opts.filterAlgorithm[column]) {\n          if (this.opts.filterAlgorithm[column](row, this.opts.filterByColumn ? query[column] : query)) found++;\n        } else {\n          if (foundMatch(currentQuery, value, isListFilter)) found++;\n        }\n      }\n    }.bind(this));\n    return found >= totalQueries;\n  }.bind(this));\n};\n\nfunction setCurrentQuery(query) {\n  if (!query) return '';\n  if (typeof query == 'string') return query.toLowerCase(); // Date Range\n\n  return query;\n}\n\nfunction foundMatch(query, value, isListFilter) {\n  if (['string', 'number', 'boolean'].indexOf(_typeof(value)) > -1) {\n    value = String(value).toLowerCase();\n  } // List Filter\n\n\n  if (isListFilter) {\n    return value == query;\n  } //Text Filter\n\n\n  if (typeof value === 'string') {\n    return value.indexOf(query) > -1;\n  } // Date range\n\n\n  if (is_valid_moment_object(value)) {\n    var start = moment(query.start, 'YYYY-MM-DD HH:mm:ss');\n    var end = moment(query.end, 'YYYY-MM-DD HH:mm:ss');\n    return value >= start && value <= end;\n  }\n\n  if (_typeof(value) === 'object') {\n    for (var key in value) {\n      if (foundMatch(query, value[key])) return true;\n    }\n\n    return false;\n  }\n\n  return value >= start && value <= end;\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/client-search.js?");

/***/ }),

/***/ "./lib/methods/column-class.js":
/*!*************************************!*\
  !*** ./lib/methods/column-class.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var c = this.opts.columnsClasses;\n  return c.hasOwnProperty(column) ? c[column] : '';\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/column-class.js?");

/***/ }),

/***/ "./lib/methods/currently-sorted.js":
/*!*****************************************!*\
  !*** ./lib/methods/currently-sorted.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var userMultiSort = Object.keys(this.userMultiSorting);\n  if (!userMultiSort.length || this.orderBy.column === column) return this.orderBy.column === column;\n  return !!this.userMultiSorting[userMultiSort[0]].filter(function (col) {\n    return col.column == column;\n  }).length;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/currently-sorted.js?");

/***/ }),

/***/ "./lib/methods/date-format.js":
/*!************************************!*\
  !*** ./lib/methods/date-format.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (this.opts.dateFormatPerColumn.hasOwnProperty(column)) {\n    return this.opts.dateFormatPerColumn[column];\n  }\n\n  return this.opts.dateFormat;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/date-format.js?");

/***/ }),

/***/ "./lib/methods/default-sort.js":
/*!*************************************!*\
  !*** ./lib/methods/default-sort.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, ascending) {\n  var multiIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;\n  var sort = this.defaultSort;\n  var multiSort = this.userMultiSorting[this.currentlySorting.column] ? this.userMultiSorting[this.currentlySorting.column] : this.opts.multiSorting[this.currentlySorting.column];\n  var asc = this.currentlySorting.ascending;\n  var self = this;\n  return function (a, b) {\n    var aVal = self._getValue(a, column) || '';\n    var bVal = self._getValue(b, column) || '';\n    var dir = ascending ? 1 : -1;\n    var secondaryAsc;\n    if (typeof aVal === 'string') aVal = aVal.toLowerCase();\n    if (typeof bVal === 'string') bVal = bVal.toLowerCase();\n\n    if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {\n      var sortData = multiSort[multiIndex + 1];\n\n      if (typeof sortData.ascending !== 'undefined') {\n        secondaryAsc = sortData.ascending;\n      } else {\n        secondaryAsc = sortData.matchDir ? asc : !asc;\n      }\n\n      return sort(sortData.column, secondaryAsc, multiIndex + 1)(a, b);\n    }\n\n    return aVal > bVal ? dir : -dir;\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/default-sort.js?");

/***/ }),

/***/ "./lib/methods/dispatch.js":
/*!*********************************!*\
  !*** ./lib/methods/dispatch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (event, payload) {\n  if (this.vuex) {\n    if (event.split('::').length > 1) return;\n    this.commit(event.toUpperCase().replace('-', '_'), payload);\n  }\n\n  this.$emit(event, payload);\n\n  _bus[\"default\"].$emit(\"vue-tables.\".concat(event), payload);\n\n  if (this.name) {\n    _bus[\"default\"].$emit(\"vue-tables.\".concat(this.name, \".\").concat(event), payload);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/dispatch.js?");

/***/ }),

/***/ "./lib/methods/display.js":
/*!********************************!*\
  !*** ./lib/methods/display.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (text, replacements) {\n  if (!this.opts.texts) return '';\n  var text = this.opts.texts[text];\n  if (replacements) for (var key in replacements) {\n    // console.log(key)\n    text = text.replace('{' + key + '}', replacements[key]);\n  }\n  return text;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/display.js?");

/***/ }),

/***/ "./lib/methods/filterable.js":
/*!***********************************!*\
  !*** ./lib/methods/filterable.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (!this.opts.filterable) return false;\n  return typeof this.opts.filterable == 'boolean' && this.opts.filterable || this.opts.filterable.indexOf(column) > -1;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/filterable.js?");

/***/ }),

/***/ "./lib/methods/get-child-row-template.js":
/*!***********************************************!*\
  !*** ./lib/methods/get-child-row-template.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h, row, index) {\n  // scoped slot\n  if (this.$scopedSlots.child_row) return this.$scopedSlots.child_row({\n    row: row,\n    index: index\n  });\n  var childRow = this.opts.childRow; // function\n\n  if (typeof childRow === 'function') return childRow.apply(this, [h, row]); // component\n\n  return h(childRow, {\n    attrs: {\n      data: row\n    }\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-child-row-template.js?");

/***/ }),

/***/ "./lib/methods/get-column-name.js":
/*!****************************************!*\
  !*** ./lib/methods/get-column-name.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return 'vf__' + column.split('.').join('@@@');\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-column-name.js?");

/***/ }),

/***/ "./lib/methods/get-data.js":
/*!*********************************!*\
  !*** ./lib/methods/get-data.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function (promiseOnly) {\n  var _data;\n\n  var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var emitLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var keys = this.opts.requestKeys;\n  var data = (_data = {}, _defineProperty(_data, keys.query, this.filteredQuery), _defineProperty(_data, keys.limit, this.limit), _defineProperty(_data, keys.ascending, this.orderBy.ascending ? 1 : 0), _defineProperty(_data, keys.page, this.page), _defineProperty(_data, keys.byColumn, this.opts.filterByColumn ? 1 : 0), _data);\n  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column) data[keys.orderBy] = this.orderBy.column;\n  data = merge(data, this.opts.params, this.customQueries, additionalData);\n\n  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {\n    data.multiSort = this.userMultiSorting[this.orderBy.column];\n  }\n\n  data = this.opts.requestAdapter(data);\n\n  if (emitLoading) {\n    this.dispatch('loading', data);\n  }\n\n  var promise = this.sendRequest(data);\n  if (promiseOnly) return promise;\n  return promise.then(function (response) {\n    if (typeof response !== 'undefined') {\n      this.loading = false;\n      return this.setData(response);\n    } else {\n      return false;\n    }\n  }.bind(this));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-data.js?");

/***/ }),

/***/ "./lib/methods/get-group-slot.js":
/*!***************************************!*\
  !*** ./lib/methods/get-group-slot.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n  if (this.$scopedSlots && this.$scopedSlots['__group_meta']) {\n    var data = this.opts.groupMeta.find(function (val) {\n      return val.value === value;\n    });\n    if (!data) return '';\n    return this.$scopedSlots['__group_meta'](data);\n  }\n\n  return '';\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-group-slot.js?");

/***/ }),

/***/ "./lib/methods/get-heading-tooltip.js":
/*!********************************************!*\
  !*** ./lib/methods/get-heading-tooltip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value, h) {\n  if (typeof value !== 'string') return '';\n  var derivedHeadingTooltip = '';\n  if (!this.opts.headingsTooltips.hasOwnProperty(value)) return derivedHeadingTooltip;\n\n  if (typeof this.opts.headingsTooltips[value] === 'function') {\n    if (h) return this.opts.headingsTooltips[value].call(this.$parent, h);\n    return derivedHeadingTooltip;\n  }\n\n  return this.opts.headingsTooltips[value];\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-heading-tooltip.js?");

/***/ }),

/***/ "./lib/methods/get-heading.js":
/*!************************************!*\
  !*** ./lib/methods/get-heading.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ucfirst = _interopRequireDefault(__webpack_require__(/*! ../helpers/ucfirst */ \"./lib/helpers/ucfirst.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (value, h) {\n  if (typeof value !== 'string') return '';\n\n  if (typeof this.$slots[\"h__\".concat(value)] !== 'undefined') {\n    return this.$slots[\"h__\".concat(value)];\n  }\n\n  var derivedHeading = (0, _ucfirst[\"default\"])(value.split(\"_\").join(\" \"));\n  if (!this.opts.headings.hasOwnProperty(value)) return derivedHeading;\n\n  if (typeof this.opts.headings[value] === 'function') {\n    if (h) return this.opts.headings[value].call(this.$parent, h);\n    return derivedHeading;\n  }\n\n  return this.opts.headings[value];\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-heading.js?");

/***/ }),

/***/ "./lib/methods/get-initial-date-range.js":
/*!***********************************************!*\
  !*** ./lib/methods/get-initial-date-range.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (typeof this.opts.initFilters[column] !== 'undefined') {\n    return this.opts.initFilters[column];\n  }\n\n  if (typeof this.query[column] !== 'undefined' && this.query[column].start) {\n    return {\n      start: moment(this.query[column].start, 'YYYY-MM-DD HH:mm:ss'),\n      end: moment(this.query[column].end, 'YYYY-MM-DD HH:mm:ss')\n    };\n  }\n\n  return false;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-initial-date-range.js?");

/***/ }),

/***/ "./lib/methods/get-name.js":
/*!*********************************!*\
  !*** ./lib/methods/get-name.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (name) {\n  if (!name) return name;\n  name = name.split('__');\n  name.shift();\n  return name.join('__').split('@@@').join('.');\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-name.js?");

/***/ }),

/***/ "./lib/methods/get-open-child-rows.js":
/*!********************************************!*\
  !*** ./lib/methods/get-open-child-rows.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  if (!this.opts.childRow || typeof this.opts.childRow === 'function') {\n    throw new Error('vue-tables-2: Child row undefined or not a component');\n  }\n\n  var Rows = rows ? this.openChildRows.filter(function (row) {\n    return rows.includes(row);\n  }) : this.openChildRows;\n  if (!Rows.length) return [];\n  var components = this.$children.filter(function (child) {\n    return child.$options.name === 'ChildRow' && Rows.includes(child.data[_this.opts.uniqueKey]);\n  });\n  return components;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-open-child-rows.js?");

/***/ }),

/***/ "./lib/methods/get-response-data.js":
/*!******************************************!*\
  !*** ./lib/methods/get-response-data.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (response) {\n  if (typeof axios !== 'undefined') return response.data;\n  return response;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-response-data.js?");

/***/ }),

/***/ "./lib/methods/get-sort-fn.js":
/*!************************************!*\
  !*** ./lib/methods/get-sort-fn.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var ascending = this.orderBy.ascending;\n  this.currentlySorting = {\n    column: column,\n    ascending: ascending\n  };\n  if (typeof this.opts.customSorting[column] == 'undefined') return this.defaultSort(column, ascending);\n  return this.opts.customSorting[column](ascending);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-sort-fn.js?");

/***/ }),

/***/ "./lib/methods/get-value.js":
/*!**********************************!*\
  !*** ./lib/methods/get-value.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (row, column) {\n  if (column.indexOf('.') === -1) return row[column];\n  var p = column.split('.');\n  var value = row[p[0]];\n  if (!value) return '';\n\n  for (var i = 1; i < p.length; i++) {\n    value = value[p[i]]; // If the nested structure doesn't exist return an empty string\n\n    if (typeof value === 'undefined') return '';\n  }\n\n  return value;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/get-value.js?");

/***/ }),

/***/ "./lib/methods/has-date-filters.js":
/*!*****************************************!*\
  !*** ./lib/methods/has-date-filters.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar intersection = __webpack_require__(/*! array-intersect */ \"./node_modules/array-intersect/dist/array-intersect.module.js\")[\"default\"];\n\nmodule.exports = function () {\n  var opts = this.opts;\n  return opts.dateColumns.length && opts.filterByColumn && (typeof opts.filterable == 'boolean' && opts.filterable || _typeof(opts.filterable) == 'object' && intersection(opts.filterable, opts.dateColumns).length);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/has-date-filters.js?");

/***/ }),

/***/ "./lib/methods/init-custom-filters.js":
/*!********************************************!*\
  !*** ./lib/methods/init-custom-filters.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var customQueries = {};\n  var init = this.opts.initFilters;\n  var key;\n  this.opts.customFilters.forEach(function (filter) {\n    key = this.source == 'client' ? filter.name : filter;\n    customQueries[key] = init.hasOwnProperty(key) ? init[key] : '';\n  }.bind(this));\n  return customQueries;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-custom-filters.js?");

/***/ }),

/***/ "./lib/methods/init-date-filters.js":
/*!******************************************!*\
  !*** ./lib/methods/init-date-filters.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function () {\n  if (typeof $ === 'undefined' || typeof $(this.$el).daterangepicker === 'undefined') {\n    console.error('Date filters require jquery and daterangepicker');\n    return;\n  }\n\n  var el;\n  var that = this;\n  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;\n  var columnOptions;\n  var dpOptions;\n\n  var search = function search(query, e) {\n    return that.source == 'client' ? that.search(that.data, e) : that.serverSearch(query, e);\n  };\n\n  var datepickerOptions = merge.recursive(this.opts.datepickerOptions, {\n    autoUpdateInput: false,\n    singleDatePicker: false\n  });\n  that.datepickerColumns.forEach(function (column) {\n    var range = that._getInitialDateRange(column);\n\n    if (range) {\n      that._setDatepickerText(column, range.start, range.end);\n\n      range = {\n        startDate: range.start,\n        endDate: range.end\n      };\n    } else {\n      range = {};\n    }\n\n    el = $(that.$el).find(\"#VueTables__\" + $.escapeSelector(column) + \"-filter\");\n    columnOptions = typeof that.opts.datepickerPerColumnOptions[column] !== 'undefined' ? that.opts.datepickerPerColumnOptions[column] : {};\n    columnOptions = merge.recursive(columnOptions, {\n      locale: {\n        format: that.dateFormat(column)\n      }\n    });\n    dpOptions = merge(true, datepickerOptions);\n\n    if (columnOptions.ranges === false) {\n      dpOptions.ranges = {};\n    }\n\n    el.daterangepicker(merge.recursive(dpOptions, columnOptions, range));\n    el.on('apply.daterangepicker', function (ev, picker) {\n      query[column] = {\n        start: picker.startDate.format('YYYY-MM-DD HH:mm:ss'),\n        end: picker.endDate.format('YYYY-MM-DD HH:mm:ss')\n      };\n      if (!that.vuex) that.query = query;\n\n      that._setDatepickerText(column, picker.startDate, picker.endDate);\n\n      that.updateState('query', query);\n      search(query, {\n        target: {\n          name: that._getColumnName(column),\n          value: query[column]\n        }\n      });\n    });\n    el.on('cancel.daterangepicker', function (ev, picker) {\n      query[column] = '';\n      if (!that.vuex) that.query = query;\n      picker.setStartDate(moment());\n      picker.setEndDate(moment());\n      that.updateState('query', query);\n      $(this).html(\"<span class='VueTables__filter-placeholder'>\" + that.display('filterBy', {\n        column: that.getHeading(column)\n      }) + \"</span>\");\n      search(query, {\n        target: {\n          name: that._getColumnName(column),\n          value: query[column]\n        }\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-date-filters.js?");

/***/ }),

/***/ "./lib/methods/init-options.js":
/*!*************************************!*\
  !*** ./lib/methods/init-options.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function (defaults, globalOptions, localOptions) {\n  if (globalOptions) defaults = merge.recursive(defaults, globalOptions);\n  localOptions = merge.recursive(defaults, localOptions);\n  return localOptions;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-options.js?");

/***/ }),

/***/ "./lib/methods/init-order-by.js":
/*!**************************************!*\
  !*** ./lib/methods/init-order-by.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (!this.opts.orderBy) return;\n  this.orderBy.column = this.opts.orderBy.column;\n  this.orderBy.ascending = this.opts.orderBy.hasOwnProperty('ascending') ? this.opts.orderBy.ascending : true;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-order-by.js?");

/***/ }),

/***/ "./lib/methods/init-pagination.js":
/*!****************************************!*\
  !*** ./lib/methods/init-pagination.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.page = 1;\n\n  if (!this.opts.pagination.dropdown) {\n    this.$refs.pagination.setPage(1);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-pagination.js?");

/***/ }),

/***/ "./lib/methods/init-query.js":
/*!***********************************!*\
  !*** ./lib/methods/init-query.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function () {\n  var init = this.opts.initFilters;\n  if (!this.opts.filterByColumn) return init.hasOwnProperty('GENERIC') ? init.GENERIC : '';\n  var query = {};\n  var filterable = this.opts.filterable && _typeof(this.opts.filterable) == 'object' ? this.opts.filterable : this.columns;\n  filterable.forEach(function (column) {\n    query[column] = getInitialValue(init, column);\n  }.bind(this));\n  return query;\n};\n\nfunction getInitialValue(init, column) {\n  if (!init.hasOwnProperty(column)) return '';\n  if (typeof init[column].start == 'undefined') return init[column];\n  return {\n    start: init[column].start.format('YYYY-MM-DD HH:mm:ss'),\n    end: init[column].end.format('YYYY-MM-DD HH:mm:ss')\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-query.js?");

/***/ }),

/***/ "./lib/methods/init-state.js":
/*!***********************************!*\
  !*** ./lib/methods/init-state.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var state = {\n    page: 1,\n    query: this.query,\n    orderBy: this.orderBy,\n    perPage: this.opts.perPage,\n    customQueries: this.customQueries\n  };\n  this.storage.setItem(this.stateKey, JSON.stringify(state));\n  return state;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/init-state.js?");

/***/ }),

/***/ "./lib/methods/initial-order-ascending.js":
/*!************************************************!*\
  !*** ./lib/methods/initial-order-ascending.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return !this.opts.descOrderColumns.includes(column);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/initial-order-ascending.js?");

/***/ }),

/***/ "./lib/methods/is-date-filter.js":
/*!***************************************!*\
  !*** ./lib/methods/is-date-filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) > -1;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/is-date-filter.js?");

/***/ }),

/***/ "./lib/methods/is-list-filter.js":
/*!***************************************!*\
  !*** ./lib/methods/is-list-filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.query.hasOwnProperty(column) && this.opts.listColumns.hasOwnProperty(column);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/is-list-filter.js?");

/***/ }),

/***/ "./lib/methods/is-text-filter.js":
/*!***************************************!*\
  !*** ./lib/methods/is-text-filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.query.hasOwnProperty(column) && this.opts.dateColumns.indexOf(column) == -1 && !this.opts.listColumns.hasOwnProperty(column);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/is-text-filter.js?");

/***/ }),

/***/ "./lib/methods/on-pagination.js":
/*!**************************************!*\
  !*** ./lib/methods/on-pagination.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (page) {\n  if (this.vuex) return;\n  this.setPage(page);\n  this.dispatch('pagination', page);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/on-pagination.js?");

/***/ }),

/***/ "./lib/methods/only-column.js":
/*!************************************!*\
  !*** ./lib/methods/only-column.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  return this.userColumnsDisplay.length === 1 && this.userColumnsDisplay[0] === column;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/only-column.js?");

/***/ }),

/***/ "./lib/methods/order-by-column.js":
/*!****************************************!*\
  !*** ./lib/methods/order-by-column.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (colName, ev) {\n  if (!this.sortable(colName)) return;\n\n  if (ev && ev.shiftKey && this.orderBy.column && this.hasMultiSort) {\n    this.setUserMultiSort(colName);\n  } else {\n    this.userMultiSorting = {};\n    this.orderBy.ascending = colName == this.orderBy.column ? !this.orderBy.ascending : this._initialOrderAscending(colName);\n    this.orderBy.column = colName;\n    this.updateState('orderBy', this.orderBy);\n    this.dispatch('sorted', JSON.parse(JSON.stringify(this.orderBy)));\n  }\n\n  if (this.source == 'server') {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/order-by-column.js?");

/***/ }),

/***/ "./lib/methods/refresh.js":
/*!********************************!*\
  !*** ./lib/methods/refresh.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.serverSearch();\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/refresh.js?");

/***/ }),

/***/ "./lib/methods/register-client-filters.js":
/*!************************************************!*\
  !*** ./lib/methods/register-client-filters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function () {\n  var _this = this;\n\n  var event = 'vue-tables';\n  if (this.name) event += '.' + this.name;\n  this.opts.customFilters.forEach(function (filter) {\n    _bus[\"default\"].$off(\"\".concat(event, \".filter::\").concat(filter.name));\n\n    _bus[\"default\"].$on(\"\".concat(event, \".filter::\").concat(filter.name), function (value) {\n      _this.customQueries[filter.name] = value;\n\n      _this.updateState('customQueries', _this.customQueries);\n    });\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/register-client-filters.js?");

/***/ }),

/***/ "./lib/methods/register-server-filters.js":
/*!************************************************!*\
  !*** ./lib/methods/register-server-filters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function () {\n  var event = 'vue-tables';\n  if (this.name) event += '.' + this.name;\n  this.opts.customFilters.forEach(function (filter) {\n    _bus[\"default\"].$off(\"\".concat(event, \".filter::\").concat(filter));\n\n    _bus[\"default\"].$on(\"\".concat(event, \".filter::\").concat(filter), function (value) {\n      this.customQueries[filter] = value;\n      this.updateState('customQueries', this.customQueries);\n      this.refresh();\n    }.bind(this));\n  }.bind(this));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/register-server-filters.js?");

/***/ }),

/***/ "./lib/methods/render.js":
/*!*******************************!*\
  !*** ./lib/methods/render.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (row, column, index, h) {\n  var value = this._getValue(row, column);\n\n  if (this.templatesKeys.indexOf(column) == -1) {\n    if (typeof value === 'undefined' || !this.opts.highlightMatches || this.filterableColumns.indexOf(column) === -1) {\n      return value;\n    }\n\n    return this.highlightMatch(value, column, h);\n  }\n\n  var template = this.opts.templates[column];\n  template = typeof template == 'function' ? template.apply(this.$root, [h, row, index, column]) : h(template, {\n    attrs: {\n      data: row,\n      column: column,\n      index: index\n    }\n  });\n  return template;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/render.js?");

/***/ }),

/***/ "./lib/methods/reset-query.js":
/*!************************************!*\
  !*** ./lib/methods/reset-query.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (this.opts.filterByColumn) {\n    var query = {};\n\n    for (var key in this.query) {\n      query[key] = '';\n    }\n  } else {\n    var query = '';\n  }\n\n  this.setFilter(query);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/reset-query.js?");

/***/ }),

/***/ "./lib/methods/row-was-clicked.js":
/*!****************************************!*\
  !*** ./lib/methods/row-was-clicked.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (row, index, event) {\n  var data;\n  var id = this.opts.uniqueKey;\n\n  if (this.source == 'client' && typeof row[id] !== 'undefined') {\n    data = this.tableData.filter(function (r) {\n      return row[id] === r[id];\n    })[0];\n  } else {\n    data = row;\n  }\n\n  this.dispatch('row-click', {\n    row: data,\n    index: index,\n    event: event\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/row-was-clicked.js?");

/***/ }),

/***/ "./lib/methods/send-request.js":
/*!*************************************!*\
  !*** ./lib/methods/send-request.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (data) {\n  if (typeof this.opts.requestFunction === 'function') {\n    return this.opts.requestFunction.call(this, data);\n  }\n\n  if (typeof axios !== 'undefined') return axios.get(this.url, {\n    params: data\n  })[\"catch\"](function (e) {\n    this.dispatch('error', e);\n  }.bind(this));\n  if (typeof this.$http !== 'undefined') return this.$http.get(this.url, {\n    params: data\n  }).then(function (data) {\n    return data.json();\n  }.bind(this), function (e) {\n    this.dispatch('error', e);\n  }.bind(this));\n  if (typeof $ != 'undefined') return $.getJSON(this.url, data).fail(function (e) {\n    this.dispatch('error', e);\n  }.bind(this));\n  throw \"vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource). To use a different library you can write your own request function (see the `requestFunction` option)\";\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/send-request.js?");

/***/ }),

/***/ "./lib/methods/server-search.js":
/*!**************************************!*\
  !*** ./lib/methods/server-search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (e, dateEvent) {\n  // we need to handle the store this.query to make sure we're not mutating outside of it\n  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query; // in case we pass an object manually (mostly used for init-date-filters should refactor\n\n  if (Object.prototype.toString.call(e).slice(8, -1) == 'Object') {\n    query = this.vuex ? JSON.parse(JSON.stringify(e)) : e;\n    if (!this.vuex) this.query = query;\n    var name = dateEvent.target.name;\n    var value = dateEvent.target.value;\n\n    if (name) {\n      this.dispatch('filter', {\n        name: name,\n        value: value\n      });\n      this.dispatch(\"filter::\".concat(name), value);\n    } else {\n      this.dispatch('filter', value);\n    }\n\n    this.updateState('query', query);\n  } else if (e) {\n    var _name = this.getName(e.target.name);\n\n    var _value = e.target.value;\n\n    if (_name) {\n      query[_name] = _value;\n    } else {\n      query = _value;\n    }\n\n    if (!this.vuex) this.query = query;\n\n    if (_name) {\n      this.dispatch('filter', {\n        name: _name,\n        value: _value\n      });\n      this.dispatch(\"filter::\".concat(_name), _value);\n    } else {\n      this.dispatch('filter', _value);\n    }\n\n    this.updateState('query', query);\n  }\n\n  return search(this, query);\n};\n\nfunction search(that, query) {\n  if (that.vuex) {\n    that.commit('SET_FILTER', query);\n  } else {\n    that.initPagination();\n\n    if (that.opts.pagination.dropdown) {\n      that.getData();\n    }\n  }\n}\n\nfunction noDebounce(e, name, opts) {\n  return !e || name && (opts.dateColumns.indexOf(name) > -1 || Object.keys(opts.listColumns).indexOf(name) > -1);\n}\n\n//# sourceURL=webpack://VueTables/./lib/methods/server-search.js?");

/***/ }),

/***/ "./lib/methods/set-columns-dropdown-close-listener.js":
/*!************************************************************!*\
  !*** ./lib/methods/set-columns-dropdown-close-listener.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  var _this = this;\n\n  if (this.opts.columnsDropdown) {\n    var stopProp = function stopProp(e) {\n      return e.stopPropagation();\n    };\n\n    var handler = function handler() {\n      if (_this.displayColumnsDropdown) {\n        _this.displayColumnsDropdown = false;\n      }\n    };\n\n    this.$refs.columnsdropdown.addEventListener('click', stopProp);\n    document.addEventListener('click', handler);\n    this.$once('hook:beforeDestroy', function () {\n      document.removeEventListener('click', handler);\n\n      _this.$refs.columnsdropdown.removeEventListener('click', stopProp);\n    });\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-columns-dropdown-close-listener.js?");

/***/ }),

/***/ "./lib/methods/set-data.js":
/*!*********************************!*\
  !*** ./lib/methods/set-data.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (response) {\n  var data = this.opts.responseAdapter.call(this, response);\n  this.data = this.applyFilters(data.data);\n\n  if (isNaN(data.count)) {\n    console.error(\"vue-tables-2: invalid 'count' property. Expected number, got \".concat(_typeof(data.count)));\n    console.error('count equals', data.count);\n    throw new Error();\n  }\n\n  this.count = parseInt(data.count);\n  setTimeout(function () {\n    this.dispatch('loaded', response);\n  }.bind(this), 0);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-data.js?");

/***/ }),

/***/ "./lib/methods/set-datepicker-text.js":
/*!********************************************!*\
  !*** ./lib/methods/set-datepicker-text.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, start, end) {\n  var dateFormat = this.dateFormat(column);\n  var el = typeof column === 'string' ? $(this.$el).find(\"#VueTables__\" + $.escapeSelector(column) + \"-filter\") : column;\n  el.text(start.format(dateFormat) + \" - \" + end.format(dateFormat));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-datepicker-text.js?");

/***/ }),

/***/ "./lib/methods/set-filter.js":
/*!***********************************!*\
  !*** ./lib/methods/set-filter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\n\nmodule.exports = function (filter) {\n  if (!this.opts.filterable) {\n    console.warn(\"vue-tables-2: Unable to set filter. Filtering is disabled (filterable: false)\");\n    return;\n  }\n\n  ;\n\n  if (this.opts.filterByColumn && typeof filter === 'string') {\n    console.warn(\"vue-tables-2: Unable to set filter. Filter value must be an object (`filterByColumn` is set to `true`)\");\n    return;\n  }\n\n  ;\n\n  if (!this.opts.filterByColumn && typeof filter !== 'string') {\n    console.warn(\"vue-tables-2: Unable to set filter. Filter value must be a string (`filterByColumn` is set to `false`)\");\n    return;\n  }\n\n  ;\n  var mergedFilter = this.opts.filterByColumn ? merge(this.query, filter) : filter;\n\n  if (this.vuex) {\n    this.commit('SET_FILTER', mergedFilter);\n  } else {\n    this.query = mergedFilter;\n    this.setPage(1, true);\n  }\n\n  this.updateState('query', mergedFilter);\n\n  this._setFiltersDOM(filter);\n\n  if (this.source == 'server') {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-filter.js?");

/***/ }),

/***/ "./lib/methods/set-filters-dom.js":
/*!****************************************!*\
  !*** ./lib/methods/set-filters-dom.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (query) {\n  var el;\n\n  if (this.opts.filterByColumn) {\n    for (var column in query) {\n      var columnName = this._getColumnName(column);\n\n      if (this.isDateFilter(column)) {\n        if (query[column] && _typeof(query[column]) === 'object') {\n          var start = typeof query[column].start === 'string' ? moment(query[column].start, 'YYYY-MM-DD') : query[column].start;\n          var end = typeof query[column].end === 'string' ? moment(query[column].end, 'YYYY-MM-DD') : query[column].end;\n\n          this._setDatepickerText(column, start, end);\n        } else {\n          $(this.$el).find(\"#VueTables__\" + $.escapeSelector(column) + \"-filter\").html(\"<span class='VueTables__filter-placeholder'>\" + this.display('filterBy', {\n            column: this.getHeading(column)\n          }) + \"</span>\");\n        }\n\n        continue;\n      }\n\n      el = this.$el.querySelector(\"[name='\".concat(columnName, \"']\"));\n\n      if (el) {\n        el.value = query[column];\n      } else if (this.columns.indexOf(column) === -1) {\n        console.error(\"vue-tables-2: Error in setting filter value. Column '\".concat(column, \"' does not exist.\"));\n      }\n    }\n  } else {\n    var el = this.$el.querySelector('.VueTables__search__input');\n    if (el) el.value = query;\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-filters-dom.js?");

/***/ }),

/***/ "./lib/methods/set-limit.js":
/*!**********************************!*\
  !*** ./lib/methods/set-limit.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (e) {\n  this.limit = _typeof(e) === 'object' ? e.target.value : e;\n  this.updateState('perPage', this.limit);\n  this.dispatch('limit', parseInt(this.limit));\n  this.setPage(1);\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-limit.js?");

/***/ }),

/***/ "./lib/methods/set-order.js":
/*!**********************************!*\
  !*** ./lib/methods/set-order.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column, ascending) {\n  this.orderBy.column = column;\n  this.orderBy.ascending = ascending;\n  this.updateState('orderBy', {\n    column: column,\n    ascending: ascending\n  });\n\n  if (this.source == 'server') {\n    this.getData();\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-order.js?");

/***/ }),

/***/ "./lib/methods/set-page.js":
/*!*********************************!*\
  !*** ./lib/methods/set-page.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (page, preventRequest) {\n  page = page ? page : this.$refs.page.value;\n  if (!this.opts.pagination.dropdown) this.$refs.pagination.Page = page;\n  this.page = page;\n  this.updateState('page', page);\n  if (this.source == 'server' && !preventRequest) this.getData();\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-page.js?");

/***/ }),

/***/ "./lib/methods/set-user-multi-sort.js":
/*!********************************************!*\
  !*** ./lib/methods/set-user-multi-sort.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (secondaryCol) {\n  var primaryCol = this.orderBy.column;\n  var primaryAsc = this.orderBy.ascending;\n  if (!this.userMultiSorting[primaryCol]) this.userMultiSorting[primaryCol] = [];\n  var multi = this.userMultiSorting[primaryCol];\n\n  if (primaryCol === secondaryCol) {\n    if (!multi.length || primaryAsc) {\n      // primary is the only sorted column or is ascending\n      this.orderBy.ascending = !this.orderBy.ascending;\n    } else {\n      // remove primary column and make secondary primary\n      this.orderBy = multi.shift();\n      this.userMultiSorting = {};\n      this.userMultiSorting[this.orderBy.column] = multi;\n    }\n  } else {\n    var secondary = multi.filter(function (col) {\n      return col.column == secondaryCol;\n    })[0];\n\n    if (secondary) {\n      if (!secondary.ascending) {\n        // remove sort\n        this.userMultiSorting[primaryCol] = multi.filter(function (col) {\n          return col.column != secondaryCol;\n        });\n        if (!this.userMultiSorting[primaryCol].length) this.userMultiSorting = {};\n      } else {\n        // change direction\n        secondary.ascending = !secondary.ascending;\n      }\n    } else {\n      // add sort\n      multi.push({\n        column: secondaryCol,\n        ascending: true\n      });\n    }\n  } // force re-compilation of the filteredData computed property\n\n\n  this.time = Date.now();\n  this.dispatch('sorted', getMultiSortData(this.orderBy, this.userMultiSorting));\n};\n\nfunction getMultiSortData(main, secondary) {\n  var cols = [JSON.parse(JSON.stringify(main))];\n  cols = cols.concat(secondary[main.column]);\n  return cols;\n}\n\n;\n\n//# sourceURL=webpack://VueTables/./lib/methods/set-user-multi-sort.js?");

/***/ }),

/***/ "./lib/methods/should-show-column-on-init.js":
/*!***************************************************!*\
  !*** ./lib/methods/should-show-column-on-init.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  if (this.opts.visibleColumns) {\n    return this.opts.visibleColumns.includes(column);\n  }\n\n  if (this.opts.hiddenColumns) {\n    return !this.opts.hiddenColumns.includes(column);\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/should-show-column-on-init.js?");

/***/ }),

/***/ "./lib/methods/sortable-chevron-class.js":
/*!***********************************************!*\
  !*** ./lib/methods/sortable-chevron-class.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var cls = this.opts.sortIcon.base + ' ';\n  if (!this.sortable(column)) return;\n\n  if (this.opts.sortIcon.is && !this._currentlySorted(column)) {\n    cls += this.opts.sortIcon.is + ' ';\n  }\n\n  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {\n    var col = this.userMultiSorting[this.orderBy.column].filter(function (c) {\n      return c.column === column;\n    })[0];\n    if (col) cls += col.ascending ? this.opts.sortIcon.up : this.opts.sortIcon.down;\n  }\n\n  if (column == this.orderBy.column) {\n    cls += this.orderBy.ascending == 1 ? this.opts.sortIcon.up : this.opts.sortIcon.down;\n  }\n\n  return cls;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/sortable-chevron-class.js?");

/***/ }),

/***/ "./lib/methods/sortable-class.js":
/*!***************************************!*\
  !*** ./lib/methods/sortable-class.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var c = this.sortable(column) ? 'VueTables__sortable ' : '';\n  c += this.columnClass(column);\n  return c;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/sortable-class.js?");

/***/ }),

/***/ "./lib/methods/sortable.js":
/*!*********************************!*\
  !*** ./lib/methods/sortable.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var sortAll = typeof this.opts.sortable == 'boolean' && this.opts.sortable;\n  if (sortAll) return true;\n  return this.opts.sortable.indexOf(column) > -1;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/sortable.js?");

/***/ }),

/***/ "./lib/methods/toggle-child-row.js":
/*!*****************************************!*\
  !*** ./lib/methods/toggle-child-row.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (rowId, e) {\n  if (e) e.stopPropagation();\n\n  if (this.openChildRows.includes(rowId)) {\n    var index = this.openChildRows.indexOf(rowId);\n    this.openChildRows.splice(index, 1);\n  } else {\n    this.openChildRows.push(rowId);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-child-row.js?");

/***/ }),

/***/ "./lib/methods/toggle-column.js":
/*!**************************************!*\
  !*** ./lib/methods/toggle-column.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (column) {\n  var _this = this;\n\n  if (!this.userControlsColumns) {\n    this.userColumnsDisplay = JSON.parse(JSON.stringify(this.allColumns));\n    this.userControlsColumns = true;\n  }\n\n  if (this.userColumnsDisplay.includes(column)) {\n    // can't have no columns\n    if (this.userColumnsDisplay.length === 1) return;\n    var index = this.userColumnsDisplay.indexOf(column);\n    this.userColumnsDisplay.splice(index, 1);\n  } else {\n    this.userColumnsDisplay.push(column);\n  }\n\n  this.updateState('userControlsColumns', true);\n  this.updateState('userColumnsDisplay', this.userColumnsDisplay);\n  this.$nextTick(function () {\n    _this._setFiltersDOM(_this.query);\n  });\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-column.js?");

/***/ }),

/***/ "./lib/methods/toggle-columns-dropdown.js":
/*!************************************************!*\
  !*** ./lib/methods/toggle-columns-dropdown.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.displayColumnsDropdown = !this.displayColumnsDropdown;\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-columns-dropdown.js?");

/***/ }),

/***/ "./lib/methods/toggle-group-direction.js":
/*!***********************************************!*\
  !*** ./lib/methods/toggle-group-direction.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  if (this.orderBy.column != this.opts.groupBy) {\n    this.setOrder(this.opts.groupBy, true);\n  } else {\n    this.setOrder(this.opts.groupBy, !this.orderBy.ascending);\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/toggle-group-direction.js?");

/***/ }),

/***/ "./lib/methods/transform-date-strings-to-moment.js":
/*!*********************************************************!*\
  !*** ./lib/methods/transform-date-strings-to-moment.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  this.data.forEach(function (row, index) {\n    this.opts.dateColumns.forEach(function (column) {\n      row[column] = row[column] ? moment(row[column], this.opts.toMomentFormat) : '';\n    }.bind(this));\n  }.bind(this));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/transform-date-strings-to-moment.js?");

/***/ }),

/***/ "./lib/methods/update-state.js":
/*!*************************************!*\
  !*** ./lib/methods/update-state.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (key, value) {\n  if (!this.opts.saveState || !this.activeState) return;\n\n  try {\n    var currentState = JSON.parse(this.storage.getItem(this.stateKey));\n  } catch (e) {\n    var currentState = this.initState();\n  }\n\n  currentState[key] = value;\n  this.storage.setItem(this.stateKey, JSON.stringify(currentState));\n};\n\n//# sourceURL=webpack://VueTables/./lib/methods/update-state.js?");

/***/ }),

/***/ "./lib/mixins/before-destroy.js":
/*!**************************************!*\
  !*** ./lib/mixins/before-destroy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bus = _interopRequireDefault(__webpack_require__(/*! ../bus */ \"./lib/bus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function () {\n  var _this = this;\n\n  var el;\n\n  if (this.opts.destroyEventBus) {\n    _bus[\"default\"].$off();\n\n    _bus[\"default\"].$destroy();\n  }\n\n  if (this.vuex && !this.opts.preserveState) {\n    this.$store.unregisterModule(this.name);\n  }\n\n  if (this.opts.filterByColumn) {\n    this.datepickerColumns.forEach(function (column) {\n      el = $(_this.$el).find(\"#VueTables__\" + $.escapeSelector(column) + \"-filter\").data('daterangepicker');\n      if (el) el.remove();\n    });\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/mixins/before-destroy.js?");

/***/ }),

/***/ "./lib/mixins/computed.js":
/*!********************************!*\
  !*** ./lib/mixins/computed.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  listColumnsObject: __webpack_require__(/*! ../computed/list-columns-object */ \"./lib/computed/list-columns-object.js\"),\n  allColumns: __webpack_require__(/*! ../computed/all-columns */ \"./lib/computed/all-columns.js\"),\n  templatesKeys: __webpack_require__(/*! ../computed/templates-keys */ \"./lib/computed/templates-keys.js\"),\n  opts: __webpack_require__(/*! ../computed/opts */ \"./lib/computed/opts.js\"),\n  tableData: __webpack_require__(/*! ../computed/table-data */ \"./lib/computed/table-data.js\"),\n  storage: __webpack_require__(/*! ../computed/storage */ \"./lib/computed/storage.js\"),\n  filterableColumns: __webpack_require__(/*! ../computed/filterable-columns */ \"./lib/computed/filterable-columns.js\"),\n  datepickerColumns: __webpack_require__(/*! ../computed/datepicker-columns */ \"./lib/computed/datepicker-columns.js\"),\n  hasChildRow: __webpack_require__(/*! ../computed/has-child-row */ \"./lib/computed/has-child-row.js\"),\n  colspan: __webpack_require__(/*! ../computed/colspan */ \"./lib/computed/colspan.js\"),\n  hasGenericFilter: __webpack_require__(/*! ../computed/has-generic-filter */ \"./lib/computed/has-generic-filter.js\"),\n  stateKey: function stateKey() {\n    var key = this.name ? this.name : this.id;\n    return 'vuetables_' + key;\n  },\n  Page: function Page() {\n    return this.page;\n  }\n};\n\n//# sourceURL=webpack://VueTables/./lib/mixins/computed.js?");

/***/ }),

/***/ "./lib/mixins/created.js":
/*!*******************************!*\
  !*** ./lib/mixins/created.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar is_empty = __webpack_require__(/*! ../helpers/is-empty */ \"./lib/helpers/is-empty.js\");\n\nvar registerVuexModule = __webpack_require__(/*! ../state/register-module */ \"./lib/state/register-module.js\");\n\nmodule.exports = function (self) {\n  if (self.vuex) {\n    registerVuexModule(self);\n  } else {\n    self.limit = self.opts.perPage;\n  }\n\n  if (is_empty(self.opts.columnsDisplay) || typeof window === 'undefined') return;\n  self.columnsDisplay = getColumnsDisplay(self.opts.columnsDisplay);\n  window.addEventListener('resize', function () {\n    self.windowWidth = window.innerWidth;\n  }.bind(self));\n};\n\nfunction getColumnsDisplay(columnsDisplay) {\n  var res = {};\n  var range;\n  var device;\n  var operator;\n\n  for (var column in columnsDisplay) {\n    operator = getOperator(columnsDisplay[column]);\n\n    try {\n      device = getDevice(columnsDisplay[column]);\n      range = getRange(device, operator);\n      res[column] = range.concat([operator]);\n    } catch (err) {\n      console.warn('Unknown device ' + device);\n    }\n  }\n\n  return res;\n}\n\nfunction getRange(device, operator) {\n  var devices = {\n    desktop: [1024, null],\n    tablet: [480, 1024],\n    mobile: [0, 480],\n    tabletL: [768, 1024],\n    tabletP: [480, 768],\n    mobileL: [320, 480],\n    mobileP: [0, 320]\n  };\n\n  switch (operator) {\n    case 'min':\n      return [devices[device][0], null];\n\n    case 'max':\n      return [0, devices[device][1]];\n\n    default:\n      return devices[device];\n  }\n}\n\nfunction getOperator(val) {\n  var pieces = val.split('_');\n  if (['not', 'min', 'max'].indexOf(pieces[0]) > -1) return pieces[0];\n  return false;\n}\n\nfunction getDevice(val) {\n  var pieces = val.split('_');\n  return pieces.length > 1 ? pieces[1] : pieces[0];\n}\n\n//# sourceURL=webpack://VueTables/./lib/mixins/created.js?");

/***/ }),

/***/ "./lib/mixins/data.js":
/*!****************************!*\
  !*** ./lib/mixins/data.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    id: makeId(),\n    allFilteredData: [],\n    openChildRows: [],\n    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,\n    userMultiSorting: {},\n    editing: []\n  };\n};\n\nfunction makeId() {\n  var text = \"\";\n  var possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n\n  for (var i = 0; i < 5; i++) {\n    text += possible.charAt(Math.floor(Math.random() * possible.length));\n  }\n\n  return text;\n}\n\n//# sourceURL=webpack://VueTables/./lib/mixins/data.js?");

/***/ }),

/***/ "./lib/mixins/methods.js":
/*!*******************************!*\
  !*** ./lib/mixins/methods.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  initQuery: __webpack_require__(/*! ../methods/init-query */ \"./lib/methods/init-query.js\"),\n  resetQuery: __webpack_require__(/*! ../methods/reset-query */ \"./lib/methods/reset-query.js\"),\n  initCustomFilters: __webpack_require__(/*! ../methods/init-custom-filters */ \"./lib/methods/init-custom-filters.js\"),\n  initOptions: __webpack_require__(/*! ../methods/init-options */ \"./lib/methods/init-options.js\"),\n  sortableClass: __webpack_require__(/*! ../methods/sortable-class */ \"./lib/methods/sortable-class.js\"),\n  sortableChevronClass: __webpack_require__(/*! ../methods/sortable-chevron-class */ \"./lib/methods/sortable-chevron-class.js\"),\n  display: __webpack_require__(/*! ../methods/display */ \"./lib/methods/display.js\"),\n  orderByColumn: __webpack_require__(/*! ../methods/order-by-column */ \"./lib/methods/order-by-column.js\"),\n  getHeading: __webpack_require__(/*! ../methods/get-heading */ \"./lib/methods/get-heading.js\"),\n  getHeadingTooltip: __webpack_require__(/*! ../methods/get-heading-tooltip */ \"./lib/methods/get-heading-tooltip.js\"),\n  sortable: __webpack_require__(/*! ../methods/sortable */ \"./lib/methods/sortable.js\"),\n  serverSearch: __webpack_require__(/*! ../methods/server-search */ \"./lib/methods/server-search.js\"),\n  initOrderBy: __webpack_require__(/*! ../methods/init-order-by */ \"./lib/methods/init-order-by.js\"),\n  initDateFilters: __webpack_require__(/*! ../methods/init-date-filters */ \"./lib/methods/init-date-filters.js\"),\n  setFilter: __webpack_require__(/*! ../methods/set-filter */ \"./lib/methods/set-filter.js\"),\n  setPage: __webpack_require__(/*! ../methods/set-page */ \"./lib/methods/set-page.js\"),\n  setOrder: __webpack_require__(/*! ../methods/set-order */ \"./lib/methods/set-order.js\"),\n  initPagination: __webpack_require__(/*! ../methods/init-pagination */ \"./lib/methods/init-pagination.js\"),\n  filterable: __webpack_require__(/*! ../methods/filterable */ \"./lib/methods/filterable.js\"),\n  isTextFilter: __webpack_require__(/*! ../methods/is-text-filter */ \"./lib/methods/is-text-filter.js\"),\n  isDateFilter: __webpack_require__(/*! ../methods/is-date-filter */ \"./lib/methods/is-date-filter.js\"),\n  isListFilter: __webpack_require__(/*! ../methods/is-list-filter */ \"./lib/methods/is-list-filter.js\"),\n  highlightMatch: __webpack_require__(/*! ../filters/highlight-matches */ \"./lib/filters/highlight-matches.js\"),\n  formatDate: __webpack_require__(/*! ../filters/format-date */ \"./lib/filters/format-date.js\"),\n  hasDateFilters: __webpack_require__(/*! ../methods/has-date-filters */ \"./lib/methods/has-date-filters.js\"),\n  applyFilters: __webpack_require__(/*! ../methods/apply-filters */ \"./lib/methods/apply-filters.js\"),\n  optionText: __webpack_require__(/*! ../filters/option-text */ \"./lib/filters/option-text.js\"),\n  render: __webpack_require__(/*! ../methods/render */ \"./lib/methods/render.js\"),\n  rowWasClicked: __webpack_require__(/*! ../methods/row-was-clicked */ \"./lib/methods/row-was-clicked.js\"),\n  setLimit: __webpack_require__(/*! ../methods/set-limit */ \"./lib/methods/set-limit.js\"),\n  getOpenChildRows: __webpack_require__(/*! ../methods/get-open-child-rows */ \"./lib/methods/get-open-child-rows.js\"),\n  dispatch: __webpack_require__(/*! ../methods/dispatch */ \"./lib/methods/dispatch.js\"),\n  toggleChildRow: __webpack_require__(/*! ../methods/toggle-child-row */ \"./lib/methods/toggle-child-row.js\"),\n  childRowTogglerClass: __webpack_require__(/*! ../methods/child-row-toggler-class */ \"./lib/methods/child-row-toggler-class.js\"),\n  sendRequest: __webpack_require__(/*! ../methods/send-request */ \"./lib/methods/send-request.js\"),\n  getResponseData: __webpack_require__(/*! ../methods/get-response-data */ \"./lib/methods/get-response-data.js\"),\n  getSortFn: __webpack_require__(/*! ../methods/get-sort-fn */ \"./lib/methods/get-sort-fn.js\"),\n  initState: __webpack_require__(/*! ../methods/init-state */ \"./lib/methods/init-state.js\"),\n  updateState: __webpack_require__(/*! ../methods/update-state */ \"./lib/methods/update-state.js\"),\n  columnClass: __webpack_require__(/*! ../methods/column-class */ \"./lib/methods/column-class.js\"),\n  getName: __webpack_require__(/*! ../methods/get-name */ \"./lib/methods/get-name.js\"),\n  toggleColumn: __webpack_require__(/*! ../methods/toggle-column */ \"./lib/methods/toggle-column.js\"),\n  setUserMultiSort: __webpack_require__(/*! ../methods/set-user-multi-sort */ \"./lib/methods/set-user-multi-sort.js\"),\n  _cellClasses: __webpack_require__(/*! ../methods/cell-classes */ \"./lib/methods/cell-classes.js\"),\n  _setFiltersDOM: __webpack_require__(/*! ../methods/set-filters-dom */ \"./lib/methods/set-filters-dom.js\"),\n  _currentlySorted: __webpack_require__(/*! ../methods/currently-sorted */ \"./lib/methods/currently-sorted.js\"),\n  _getChildRowTemplate: __webpack_require__(/*! ../methods/get-child-row-template */ \"./lib/methods/get-child-row-template.js\"),\n  _toggleColumnsDropdown: __webpack_require__(/*! ../methods/toggle-columns-dropdown */ \"./lib/methods/toggle-columns-dropdown.js\"),\n  _onlyColumn: __webpack_require__(/*! ../methods/only-column */ \"./lib/methods/only-column.js\"),\n  _onPagination: __webpack_require__(/*! ../methods/on-pagination */ \"./lib/methods/on-pagination.js\"),\n  _toggleGroupDirection: __webpack_require__(/*! ../methods/toggle-group-direction */ \"./lib/methods/toggle-group-direction.js\"),\n  _getInitialDateRange: __webpack_require__(/*! ../methods/get-initial-date-range */ \"./lib/methods/get-initial-date-range.js\"),\n  _setDatepickerText: __webpack_require__(/*! ../methods/set-datepicker-text */ \"./lib/methods/set-datepicker-text.js\"),\n  _initialOrderAscending: __webpack_require__(/*! ../methods/initial-order-ascending */ \"./lib/methods/initial-order-ascending.js\"),\n  dateFormat: __webpack_require__(/*! ../methods/date-format */ \"./lib/methods/date-format.js\"),\n  _setColumnsDropdownCloseListener: __webpack_require__(/*! ../methods/set-columns-dropdown-close-listener */ \"./lib/methods/set-columns-dropdown-close-listener.js\"),\n  _getValue: __webpack_require__(/*! ../methods/get-value */ \"./lib/methods/get-value.js\"),\n  _getColumnName: __webpack_require__(/*! ../methods/get-column-name */ \"./lib/methods/get-column-name.js\"),\n  _shouldShowColumnOnInit: __webpack_require__(/*! ../methods/should-show-column-on-init */ \"./lib/methods/should-show-column-on-init.js\")\n};\n\n//# sourceURL=webpack://VueTables/./lib/mixins/methods.js?");

/***/ }),

/***/ "./lib/modules/column-filters.js":
/*!***************************************!*\
  !*** ./lib/modules/column-filters.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (classes) {\n    if (!_this.opts.filterByColumn || !_this.opts.filterable) return '';\n\n    var textFilter = __webpack_require__(/*! ./text-filter */ \"./lib/modules/text-filter.js\").call(_this, h, classes.input);\n\n    var dateFilter = __webpack_require__(/*! ./date-filter */ \"./lib/modules/date-filter.js\").call(_this, h);\n\n    var listFilter = __webpack_require__(/*! ./list-filter */ \"./lib/modules/list-filter.js\").call(_this, h, classes.select);\n\n    var filters = [];\n    var filter;\n    if (_this.hasChildRow && _this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) filters.push(h(\"th\"));\n\n    _this.allColumns.map(function (column) {\n      var filter = '';\n\n      if (_this.filterable(column)) {\n        switch (true) {\n          case _this.isTextFilter(column):\n            filter = textFilter(column);\n            break;\n\n          case _this.isDateFilter(column):\n            filter = dateFilter(column);\n            break;\n\n          case _this.isListFilter(column):\n            filter = listFilter(column);\n            break;\n        }\n      }\n\n      if (typeof _this.$slots[\"filter__\".concat(column)] !== 'undefined') {\n        filter = filter ? h(\"div\", [filter, _this.$slots[\"filter__\".concat(column)]]) : _this.$slots[\"filter__\".concat(column)];\n      }\n\n      filters.push(h(\"th\", {\n        \"class\": _this.columnClass(column)\n      }, [h(\"div\", _defineProperty({\n        \"class\": \"VueTables__column-filter\"\n      }, \"class\", 'VueTables__' + column + '-filter-wrapper'), [filter])]));\n    });\n\n    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) filters.push(h(\"th\"));\n    return h(\"tr\", {\n      \"class\": \"VueTables__filters-row\"\n    }, [filters]);\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/column-filters.js?");

/***/ }),

/***/ "./lib/modules/columns-dropdown.js":
/*!*****************************************!*\
  !*** ./lib/modules/columns-dropdown.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dropdownWrapper = __webpack_require__(/*! ./dropdown-wrapper */ \"./lib/modules/dropdown-wrapper.js\");\n\nvar dropdownItemWrapper = __webpack_require__(/*! ./dropdown-item-wrapper */ \"./lib/modules/dropdown-item-wrapper.js\");\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (classes) {\n    var cols = _this.columns.map(function (column) {\n      return dropdownItemWrapper(h, classes, h(\"a\", {\n        \"class\": classes.dropdown.item,\n        attrs: {\n          href: \"#\"\n        },\n        on: {\n          \"click\": function click() {\n            return _this.toggleColumn(column);\n          }\n        }\n      }, [h(\"input\", {\n        attrs: {\n          type: \"checkbox\",\n          disabled: _this._onlyColumn(column)\n        },\n        domProps: {\n          \"value\": column,\n          \"checked\": _this.allColumns.includes(column)\n        }\n      }), _this.getHeading(column)]));\n    });\n\n    return h(\"div\", {\n      ref: \"columnsdropdown\",\n      \"class\": \"\".concat(classes.dropdown.container, \" \").concat(classes.right, \" VueTables__columns-dropdown\")\n    }, [h(\"button\", {\n      attrs: {\n        type: \"button\"\n      },\n      \"class\": \"\".concat(classes.button, \" \").concat(classes.dropdown.trigger),\n      on: {\n        \"click\": _this._toggleColumnsDropdown.bind(_this)\n      }\n    }, [_this.display('columns'), h(\"span\", {\n      \"class\": \"\".concat(classes.icon, \" \").concat(classes.small)\n    }, [h(\"i\", {\n      \"class\": classes.dropdown.caret\n    })])]), dropdownWrapper.call(_this, h, classes, cols)]);\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/columns-dropdown.js?");

/***/ }),

/***/ "./lib/modules/date-filter.js":
/*!************************************!*\
  !*** ./lib/modules/date-filter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (column) {\n    return h(\"div\", {\n      \"class\": \"VueTables__date-filter\",\n      attrs: {\n        id: 'VueTables__' + column + '-filter'\n      }\n    }, [h(\"span\", {\n      \"class\": \"VueTables__filter-placeholder\"\n    }, [_this.display('filterBy', {\n      column: _this.getHeading(column)\n    })])]);\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/date-filter.js?");

/***/ }),

/***/ "./lib/modules/dropdown-item-wrapper.js":
/*!**********************************************!*\
  !*** ./lib/modules/dropdown-item-wrapper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h, classes, item) {\n  if (classes.framework === 'bulma') {\n    return item;\n  }\n\n  return h(\"li\", [item]);\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/dropdown-item-wrapper.js?");

/***/ }),

/***/ "./lib/modules/dropdown-pagination-count.js":
/*!**************************************************!*\
  !*** ./lib/modules/dropdown-pagination-count.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function () {\n    if (_this.count > 0 && _this.opts.pagination.dropdown) {\n      var perPage = parseInt(_this.limit);\n      var from = (_this.Page - 1) * perPage + 1;\n      var to = _this.Page == _this.totalPages ? _this.count : from + perPage - 1;\n\n      var parts = _this.opts.texts.count.split('|');\n\n      var i = Math.min(_this.count == 1 ? 2 : _this.totalPages == 1 ? 1 : 0, parts.length - 1);\n      var count = parts[i].replace('{count}', _this.count).replace('{from}', from).replace('{to}', to);\n      return h(\"div\", {\n        \"class\": \"VuePagination\"\n      }, [h(\"p\", {\n        \"class\": \"VuePagination__count\"\n      }, [count])]);\n    }\n\n    return '';\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/dropdown-pagination-count.js?");

/***/ }),

/***/ "./lib/modules/dropdown-pagination.js":
/*!********************************************!*\
  !*** ./lib/modules/dropdown-pagination.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debounce = __webpack_require__(/*! debounce */ \"./node_modules/debounce/index.js\");\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (selectClass, id) {\n    var pages = [];\n    var selected;\n\n    for (var pag = 1; pag <= _this.totalPages; pag++) {\n      var selected = _this.page == pag;\n      pages.push(h(\"option\", {\n        domProps: {\n          \"value\": pag,\n          \"selected\": selected\n        }\n      }, [pag]));\n    }\n\n    return h(\"select\", {\n      \"class\": \"\".concat(selectClass, \" dropdown-pagination\"),\n      directives: [{\n        name: \"show\",\n        value: _this.totalPages > 1\n      }],\n      attrs: {\n        name: \"page\",\n        id: id\n      },\n      ref: \"page\",\n      domProps: {\n        \"value\": _this.page\n      },\n      on: {\n        \"change\": _this.setPage.bind(_this, null, false)\n      }\n    }, [pages]);\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/dropdown-pagination.js?");

/***/ }),

/***/ "./lib/modules/dropdown-wrapper.js":
/*!*****************************************!*\
  !*** ./lib/modules/dropdown-wrapper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h, classes, columns) {\n  if (classes.framework === 'bulma') {\n    return h(\"div\", {\n      \"class\": classes.dropdown.menu,\n      style: this.displayColumnsDropdown ? 'display:block' : 'display:none'\n    }, [h(\"div\", {\n      \"class\": classes.dropdown.content\n    }, [columns])]);\n  }\n\n  if (classes.framework === 'bootstrap4') {\n    return h(\"div\", {\n      \"class\": classes.dropdown.menu,\n      style: this.displayColumnsDropdown ? 'display:block' : 'display:none'\n    }, [columns]);\n  }\n\n  return h(\"ul\", {\n    \"class\": classes.dropdown.menu,\n    style: this.displayColumnsDropdown ? 'display:block' : 'display:none'\n  }, [columns]);\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/dropdown-wrapper.js?");

/***/ }),

/***/ "./lib/modules/headings.js":
/*!*********************************!*\
  !*** ./lib/modules/headings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (right) {\n    var that = _this;\n\n    var sortControl = __webpack_require__(/*! ./sort-control */ \"./lib/modules/sort-control.js\")(h, right);\n\n    var headings = [];\n    if (_this.hasChildRow && _this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h(\"th\"));\n\n    _this.allColumns.map(function (column) {\n      headings.push(h(\"th\", {\n        on: {\n          \"keypress\": function keypress(e) {\n            if (e.key === \"Enter\") {\n              that.orderByColumn.bind(that, column, e)();\n            }\n          },\n          \"click\": function click(e) {\n            if (e.target.className !== \"resize-handle\") {\n              that.orderByColumn.bind(that, column, e)();\n            }\n          }\n        },\n        attrs: {\n          id: \"VueTables_th--\".concat(column),\n          tabindex: \"0\"\n        },\n        \"class\": this.sortableClass(column)\n      }, [h(\"span\", {\n        \"class\": \"VueTables__heading\",\n        attrs: {\n          title: this.getHeadingTooltip(column, h)\n        }\n      }, [this.getHeading(column, h)]), sortControl.call(this, column)]));\n    }.bind(_this));\n\n    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h(\"th\"));\n    return headings;\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/headings.js?");

/***/ }),

/***/ "./lib/modules/list-filter.js":
/*!************************************!*\
  !*** ./lib/modules/list-filter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h, selectClass) {\n  var _this = this;\n\n  return function (column) {\n    var options = [];\n    var selected;\n    var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);\n\n    var displayable = _this.opts.listColumns[column].filter(function (item) {\n      return !item.hide;\n    });\n\n    displayable.map(function (option) {\n      selected = option.id == _this.query[column] && _this.query[column] !== '';\n      options.push(h(\"option\", {\n        domProps: {\n          \"value\": option.id,\n          \"selected\": selected\n        }\n      }, [option.text]));\n    });\n    return h(\"div\", {\n      \"class\": \"VueTables__list-filter\",\n      attrs: {\n        id: 'VueTables__' + column + '-filter'\n      }\n    }, [h(\"select\", {\n      \"class\": selectClass,\n      on: {\n        \"change\": search\n      },\n      attrs: {\n        name: _this._getColumnName(column)\n      },\n      domProps: {\n        \"value\": _this.query[column]\n      }\n    }, [h(\"option\", {\n      attrs: {\n        value: \"\"\n      }\n    }, [_this.display('defaultOption', {\n      column: _this.opts.headings[column] ? _this.opts.headings[column] : column\n    })]), options])]);\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/list-filter.js?");

/***/ }),

/***/ "./lib/modules/normal-filter.js":
/*!**************************************!*\
  !*** ./lib/modules/normal-filter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debounce = __webpack_require__(/*! debounce */ \"./node_modules/debounce/index.js\");\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (classes, id) {\n    var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);\n    return h(\"input\", {\n      \"class\": \"VueTables__search__input \".concat(classes.input, \" \").concat(classes.small),\n      attrs: {\n        type: \"text\",\n        placeholder: _this.display('filterPlaceholder'),\n        id: id,\n        autocomplete: \"off\"\n      },\n      on: {\n        \"keyup\": _this.opts.debounce ? debounce(search, _this.opts.debounce) : search\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/normal-filter.js?");

/***/ }),

/***/ "./lib/modules/pagination.js":
/*!***********************************!*\
  !*** ./lib/modules/pagination.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (theme) {\n    if (_this.opts.pagination && _this.opts.pagination.dropdown) return '';\n    var options = {\n      theme: theme,\n      chunk: _this.opts.pagination.chunk,\n      chunksNavigation: _this.opts.pagination.nav,\n      edgeNavigation: _this.opts.pagination.edge,\n      texts: {\n        count: _this.opts.texts.count,\n        first: _this.opts.texts.first,\n        last: _this.opts.texts.last\n      }\n    };\n    var name = _this.vuex ? _this.name : _this.id;\n    return h(\"pagination\", {\n      ref: \"pagination\",\n      attrs: {\n        options: options,\n        \"for\": name,\n        vuex: _this.vuex,\n        records: _this.count,\n        \"per-page\": parseInt(_this.limit)\n      },\n      on: {\n        \"paginate\": _this._onPagination.bind(_this)\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/pagination.js?");

/***/ }),

/***/ "./lib/modules/per-page-values.js":
/*!****************************************!*\
  !*** ./lib/modules/per-page-values.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  var perpageValues = [];\n  this.opts.perPageValues.every(function (value) {\n    var isLastEntry = value >= _this.count;\n    var selected = _this.limit == value || isLastEntry && _this.limit > value;\n    perpageValues.push(h(\"option\", {\n      domProps: {\n        \"value\": value,\n        \"selected\": selected\n      }\n    }, [value]));\n    return !isLastEntry;\n  });\n  return perpageValues;\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/per-page-values.js?");

/***/ }),

/***/ "./lib/modules/per-page.js":
/*!*********************************!*\
  !*** ./lib/modules/per-page.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (perpageValues, cls, id) {\n    return h(\"select\", {\n      \"class\": cls,\n      attrs: {\n        name: \"limit\",\n        id: id\n      },\n      domProps: {\n        \"value\": _this.limit\n      },\n      on: {\n        \"change\": _this.setLimit.bind(_this)\n      }\n    }, [perpageValues]);\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/per-page.js?");

/***/ }),

/***/ "./lib/modules/rows.js":
/*!*****************************!*\
  !*** ./lib/modules/rows.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! babel-helper-vue-jsx-merge-props */ \"./node_modules/babel-helper-vue-jsx-merge-props/index.js\"));\n\nvar _clone = _interopRequireDefault(__webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (h) {\n  var _this = this;\n\n  return function (classes) {\n    var data;\n\n    if (_this.source === 'client') {\n      data = _this.filteredData;\n\n      if (!data.length && _this.source === 'client' && _this.page !== 1) {\n        // data was dynamically removed go to last page\n        _this.setPage(_this.totalPages ? _this.totalPages : 1);\n      }\n    } else {\n      data = _this.tableData;\n    }\n\n    if (data.length === 0) {\n      var colspan = _this.allColumns.length;\n      if (_this.hasChildRow && _this.opts.showChildRowToggler) colspan++;\n      return h(\"tr\", {\n        \"class\": \"VueTables__no-results\"\n      }, [h(\"td\", {\n        \"class\": \"text-center\",\n        attrs: {\n          tabindex: \"0\",\n          colspan: _this.colspan\n        }\n      }, [_this.display(_this.loading ? 'loading' : 'noResults')])]);\n    }\n\n    var rows = [];\n    var columns;\n    var rowKey = _this.opts.uniqueKey;\n    var rowAttributes;\n    var rowClass;\n    var recordCount = (_this.Page - 1) * _this.limit;\n    var currentGroup;\n    var groupSlot;\n    var groupValue;\n    var groupByContent;\n    data.map(function (row, index) {\n      if (_this.opts.groupBy && _this.source === 'client' && row[_this.opts.groupBy] !== currentGroup) {\n        groupSlot = _this.getGroupSlot(row[_this.opts.groupBy]);\n        groupValue = row[_this.opts.groupBy];\n        groupByContent = _this.opts.toggleGroups ? h(\"button\", {\n          \"class\": classes.button,\n          on: {\n            \"click\": _this.toggleGroup.bind(_this, groupValue)\n          }\n        }, [groupValue, h(\"span\", {\n          \"class\": _this.groupToggleIcon(groupValue)\n        })]) : groupValue;\n        rows.push(h(\"tr\", {\n          \"class\": classes.groupTr,\n          on: {\n            \"click\": _this._toggleGroupDirection.bind(_this)\n          }\n        }, [h(\"td\", {\n          attrs: {\n            colspan: _this.colspan\n          }\n        }, [groupByContent, groupSlot])]));\n        currentGroup = row[_this.opts.groupBy];\n      }\n\n      if (_this.opts.toggleGroups && _this.collapsedGroups.includes(currentGroup)) {\n        return;\n      }\n\n      index = recordCount + index + 1;\n      columns = [];\n      var update;\n      var isEditing;\n      var setEditing;\n      var revertValue;\n\n      if (_this.hasChildRow && _this.opts.showChildRowToggler) {\n        var childRowToggler = h(\"td\", {\n          attrs: {\n            tabindex: \"0\"\n          },\n          on: {\n            \"keypress\": function keypress(e) {\n              if (e.key === 'Enter') {\n                _this.toggleChildRow.bind(_this, row[rowKey])();\n              }\n            },\n            \"click\": _this.toggleChildRow.bind(_this, row[rowKey])\n          }\n        }, [h(\"span\", {\n          \"class\": \"VueTables__child-row-toggler \" + _this.childRowTogglerClass(row[rowKey])\n        })]);\n        if (_this.opts.childRowTogglerFirst) columns.push(childRowToggler);\n      }\n\n      _this.allColumns.map(function (column) {\n        var rowTemplate = _this.$scopedSlots && _this.$scopedSlots[column];\n\n        if (rowTemplate) {\n          var rowTemplateData = {\n            row: row,\n            column: column,\n            index: index\n          };\n        }\n\n        if (_this.opts.editableColumns.includes(column)) {\n          rowTemplateData.update = updateValue(row, column).bind(_this);\n          rowTemplateData.isEditing = editing(row, column).bind(_this);\n          rowTemplateData.setEditing = setEdit(row, column).bind(_this);\n          rowTemplateData.revertValue = revertVal(row, column).bind(_this);\n        }\n\n        columns.push(h(\"td\", {\n          \"class\": \"\".concat(_this.columnClass(column), \" \").concat(_this._cellClasses(column, row)).trim(),\n          attrs: {\n            tabindex: \"0\"\n          }\n        }, [rowTemplate ? rowTemplate(rowTemplateData) : _this.render(row, column, index, h)]));\n      });\n\n      if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) columns.push(childRowToggler);\n      rowClass = _this.opts.rowClassCallback ? _this.opts.rowClassCallback(row) : '';\n      rowAttributes = _this.opts.rowAttributesCallback ? _this.opts.rowAttributesCallback(row) : {};\n      rows.push(h(\"tr\", (0, _babelHelperVueJsxMergeProps[\"default\"])([{\n        attrs: rowAttributes\n      }, {\n        \"class\": \"VueTables__row \".concat(rowClass),\n        on: {\n          \"click\": _this.rowWasClicked.bind(_this, row, index)\n        }\n      }]), [columns, \" \"]));\n      rows.push(_this.hasChildRow && _this.openChildRows.includes(row[rowKey]) ? h(\"tr\", {\n        \"class\": \"VueTables__child-row \".concat(rowClass)\n      }, [h(\"td\", {\n        attrs: {\n          colspan: _this.colspan,\n          tabindex: \"0\"\n        }\n      }, [_this._getChildRowTemplate(h, row, index)])]) : h());\n    });\n    return rows;\n  };\n};\n\nfunction setEdit(row, column) {\n  return function (editing) {\n    var _this2 = this;\n\n    if (editing) {\n      this.editing.push({\n        id: row[this.opts.uniqueKey],\n        column: column,\n        originalValue: row[column]\n      });\n    } else {\n      this.editing = this.editing.filter(function (e) {\n        return e.id !== row[_this2.opts.uniqueKey];\n      });\n    }\n  };\n}\n\nfunction editing(row, column) {\n  return function () {\n    var _this3 = this;\n\n    return this.editing.find(function (e) {\n      return e.id === row[_this3.opts.uniqueKey] && e.column === column;\n    });\n  };\n}\n\nfunction revertVal(row, column) {\n  return function () {\n    var _this4 = this;\n\n    var origVal = this.editing.find(function (e) {\n      return e.id === row[_this4.opts.uniqueKey];\n    }).originalValue;\n    row[column] = origVal;\n  };\n}\n\nfunction updateValue(row, column) {\n  return function (e) {\n    var _this5 = this;\n\n    var oldVal = row[column];\n    row[column] = getValue(e);\n    var data = (0, _clone[\"default\"])(this.data).map(function (r) {\n      if (r[_this5.opts.uniqueKey] === row[_this5.opts.uniqueKey]) {\n        return row;\n      }\n\n      return r;\n    });\n    this.$emit('input', data);\n    this.$emit('update', {\n      row: row,\n      column: column,\n      oldVal: oldVal,\n      newVal: row[column]\n    });\n  };\n}\n\nfunction getValue(val) {\n  if (val.target) {\n    return val.target.type === 'checkbox' ? val.target.checked : val.target.value;\n  }\n\n  return val;\n}\n\n//# sourceURL=webpack://VueTables/./lib/modules/rows.js?");

/***/ }),

/***/ "./lib/modules/sort-control.js":
/*!*************************************!*\
  !*** ./lib/modules/sort-control.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (h, right) {\n  return function (column) {\n    if (!this.sortable(column)) return '';\n    return h(\"span\", {\n      \"class\": \"VueTables__sort-icon \".concat(right, \" \").concat(this.sortableChevronClass(column))\n    });\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/sort-control.js?");

/***/ }),

/***/ "./lib/modules/text-filter.js":
/*!************************************!*\
  !*** ./lib/modules/text-filter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debounce = __webpack_require__(/*! debounce */ \"./node_modules/debounce/index.js\");\n\nmodule.exports = function (h, inputClass) {\n  var _this = this;\n\n  var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);\n\n  if (this.opts.debounce) {\n    var debouncedSearch = debounce(search, this.opts.debounce);\n\n    var onKeyUp = function onKeyUp(e) {\n      if (e.keyCode === 9) return;\n\n      if (e.keyCode === 13) {\n        debouncedSearch.clear();\n        search.apply(void 0, arguments);\n      } else {\n        debouncedSearch.apply(void 0, arguments);\n      }\n    };\n  }\n\n  return function (column) {\n    return h(\"input\", {\n      on: {\n        \"keyup\": _this.opts.debounce ? onKeyUp : search\n      },\n      \"class\": inputClass,\n      attrs: {\n        name: _this._getColumnName(column),\n        type: \"text\",\n        placeholder: _this.display('filterBy', {\n          column: _this.getHeading(column)\n        }),\n        autocomplete: \"off\"\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/modules/text-filter.js?");

/***/ }),

/***/ "./lib/slots.js":
/*!**********************!*\
  !*** ./lib/slots.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    beforeFilters: this.$slots.beforeFilters ? this.$slots.beforeFilters : '',\n    afterFilters: this.$slots.afterFilters ? this.$slots.afterFilters : '',\n    prependHead: this.$slots.prependHead ? this.$slots.prependHead : '',\n    beforeBody: this.$slots.beforeBody ? this.$slots.beforeBody : '',\n    prependBody: this.$slots.prependBody ? this.$slots.prependBody : '',\n    appendBody: this.$slots.appendBody ? this.$slots.appendBody : '',\n    afterBody: this.$slots.afterBody ? this.$slots.afterBody : '',\n    beforeFilter: this.$slots.beforeFilter ? this.$slots.beforeFilter : '',\n    afterFilter: this.$slots.afterFilter ? this.$slots.afterFilter : '',\n    afterFilterWrapper: this.$slots.afterFilterWrapper ? this.$slots.afterFilterWrapper : '',\n    beforeSearch: this.$slots.beforeSearch ? this.$slots.beforeSearch : '',\n    beforeLimit: this.$slots.beforeLimit ? this.$slots.beforeLimit : '',\n    afterLimit: this.$slots.afterLimit ? this.$slots.afterLimit : '',\n    beforeTable: this.$slots.beforeTable ? this.$slots.beforeTable : '',\n    afterTable: this.$slots.afterTable ? this.$slots.afterTable : ''\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/slots.js?");

/***/ }),

/***/ "./lib/state/data.js":
/*!***************************!*\
  !*** ./lib/state/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default(useVuex, source) {\n  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var data = {\n    vuex: true,\n    activeState: false,\n    userColumnsDisplay: [],\n    userControlsColumns: false,\n    displayColumnsDropdown: false,\n    collapsedGroups: []\n  };\n  if (useVuex) return data;\n  data = (0, _merge[\"default\"])(data, {\n    vuex: false,\n    count: 0,\n    customQueries: {},\n    query: null,\n    page: page,\n    limit: 10,\n    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,\n    orderBy: {\n      column: false,\n      ascending: true\n    }\n  });\n  if (source == 'server') data.data = [];\n  return data;\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/data.js?");

/***/ }),

/***/ "./lib/state/mutations.js":
/*!********************************!*\
  !*** ./lib/state/mutations.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _default(self) {\n  var _ref, _merge$recursive;\n\n  var extra = self.source == 'server' ? (_ref = {}, _defineProperty(_ref, \"\".concat(self.name, \"/SET_DATA\"), function SET_DATA(state, response) {\n    var data = self.opts.responseAdapter.call(self, response);\n    state.data = data.data;\n    state.count = parseInt(data.count);\n  }), _defineProperty(_ref, \"\".concat(self.name, \"/LOADING\"), function LOADING(state, payload) {}), _defineProperty(_ref, \"\".concat(self.name, \"/LOADED\"), function LOADED(state, payload) {}), _defineProperty(_ref, \"\".concat(self.name, \"/ERROR\"), function ERROR(state, payload) {}), _defineProperty(_ref, \"\".concat(self.name, \"/SET_COUNT\"), function SET_COUNT(state, count) {\n    state.count = count;\n  }), _ref) : _defineProperty({}, \"\".concat(self.name, \"/SET_COUNT\"), function SET_COUNT(state, count) {\n    state.count = count;\n  });\n  return _merge[\"default\"].recursive(true, (_merge$recursive = {}, _defineProperty(_merge$recursive, \"\".concat(self.name, \"/PAGINATE\"), function PAGINATE(state, page) {\n    state.page = page;\n    self.updateState('page', page);\n    if (self.source == 'server') self.getData();\n    self.commit('PAGINATION', page);\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_FILTER\"), function SET_FILTER(state, filter) {\n    state.page = 1;\n    self.updateState('page', 1);\n    state.query = filter;\n\n    if (self.source == 'server') {\n      self.getData();\n    }\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/PAGINATION\"), function PAGINATION(state, page) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_CUSTOM_FILTER\"), function SET_CUSTOM_FILTER(state, _ref3) {\n    var filter = _ref3.filter,\n        value = _ref3.value;\n    state.customQueries[filter] = value;\n    state.page = 1;\n    self.updateState('page', 1);\n    self.updateState('customQueries', state.customQueries);\n\n    if (self.source == 'server') {\n      self.getData();\n    }\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_STATE\"), function SET_STATE(state, _ref4) {\n    var page = _ref4.page,\n        query = _ref4.query,\n        customQueries = _ref4.customQueries,\n        limit = _ref4.limit,\n        orderBy = _ref4.orderBy;\n    state.customQueries = customQueries;\n    state.query = query;\n    state.page = page;\n    state.limit = limit;\n    state.ascending = orderBy.ascending;\n    state.sortBy = orderBy.column;\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SET_LIMIT\"), function SET_LIMIT(state, limit) {\n    state.page = 1;\n    self.updateState('page', 1);\n    state.limit = limit;\n    if (self.source == 'server') self.getData();\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SORT\"), function SORT(state, _ref5) {\n    var column = _ref5.column,\n        ascending = _ref5.ascending;\n    state.ascending = ascending;\n    state.sortBy = column;\n    if (self.source == 'server') self.getData();\n  }), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/SORTED\"), function SORTED(state, data) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/ROW_CLICK\"), function ROW_CLICK(state, row) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/FILTER\"), function FILTER(state, row) {}), _defineProperty(_merge$recursive, \"\".concat(self.name, \"/LIMIT\"), function LIMIT(state, limit) {}), _merge$recursive), extra);\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/mutations.js?");

/***/ }),

/***/ "./lib/state/normal.js":
/*!*****************************!*\
  !*** ./lib/state/normal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nfunction _default() {\n  return {\n    computed: {\n      Columns: function Columns() {\n        return this.columns;\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/normal.js?");

/***/ }),

/***/ "./lib/state/register-module.js":
/*!**************************************!*\
  !*** ./lib/state/register-module.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _state = _interopRequireDefault(__webpack_require__(/*! ./state */ \"./lib/state/state.js\"));\n\nvar _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations */ \"./lib/state/mutations.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (self) {\n  var Module = {\n    state: (0, _state[\"default\"])(self),\n    mutations: (0, _mutations[\"default\"])(self)\n  };\n\n  if (self.$store && self.$store.state && self.$store.state[self.name]) {\n    Module.state = _merge[\"default\"].recursive(Module.state, self.$store.state[self.name]);\n    self.$store.unregisterModule(self.name);\n  }\n\n  self.$store.registerModule(self.name, Module);\n};\n\n//# sourceURL=webpack://VueTables/./lib/state/register-module.js?");

/***/ }),

/***/ "./lib/state/state.js":
/*!****************************!*\
  !*** ./lib/state/state.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default(self) {\n  var state = {\n    page: self.opts.initialPage ? self.opts.initialPage : 1,\n    limit: self.opts.perPage,\n    count: self.source == 'server' ? 0 : self.data.length,\n    columns: self.columns,\n    data: self.source == 'client' ? self.data : [],\n    query: self.initQuery(),\n    customQueries: self.initCustomFilters(),\n    sortBy: self.opts.orderBy && self.opts.orderBy.column ? self.opts.orderBy.column : false,\n    ascending: self.opts.orderBy && self.opts.orderBy.hasOwnProperty('ascending') ? self.opts.orderBy.ascending : true\n  };\n\n  if (typeof self.$store.state[self.name] !== 'undefined') {\n    return (0, _merge[\"default\"])(true, self.$store.state[self.name], state);\n  }\n\n  return state;\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/state.js?");

/***/ }),

/***/ "./lib/state/vuex.js":
/*!***************************!*\
  !*** ./lib/state/vuex.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _default(source) {\n  var extra = source == 'server' ? serverExtra() : clientExtra();\n  return _merge[\"default\"].recursive(true, {\n    props: {\n      name: {\n        type: String,\n        required: true\n      }\n    },\n    computed: {\n      state: function state() {\n        return this.$store.state[this.name];\n      },\n      Page: function Page() {\n        return this.state.page;\n      },\n      count: function count() {\n        return this.state.count;\n      },\n      Columns: function Columns() {\n        return this.state.columns;\n      },\n      tableData: function tableData() {\n        return this.state.data;\n      },\n      page: function page() {\n        return this.state.page;\n      },\n      limit: function limit() {\n        return this.state.limit;\n      },\n      customQueries: function customQueries() {\n        return this.state.customQueries;\n      },\n      query: function query() {\n        return this.state.query;\n      },\n      orderBy: function orderBy() {\n        return {\n          column: this.state.sortBy,\n          ascending: this.state.ascending\n        };\n      }\n    },\n    methods: {\n      commit: function commit(action, payload) {\n        return this.$store.commit(\"\".concat(this.name, \"/\").concat(action), payload);\n      },\n      orderByColumn: function orderByColumn(column, ev) {\n        if (!this.sortable(column)) return;\n\n        if (ev.shiftKey && this.orderBy.column && this.hasMultiSort) {\n          this.setUserMultiSort(column);\n        } else {\n          var ascending = this.orderBy.column === column ? !this.orderBy.ascending : this._initialOrderAscending(column);\n          var orderBy = {\n            column: column,\n            ascending: ascending\n          };\n          this.updateState('orderBy', orderBy);\n          this.commit('SORT', orderBy);\n          this.dispatch('sorted', orderBy);\n        }\n      },\n      setLimit: function setLimit(e) {\n        var limit = _typeof(e) === 'object' ? parseInt(e.target.value) : e;\n        this.updateState('perPage', limit);\n        this.commit(\"SET_LIMIT\", limit);\n        this.dispatch(\"limit\", limit);\n      },\n      setOrder: function setOrder(column, ascending) {\n        this.updateState('orderBy', {\n          column: column,\n          ascending: ascending\n        });\n        this.commit('SORT', {\n          column: column,\n          ascending: ascending\n        });\n      },\n      setPage: function setPage(page) {\n        if (!page) {\n          page = this.$refs.page.value;\n        }\n\n        if (!this.opts.pagination.dropdown) this.$refs.pagination.Page = page;\n        this.commit(\"PAGINATE\", page);\n      }\n    }\n  }, extra);\n}\n\nfunction serverExtra() {\n  return {\n    methods: {\n      setData: function setData(data) {\n        this.commit('SET_DATA', data);\n        setTimeout(function () {\n          this.dispatch('loaded', data);\n        }.bind(this), 0);\n      }\n    }\n  };\n}\n\nfunction clientExtra() {\n  return {};\n}\n\n//# sourceURL=webpack://VueTables/./lib/state/vuex.js?");

/***/ }),

/***/ "./lib/table.js":
/*!**********************!*\
  !*** ./lib/table.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar methods = __webpack_require__(/*! ./mixins/methods */ \"./lib/mixins/methods.js\");\n\nvar computed = __webpack_require__(/*! ./mixins/computed */ \"./lib/mixins/computed.js\");\n\nvar beforeDestroy = __webpack_require__(/*! ./mixins/before-destroy */ \"./lib/mixins/before-destroy.js\");\n\nfunction _default() {\n  return {\n    methods: methods,\n    computed: computed,\n    beforeDestroy: beforeDestroy\n  };\n}\n\n//# sourceURL=webpack://VueTables/./lib/table.js?");

/***/ }),

/***/ "./lib/template-compiler.js":
/*!**********************************!*\
  !*** ./lib/template-compiler.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nmodule.exports = function (template, theme) {\n  var themes = {\n    bootstrap3: __webpack_require__(/*! ./themes/bootstrap3 */ \"./lib/themes/bootstrap3.js\")(),\n    bootstrap4: __webpack_require__(/*! ./themes/bootstrap4 */ \"./lib/themes/bootstrap4.js\")(),\n    bulma: __webpack_require__(/*! ./themes/bulma */ \"./lib/themes/bulma.js\")()\n  };\n  var templates = {\n    \"default\": __webpack_require__(/*! ./templates/default */ \"./lib/templates/default.js\"),\n    footerPagination: __webpack_require__(/*! ./templates/footer-pagination */ \"./lib/templates/footer-pagination.js\")\n  };\n  return function (h) {\n    var modules = {\n      rows: __webpack_require__(/*! ./modules/rows */ \"./lib/modules/rows.js\").call(this, h),\n      normalFilter: __webpack_require__(/*! ./modules/normal-filter */ \"./lib/modules/normal-filter.js\").call(this, h),\n      dropdownPagination: __webpack_require__(/*! ./modules/dropdown-pagination */ \"./lib/modules/dropdown-pagination.js\").call(this, h),\n      dropdownPaginationCount: __webpack_require__(/*! ./modules/dropdown-pagination-count */ \"./lib/modules/dropdown-pagination-count.js\").call(this, h),\n      columnFilters: __webpack_require__(/*! ./modules/column-filters */ \"./lib/modules/column-filters.js\").call(this, h),\n      pagination: __webpack_require__(/*! ./modules/pagination */ \"./lib/modules/pagination.js\").call(this, h),\n      headings: __webpack_require__(/*! ./modules/headings */ \"./lib/modules/headings.js\").call(this, h),\n      perPage: __webpack_require__(/*! ./modules/per-page */ \"./lib/modules/per-page.js\").call(this, h),\n      columnsDropdown: __webpack_require__(/*! ./modules/columns-dropdown */ \"./lib/modules/columns-dropdown.js\").call(this, h)\n    };\n\n    if (typeof template === 'string' && (!templates[template] || typeof templates[template] !== 'function')) {\n      throw \"vue-tables-2: Template \\\"\".concat(template, \"\\\" does not exist\");\n    }\n\n    if (typeof theme === 'string' && (!themes[theme] || _typeof(themes[theme]) !== 'object')) {\n      throw \"vue-tables-2: Theme \\\"\".concat(theme, \"\\\" does not exist\");\n    }\n\n    var tpl = typeof template === 'string' ? templates[template] : template;\n    var thm = typeof theme === 'string' ? themes[theme] : theme();\n\n    var slots = __webpack_require__(/*! ./slots */ \"./lib/slots.js\").call(this);\n\n    return tpl.call(this, h, modules, thm, slots);\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/template-compiler.js?");

/***/ }),

/***/ "./lib/templates/default.js":
/*!**********************************!*\
  !*** ./lib/templates/default.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (h, modules, classes, slots) {\n  var filterId = \"VueTables__search_\" + this.id;\n  var ddpId = \"VueTables__dropdown-pagination_\" + this.id;\n  var perpageId = \"VueTables__limit_\" + this.id;\n\n  var perpageValues = __webpack_require__(/*! ../modules/per-page-values */ \"./lib/modules/per-page-values.js\").call(this, h);\n\n  var caption = this.opts.caption ? h(\"caption\", [this.opts.caption]) : '';\n  var genericFilter = this.hasGenericFilter ? h(\"div\", {\n    \"class\": \"VueTables__search-field\"\n  }, [h(\"label\", {\n    attrs: {\n      \"for\": filterId\n    },\n    \"class\": classes.label\n  }, [this.display(\"filter\")]), modules.normalFilter(classes, filterId)]) : \"\";\n  var perpage = !this.opts.hidePerPageSelect && (perpageValues.length > 1 || this.opts.alwaysShowPerPageSelect) ? h(\"div\", {\n    \"class\": \"VueTables__limit-field\"\n  }, [h(\"label\", {\n    \"class\": classes.label,\n    attrs: {\n      \"for\": perpageId\n    }\n  }, [this.display(\"limit\")]), modules.perPage(perpageValues, classes.select, perpageId)]) : \"\";\n  var dropdownPagination = this.opts.pagination && this.opts.pagination.dropdown ? h(\"div\", {\n    \"class\": \"VueTables__pagination-wrapper\"\n  }, [h(\"div\", {\n    \"class\": \"\".concat(classes.field, \" \").concat(classes.inline, \" \").concat(classes.right, \" VueTables__dropdown-pagination\"),\n    directives: [{\n      name: \"show\",\n      value: this.totalPages > 1\n    }]\n  }, [h(\"label\", {\n    attrs: {\n      \"for\": ddpId\n    }\n  }, [this.display(\"page\")]), modules.dropdownPagination(classes.select, ddpId)])]) : \"\";\n  var columnsDropdown = this.opts.columnsDropdown ? h(\"div\", {\n    \"class\": \"VueTables__columns-dropdown-wrapper\"\n  }, [modules.columnsDropdown(classes)]) : \"\";\n  var footerHeadings = this.opts.footerHeadings ? h(\"tfoot\", [h(\"tr\", [modules.headings(classes.right)])]) : \"\";\n  var shouldShowTop = genericFilter || perpage || dropdownPagination || columnsDropdown || slots.beforeFilter || slots.afterFilter || slots.beforeLimit || slots.afterLimit;\n  var tableTop = h(\"div\", {\n    \"class\": classes.row,\n    directives: [{\n      name: \"show\",\n      value: shouldShowTop\n    }]\n  }, [h(\"div\", {\n    \"class\": classes.column\n  }, [h(\"div\", {\n    \"class\": \"\".concat(classes.field, \" \").concat(classes.inline, \" \").concat(classes.left, \" VueTables__search\")\n  }, [slots.beforeFilter, genericFilter, slots.afterFilter]), slots.afterFilterWrapper, h(\"div\", {\n    \"class\": \"\".concat(classes.field, \" \").concat(classes.inline, \" \").concat(classes.right, \" VueTables__limit\")\n  }, [slots.beforeLimit, perpage, slots.afterLimit]), dropdownPagination, columnsDropdown])]);\n  return h(\"div\", {\n    \"class\": \"VueTables VueTables--\" + this.source\n  }, [tableTop, slots.beforeTable, h(\"div\", {\n    \"class\": \"table-responsive\"\n  }, [h(\"table\", {\n    \"class\": \"VueTables__table \".concat(this.opts.skin ? this.opts.skin : classes.table),\n    attrs: {\n      summary: this.opts.summary\n    }\n  }, [caption, h(\"thead\", [slots.prependHead, h(\"tr\", [modules.headings(classes.right)]), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]), footerHeadings, slots.beforeBody, h(\"tbody\", [slots.prependBody, modules.rows(classes), slots.appendBody]), slots.afterBody])]), slots.afterTable, modules.pagination((0, _merge[\"default\"])(classes.pagination, {\n    wrapper: \"\".concat(classes.row, \" \").concat(classes.column, \" \").concat(classes.contentCenter),\n    nav: classes.center,\n    count: \"\".concat(classes.center, \" \").concat(classes.column)\n  })), modules.dropdownPaginationCount()]);\n};\n\n//# sourceURL=webpack://VueTables/./lib/templates/default.js?");

/***/ }),

/***/ "./lib/templates/footer-pagination.js":
/*!********************************************!*\
  !*** ./lib/templates/footer-pagination.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nmodule.exports = function (h, modules, classes, slots) {\n  var filterId = 'VueTables__search_' + this.id;\n  var perpageId = 'VueTables__limit_' + this.id;\n\n  var perpageValues = __webpack_require__(/*! ../modules/per-page-values */ \"./lib/modules/per-page-values.js\").call(this, h);\n\n  var caption = this.opts.caption ? h(\"caption\", [this.opts.caption]) : '';\n  var genericFilter = this.hasGenericFilter ? h(\"div\", {\n    \"class\": \"VueTables__search-field\"\n  }, [h(\"label\", {\n    attrs: {\n      \"for\": filterId\n    },\n    \"class\": classes.label\n  }, [this.display('filter')]), modules.normalFilter(classes, filterId)]) : '';\n  var perpage = perpageValues.length > 1 ? h(\"div\", {\n    \"class\": \"VueTables__limit-field\"\n  }, [h(\"label\", {\n    \"class\": classes.label,\n    attrs: {\n      \"for\": perpageId\n    }\n  }, [this.display('limit')]), modules.perPage(perpageValues, classes.select, perpageId)]) : '';\n  var columnsDropdown = this.opts.columnsDropdown ? h(\"div\", {\n    \"class\": \"VueTables__columns-dropdown-wrapper\"\n  }, [modules.columnsDropdown(classes)]) : '';\n  var shouldShowTop = genericFilter || perpage || columnsDropdown || slots.beforeFilter || slots.afterFilter || slots.beforeLimit || slots.afterLimit;\n  var tableTop = h(\"div\", {\n    \"class\": classes.row,\n    directives: [{\n      name: \"show\",\n      value: shouldShowTop\n    }]\n  }, [h(\"div\", {\n    \"class\": classes.column\n  }, [h(\"div\", {\n    \"class\": \"\".concat(classes.field, \" \").concat(classes.inline, \" \").concat(classes.left, \" VueTables__search\")\n  }, [slots.beforeFilter, genericFilter, slots.afterFilter]), slots.afterFilterWrapper, h(\"div\", {\n    \"class\": \"\".concat(classes.field, \" \").concat(classes.inline, \" \").concat(classes.right, \" VueTables__limit\")\n  }, [slots.beforeLimit, perpage, slots.afterLimit]), columnsDropdown])]);\n  return h(\"div\", {\n    \"class\": \"VueTables VueTables--\" + this.source\n  }, [tableTop, slots.beforeTable, h(\"div\", {\n    \"class\": \"table-responsive\"\n  }, [h(\"table\", {\n    \"class\": \"VueTables__table \".concat(this.opts.skin ? this.opts.skin : classes.table),\n    attrs: {\n      summary: this.opts.summary\n    }\n  }, [caption, h(\"thead\", [slots.prependHead, h(\"tr\", [modules.headings(classes.right)]), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]), h(\"tfoot\", [h(\"tr\", [h(\"td\", {\n    attrs: {\n      colspan: this.colspan\n    }\n  }, [modules.pagination((0, _merge[\"default\"])(classes.pagination, {\n    list: \"\".concat(classes.pagination.list, \" \").concat(classes.right, \" \").concat(classes.nomargin),\n    count: \"\".concat(classes.left)\n  }))])])]), slots.beforeBody, h(\"tbody\", [slots.prependBody, modules.rows(classes), slots.appendBody]), slots.afterBody])]), slots.afterTable]);\n};\n\n//# sourceURL=webpack://VueTables/./lib/templates/footer-pagination.js?");

/***/ }),

/***/ "./lib/themes/bootstrap3.js":
/*!**********************************!*\
  !*** ./lib/themes/bootstrap3.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    framework: 'bootstrap3',\n    table: 'table table-striped table-bordered table-hover',\n    row: 'row',\n    column: 'col-md-12',\n    label: '',\n    input: 'form-control',\n    select: 'form-control',\n    field: 'form-group',\n    inline: 'form-inline',\n    right: 'pull-right',\n    left: 'pull-left',\n    center: 'text-center',\n    contentCenter: '',\n    small: '',\n    nomargin: '',\n    groupTr: 'info',\n    button: 'btn btn-secondary',\n    dropdown: {\n      container: 'dropdown',\n      trigger: 'dropdown-toggle',\n      menu: 'dropdown-menu',\n      content: '',\n      item: '',\n      caret: 'caret'\n    },\n    pagination: {\n      nav: '',\n      count: '',\n      wrapper: '',\n      list: 'pagination',\n      item: 'page-item',\n      link: 'page-link',\n      next: '',\n      prev: '',\n      active: 'active',\n      disabled: 'disabled'\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/themes/bootstrap3.js?");

/***/ }),

/***/ "./lib/themes/bootstrap4.js":
/*!**********************************!*\
  !*** ./lib/themes/bootstrap4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    framework: 'bootstrap4',\n    table: 'table table-striped table-bordered table-hover',\n    row: 'row',\n    column: 'col-md-12',\n    label: '',\n    input: 'form-control',\n    select: 'form-control',\n    field: 'form-group',\n    inline: 'form-inline',\n    right: 'float-right',\n    left: 'float-left',\n    center: 'text-center',\n    contentCenter: 'justify-content-center',\n    nomargin: 'm-0',\n    groupTr: 'table-info',\n    small: '',\n    button: 'btn btn-secondary',\n    dropdown: {\n      container: 'dropdown',\n      trigger: 'dropdown-toggle',\n      menu: 'dropdown-menu',\n      content: '',\n      item: 'dropdown-item',\n      caret: 'caret'\n    },\n    pagination: {\n      nav: '',\n      count: '',\n      wrapper: '',\n      list: 'pagination',\n      item: 'page-item',\n      link: 'page-link',\n      next: '',\n      prev: '',\n      active: 'active',\n      disabled: 'disabled'\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/themes/bootstrap4.js?");

/***/ }),

/***/ "./lib/themes/bulma.js":
/*!*****************************!*\
  !*** ./lib/themes/bulma.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return {\n    framework: 'bulma',\n    table: 'table is-bordered is-striped is-hoverable is-fullwidth',\n    row: 'columns',\n    column: 'column is-12',\n    label: 'label',\n    input: 'input',\n    select: 'select',\n    field: 'field',\n    inline: 'is-horizontal',\n    right: 'is-pulled-right',\n    left: 'is-pulled-left',\n    center: 'has-text-centered',\n    contentCenter: 'is-centered',\n    icon: 'icon',\n    small: 'is-small',\n    nomargin: 'marginless',\n    button: 'button',\n    groupTr: 'is-selected',\n    dropdown: {\n      container: 'dropdown',\n      trigger: 'dropdown-trigger',\n      menu: 'dropdown-menu',\n      content: 'dropdown-content',\n      item: 'dropdown-item',\n      caret: 'fa fa-angle-down'\n    },\n    pagination: {\n      nav: '',\n      count: '',\n      wrapper: 'pagination',\n      list: 'pagination-list',\n      item: '',\n      link: 'pagination-link',\n      next: '',\n      prev: '',\n      active: 'is-current',\n      disabled: ''\n    }\n  };\n};\n\n//# sourceURL=webpack://VueTables/./lib/themes/bulma.js?");

/***/ }),

/***/ "./lib/v-client-table.js":
/*!*******************************!*\
  !*** ./lib/v-client-table.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vuePagination = __webpack_require__(/*! vue-pagination-2 */ \"./node_modules/vue-pagination-2/index.js\");\n\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! ./state/vuex */ \"./lib/state/vuex.js\"));\n\nvar _normal = _interopRequireDefault(__webpack_require__(/*! ./state/normal */ \"./lib/state/normal.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nvar _table = _interopRequireDefault(__webpack_require__(/*! ./table */ \"./lib/table.js\"));\n\nvar _data2 = _interopRequireDefault(__webpack_require__(/*! ./state/data */ \"./lib/state/data.js\"));\n\nvar _resizeableColumns = _interopRequireDefault(__webpack_require__(/*! ./helpers/resizeable-columns */ \"./lib/helpers/resizeable-columns.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _data = __webpack_require__(/*! ./mixins/data */ \"./lib/mixins/data.js\");\n\nvar _created = __webpack_require__(/*! ./mixins/created */ \"./lib/mixins/created.js\");\n\nvar templateCompiler = __webpack_require__(/*! ./template-compiler */ \"./lib/template-compiler.js\");\n\nexports.install = function (Vue, globalOptions, useVuex) {\n  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"bootstrap3\";\n  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"default\";\n\n  var client = _merge[\"default\"].recursive(true, (0, _table[\"default\"])(), {\n    name: \"client-table\",\n    components: {\n      Pagination: _vuePagination.Pagination\n    },\n    render: templateCompiler.call(this, template, theme),\n    props: {\n      columns: {\n        type: Array,\n        required: true\n      },\n      data: {\n        type: Array,\n        required: true\n      },\n      name: {\n        type: String,\n        required: false\n      },\n      options: {\n        type: Object,\n        required: false,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    created: function created() {\n      _created(this);\n\n      if (this.opts.toMomentFormat) this.transformDateStringsToMoment();\n\n      if (!this.vuex) {\n        this.initOrderBy();\n        this.query = this.initQuery();\n        this.customQueries = this.initCustomFilters();\n      }\n    },\n    mounted: function mounted() {\n      this._setFiltersDOM(this.query);\n\n      if (this.opts.resizableColumns) {\n        var removeResizableListeners = (0, _resizeableColumns[\"default\"])(this.$el.querySelector(\"table\"), this.hasChildRow, this.opts.childRowTogglerFirst, this.opts.resizableColumns);\n        this.$once('hook:beforeDestroy', removeResizableListeners);\n      }\n\n      this._setColumnsDropdownCloseListener();\n\n      if (!this.vuex) {\n        this.registerClientFilters();\n        if (this.options.initialPage) this.setPage(this.options.initialPage);\n      }\n\n      if (this.opts.groupBy && !this.opts.orderBy) {\n        this.orderBy.column = this.opts.groupBy;\n      }\n\n      this.loadState();\n\n      if (this.hasDateFilters()) {\n        this.initDateFilters();\n      }\n    },\n    model: {\n      prop: \"data\"\n    },\n    data: function data() {\n      return _merge[\"default\"].recursive(_data(), {\n        source: \"client\",\n        globalOptions: globalOptions,\n        currentlySorting: {},\n        time: Date.now()\n      }, (0, _data2[\"default\"])(useVuex, \"client\", this.options.initialPage));\n    },\n    computed: {\n      q: __webpack_require__(/*! ./computed/q */ \"./lib/computed/q.js\"),\n      customQ: __webpack_require__(/*! ./computed/custom-q */ \"./lib/computed/custom-q.js\"),\n      totalPages: __webpack_require__(/*! ./computed/total-pages */ \"./lib/computed/total-pages.js\"),\n      filteredData: __webpack_require__(/*! ./computed/filtered-data */ \"./lib/computed/filtered-data.js\"),\n      hasMultiSort: function hasMultiSort() {\n        return this.opts.clientMultiSorting;\n      }\n    },\n    methods: {\n      transformDateStringsToMoment: __webpack_require__(/*! ./methods/transform-date-strings-to-moment */ \"./lib/methods/transform-date-strings-to-moment.js\"),\n      registerClientFilters: __webpack_require__(/*! ./methods/register-client-filters */ \"./lib/methods/register-client-filters.js\"),\n      search: __webpack_require__(/*! ./methods/client-search */ \"./lib/methods/client-search.js\"),\n      defaultSort: __webpack_require__(/*! ./methods/default-sort */ \"./lib/methods/default-sort.js\"),\n      getGroupSlot: __webpack_require__(/*! ./methods/get-group-slot */ \"./lib/methods/get-group-slot.js\"),\n      toggleGroup: function toggleGroup(group, e) {\n        e.stopPropagation();\n        var i = this.collapsedGroups.indexOf(group);\n\n        if (i >= 0) {\n          this.collapsedGroups.splice(i, 1);\n        } else {\n          this.collapsedGroups.push(group);\n        }\n      },\n      groupToggleIcon: function groupToggleIcon(group) {\n        var cls = this.opts.sortIcon.base + \" \";\n        cls += this.collapsedGroups.indexOf(group) > -1 ? this.opts.sortIcon.down : this.opts.sortIcon.up;\n        return cls;\n      },\n      loadState: function loadState() {\n        if (!this.opts.saveState) return;\n\n        if (!this.storage.getItem(this.stateKey)) {\n          this.initState();\n          this.activeState = true;\n          return;\n        }\n\n        var state = JSON.parse(this.storage.getItem(this.stateKey));\n        if (this.opts.filterable) this.setFilter(state.query);\n        this.setOrder(state.orderBy.column, state.orderBy.ascending);\n\n        if (this.vuex) {\n          this.commit(\"SET_LIMIT\", state.perPage);\n        } else {\n          this.limit = state.perPage;\n        }\n\n        this.setPage(state.page);\n        this.activeState = true;\n\n        if (state.userControlsColumns) {\n          this.userColumnsDisplay = state.userColumnsDisplay;\n          this.userControlsColumns = state.userControlsColumns;\n        } // TODO: Custom Queries\n\n      }\n    }\n  });\n\n  var state = useVuex ? (0, _vuex[\"default\"])() : (0, _normal[\"default\"])();\n  client = _merge[\"default\"].recursive(client, state);\n  Vue.component(\"v-client-table\", client);\n  return client;\n};\n\n//# sourceURL=webpack://VueTables/./lib/v-client-table.js?");

/***/ }),

/***/ "./lib/v-server-table.js":
/*!*******************************!*\
  !*** ./lib/v-server-table.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\"));\n\nvar _data2 = _interopRequireDefault(__webpack_require__(/*! ./state/data */ \"./lib/state/data.js\"));\n\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! ./state/vuex */ \"./lib/state/vuex.js\"));\n\nvar _normal = _interopRequireDefault(__webpack_require__(/*! ./state/normal */ \"./lib/state/normal.js\"));\n\nvar _table = _interopRequireDefault(__webpack_require__(/*! ./table */ \"./lib/table.js\"));\n\nvar _vuePagination = __webpack_require__(/*! vue-pagination-2 */ \"./node_modules/vue-pagination-2/index.js\");\n\nvar _resizeableColumns = _interopRequireDefault(__webpack_require__(/*! ./helpers/resizeable-columns */ \"./lib/helpers/resizeable-columns.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _data = __webpack_require__(/*! ./mixins/data */ \"./lib/mixins/data.js\");\n\nvar _created = __webpack_require__(/*! ./mixins/created */ \"./lib/mixins/created.js\");\n\nvar templateCompiler = __webpack_require__(/*! ./template-compiler */ \"./lib/template-compiler.js\");\n\nexports.install = function (Vue, globalOptions, useVuex) {\n  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"bootstrap3\";\n  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"default\";\n  var state = useVuex ? (0, _vuex[\"default\"])(\"server\") : (0, _normal[\"default\"])();\n\n  var server = _merge[\"default\"].recursive(true, (0, _table[\"default\"])(), {\n    name: \"server-table\",\n    components: {\n      Pagination: _vuePagination.Pagination\n    },\n    render: templateCompiler.call(this, template, theme),\n    props: {\n      columns: {\n        type: Array,\n        required: true\n      },\n      url: {\n        type: String\n      },\n      name: {\n        type: String,\n        required: false\n      },\n      options: {\n        type: Object,\n        required: false,\n        \"default\": function _default() {\n          return {};\n        }\n      }\n    },\n    created: function created() {\n      if (!this.opts.requestFunction && !this.url) {\n        throw 'vue-tables-2: you must provide either a \"url\" prop or a custom request function. Aborting';\n      }\n\n      _created(this);\n\n      if (!this.vuex) {\n        this.query = this.initQuery();\n        this.initOrderBy();\n        this.customQueries = this.initCustomFilters();\n      }\n\n      if (this.opts.sendInitialRequest) {\n        this.loadState();\n        this.getData(true).then(function (response) {\n          if (typeof response === 'undefined') return;\n          this.setData(response);\n          this.loading = false;\n\n          if (this.hasDateFilters()) {\n            setTimeout(function () {\n              this.initDateFilters();\n            }.bind(this), 0);\n          }\n        }.bind(this));\n      }\n    },\n    mounted: function mounted() {\n      this._setFiltersDOM(this.query);\n\n      if (this.opts.resizableColumns) {\n        var removeResizableListeners = (0, _resizeableColumns[\"default\"])(this.$el.querySelector(\"table\"), this.hasChildRow, this.opts.childRowTogglerFirst, this.opts.resizableColumns);\n        this.$once('hook:beforeDestroy', removeResizableListeners);\n      }\n\n      this._setColumnsDropdownCloseListener();\n\n      if (this.vuex) return;\n      this.registerServerFilters();\n      if (this.options.initialPage) this.setPage(this.options.initialPage, true);\n    },\n    data: function data() {\n      return _merge[\"default\"].recursive(_data(), {\n        source: \"server\",\n        loading: true,\n        lastKeyStrokeAt: false,\n        globalOptions: globalOptions\n      }, (0, _data2[\"default\"])(useVuex, \"server\", this.options.initialPage));\n    },\n    methods: {\n      refresh: __webpack_require__(/*! ./methods/refresh */ \"./lib/methods/refresh.js\"),\n      getData: __webpack_require__(/*! ./methods/get-data */ \"./lib/methods/get-data.js\"),\n      setData: __webpack_require__(/*! ./methods/set-data */ \"./lib/methods/set-data.js\"),\n      serverSearch: __webpack_require__(/*! ./methods/server-search */ \"./lib/methods/server-search.js\"),\n      registerServerFilters: __webpack_require__(/*! ./methods/register-server-filters */ \"./lib/methods/register-server-filters.js\"),\n      loadState: function loadState() {\n        var _this = this;\n\n        if (!this.opts.saveState) return;\n\n        if (!this.storage.getItem(this.stateKey)) {\n          this.initState();\n          this.activeState = true;\n          return;\n        }\n\n        var state = JSON.parse(this.storage.getItem(this.stateKey));\n\n        if (this.vuex) {\n          this.commit(\"SET_STATE\", {\n            query: state.query,\n            customQueries: state.customQueries,\n            page: state.page,\n            limit: state.perPage,\n            orderBy: state.orderBy\n          });\n        } else {\n          this.page = state.page;\n          this.query = state.query;\n          this.customQueries = state.customQueries;\n          this.limit = state.perPage;\n          this.orderBy = state.orderBy;\n        }\n\n        if (!this.opts.pagination.dropdown && this.$refs.pagination) {\n          setTimeout(function () {\n            _this.$refs.pagination.Page = state.page;\n          }, 0);\n        }\n\n        if (this.opts.filterable) {\n          setTimeout(function () {\n            _this._setFiltersDOM(state.query);\n          }, 0);\n        }\n\n        this.activeState = true;\n      }\n    },\n    watch: {\n      url: function url() {\n        this.refresh();\n      }\n    },\n    computed: {\n      totalPages: __webpack_require__(/*! ./computed/total-pages */ \"./lib/computed/total-pages.js\"),\n      filteredQuery: __webpack_require__(/*! ./computed/filtered-query */ \"./lib/computed/filtered-query.js\"),\n      hasMultiSort: function hasMultiSort() {\n        return this.opts.serverMultiSorting;\n      }\n    }\n  }, state);\n\n  Vue.component(\"v-server-table\", server);\n  return server;\n};\n\n//# sourceURL=webpack://VueTables/./lib/v-server-table.js?");

/***/ }),

/***/ "./node_modules/array-intersect/dist/array-intersect.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/array-intersect/dist/array-intersect.module.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar intersect = function intersect(first) {\n  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    rest[_key - 1] = arguments[_key];\n  }\n\n  return rest.reduce(function (accum, current) {\n    return accum.filter(function (x) {\n      return current.indexOf(x) !== -1;\n    });\n  }, first);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (intersect);\n\n\n//# sourceURL=webpack://VueTables/./node_modules/array-intersect/dist/array-intersect.module.js?");

/***/ }),

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/\n\nmodule.exports = function mergeJSXProps (objs) {\n  return objs.reduce(function (a, b) {\n    var aa, bb, key, nestedKey, temp\n    for (key in b) {\n      aa = a[key]\n      bb = b[key]\n      if (aa && nestRE.test(key)) {\n        // normalize class\n        if (key === 'class') {\n          if (typeof aa === 'string') {\n            temp = aa\n            a[key] = aa = {}\n            aa[temp] = true\n          }\n          if (typeof bb === 'string') {\n            temp = bb\n            b[key] = bb = {}\n            bb[temp] = true\n          }\n        }\n        if (key === 'on' || key === 'nativeOn' || key === 'hook') {\n          // merge functions\n          for (nestedKey in bb) {\n            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])\n          }\n        } else if (Array.isArray(aa)) {\n          a[key] = aa.concat(bb)\n        } else if (Array.isArray(bb)) {\n          a[key] = [aa].concat(bb)\n        } else {\n          for (nestedKey in bb) {\n            aa[nestedKey] = bb[nestedKey]\n          }\n        }\n      } else {\n        a[key] = b[key]\n      }\n    }\n    return a\n  }, {})\n}\n\nfunction mergeFn (a, b) {\n  return function () {\n    a && a.apply(this, arguments)\n    b && b.apply(this, arguments)\n  }\n}\n\n\n//# sourceURL=webpack://VueTables/./node_modules/babel-helper-vue-jsx-merge-props/index.js?");

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.byteLength = byteLength\nexports.toByteArray = toByteArray\nexports.fromByteArray = fromByteArray\n\nvar lookup = []\nvar revLookup = []\nvar Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array\n\nvar code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'\nfor (var i = 0, len = code.length; i < len; ++i) {\n  lookup[i] = code[i]\n  revLookup[code.charCodeAt(i)] = i\n}\n\n// Support decoding URL-safe base64 strings, as Node.js does.\n// See: https://en.wikipedia.org/wiki/Base64#URL_applications\nrevLookup['-'.charCodeAt(0)] = 62\nrevLookup['_'.charCodeAt(0)] = 63\n\nfunction getLens (b64) {\n  var len = b64.length\n\n  if (len % 4 > 0) {\n    throw new Error('Invalid string. Length must be a multiple of 4')\n  }\n\n  // Trim off extra bytes after placeholder bytes are found\n  // See: https://github.com/beatgammit/base64-js/issues/42\n  var validLen = b64.indexOf('=')\n  if (validLen === -1) validLen = len\n\n  var placeHoldersLen = validLen === len\n    ? 0\n    : 4 - (validLen % 4)\n\n  return [validLen, placeHoldersLen]\n}\n\n// base64 is 4/3 + up to two characters of the original data\nfunction byteLength (b64) {\n  var lens = getLens(b64)\n  var validLen = lens[0]\n  var placeHoldersLen = lens[1]\n  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen\n}\n\nfunction _byteLength (b64, validLen, placeHoldersLen) {\n  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen\n}\n\nfunction toByteArray (b64) {\n  var tmp\n  var lens = getLens(b64)\n  var validLen = lens[0]\n  var placeHoldersLen = lens[1]\n\n  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))\n\n  var curByte = 0\n\n  // if there are placeholders, only get up to the last complete 4 chars\n  var len = placeHoldersLen > 0\n    ? validLen - 4\n    : validLen\n\n  var i\n  for (i = 0; i < len; i += 4) {\n    tmp =\n      (revLookup[b64.charCodeAt(i)] << 18) |\n      (revLookup[b64.charCodeAt(i + 1)] << 12) |\n      (revLookup[b64.charCodeAt(i + 2)] << 6) |\n      revLookup[b64.charCodeAt(i + 3)]\n    arr[curByte++] = (tmp >> 16) & 0xFF\n    arr[curByte++] = (tmp >> 8) & 0xFF\n    arr[curByte++] = tmp & 0xFF\n  }\n\n  if (placeHoldersLen === 2) {\n    tmp =\n      (revLookup[b64.charCodeAt(i)] << 2) |\n      (revLookup[b64.charCodeAt(i + 1)] >> 4)\n    arr[curByte++] = tmp & 0xFF\n  }\n\n  if (placeHoldersLen === 1) {\n    tmp =\n      (revLookup[b64.charCodeAt(i)] << 10) |\n      (revLookup[b64.charCodeAt(i + 1)] << 4) |\n      (revLookup[b64.charCodeAt(i + 2)] >> 2)\n    arr[curByte++] = (tmp >> 8) & 0xFF\n    arr[curByte++] = tmp & 0xFF\n  }\n\n  return arr\n}\n\nfunction tripletToBase64 (num) {\n  return lookup[num >> 18 & 0x3F] +\n    lookup[num >> 12 & 0x3F] +\n    lookup[num >> 6 & 0x3F] +\n    lookup[num & 0x3F]\n}\n\nfunction encodeChunk (uint8, start, end) {\n  var tmp\n  var output = []\n  for (var i = start; i < end; i += 3) {\n    tmp =\n      ((uint8[i] << 16) & 0xFF0000) +\n      ((uint8[i + 1] << 8) & 0xFF00) +\n      (uint8[i + 2] & 0xFF)\n    output.push(tripletToBase64(tmp))\n  }\n  return output.join('')\n}\n\nfunction fromByteArray (uint8) {\n  var tmp\n  var len = uint8.length\n  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes\n  var parts = []\n  var maxChunkLength = 16383 // must be multiple of 3\n\n  // go through the array every three bytes, we'll deal with trailing stuff later\n  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {\n    parts.push(encodeChunk(\n      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)\n    ))\n  }\n\n  // pad the end with zeros, but make sure to not forget the extra bytes\n  if (extraBytes === 1) {\n    tmp = uint8[len - 1]\n    parts.push(\n      lookup[tmp >> 2] +\n      lookup[(tmp << 4) & 0x3F] +\n      '=='\n    )\n  } else if (extraBytes === 2) {\n    tmp = (uint8[len - 2] << 8) + uint8[len - 1]\n    parts.push(\n      lookup[tmp >> 10] +\n      lookup[(tmp >> 4) & 0x3F] +\n      lookup[(tmp << 2) & 0x3F] +\n      '='\n    )\n  }\n\n  return parts.join('')\n}\n\n\n//# sourceURL=webpack://VueTables/./node_modules/base64-js/index.js?");

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <http://feross.org>\n * @license  MIT\n */\n/* eslint-disable no-proto */\n\n\n\nvar base64 = __webpack_require__(/*! base64-js */ \"./node_modules/base64-js/index.js\")\nvar ieee754 = __webpack_require__(/*! ieee754 */ \"./node_modules/ieee754/index.js\")\nvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\")\n\nexports.Buffer = Buffer\nexports.SlowBuffer = SlowBuffer\nexports.INSPECT_MAX_BYTES = 50\n\n/**\n * If `Buffer.TYPED_ARRAY_SUPPORT`:\n *   === true    Use Uint8Array implementation (fastest)\n *   === false   Use Object implementation (most compatible, even IE6)\n *\n * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,\n * Opera 11.6+, iOS 4.2+.\n *\n * Due to various browser bugs, sometimes the Object implementation will be used even\n * when the browser supports typed arrays.\n *\n * Note:\n *\n *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,\n *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.\n *\n *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.\n *\n *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of\n *     incorrect length in some situations.\n\n * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they\n * get the Object implementation, which is slower but behaves correctly.\n */\nBuffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined\n  ? global.TYPED_ARRAY_SUPPORT\n  : typedArraySupport()\n\n/*\n * Export kMaxLength after typed array support is determined.\n */\nexports.kMaxLength = kMaxLength()\n\nfunction typedArraySupport () {\n  try {\n    var arr = new Uint8Array(1)\n    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}\n    return arr.foo() === 42 && // typed array instances can be augmented\n        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`\n        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`\n  } catch (e) {\n    return false\n  }\n}\n\nfunction kMaxLength () {\n  return Buffer.TYPED_ARRAY_SUPPORT\n    ? 0x7fffffff\n    : 0x3fffffff\n}\n\nfunction createBuffer (that, length) {\n  if (kMaxLength() < length) {\n    throw new RangeError('Invalid typed array length')\n  }\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    that = new Uint8Array(length)\n    that.__proto__ = Buffer.prototype\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    if (that === null) {\n      that = new Buffer(length)\n    }\n    that.length = length\n  }\n\n  return that\n}\n\n/**\n * The Buffer constructor returns instances of `Uint8Array` that have their\n * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of\n * `Uint8Array`, so the returned instances will have all the node `Buffer` methods\n * and the `Uint8Array` methods. Square bracket notation works as expected -- it\n * returns a single octet.\n *\n * The `Uint8Array` prototype remains unmodified.\n */\n\nfunction Buffer (arg, encodingOrOffset, length) {\n  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {\n    return new Buffer(arg, encodingOrOffset, length)\n  }\n\n  // Common case.\n  if (typeof arg === 'number') {\n    if (typeof encodingOrOffset === 'string') {\n      throw new Error(\n        'If encoding is specified then the first argument must be a string'\n      )\n    }\n    return allocUnsafe(this, arg)\n  }\n  return from(this, arg, encodingOrOffset, length)\n}\n\nBuffer.poolSize = 8192 // not used by this implementation\n\n// TODO: Legacy, not needed anymore. Remove in next major version.\nBuffer._augment = function (arr) {\n  arr.__proto__ = Buffer.prototype\n  return arr\n}\n\nfunction from (that, value, encodingOrOffset, length) {\n  if (typeof value === 'number') {\n    throw new TypeError('\"value\" argument must not be a number')\n  }\n\n  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {\n    return fromArrayBuffer(that, value, encodingOrOffset, length)\n  }\n\n  if (typeof value === 'string') {\n    return fromString(that, value, encodingOrOffset)\n  }\n\n  return fromObject(that, value)\n}\n\n/**\n * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError\n * if value is a number.\n * Buffer.from(str[, encoding])\n * Buffer.from(array)\n * Buffer.from(buffer)\n * Buffer.from(arrayBuffer[, byteOffset[, length]])\n **/\nBuffer.from = function (value, encodingOrOffset, length) {\n  return from(null, value, encodingOrOffset, length)\n}\n\nif (Buffer.TYPED_ARRAY_SUPPORT) {\n  Buffer.prototype.__proto__ = Uint8Array.prototype\n  Buffer.__proto__ = Uint8Array\n  if (typeof Symbol !== 'undefined' && Symbol.species &&\n      Buffer[Symbol.species] === Buffer) {\n    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97\n    Object.defineProperty(Buffer, Symbol.species, {\n      value: null,\n      configurable: true\n    })\n  }\n}\n\nfunction assertSize (size) {\n  if (typeof size !== 'number') {\n    throw new TypeError('\"size\" argument must be a number')\n  } else if (size < 0) {\n    throw new RangeError('\"size\" argument must not be negative')\n  }\n}\n\nfunction alloc (that, size, fill, encoding) {\n  assertSize(size)\n  if (size <= 0) {\n    return createBuffer(that, size)\n  }\n  if (fill !== undefined) {\n    // Only pay attention to encoding if it's a string. This\n    // prevents accidentally sending in a number that would\n    // be interpretted as a start offset.\n    return typeof encoding === 'string'\n      ? createBuffer(that, size).fill(fill, encoding)\n      : createBuffer(that, size).fill(fill)\n  }\n  return createBuffer(that, size)\n}\n\n/**\n * Creates a new filled Buffer instance.\n * alloc(size[, fill[, encoding]])\n **/\nBuffer.alloc = function (size, fill, encoding) {\n  return alloc(null, size, fill, encoding)\n}\n\nfunction allocUnsafe (that, size) {\n  assertSize(size)\n  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) {\n    for (var i = 0; i < size; ++i) {\n      that[i] = 0\n    }\n  }\n  return that\n}\n\n/**\n * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.\n * */\nBuffer.allocUnsafe = function (size) {\n  return allocUnsafe(null, size)\n}\n/**\n * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.\n */\nBuffer.allocUnsafeSlow = function (size) {\n  return allocUnsafe(null, size)\n}\n\nfunction fromString (that, string, encoding) {\n  if (typeof encoding !== 'string' || encoding === '') {\n    encoding = 'utf8'\n  }\n\n  if (!Buffer.isEncoding(encoding)) {\n    throw new TypeError('\"encoding\" must be a valid string encoding')\n  }\n\n  var length = byteLength(string, encoding) | 0\n  that = createBuffer(that, length)\n\n  var actual = that.write(string, encoding)\n\n  if (actual !== length) {\n    // Writing a hex string, for example, that contains invalid characters will\n    // cause everything after the first invalid character to be ignored. (e.g.\n    // 'abxxcd' will be treated as 'ab')\n    that = that.slice(0, actual)\n  }\n\n  return that\n}\n\nfunction fromArrayLike (that, array) {\n  var length = array.length < 0 ? 0 : checked(array.length) | 0\n  that = createBuffer(that, length)\n  for (var i = 0; i < length; i += 1) {\n    that[i] = array[i] & 255\n  }\n  return that\n}\n\nfunction fromArrayBuffer (that, array, byteOffset, length) {\n  array.byteLength // this throws if `array` is not a valid ArrayBuffer\n\n  if (byteOffset < 0 || array.byteLength < byteOffset) {\n    throw new RangeError('\\'offset\\' is out of bounds')\n  }\n\n  if (array.byteLength < byteOffset + (length || 0)) {\n    throw new RangeError('\\'length\\' is out of bounds')\n  }\n\n  if (byteOffset === undefined && length === undefined) {\n    array = new Uint8Array(array)\n  } else if (length === undefined) {\n    array = new Uint8Array(array, byteOffset)\n  } else {\n    array = new Uint8Array(array, byteOffset, length)\n  }\n\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    // Return an augmented `Uint8Array` instance, for best performance\n    that = array\n    that.__proto__ = Buffer.prototype\n  } else {\n    // Fallback: Return an object instance of the Buffer class\n    that = fromArrayLike(that, array)\n  }\n  return that\n}\n\nfunction fromObject (that, obj) {\n  if (Buffer.isBuffer(obj)) {\n    var len = checked(obj.length) | 0\n    that = createBuffer(that, len)\n\n    if (that.length === 0) {\n      return that\n    }\n\n    obj.copy(that, 0, 0, len)\n    return that\n  }\n\n  if (obj) {\n    if ((typeof ArrayBuffer !== 'undefined' &&\n        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {\n      if (typeof obj.length !== 'number' || isnan(obj.length)) {\n        return createBuffer(that, 0)\n      }\n      return fromArrayLike(that, obj)\n    }\n\n    if (obj.type === 'Buffer' && isArray(obj.data)) {\n      return fromArrayLike(that, obj.data)\n    }\n  }\n\n  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')\n}\n\nfunction checked (length) {\n  // Note: cannot use `length < kMaxLength()` here because that fails when\n  // length is NaN (which is otherwise coerced to zero.)\n  if (length >= kMaxLength()) {\n    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +\n                         'size: 0x' + kMaxLength().toString(16) + ' bytes')\n  }\n  return length | 0\n}\n\nfunction SlowBuffer (length) {\n  if (+length != length) { // eslint-disable-line eqeqeq\n    length = 0\n  }\n  return Buffer.alloc(+length)\n}\n\nBuffer.isBuffer = function isBuffer (b) {\n  return !!(b != null && b._isBuffer)\n}\n\nBuffer.compare = function compare (a, b) {\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    throw new TypeError('Arguments must be Buffers')\n  }\n\n  if (a === b) return 0\n\n  var x = a.length\n  var y = b.length\n\n  for (var i = 0, len = Math.min(x, y); i < len; ++i) {\n    if (a[i] !== b[i]) {\n      x = a[i]\n      y = b[i]\n      break\n    }\n  }\n\n  if (x < y) return -1\n  if (y < x) return 1\n  return 0\n}\n\nBuffer.isEncoding = function isEncoding (encoding) {\n  switch (String(encoding).toLowerCase()) {\n    case 'hex':\n    case 'utf8':\n    case 'utf-8':\n    case 'ascii':\n    case 'latin1':\n    case 'binary':\n    case 'base64':\n    case 'ucs2':\n    case 'ucs-2':\n    case 'utf16le':\n    case 'utf-16le':\n      return true\n    default:\n      return false\n  }\n}\n\nBuffer.concat = function concat (list, length) {\n  if (!isArray(list)) {\n    throw new TypeError('\"list\" argument must be an Array of Buffers')\n  }\n\n  if (list.length === 0) {\n    return Buffer.alloc(0)\n  }\n\n  var i\n  if (length === undefined) {\n    length = 0\n    for (i = 0; i < list.length; ++i) {\n      length += list[i].length\n    }\n  }\n\n  var buffer = Buffer.allocUnsafe(length)\n  var pos = 0\n  for (i = 0; i < list.length; ++i) {\n    var buf = list[i]\n    if (!Buffer.isBuffer(buf)) {\n      throw new TypeError('\"list\" argument must be an Array of Buffers')\n    }\n    buf.copy(buffer, pos)\n    pos += buf.length\n  }\n  return buffer\n}\n\nfunction byteLength (string, encoding) {\n  if (Buffer.isBuffer(string)) {\n    return string.length\n  }\n  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&\n      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {\n    return string.byteLength\n  }\n  if (typeof string !== 'string') {\n    string = '' + string\n  }\n\n  var len = string.length\n  if (len === 0) return 0\n\n  // Use a for loop to avoid recursion\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'ascii':\n      case 'latin1':\n      case 'binary':\n        return len\n      case 'utf8':\n      case 'utf-8':\n      case undefined:\n        return utf8ToBytes(string).length\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return len * 2\n      case 'hex':\n        return len >>> 1\n      case 'base64':\n        return base64ToBytes(string).length\n      default:\n        if (loweredCase) return utf8ToBytes(string).length // assume utf8\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\nBuffer.byteLength = byteLength\n\nfunction slowToString (encoding, start, end) {\n  var loweredCase = false\n\n  // No need to verify that \"this.length <= MAX_UINT32\" since it's a read-only\n  // property of a typed array.\n\n  // This behaves neither like String nor Uint8Array in that we set start/end\n  // to their upper/lower bounds if the value passed is out of range.\n  // undefined is handled specially as per ECMA-262 6th Edition,\n  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.\n  if (start === undefined || start < 0) {\n    start = 0\n  }\n  // Return early if start > this.length. Done here to prevent potential uint32\n  // coercion fail below.\n  if (start > this.length) {\n    return ''\n  }\n\n  if (end === undefined || end > this.length) {\n    end = this.length\n  }\n\n  if (end <= 0) {\n    return ''\n  }\n\n  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.\n  end >>>= 0\n  start >>>= 0\n\n  if (end <= start) {\n    return ''\n  }\n\n  if (!encoding) encoding = 'utf8'\n\n  while (true) {\n    switch (encoding) {\n      case 'hex':\n        return hexSlice(this, start, end)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Slice(this, start, end)\n\n      case 'ascii':\n        return asciiSlice(this, start, end)\n\n      case 'latin1':\n      case 'binary':\n        return latin1Slice(this, start, end)\n\n      case 'base64':\n        return base64Slice(this, start, end)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return utf16leSlice(this, start, end)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = (encoding + '').toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\n// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect\n// Buffer instances.\nBuffer.prototype._isBuffer = true\n\nfunction swap (b, n, m) {\n  var i = b[n]\n  b[n] = b[m]\n  b[m] = i\n}\n\nBuffer.prototype.swap16 = function swap16 () {\n  var len = this.length\n  if (len % 2 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 16-bits')\n  }\n  for (var i = 0; i < len; i += 2) {\n    swap(this, i, i + 1)\n  }\n  return this\n}\n\nBuffer.prototype.swap32 = function swap32 () {\n  var len = this.length\n  if (len % 4 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 32-bits')\n  }\n  for (var i = 0; i < len; i += 4) {\n    swap(this, i, i + 3)\n    swap(this, i + 1, i + 2)\n  }\n  return this\n}\n\nBuffer.prototype.swap64 = function swap64 () {\n  var len = this.length\n  if (len % 8 !== 0) {\n    throw new RangeError('Buffer size must be a multiple of 64-bits')\n  }\n  for (var i = 0; i < len; i += 8) {\n    swap(this, i, i + 7)\n    swap(this, i + 1, i + 6)\n    swap(this, i + 2, i + 5)\n    swap(this, i + 3, i + 4)\n  }\n  return this\n}\n\nBuffer.prototype.toString = function toString () {\n  var length = this.length | 0\n  if (length === 0) return ''\n  if (arguments.length === 0) return utf8Slice(this, 0, length)\n  return slowToString.apply(this, arguments)\n}\n\nBuffer.prototype.equals = function equals (b) {\n  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')\n  if (this === b) return true\n  return Buffer.compare(this, b) === 0\n}\n\nBuffer.prototype.inspect = function inspect () {\n  var str = ''\n  var max = exports.INSPECT_MAX_BYTES\n  if (this.length > 0) {\n    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')\n    if (this.length > max) str += ' ... '\n  }\n  return '<Buffer ' + str + '>'\n}\n\nBuffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {\n  if (!Buffer.isBuffer(target)) {\n    throw new TypeError('Argument must be a Buffer')\n  }\n\n  if (start === undefined) {\n    start = 0\n  }\n  if (end === undefined) {\n    end = target ? target.length : 0\n  }\n  if (thisStart === undefined) {\n    thisStart = 0\n  }\n  if (thisEnd === undefined) {\n    thisEnd = this.length\n  }\n\n  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {\n    throw new RangeError('out of range index')\n  }\n\n  if (thisStart >= thisEnd && start >= end) {\n    return 0\n  }\n  if (thisStart >= thisEnd) {\n    return -1\n  }\n  if (start >= end) {\n    return 1\n  }\n\n  start >>>= 0\n  end >>>= 0\n  thisStart >>>= 0\n  thisEnd >>>= 0\n\n  if (this === target) return 0\n\n  var x = thisEnd - thisStart\n  var y = end - start\n  var len = Math.min(x, y)\n\n  var thisCopy = this.slice(thisStart, thisEnd)\n  var targetCopy = target.slice(start, end)\n\n  for (var i = 0; i < len; ++i) {\n    if (thisCopy[i] !== targetCopy[i]) {\n      x = thisCopy[i]\n      y = targetCopy[i]\n      break\n    }\n  }\n\n  if (x < y) return -1\n  if (y < x) return 1\n  return 0\n}\n\n// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,\n// OR the last index of `val` in `buffer` at offset <= `byteOffset`.\n//\n// Arguments:\n// - buffer - a Buffer to search\n// - val - a string, Buffer, or number\n// - byteOffset - an index into `buffer`; will be clamped to an int32\n// - encoding - an optional encoding, relevant is val is a string\n// - dir - true for indexOf, false for lastIndexOf\nfunction bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {\n  // Empty buffer means no match\n  if (buffer.length === 0) return -1\n\n  // Normalize byteOffset\n  if (typeof byteOffset === 'string') {\n    encoding = byteOffset\n    byteOffset = 0\n  } else if (byteOffset > 0x7fffffff) {\n    byteOffset = 0x7fffffff\n  } else if (byteOffset < -0x80000000) {\n    byteOffset = -0x80000000\n  }\n  byteOffset = +byteOffset  // Coerce to Number.\n  if (isNaN(byteOffset)) {\n    // byteOffset: it it's undefined, null, NaN, \"foo\", etc, search whole buffer\n    byteOffset = dir ? 0 : (buffer.length - 1)\n  }\n\n  // Normalize byteOffset: negative offsets start from the end of the buffer\n  if (byteOffset < 0) byteOffset = buffer.length + byteOffset\n  if (byteOffset >= buffer.length) {\n    if (dir) return -1\n    else byteOffset = buffer.length - 1\n  } else if (byteOffset < 0) {\n    if (dir) byteOffset = 0\n    else return -1\n  }\n\n  // Normalize val\n  if (typeof val === 'string') {\n    val = Buffer.from(val, encoding)\n  }\n\n  // Finally, search either indexOf (if dir is true) or lastIndexOf\n  if (Buffer.isBuffer(val)) {\n    // Special case: looking for empty string/buffer always fails\n    if (val.length === 0) {\n      return -1\n    }\n    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)\n  } else if (typeof val === 'number') {\n    val = val & 0xFF // Search for a byte value [0-255]\n    if (Buffer.TYPED_ARRAY_SUPPORT &&\n        typeof Uint8Array.prototype.indexOf === 'function') {\n      if (dir) {\n        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)\n      } else {\n        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)\n      }\n    }\n    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)\n  }\n\n  throw new TypeError('val must be string, number or Buffer')\n}\n\nfunction arrayIndexOf (arr, val, byteOffset, encoding, dir) {\n  var indexSize = 1\n  var arrLength = arr.length\n  var valLength = val.length\n\n  if (encoding !== undefined) {\n    encoding = String(encoding).toLowerCase()\n    if (encoding === 'ucs2' || encoding === 'ucs-2' ||\n        encoding === 'utf16le' || encoding === 'utf-16le') {\n      if (arr.length < 2 || val.length < 2) {\n        return -1\n      }\n      indexSize = 2\n      arrLength /= 2\n      valLength /= 2\n      byteOffset /= 2\n    }\n  }\n\n  function read (buf, i) {\n    if (indexSize === 1) {\n      return buf[i]\n    } else {\n      return buf.readUInt16BE(i * indexSize)\n    }\n  }\n\n  var i\n  if (dir) {\n    var foundIndex = -1\n    for (i = byteOffset; i < arrLength; i++) {\n      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {\n        if (foundIndex === -1) foundIndex = i\n        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize\n      } else {\n        if (foundIndex !== -1) i -= i - foundIndex\n        foundIndex = -1\n      }\n    }\n  } else {\n    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength\n    for (i = byteOffset; i >= 0; i--) {\n      var found = true\n      for (var j = 0; j < valLength; j++) {\n        if (read(arr, i + j) !== read(val, j)) {\n          found = false\n          break\n        }\n      }\n      if (found) return i\n    }\n  }\n\n  return -1\n}\n\nBuffer.prototype.includes = function includes (val, byteOffset, encoding) {\n  return this.indexOf(val, byteOffset, encoding) !== -1\n}\n\nBuffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {\n  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)\n}\n\nBuffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {\n  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)\n}\n\nfunction hexWrite (buf, string, offset, length) {\n  offset = Number(offset) || 0\n  var remaining = buf.length - offset\n  if (!length) {\n    length = remaining\n  } else {\n    length = Number(length)\n    if (length > remaining) {\n      length = remaining\n    }\n  }\n\n  // must be an even number of digits\n  var strLen = string.length\n  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')\n\n  if (length > strLen / 2) {\n    length = strLen / 2\n  }\n  for (var i = 0; i < length; ++i) {\n    var parsed = parseInt(string.substr(i * 2, 2), 16)\n    if (isNaN(parsed)) return i\n    buf[offset + i] = parsed\n  }\n  return i\n}\n\nfunction utf8Write (buf, string, offset, length) {\n  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nfunction asciiWrite (buf, string, offset, length) {\n  return blitBuffer(asciiToBytes(string), buf, offset, length)\n}\n\nfunction latin1Write (buf, string, offset, length) {\n  return asciiWrite(buf, string, offset, length)\n}\n\nfunction base64Write (buf, string, offset, length) {\n  return blitBuffer(base64ToBytes(string), buf, offset, length)\n}\n\nfunction ucs2Write (buf, string, offset, length) {\n  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)\n}\n\nBuffer.prototype.write = function write (string, offset, length, encoding) {\n  // Buffer#write(string)\n  if (offset === undefined) {\n    encoding = 'utf8'\n    length = this.length\n    offset = 0\n  // Buffer#write(string, encoding)\n  } else if (length === undefined && typeof offset === 'string') {\n    encoding = offset\n    length = this.length\n    offset = 0\n  // Buffer#write(string, offset[, length][, encoding])\n  } else if (isFinite(offset)) {\n    offset = offset | 0\n    if (isFinite(length)) {\n      length = length | 0\n      if (encoding === undefined) encoding = 'utf8'\n    } else {\n      encoding = length\n      length = undefined\n    }\n  // legacy write(string, encoding, offset, length) - remove in v0.13\n  } else {\n    throw new Error(\n      'Buffer.write(string, encoding, offset[, length]) is no longer supported'\n    )\n  }\n\n  var remaining = this.length - offset\n  if (length === undefined || length > remaining) length = remaining\n\n  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {\n    throw new RangeError('Attempt to write outside buffer bounds')\n  }\n\n  if (!encoding) encoding = 'utf8'\n\n  var loweredCase = false\n  for (;;) {\n    switch (encoding) {\n      case 'hex':\n        return hexWrite(this, string, offset, length)\n\n      case 'utf8':\n      case 'utf-8':\n        return utf8Write(this, string, offset, length)\n\n      case 'ascii':\n        return asciiWrite(this, string, offset, length)\n\n      case 'latin1':\n      case 'binary':\n        return latin1Write(this, string, offset, length)\n\n      case 'base64':\n        // Warning: maxLength not taken into account in base64Write\n        return base64Write(this, string, offset, length)\n\n      case 'ucs2':\n      case 'ucs-2':\n      case 'utf16le':\n      case 'utf-16le':\n        return ucs2Write(this, string, offset, length)\n\n      default:\n        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)\n        encoding = ('' + encoding).toLowerCase()\n        loweredCase = true\n    }\n  }\n}\n\nBuffer.prototype.toJSON = function toJSON () {\n  return {\n    type: 'Buffer',\n    data: Array.prototype.slice.call(this._arr || this, 0)\n  }\n}\n\nfunction base64Slice (buf, start, end) {\n  if (start === 0 && end === buf.length) {\n    return base64.fromByteArray(buf)\n  } else {\n    return base64.fromByteArray(buf.slice(start, end))\n  }\n}\n\nfunction utf8Slice (buf, start, end) {\n  end = Math.min(buf.length, end)\n  var res = []\n\n  var i = start\n  while (i < end) {\n    var firstByte = buf[i]\n    var codePoint = null\n    var bytesPerSequence = (firstByte > 0xEF) ? 4\n      : (firstByte > 0xDF) ? 3\n      : (firstByte > 0xBF) ? 2\n      : 1\n\n    if (i + bytesPerSequence <= end) {\n      var secondByte, thirdByte, fourthByte, tempCodePoint\n\n      switch (bytesPerSequence) {\n        case 1:\n          if (firstByte < 0x80) {\n            codePoint = firstByte\n          }\n          break\n        case 2:\n          secondByte = buf[i + 1]\n          if ((secondByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)\n            if (tempCodePoint > 0x7F) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 3:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)\n            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {\n              codePoint = tempCodePoint\n            }\n          }\n          break\n        case 4:\n          secondByte = buf[i + 1]\n          thirdByte = buf[i + 2]\n          fourthByte = buf[i + 3]\n          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {\n            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)\n            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {\n              codePoint = tempCodePoint\n            }\n          }\n      }\n    }\n\n    if (codePoint === null) {\n      // we did not generate a valid codePoint so insert a\n      // replacement char (U+FFFD) and advance only 1 byte\n      codePoint = 0xFFFD\n      bytesPerSequence = 1\n    } else if (codePoint > 0xFFFF) {\n      // encode to utf16 (surrogate pair dance)\n      codePoint -= 0x10000\n      res.push(codePoint >>> 10 & 0x3FF | 0xD800)\n      codePoint = 0xDC00 | codePoint & 0x3FF\n    }\n\n    res.push(codePoint)\n    i += bytesPerSequence\n  }\n\n  return decodeCodePointsArray(res)\n}\n\n// Based on http://stackoverflow.com/a/22747272/680742, the browser with\n// the lowest limit is Chrome, with 0x10000 args.\n// We go 1 magnitude less, for safety\nvar MAX_ARGUMENTS_LENGTH = 0x1000\n\nfunction decodeCodePointsArray (codePoints) {\n  var len = codePoints.length\n  if (len <= MAX_ARGUMENTS_LENGTH) {\n    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()\n  }\n\n  // Decode in chunks to avoid \"call stack size exceeded\".\n  var res = ''\n  var i = 0\n  while (i < len) {\n    res += String.fromCharCode.apply(\n      String,\n      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)\n    )\n  }\n  return res\n}\n\nfunction asciiSlice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; ++i) {\n    ret += String.fromCharCode(buf[i] & 0x7F)\n  }\n  return ret\n}\n\nfunction latin1Slice (buf, start, end) {\n  var ret = ''\n  end = Math.min(buf.length, end)\n\n  for (var i = start; i < end; ++i) {\n    ret += String.fromCharCode(buf[i])\n  }\n  return ret\n}\n\nfunction hexSlice (buf, start, end) {\n  var len = buf.length\n\n  if (!start || start < 0) start = 0\n  if (!end || end < 0 || end > len) end = len\n\n  var out = ''\n  for (var i = start; i < end; ++i) {\n    out += toHex(buf[i])\n  }\n  return out\n}\n\nfunction utf16leSlice (buf, start, end) {\n  var bytes = buf.slice(start, end)\n  var res = ''\n  for (var i = 0; i < bytes.length; i += 2) {\n    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)\n  }\n  return res\n}\n\nBuffer.prototype.slice = function slice (start, end) {\n  var len = this.length\n  start = ~~start\n  end = end === undefined ? len : ~~end\n\n  if (start < 0) {\n    start += len\n    if (start < 0) start = 0\n  } else if (start > len) {\n    start = len\n  }\n\n  if (end < 0) {\n    end += len\n    if (end < 0) end = 0\n  } else if (end > len) {\n    end = len\n  }\n\n  if (end < start) end = start\n\n  var newBuf\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    newBuf = this.subarray(start, end)\n    newBuf.__proto__ = Buffer.prototype\n  } else {\n    var sliceLen = end - start\n    newBuf = new Buffer(sliceLen, undefined)\n    for (var i = 0; i < sliceLen; ++i) {\n      newBuf[i] = this[i + start]\n    }\n  }\n\n  return newBuf\n}\n\n/*\n * Need to make sure that buffer isn't trying to write out of bounds.\n */\nfunction checkOffset (offset, ext, length) {\n  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')\n  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')\n}\n\nBuffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    checkOffset(offset, byteLength, this.length)\n  }\n\n  var val = this[offset + --byteLength]\n  var mul = 1\n  while (byteLength > 0 && (mul *= 0x100)) {\n    val += this[offset + --byteLength] * mul\n  }\n\n  return val\n}\n\nBuffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  return this[offset]\n}\n\nBuffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return this[offset] | (this[offset + 1] << 8)\n}\n\nBuffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  return (this[offset] << 8) | this[offset + 1]\n}\n\nBuffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return ((this[offset]) |\n      (this[offset + 1] << 8) |\n      (this[offset + 2] << 16)) +\n      (this[offset + 3] * 0x1000000)\n}\n\nBuffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] * 0x1000000) +\n    ((this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    this[offset + 3])\n}\n\nBuffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var val = this[offset]\n  var mul = 1\n  var i = 0\n  while (++i < byteLength && (mul *= 0x100)) {\n    val += this[offset + i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) checkOffset(offset, byteLength, this.length)\n\n  var i = byteLength\n  var mul = 1\n  var val = this[offset + --i]\n  while (i > 0 && (mul *= 0x100)) {\n    val += this[offset + --i] * mul\n  }\n  mul *= 0x80\n\n  if (val >= mul) val -= Math.pow(2, 8 * byteLength)\n\n  return val\n}\n\nBuffer.prototype.readInt8 = function readInt8 (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 1, this.length)\n  if (!(this[offset] & 0x80)) return (this[offset])\n  return ((0xff - this[offset] + 1) * -1)\n}\n\nBuffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset] | (this[offset + 1] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 2, this.length)\n  var val = this[offset + 1] | (this[offset] << 8)\n  return (val & 0x8000) ? val | 0xFFFF0000 : val\n}\n\nBuffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset]) |\n    (this[offset + 1] << 8) |\n    (this[offset + 2] << 16) |\n    (this[offset + 3] << 24)\n}\n\nBuffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n\n  return (this[offset] << 24) |\n    (this[offset + 1] << 16) |\n    (this[offset + 2] << 8) |\n    (this[offset + 3])\n}\n\nBuffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, true, 23, 4)\n}\n\nBuffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 4, this.length)\n  return ieee754.read(this, offset, false, 23, 4)\n}\n\nBuffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, true, 52, 8)\n}\n\nBuffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {\n  if (!noAssert) checkOffset(offset, 8, this.length)\n  return ieee754.read(this, offset, false, 52, 8)\n}\n\nfunction checkInt (buf, value, offset, ext, max, min) {\n  if (!Buffer.isBuffer(buf)) throw new TypeError('\"buffer\" argument must be a Buffer instance')\n  if (value > max || value < min) throw new RangeError('\"value\" argument is out of bounds')\n  if (offset + ext > buf.length) throw new RangeError('Index out of range')\n}\n\nBuffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\n  }\n\n  var mul = 1\n  var i = 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  byteLength = byteLength | 0\n  if (!noAssert) {\n    var maxBytes = Math.pow(2, 8 * byteLength) - 1\n    checkInt(this, value, offset, byteLength, maxBytes, 0)\n  }\n\n  var i = byteLength - 1\n  var mul = 1\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    this[offset + i] = (value / mul) & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  this[offset] = (value & 0xff)\n  return offset + 1\n}\n\nfunction objectWriteUInt16 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {\n    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>\n      (littleEndian ? i : 1 - i) * 8\n  }\n}\n\nBuffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = (value & 0xff)\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nfunction objectWriteUInt32 (buf, value, offset, littleEndian) {\n  if (value < 0) value = 0xffffffff + value + 1\n  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {\n    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff\n  }\n}\n\nBuffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset + 3] = (value >>> 24)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 1] = (value >>> 8)\n    this[offset] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = 0\n  var mul = 1\n  var sub = 0\n  this[offset] = value & 0xFF\n  while (++i < byteLength && (mul *= 0x100)) {\n    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {\n      sub = 1\n    }\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) {\n    var limit = Math.pow(2, 8 * byteLength - 1)\n\n    checkInt(this, value, offset, byteLength, limit - 1, -limit)\n  }\n\n  var i = byteLength - 1\n  var mul = 1\n  var sub = 0\n  this[offset + i] = value & 0xFF\n  while (--i >= 0 && (mul *= 0x100)) {\n    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {\n      sub = 1\n    }\n    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF\n  }\n\n  return offset + byteLength\n}\n\nBuffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)\n  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)\n  if (value < 0) value = 0xff + value + 1\n  this[offset] = (value & 0xff)\n  return offset + 1\n}\n\nBuffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n  } else {\n    objectWriteUInt16(this, value, offset, true)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 8)\n    this[offset + 1] = (value & 0xff)\n  } else {\n    objectWriteUInt16(this, value, offset, false)\n  }\n  return offset + 2\n}\n\nBuffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value & 0xff)\n    this[offset + 1] = (value >>> 8)\n    this[offset + 2] = (value >>> 16)\n    this[offset + 3] = (value >>> 24)\n  } else {\n    objectWriteUInt32(this, value, offset, true)\n  }\n  return offset + 4\n}\n\nBuffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {\n  value = +value\n  offset = offset | 0\n  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)\n  if (value < 0) value = 0xffffffff + value + 1\n  if (Buffer.TYPED_ARRAY_SUPPORT) {\n    this[offset] = (value >>> 24)\n    this[offset + 1] = (value >>> 16)\n    this[offset + 2] = (value >>> 8)\n    this[offset + 3] = (value & 0xff)\n  } else {\n    objectWriteUInt32(this, value, offset, false)\n  }\n  return offset + 4\n}\n\nfunction checkIEEE754 (buf, value, offset, ext, max, min) {\n  if (offset + ext > buf.length) throw new RangeError('Index out of range')\n  if (offset < 0) throw new RangeError('Index out of range')\n}\n\nfunction writeFloat (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 23, 4)\n  return offset + 4\n}\n\nBuffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {\n  return writeFloat(this, value, offset, false, noAssert)\n}\n\nfunction writeDouble (buf, value, offset, littleEndian, noAssert) {\n  if (!noAssert) {\n    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)\n  }\n  ieee754.write(buf, value, offset, littleEndian, 52, 8)\n  return offset + 8\n}\n\nBuffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, true, noAssert)\n}\n\nBuffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {\n  return writeDouble(this, value, offset, false, noAssert)\n}\n\n// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)\nBuffer.prototype.copy = function copy (target, targetStart, start, end) {\n  if (!start) start = 0\n  if (!end && end !== 0) end = this.length\n  if (targetStart >= target.length) targetStart = target.length\n  if (!targetStart) targetStart = 0\n  if (end > 0 && end < start) end = start\n\n  // Copy 0 bytes; we're done\n  if (end === start) return 0\n  if (target.length === 0 || this.length === 0) return 0\n\n  // Fatal error conditions\n  if (targetStart < 0) {\n    throw new RangeError('targetStart out of bounds')\n  }\n  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')\n  if (end < 0) throw new RangeError('sourceEnd out of bounds')\n\n  // Are we oob?\n  if (end > this.length) end = this.length\n  if (target.length - targetStart < end - start) {\n    end = target.length - targetStart + start\n  }\n\n  var len = end - start\n  var i\n\n  if (this === target && start < targetStart && targetStart < end) {\n    // descending copy from end\n    for (i = len - 1; i >= 0; --i) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {\n    // ascending copy from start\n    for (i = 0; i < len; ++i) {\n      target[i + targetStart] = this[i + start]\n    }\n  } else {\n    Uint8Array.prototype.set.call(\n      target,\n      this.subarray(start, start + len),\n      targetStart\n    )\n  }\n\n  return len\n}\n\n// Usage:\n//    buffer.fill(number[, offset[, end]])\n//    buffer.fill(buffer[, offset[, end]])\n//    buffer.fill(string[, offset[, end]][, encoding])\nBuffer.prototype.fill = function fill (val, start, end, encoding) {\n  // Handle string cases:\n  if (typeof val === 'string') {\n    if (typeof start === 'string') {\n      encoding = start\n      start = 0\n      end = this.length\n    } else if (typeof end === 'string') {\n      encoding = end\n      end = this.length\n    }\n    if (val.length === 1) {\n      var code = val.charCodeAt(0)\n      if (code < 256) {\n        val = code\n      }\n    }\n    if (encoding !== undefined && typeof encoding !== 'string') {\n      throw new TypeError('encoding must be a string')\n    }\n    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {\n      throw new TypeError('Unknown encoding: ' + encoding)\n    }\n  } else if (typeof val === 'number') {\n    val = val & 255\n  }\n\n  // Invalid ranges are not set to a default, so can range check early.\n  if (start < 0 || this.length < start || this.length < end) {\n    throw new RangeError('Out of range index')\n  }\n\n  if (end <= start) {\n    return this\n  }\n\n  start = start >>> 0\n  end = end === undefined ? this.length : end >>> 0\n\n  if (!val) val = 0\n\n  var i\n  if (typeof val === 'number') {\n    for (i = start; i < end; ++i) {\n      this[i] = val\n    }\n  } else {\n    var bytes = Buffer.isBuffer(val)\n      ? val\n      : utf8ToBytes(new Buffer(val, encoding).toString())\n    var len = bytes.length\n    for (i = 0; i < end - start; ++i) {\n      this[i + start] = bytes[i % len]\n    }\n  }\n\n  return this\n}\n\n// HELPER FUNCTIONS\n// ================\n\nvar INVALID_BASE64_RE = /[^+\\/0-9A-Za-z-_]/g\n\nfunction base64clean (str) {\n  // Node strips out invalid characters like \\n and \\t from the string, base64-js does not\n  str = stringtrim(str).replace(INVALID_BASE64_RE, '')\n  // Node converts strings with length < 2 to ''\n  if (str.length < 2) return ''\n  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not\n  while (str.length % 4 !== 0) {\n    str = str + '='\n  }\n  return str\n}\n\nfunction stringtrim (str) {\n  if (str.trim) return str.trim()\n  return str.replace(/^\\s+|\\s+$/g, '')\n}\n\nfunction toHex (n) {\n  if (n < 16) return '0' + n.toString(16)\n  return n.toString(16)\n}\n\nfunction utf8ToBytes (string, units) {\n  units = units || Infinity\n  var codePoint\n  var length = string.length\n  var leadSurrogate = null\n  var bytes = []\n\n  for (var i = 0; i < length; ++i) {\n    codePoint = string.charCodeAt(i)\n\n    // is surrogate component\n    if (codePoint > 0xD7FF && codePoint < 0xE000) {\n      // last char was a lead\n      if (!leadSurrogate) {\n        // no lead yet\n        if (codePoint > 0xDBFF) {\n          // unexpected trail\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        } else if (i + 1 === length) {\n          // unpaired lead\n          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n          continue\n        }\n\n        // valid lead\n        leadSurrogate = codePoint\n\n        continue\n      }\n\n      // 2 leads in a row\n      if (codePoint < 0xDC00) {\n        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n        leadSurrogate = codePoint\n        continue\n      }\n\n      // valid surrogate pair\n      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000\n    } else if (leadSurrogate) {\n      // valid bmp char, but last char was a lead\n      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)\n    }\n\n    leadSurrogate = null\n\n    // encode utf8\n    if (codePoint < 0x80) {\n      if ((units -= 1) < 0) break\n      bytes.push(codePoint)\n    } else if (codePoint < 0x800) {\n      if ((units -= 2) < 0) break\n      bytes.push(\n        codePoint >> 0x6 | 0xC0,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x10000) {\n      if ((units -= 3) < 0) break\n      bytes.push(\n        codePoint >> 0xC | 0xE0,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else if (codePoint < 0x110000) {\n      if ((units -= 4) < 0) break\n      bytes.push(\n        codePoint >> 0x12 | 0xF0,\n        codePoint >> 0xC & 0x3F | 0x80,\n        codePoint >> 0x6 & 0x3F | 0x80,\n        codePoint & 0x3F | 0x80\n      )\n    } else {\n      throw new Error('Invalid code point')\n    }\n  }\n\n  return bytes\n}\n\nfunction asciiToBytes (str) {\n  var byteArray = []\n  for (var i = 0; i < str.length; ++i) {\n    // Node's code seems to be doing this and not & 0x7F..\n    byteArray.push(str.charCodeAt(i) & 0xFF)\n  }\n  return byteArray\n}\n\nfunction utf16leToBytes (str, units) {\n  var c, hi, lo\n  var byteArray = []\n  for (var i = 0; i < str.length; ++i) {\n    if ((units -= 2) < 0) break\n\n    c = str.charCodeAt(i)\n    hi = c >> 8\n    lo = c % 256\n    byteArray.push(lo)\n    byteArray.push(hi)\n  }\n\n  return byteArray\n}\n\nfunction base64ToBytes (str) {\n  return base64.toByteArray(base64clean(str))\n}\n\nfunction blitBuffer (src, dst, offset, length) {\n  for (var i = 0; i < length; ++i) {\n    if ((i + offset >= dst.length) || (i >= src.length)) break\n    dst[i + offset] = src[i]\n  }\n  return i\n}\n\nfunction isnan (val) {\n  return val !== val // eslint-disable-line no-self-compare\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://VueTables/./node_modules/buffer/index.js?");

/***/ }),

/***/ "./node_modules/clone/clone.js":
/*!*************************************!*\
  !*** ./node_modules/clone/clone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {\n'use strict';\n\nfunction _instanceof(obj, type) {\n  return type != null && obj instanceof type;\n}\n\nvar nativeMap;\ntry {\n  nativeMap = Map;\n} catch(_) {\n  // maybe a reference error because no `Map`. Give it a dummy value that no\n  // value will ever be an instanceof.\n  nativeMap = function() {};\n}\n\nvar nativeSet;\ntry {\n  nativeSet = Set;\n} catch(_) {\n  nativeSet = function() {};\n}\n\nvar nativePromise;\ntry {\n  nativePromise = Promise;\n} catch(_) {\n  nativePromise = function() {};\n}\n\n/**\n * Clones (copies) an Object using deep copying.\n *\n * This function supports circular references by default, but if you are certain\n * there are no circular references in your object, you can save some CPU time\n * by calling clone(obj, false).\n *\n * Caution: if `circular` is false and `parent` contains circular references,\n * your program may enter an infinite loop and crash.\n *\n * @param `parent` - the object to be cloned\n * @param `circular` - set to true if the object to be cloned may contain\n *    circular references. (optional - true by default)\n * @param `depth` - set to a number if the object is only to be cloned to\n *    a particular depth. (optional - defaults to Infinity)\n * @param `prototype` - sets the prototype to be used when cloning an object.\n *    (optional - defaults to parent prototype).\n * @param `includeNonEnumerable` - set to true if the non-enumerable properties\n *    should be cloned as well. Non-enumerable properties on the prototype\n *    chain will be ignored. (optional - false by default)\n*/\nfunction clone(parent, circular, depth, prototype, includeNonEnumerable) {\n  if (typeof circular === 'object') {\n    depth = circular.depth;\n    prototype = circular.prototype;\n    includeNonEnumerable = circular.includeNonEnumerable;\n    circular = circular.circular;\n  }\n  // maintain two arrays for circular references, where corresponding parents\n  // and children have the same index\n  var allParents = [];\n  var allChildren = [];\n\n  var useBuffer = typeof Buffer != 'undefined';\n\n  if (typeof circular == 'undefined')\n    circular = true;\n\n  if (typeof depth == 'undefined')\n    depth = Infinity;\n\n  // recurse this function so we don't reset allParents and allChildren\n  function _clone(parent, depth) {\n    // cloning null always returns null\n    if (parent === null)\n      return null;\n\n    if (depth === 0)\n      return parent;\n\n    var child;\n    var proto;\n    if (typeof parent != 'object') {\n      return parent;\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      child = new nativeMap();\n    } else if (_instanceof(parent, nativeSet)) {\n      child = new nativeSet();\n    } else if (_instanceof(parent, nativePromise)) {\n      child = new nativePromise(function (resolve, reject) {\n        parent.then(function(value) {\n          resolve(_clone(value, depth - 1));\n        }, function(err) {\n          reject(_clone(err, depth - 1));\n        });\n      });\n    } else if (clone.__isArray(parent)) {\n      child = [];\n    } else if (clone.__isRegExp(parent)) {\n      child = new RegExp(parent.source, __getRegExpFlags(parent));\n      if (parent.lastIndex) child.lastIndex = parent.lastIndex;\n    } else if (clone.__isDate(parent)) {\n      child = new Date(parent.getTime());\n    } else if (useBuffer && Buffer.isBuffer(parent)) {\n      if (Buffer.allocUnsafe) {\n        // Node.js >= 4.5.0\n        child = Buffer.allocUnsafe(parent.length);\n      } else {\n        // Older Node.js versions\n        child = new Buffer(parent.length);\n      }\n      parent.copy(child);\n      return child;\n    } else if (_instanceof(parent, Error)) {\n      child = Object.create(parent);\n    } else {\n      if (typeof prototype == 'undefined') {\n        proto = Object.getPrototypeOf(parent);\n        child = Object.create(proto);\n      }\n      else {\n        child = Object.create(prototype);\n        proto = prototype;\n      }\n    }\n\n    if (circular) {\n      var index = allParents.indexOf(parent);\n\n      if (index != -1) {\n        return allChildren[index];\n      }\n      allParents.push(parent);\n      allChildren.push(child);\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      parent.forEach(function(value, key) {\n        var keyChild = _clone(key, depth - 1);\n        var valueChild = _clone(value, depth - 1);\n        child.set(keyChild, valueChild);\n      });\n    }\n    if (_instanceof(parent, nativeSet)) {\n      parent.forEach(function(value) {\n        var entryChild = _clone(value, depth - 1);\n        child.add(entryChild);\n      });\n    }\n\n    for (var i in parent) {\n      var attrs;\n      if (proto) {\n        attrs = Object.getOwnPropertyDescriptor(proto, i);\n      }\n\n      if (attrs && attrs.set == null) {\n        continue;\n      }\n      child[i] = _clone(parent[i], depth - 1);\n    }\n\n    if (Object.getOwnPropertySymbols) {\n      var symbols = Object.getOwnPropertySymbols(parent);\n      for (var i = 0; i < symbols.length; i++) {\n        // Don't need to worry about cloning a symbol because it is a primitive,\n        // like a number or string.\n        var symbol = symbols[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);\n        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {\n          continue;\n        }\n        child[symbol] = _clone(parent[symbol], depth - 1);\n        if (!descriptor.enumerable) {\n          Object.defineProperty(child, symbol, {\n            enumerable: false\n          });\n        }\n      }\n    }\n\n    if (includeNonEnumerable) {\n      var allPropertyNames = Object.getOwnPropertyNames(parent);\n      for (var i = 0; i < allPropertyNames.length; i++) {\n        var propertyName = allPropertyNames[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);\n        if (descriptor && descriptor.enumerable) {\n          continue;\n        }\n        child[propertyName] = _clone(parent[propertyName], depth - 1);\n        Object.defineProperty(child, propertyName, {\n          enumerable: false\n        });\n      }\n    }\n\n    return child;\n  }\n\n  return _clone(parent, depth);\n}\n\n/**\n * Simple flat clone using prototype, accepts only objects, usefull for property\n * override on FLAT configuration object (no nested props).\n *\n * USE WITH CAUTION! This may not behave as you wish if you do not know how this\n * works.\n */\nclone.clonePrototype = function clonePrototype(parent) {\n  if (parent === null)\n    return null;\n\n  var c = function () {};\n  c.prototype = parent;\n  return new c();\n};\n\n// private utility functions\n\nfunction __objToStr(o) {\n  return Object.prototype.toString.call(o);\n}\nclone.__objToStr = __objToStr;\n\nfunction __isDate(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Date]';\n}\nclone.__isDate = __isDate;\n\nfunction __isArray(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Array]';\n}\nclone.__isArray = __isArray;\n\nfunction __isRegExp(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';\n}\nclone.__isRegExp = __isRegExp;\n\nfunction __getRegExpFlags(re) {\n  var flags = '';\n  if (re.global) flags += 'g';\n  if (re.ignoreCase) flags += 'i';\n  if (re.multiline) flags += 'm';\n  return flags;\n}\nclone.__getRegExpFlags = __getRegExpFlags;\n\nreturn clone;\n})();\n\nif ( true && module.exports) {\n  module.exports = clone;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ \"./node_modules/buffer/index.js\").Buffer))\n\n//# sourceURL=webpack://VueTables/./node_modules/clone/clone.js?");

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Returns a function, that, as long as it continues to be invoked, will not\n * be triggered. The function will be called after it stops being called for\n * N milliseconds. If `immediate` is passed, trigger the function on the\n * leading edge, instead of the trailing. The function also has a property 'clear' \n * that is a function which will clear the timer to prevent previously scheduled executions. \n *\n * @source underscore.js\n * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/\n * @param {Function} function to wrap\n * @param {Number} timeout in ms (`100`)\n * @param {Boolean} whether to execute at the beginning (`false`)\n * @api public\n */\nfunction debounce(func, wait, immediate){\n  var timeout, args, context, timestamp, result;\n  if (null == wait) wait = 100;\n\n  function later() {\n    var last = Date.now() - timestamp;\n\n    if (last < wait && last >= 0) {\n      timeout = setTimeout(later, wait - last);\n    } else {\n      timeout = null;\n      if (!immediate) {\n        result = func.apply(context, args);\n        context = args = null;\n      }\n    }\n  };\n\n  var debounced = function(){\n    context = this;\n    args = arguments;\n    timestamp = Date.now();\n    var callNow = immediate && !timeout;\n    if (!timeout) timeout = setTimeout(later, wait);\n    if (callNow) {\n      result = func.apply(context, args);\n      context = args = null;\n    }\n\n    return result;\n  };\n\n  debounced.clear = function() {\n    if (timeout) {\n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n  \n  debounced.flush = function() {\n    if (timeout) {\n      result = func.apply(context, args);\n      context = args = null;\n      \n      clearTimeout(timeout);\n      timeout = null;\n    }\n  };\n\n  return debounced;\n};\n\n// Adds compatibility for ES modules\ndebounce.debounce = debounce;\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://VueTables/./node_modules/debounce/index.js?");

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.read = function (buffer, offset, isLE, mLen, nBytes) {\n  var e, m\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var nBits = -7\n  var i = isLE ? (nBytes - 1) : 0\n  var d = isLE ? -1 : 1\n  var s = buffer[offset + i]\n\n  i += d\n\n  e = s & ((1 << (-nBits)) - 1)\n  s >>= (-nBits)\n  nBits += eLen\n  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  m = e & ((1 << (-nBits)) - 1)\n  e >>= (-nBits)\n  nBits += mLen\n  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  if (e === 0) {\n    e = 1 - eBias\n  } else if (e === eMax) {\n    return m ? NaN : ((s ? -1 : 1) * Infinity)\n  } else {\n    m = m + Math.pow(2, mLen)\n    e = e - eBias\n  }\n  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)\n}\n\nexports.write = function (buffer, value, offset, isLE, mLen, nBytes) {\n  var e, m, c\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)\n  var i = isLE ? 0 : (nBytes - 1)\n  var d = isLE ? 1 : -1\n  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0\n\n  value = Math.abs(value)\n\n  if (isNaN(value) || value === Infinity) {\n    m = isNaN(value) ? 1 : 0\n    e = eMax\n  } else {\n    e = Math.floor(Math.log(value) / Math.LN2)\n    if (value * (c = Math.pow(2, -e)) < 1) {\n      e--\n      c *= 2\n    }\n    if (e + eBias >= 1) {\n      value += rt / c\n    } else {\n      value += rt * Math.pow(2, 1 - eBias)\n    }\n    if (value * c >= 2) {\n      e++\n      c /= 2\n    }\n\n    if (e + eBias >= eMax) {\n      m = 0\n      e = eMax\n    } else if (e + eBias >= 1) {\n      m = ((value * c) - 1) * Math.pow(2, mLen)\n      e = e + eBias\n    } else {\n      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)\n      e = 0\n    }\n  }\n\n  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}\n\n  e = (e << mLen) | m\n  eLen += mLen\n  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}\n\n  buffer[offset + i - d] |= s * 128\n}\n\n\n//# sourceURL=webpack://VueTables/./node_modules/ieee754/index.js?");

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://VueTables/./node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/merge/merge.js":
/*!*************************************!*\
  !*** ./node_modules/merge/merge.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/*!\r\n * @name JavaScript/NodeJS Merge v1.2.1\r\n * @author yeikos\r\n * @repository https://github.com/yeikos/js.merge\r\n\r\n * Copyright 2014 yeikos - MIT license\r\n * https://raw.github.com/yeikos/js.merge/master/LICENSE\r\n */\r\n\r\n;(function(isNode) {\r\n\r\n\t/**\r\n\t * Merge one or more objects \r\n\t * @param bool? clone\r\n\t * @param mixed,... arguments\r\n\t * @return object\r\n\t */\r\n\r\n\tvar Public = function(clone) {\r\n\r\n\t\treturn merge(clone === true, false, arguments);\r\n\r\n\t}, publicName = 'merge';\r\n\r\n\t/**\r\n\t * Merge two or more objects recursively \r\n\t * @param bool? clone\r\n\t * @param mixed,... arguments\r\n\t * @return object\r\n\t */\r\n\r\n\tPublic.recursive = function(clone) {\r\n\r\n\t\treturn merge(clone === true, true, arguments);\r\n\r\n\t};\r\n\r\n\t/**\r\n\t * Clone the input removing any reference\r\n\t * @param mixed input\r\n\t * @return mixed\r\n\t */\r\n\r\n\tPublic.clone = function(input) {\r\n\r\n\t\tvar output = input,\r\n\t\t\ttype = typeOf(input),\r\n\t\t\tindex, size;\r\n\r\n\t\tif (type === 'array') {\r\n\r\n\t\t\toutput = [];\r\n\t\t\tsize = input.length;\r\n\r\n\t\t\tfor (index=0;index<size;++index)\r\n\r\n\t\t\t\toutput[index] = Public.clone(input[index]);\r\n\r\n\t\t} else if (type === 'object') {\r\n\r\n\t\t\toutput = {};\r\n\r\n\t\t\tfor (index in input)\r\n\r\n\t\t\t\toutput[index] = Public.clone(input[index]);\r\n\r\n\t\t}\r\n\r\n\t\treturn output;\r\n\r\n\t};\r\n\r\n\t/**\r\n\t * Merge two objects recursively\r\n\t * @param mixed input\r\n\t * @param mixed extend\r\n\t * @return mixed\r\n\t */\r\n\r\n\tfunction merge_recursive(base, extend) {\r\n\r\n\t\tif (typeOf(base) !== 'object')\r\n\r\n\t\t\treturn extend;\r\n\r\n\t\tfor (var key in extend) {\r\n\r\n\t\t\tif (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {\r\n\r\n\t\t\t\tbase[key] = merge_recursive(base[key], extend[key]);\r\n\r\n\t\t\t} else {\r\n\r\n\t\t\t\tbase[key] = extend[key];\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\treturn base;\r\n\r\n\t}\r\n\r\n\t/**\r\n\t * Merge two or more objects\r\n\t * @param bool clone\r\n\t * @param bool recursive\r\n\t * @param array argv\r\n\t * @return object\r\n\t */\r\n\r\n\tfunction merge(clone, recursive, argv) {\r\n\r\n\t\tvar result = argv[0],\r\n\t\t\tsize = argv.length;\r\n\r\n\t\tif (clone || typeOf(result) !== 'object')\r\n\r\n\t\t\tresult = {};\r\n\r\n\t\tfor (var index=0;index<size;++index) {\r\n\r\n\t\t\tvar item = argv[index],\r\n\r\n\t\t\t\ttype = typeOf(item);\r\n\r\n\t\t\tif (type !== 'object') continue;\r\n\r\n\t\t\tfor (var key in item) {\r\n\r\n\t\t\t\tif (key === '__proto__') continue;\r\n\r\n\t\t\t\tvar sitem = clone ? Public.clone(item[key]) : item[key];\r\n\r\n\t\t\t\tif (recursive) {\r\n\r\n\t\t\t\t\tresult[key] = merge_recursive(result[key], sitem);\r\n\r\n\t\t\t\t} else {\r\n\r\n\t\t\t\t\tresult[key] = sitem;\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\treturn result;\r\n\r\n\t}\r\n\r\n\t/**\r\n\t * Get type of variable\r\n\t * @param mixed input\r\n\t * @return string\r\n\t *\r\n\t * @see http://jsperf.com/typeofvar\r\n\t */\r\n\r\n\tfunction typeOf(input) {\r\n\r\n\t\treturn ({}).toString.call(input).slice(8, -1).toLowerCase();\r\n\r\n\t}\r\n\r\n\tif (isNode) {\r\n\r\n\t\tmodule.exports = Public;\r\n\r\n\t} else {\r\n\r\n\t\twindow[publicName] = Public;\r\n\r\n\t}\r\n\r\n})( true && module && typeof module.exports === 'object' && module.exports);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://VueTables/./node_modules/merge/merge.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/Pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/Pagination.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\r\n\r\nvar _config = __webpack_require__(/*! ./config */ \"./node_modules/vue-pagination-2/compiled/config.js\");\r\n\r\nvar _config2 = _interopRequireDefault(_config);\r\n\r\nvar _merge = __webpack_require__(/*! merge */ \"./node_modules/merge/merge.js\");\r\n\r\nvar _merge2 = _interopRequireDefault(_merge);\r\n\r\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\r\n\r\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\r\n\r\nvar template = __webpack_require__(/*! ./template.js */ \"./node_modules/vue-pagination-2/compiled/template.js\");\r\nvar bus = __webpack_require__(/*! ./bus */ \"./node_modules/vue-pagination-2/compiled/bus.js\");\r\n\r\n\r\nmodule.exports = {\r\n  render: template.call(undefined),\r\n  props: {\r\n    for: {\r\n      type: String,\r\n      required: false\r\n    },\r\n    records: {\r\n      type: Number,\r\n      required: true\r\n    },\r\n    perPage: {\r\n      type: Number,\r\n      default: 25\r\n    },\r\n    vuex: {\r\n      type: Boolean\r\n    },\r\n    options: {\r\n      type: Object\r\n    }\r\n  },\r\n  created: function created() {\r\n\r\n    if (!this.vuex) return;\r\n\r\n    if (!this.for) {\r\n      throw new Error('vue-pagination-2: The \"for\" prop is required when using vuex');\r\n    }\r\n\r\n    var name = this.for;\r\n\r\n    if (this.$store.state[name]) return;\r\n\r\n    this.$store.registerModule(this.for, {\r\n      state: {\r\n        page: 1\r\n      },\r\n      mutations: _defineProperty({}, name + '/PAGINATE', function undefined(state, page) {\r\n        state.page = page;\r\n      })\r\n    });\r\n  },\r\n  data: function data() {\r\n    return {\r\n      Page: 1,\r\n      firstPage: 1\r\n    };\r\n  },\r\n  computed: {\r\n    opts: function opts() {\r\n      return (0, _merge2.default)((0, _config2.default)(), this.options);\r\n    },\r\n    Theme: function Theme() {\r\n\r\n      if (_typeof(this.opts.theme) === 'object') {\r\n        return this.opts.theme;\r\n      }\r\n\r\n      var themes = {\r\n        bootstrap3: __webpack_require__(/*! ./themes/bootstrap3 */ \"./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js\"),\r\n        bootstrap4: __webpack_require__(/*! ./themes/bootstrap4 */ \"./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js\"),\r\n        bulma: __webpack_require__(/*! ./themes/bulma */ \"./node_modules/vue-pagination-2/compiled/themes/bulma.js\")\r\n      };\r\n\r\n      if (_typeof(themes[this.opts.theme]) === undefined) {\r\n        throw 'vue-pagination-2: the theme ' + this.opts.theme + ' does not exist';\r\n      }\r\n\r\n      return themes[this.opts.theme];\r\n    },\r\n    page: function page() {\r\n      return this.vuex ? this.$store.state[this.for].page : this.Page;\r\n    },\r\n\r\n    pages: function pages() {\r\n      if (!this.records) return [];\r\n\r\n      return range(this.paginationStart, this.pagesInCurrentChunk);\r\n    },\r\n    totalPages: function totalPages() {\r\n      return this.records ? Math.ceil(this.records / this.perPage) : 1;\r\n    },\r\n    totalChunks: function totalChunks() {\r\n      return Math.ceil(this.totalPages / this.opts.chunk);\r\n    },\r\n    currentChunk: function currentChunk() {\r\n      return Math.ceil(this.page / this.opts.chunk);\r\n    },\r\n    paginationStart: function paginationStart() {\r\n\r\n      if (this.opts.chunksNavigation === 'scroll') {\r\n        var page =  this.Page - this.opts.chunk + 1;\r\n        return page > 0 ? page : 1;\r\n      }\r\n\r\n      return (this.currentChunk - 1) * this.opts.chunk + 1;\r\n    },\r\n    pagesInCurrentChunk: function pagesInCurrentChunk() {\r\n      return this.paginationStart + this.opts.chunk <= this.totalPages ? this.opts.chunk : this.totalPages - this.paginationStart + 1;\r\n    },\r\n    count: function count() {\r\n\r\n      if (/{page}/.test(this.opts.texts.count)) {\r\n\r\n        if (this.totalPages <= 1) return '';\r\n\r\n        return this.opts.texts.count.replace('{page}', this.page).replace('{pages}', this.totalPages);\r\n      }\r\n\r\n      var parts = this.opts.texts.count.split('|');\r\n      var from = (this.page - 1) * this.perPage + 1;\r\n      var to = this.page == this.totalPages ? this.records : from + this.perPage - 1;\r\n      var i = Math.min(this.records == 1 ? 2 : this.totalPages == 1 ? 1 : 0, parts.length - 1);\r\n\r\n      return parts[i].replace('{count}', this.formatNumber(this.records)).replace('{from}', this.formatNumber(from)).replace('{to}', this.formatNumber(to));\r\n    }\r\n  },\r\n  methods: {\r\n    setPage: function setPage(page) {\r\n      if (this.allowedPage(page)) {\r\n        this.paginate(page);\r\n      }\r\n    },\r\n    paginate: function paginate(page) {\r\n      if (this.vuex) {\r\n        this.$store.commit(this.for + '/PAGINATE', page);\r\n      } else {\r\n        this.Page = page;\r\n      }\r\n\r\n      this.$emit('paginate', page);\r\n\r\n      if (this.for) {\r\n        bus.$emit('vue-pagination::' + this.for, page);\r\n      }\r\n    },\r\n\r\n    next: function next() {\r\n      var page = this.page + 1;\r\n      if (this.opts.chunksNavigation === 'scroll' && this.allowedPage(page) && !this.inDisplay(page)) {\r\n        this.firstPage++;\r\n      }\r\n      return this.setPage(page);\r\n    },\r\n    prev: function prev() {\r\n      var page = this.page - 1;\r\n\r\n      if (this.opts.chunksNavigation === 'scroll' && this.allowedPage(page) && !this.inDisplay(page)) {\r\n        this.firstPage--;\r\n      }\r\n\r\n      return this.setPage(page);\r\n    },\r\n    inDisplay: function inDisplay(page) {\r\n\r\n      var start = this.firstPage;\r\n      var end = start + this.opts.chunk - 1;\r\n\r\n      return page >= start && page <= end;\r\n    },\r\n\r\n    nextChunk: function nextChunk() {\r\n      return this.setChunk(1);\r\n    },\r\n    prevChunk: function prevChunk() {\r\n      return this.setChunk(-1);\r\n    },\r\n    setChunk: function setChunk(direction) {\r\n      this.setPage((this.currentChunk - 1 + direction) * this.opts.chunk + 1);\r\n    },\r\n    allowedPage: function allowedPage(page) {\r\n      return page >= 1 && page <= this.totalPages;\r\n    },\r\n    allowedChunk: function allowedChunk(direction) {\r\n      return direction == 1 && this.currentChunk < this.totalChunks || direction == -1 && this.currentChunk > 1;\r\n    },\r\n    allowedPageClass: function allowedPageClass(direction) {\r\n      return this.allowedPage(direction) ? '' : this.Theme.disabled;\r\n    },\r\n    allowedChunkClass: function allowedChunkClass(direction) {\r\n      return this.allowedChunk(direction) ? '' : this.Theme.disabled;\r\n    },\r\n    activeClass: function activeClass(page) {\r\n      return this.page == page ? this.Theme.active : '';\r\n    },\r\n    formatNumber: function formatNumber(num) {\r\n\r\n      if (!this.opts.format) return num;\r\n\r\n      return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\r\n    }\r\n  },\r\n  beforeDestroy: function beforeDestroy() {\r\n    bus.$off();\r\n    bus.$destroy();\r\n  }\r\n};\r\n\r\nfunction range(start, count) {\r\n  return Array.apply(0, Array(count)).map(function (element, index) {\r\n    return index + start;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/compiled/Pagination.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/bus.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/bus.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar _vue = __webpack_require__(/*! vue */ \"vue\");\r\n\r\nvar _vue2 = _interopRequireDefault(_vue);\r\n\r\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\r\n\r\nvar bus = new _vue2.default();\r\n\r\nmodule.exports = bus;\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/compiled/bus.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/config.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/config.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nObject.defineProperty(exports, \"__esModule\", {\r\n    value: true\r\n});\r\n\r\nexports.default = function () {\r\n    return {\r\n        format: true,\r\n        chunk: 10,\r\n        chunksNavigation: 'fixed',\r\n        edgeNavigation: false,\r\n        theme: 'bootstrap3',\r\n        texts: {\r\n            count: 'Showing {from} to {to} of {count} records|{count} records|One record',\r\n            first: 'First',\r\n            last: 'Last'\r\n        }\r\n    };\r\n};\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/compiled/config.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/template.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/template.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = function () {\r\n\r\n  return function (h) {\r\n\r\n    var theme = this.Theme;\r\n    var prevChunk = '';\r\n    var nextChunk = '';\r\n    var firstPage = '';\r\n    var lastPage = '';\r\n    var items = this.pages.map(function (page) {\r\n\r\n      return h(\r\n        'li',\r\n        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(page),\r\n          on: {\r\n            'click': this.setPage.bind(this, page)\r\n          }\r\n        },\r\n        [h(\r\n          'a',\r\n          { 'class': theme.link + ' ' + this.activeClass(page),\r\n            attrs: { href: 'javascript:void(0)',\r\n              role: 'button' }\r\n          },\r\n          [page]\r\n        )]\r\n      );\r\n    }.bind(this));\r\n\r\n    if (this.opts.edgeNavigation && this.totalChunks > 1) {\r\n      firstPage = h(\r\n        'li',\r\n        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === 1 ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',\r\n          on: {\r\n            'click': this.setPage.bind(this, 1)\r\n          }\r\n        },\r\n        [h(\r\n          'a',\r\n          { 'class': theme.link,\r\n            attrs: { href: 'javascript:void(0);',\r\n              disabled: this.page === 1 }\r\n          },\r\n          [this.opts.texts.first]\r\n        )]\r\n      );\r\n\r\n      lastPage = h(\r\n        'li',\r\n        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === this.totalPages ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',\r\n          on: {\r\n            'click': this.setPage.bind(this, this.totalPages)\r\n          }\r\n        },\r\n        [h(\r\n          'a',\r\n          { 'class': theme.link,\r\n            attrs: { href: 'javascript:void(0);',\r\n              disabled: this.page === this.totalPages }\r\n          },\r\n          [this.opts.texts.last]\r\n        )]\r\n      );\r\n    }\r\n\r\n    if (this.opts.chunksNavigation === 'fixed') {\r\n\r\n      prevChunk = h(\r\n        'li',\r\n        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-chunk ' + this.allowedChunkClass(-1),\r\n          on: {\r\n            'click': this.setChunk.bind(this, -1)\r\n          }\r\n        },\r\n        [h(\r\n          'a',\r\n          { 'class': theme.link,\r\n            attrs: { href: 'javascript:void(0);',\r\n              disabled: !!this.allowedChunkClass(-1) }\r\n          },\r\n          ['<<']\r\n        )]\r\n      );\r\n\r\n      nextChunk = h(\r\n        'li',\r\n        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-chunk ' + this.allowedChunkClass(1),\r\n          on: {\r\n            'click': this.setChunk.bind(this, 1)\r\n          }\r\n        },\r\n        [h(\r\n          'a',\r\n          { 'class': theme.link,\r\n            attrs: { href: 'javascript:void(0);',\r\n              disabled: !!this.allowedChunkClass(1) }\r\n          },\r\n          ['>>']\r\n        )]\r\n      );\r\n    }\r\n\r\n    return h(\r\n      'div',\r\n      { 'class': 'VuePagination ' + theme.wrapper },\r\n      [h(\r\n        'nav',\r\n        { 'class': '' + theme.nav },\r\n        [h(\r\n          'ul',\r\n          {\r\n            directives: [{\r\n              name: 'show',\r\n              value: this.totalPages > 1\r\n            }],\r\n\r\n            'class': theme.list + ' VuePagination__pagination' },\r\n          [firstPage, prevChunk, h(\r\n            'li',\r\n            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-page ' + this.allowedPageClass(this.page - 1),\r\n              on: {\r\n                'click': this.prev.bind(this)\r\n              }\r\n            },\r\n            [h(\r\n              'a',\r\n              { 'class': theme.link,\r\n                attrs: { href: 'javascript:void(0);',\r\n                  disabled: !!this.allowedPageClass(this.page - 1)\r\n                }\r\n              },\r\n              ['<']\r\n            )]\r\n          ), items, h(\r\n            'li',\r\n            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-page ' + this.allowedPageClass(this.page + 1),\r\n              on: {\r\n                'click': this.next.bind(this)\r\n              }\r\n            },\r\n            [h(\r\n              'a',\r\n              { 'class': theme.link,\r\n                attrs: { href: 'javascript:void(0);',\r\n                  disabled: !!this.allowedPageClass(this.page + 1)\r\n                }\r\n              },\r\n              ['>']\r\n            )]\r\n          ), nextChunk, lastPage]\r\n        ), h(\r\n          'p',\r\n          {\r\n            directives: [{\r\n              name: 'show',\r\n              value: parseInt(this.records)\r\n            }],\r\n\r\n            'class': 'VuePagination__count ' + theme.count },\r\n          [this.count]\r\n        )]\r\n      )]\r\n    );\r\n  };\r\n};\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/compiled/template.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    nav: '',\n    count: '',\n    wrapper: '',\n    list: 'pagination',\n    item: 'page-item',\n    link: 'page-link',\n    next: '',\n    prev: '',\n    active: 'active',\n    disabled: 'disabled'\n};\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/compiled/themes/bootstrap3.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    nav: '',\n    count: '',\n    wrapper: '',\n    list: 'pagination',\n    item: 'page-item',\n    link: 'page-link',\n    next: '',\n    prev: '',\n    active: 'active',\n    disabled: 'disabled'\n};\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/compiled/themes/bootstrap4.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/compiled/themes/bulma.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-pagination-2/compiled/themes/bulma.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    nav: '',\n    count: '',\n    wrapper: 'pagination',\n    list: 'pagination-list',\n    item: '',\n    link: 'pagination-link',\n    next: '',\n    prev: '',\n    active: 'is-current',\n    disabled: '' // uses the disabled HTML attirbute\n};\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/compiled/themes/bulma.js?");

/***/ }),

/***/ "./node_modules/vue-pagination-2/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-pagination-2/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Pagination = __webpack_require__(/*! ./compiled/Pagination */ \"./node_modules/vue-pagination-2/compiled/Pagination.js\");\r\nvar PaginationEvent = __webpack_require__(/*! ./compiled/bus */ \"./node_modules/vue-pagination-2/compiled/bus.js\");\r\n\r\nmodule.exports = {\r\n  Pagination:Pagination,\r\n  PaginationEvent:PaginationEvent\r\n}\r\n\n\n//# sourceURL=webpack://VueTables/./node_modules/vue-pagination-2/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://VueTables/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://VueTables/(webpack)/buildin/module.js?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Vue;\n\n//# sourceURL=webpack://VueTables/external_%22Vue%22?");

/***/ })

/******/ });