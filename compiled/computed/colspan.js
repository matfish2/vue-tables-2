"use strict";

module.exports = function () {
  return this.hasChildRow ? this.allColumns.length + 1 : this.allColumns.length;
};