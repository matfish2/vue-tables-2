'use strict';

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (h, that) {

  if (!that.opts.filterByColumn || !that.opts.filterable) return '';

  var textFilter = require('./text-filter').call(that, h);
  var dateFilter = require('./date-filter').call(that, h);
  var listFilter = require('./list-filter').call(that, h);

  var filters = [];
  var filter;

  if (that.hasChildRow && that.opts.childRowTogglerFirst) filters.push(h(
    'th',
    null,
    []
  ));

  that.allColumns.map(function (column) {

    var filter = '';

    if (that.filterable(column)) {
      switch (true) {
        case that.isTextFilter(column):
          filter = textFilter.call(that, column);break;
        case that.isDateFilter(column):
          filter = dateFilter.call(that, column);break;
        case that.isListFilter(column):
          filter = listFilter.call(that, column);break;
      }
    }

    if (typeof that.$slots['filter__' + column] !== 'undefined') {
      filter = filter ? h(
        'div',
        null,
        [filter, that.$slots['filter__' + column]]
      ) : that.$slots['filter__' + column];
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

  if (that.hasChildRow && !that.opts.childRowTogglerFirst) filters.push(h(
    'th',
    null,
    []
  ));

  return h(
    'tr',
    { 'class': 'VueTables__filters-row' },
    [filters]
  );
};