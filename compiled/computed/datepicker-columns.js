"use strict";

var intersect = require('array-intersect')["default"];

module.exports = function () {
  if (this.opts.filterable === true) {
    return this.opts.dateColumns;
  }

  if (this.opts.filterable === false) {
    return [];
  }

  return intersect(this.opts.filterable, this.opts.dateColumns);
};