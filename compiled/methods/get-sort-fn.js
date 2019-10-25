"use strict";

module.exports = function (column) {
  var ascending = this.orderBy.ascending;
  this.currentlySorting = {
    column: column,
    ascending: ascending
  };
  if (typeof this.opts.customSorting[column] == 'undefined') return this.defaultSort(column, ascending);
  return this.opts.customSorting[column](ascending);
};