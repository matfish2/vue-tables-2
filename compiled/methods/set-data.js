'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (response) {

  var data = this.opts.responseAdapter.call(this, response);

  this.data = this.applyFilters(data.data);

  if (isNaN(data.count)) {
    console.error('vue-tables-2: invalid \'count\' property. Expected number, got ' + _typeof(data.count));
    console.error('count equals', data.count);
    throw new Error();
  }

  this.count = parseInt(data.count);

  setTimeout(function () {
    this.dispatch('loaded', response);
  }.bind(this), 0);
};