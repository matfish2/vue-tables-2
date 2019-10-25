"use strict";

module.exports = function (column) {
  return !this.opts.descOrderColumns.includes(column);
};