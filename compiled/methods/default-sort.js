'use strict';

module.exports = function (column, ascending) {
  var multiIndex = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];


  var sort = this.defaultSort;
  var multiSort = this.opts.multiSorting[this.currentlySorting.column];
  var asc = this.currentlySorting.ascending;

  return function (a, b) {

    var aVal = a[column];
    var bVal = b[column];
    var dir = ascending ? 1 : -1;

    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();

    if (aVal === bVal && multiSort && multiSort[multiIndex + 1]) {
      var sortData = multiSort[multiIndex + 1];
      return sort(sortData.column, sortData.matchDir ? asc : !asc, multiIndex + 1)(a, b);
    }

    return aVal > bVal ? dir : -dir;
  };
};