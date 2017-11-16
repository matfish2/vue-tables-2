"use strict";

module.exports = function (column) {
  return this.query.hasOwnProperty(column) && this.opts.listColumns.hasOwnProperty(column);
};