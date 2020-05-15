"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var intersection = require('array-intersect')["default"];

module.exports = function () {
  var opts = this.opts;
  return opts.dateColumns.length && opts.filterByColumn && (typeof opts.filterable == 'boolean' && opts.filterable || _typeof(opts.filterable) == 'object' && intersection(opts.filterable, opts.dateColumns).length);
};