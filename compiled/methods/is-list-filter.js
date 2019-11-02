"use strict";

module.exports = function (column) {
  return this.opts.listColumns.hasOwnProperty(column);
};