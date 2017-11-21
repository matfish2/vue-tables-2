'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (e) {
  this.limit = (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' ? e.target.value : e;
  this.updateState('perPage', this.limit);
  this.dispatch('limit', this.limit);
  this.setPage(1);
};