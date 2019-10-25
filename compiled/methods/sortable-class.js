"use strict";

module.exports = function (column) {
  var c = this.sortable(column) ? 'VueTables__sortable ' : '';
  c += this.columnClass(column);
  return c;
};