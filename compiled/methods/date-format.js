"use strict";

module.exports = function (column) {
  if (this.opts.dateFormatPerColumn.hasOwnProperty(column)) {
    return this.opts.dateFormatPerColumn[column];
  }

  return this.opts.dateFormat;
};