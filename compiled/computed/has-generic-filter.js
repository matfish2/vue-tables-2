"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function () {
  return !this.opts.filterByColumn && (typeof this.opts.filterable === 'boolean' && this.opts.filterable || _typeof(this.opts.filterable) === 'object' && this.opts.filterable.length);
};