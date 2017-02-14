'use strict';

module.exports = function (column) {

  var ascending = this.orderBy.ascending;

  if (typeof this.opts.customSorting[column] == 'undefined') return function (a, b) {

    var aVal = a[column];
    var bVal = b[column];

    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();

    if (ascending) return aVal >= bVal ? 1 : -1;

    return bVal >= aVal ? 1 : -1;
  };

  return this.opts.customSorting[column](ascending);
};