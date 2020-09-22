"use strict";

module.exports = function (column) {
  var c = this.sortable(column) ? 'VueTables__sortable ' : '';
  c += this.columnClass(column);

  if (this.orderBy.column === column) {
    c += "".concat(column, "-sorted-") + (this.orderBy.ascending ? 'asc' : 'desc');
  }

  return c;
};