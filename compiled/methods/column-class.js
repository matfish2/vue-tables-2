"use strict";

module.exports = function (column) {
  var c = this.opts.columnsClasses;
  return c.hasOwnProperty(column) ? c[column] : '';
};