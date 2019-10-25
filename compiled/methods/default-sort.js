"use strict";

module.exports = function (column, ascending) {
  var multiIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  var sort = this.defaultSort;
  var multiSort = this.userMultiSorting[this.currentlySorting.column] ? this.userMultiSorting[this.currentlySorting.column] : this.opts.multiSorting[this.currentlySorting.column];
  var asc = this.currentlySorting.ascending;
  var self = this;
  return function (a, b) {
    var aVal = self._getValue(a, column) || '';
    var bVal = self._getValue(b, column) || '';
    var dir = ascending ? 1 : -1;
    var secondaryAsc;
    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();

    if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {
      var sortData = multiSort[multiIndex + 1];

      if (typeof sortData.ascending !== 'undefined') {
        secondaryAsc = sortData.ascending;
      } else {
        secondaryAsc = sortData.matchDir ? asc : !asc;
      }

      return sort(sortData.column, secondaryAsc, multiIndex + 1)(a, b);
    }

    return aVal > bVal ? dir : -dir;
  };
};