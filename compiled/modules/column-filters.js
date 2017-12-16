'use strict';

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (h) {

  if (!this.opts.filterByColumn || !this.opts.filterable) return '';

  var textFilter = require('./text-filter')(h);
  var dateFilter = require('./date-filter')(h);
  var listFilter = require('./list-filter')(h);

  var filters = [];
  var filter;

  if (this.hasChildRow && this.opts.childRowTogglerFirst) filters.push(h(
    'th',
    null,
    []
  ));

  this.allColumns.map(function (column) {

    var filter = '';

    if (this.filterable(column)) {
      switch (true) {
        case this.isTextFilter(column):
          filter = textFilter(column);break;
        case this.isDateFilter(column):
          filter = dateFilter(column);break;
        case this.isListFilter(column):
          filter = listFilter(column);break;
      }
    }

    if (typeof this.$slots['filter__' + column] !== 'undefined') {
      filter = filter ? h(
        'div',
        null,
        [filter, this.$slots['filter__' + column]]
      ) : this.$slots['filter__' + column];
    }

    filters.push(h(
      'th',
      { 'class': this.columnClass(column) },
      [h(
        'div',
        _defineProperty({ 'class': 'VueTables__column-filter' }, 'class', 'VueTables__' + column + '-filter-wrapper'),
        [filter]
      )]
    ));
  });

  if (this.hasChildRow && !this.opts.childRowTogglerFirst) filters.push(h(
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