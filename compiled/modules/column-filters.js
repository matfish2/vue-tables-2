"use strict";

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function (h) {
  var _this = this;

  return function (classes) {
    if (!_this.opts.filterByColumn || !_this.opts.filterable) return '';

    var textFilter = require('./text-filter').call(_this, h, classes.input);

    var dateFilter = require('./date-filter').call(_this, h);

    var listFilter = require('./list-filter').call(_this, h, classes.select);

    var filters = [];
    var filter;
    if (_this.hasChildRow && _this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) filters.push(h("th"));

    _this.allColumns.map(function (column) {
      var filter = '';

      if (_this.filterable(column)) {
        switch (true) {
          case _this.isTextFilter(column):
            filter = textFilter(column);
            break;

          case _this.isDateFilter(column):
            filter = dateFilter(column);
            break;

          case _this.isListFilter(column):
            filter = listFilter(column);
            break;
        }
      }

      if (typeof _this.$slots["filter__".concat(column)] !== 'undefined') {
        filter = filter ? h("div", [filter, _this.$slots["filter__".concat(column)]]) : _this.$slots["filter__".concat(column)];
      }

      filters.push(h("th", {
        "class": _this.columnClass(column)
      }, [h("div", _defineProperty({
        "class": "VueTables__column-filter"
      }, "class", 'VueTables__' + column + '-filter-wrapper'), [filter])]));
    });

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) filters.push(h("th"));
    return h("tr", {
      "class": "VueTables__filters-row"
    }, [filters]);
  };
};