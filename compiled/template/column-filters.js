'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (h, that) {

  if (!that.opts.filterByColumn || !that.opts.filterable) return '';

  var textFilter = require('./text-filter')(h, that);
  var dateFilter = require('./date-filter')(h, that);
  var listFilter = require('./list-filter')(h, that);

  var filters = [];
  var filter;

  if (that.opts.childRow) filters.push(h(
    'th',
    null,
    []
  ));

  that.allColumns.map(function (column) {

    if (that.filterable(column)) {
      switch (true) {
        case that.isTextFilter(column):
          filter = textFilter(column);break;
        case that.isDateFilter(column):
          filter = dateFilter(column);break;
        case that.isListFilter(column):
          filter = listFilter(column);break;
      }
    } else if (typeof that.$slots['filter__' + column] !== 'undefined') {
      filter = that.$slots['filter__' + column];
    } else {
      filter = '';
    }

    filters.push(h(
      'th',
      { 'class': that.columnClass(column) },
      [h(
        'div',
        _defineProperty({ 'class': 'VueTables__column-filter' }, 'class', 'VueTables__' + column + '-filter-wrapper'),
        [filter]
      )]
    ));
  });

  return h(
    'tr',
    { 'class': 'VueTables__filters-row' },
    [filters]
  );
};
