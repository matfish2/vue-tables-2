"use strict";

module.exports = function (column) {
  var userMultiSort = Object.keys(this.userMultiSorting);
  if (!userMultiSort.length || this.orderBy.column === column) return this.orderBy.column === column;
  return !!this.userMultiSorting[userMultiSort[0]].filter(function (col) {
    return col.column == column;
  }).length;
};