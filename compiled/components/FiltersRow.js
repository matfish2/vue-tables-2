"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLFiltersRow = _interopRequireDefault(require("./renderless/RLFiltersRow"));

var _TextFilter = _interopRequireDefault(require("./TextFilter"));

var _ListFilter = _interopRequireDefault(require("./ListFilter"));

var _DateFilter = _interopRequireDefault(require("./DateFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default2 = {
  name: 'FiltersRow',
  components: {
    RLFiltersRow: _RLFiltersRow["default"],
    TextFilter: _TextFilter["default"],
    ListFilter: _ListFilter["default"],
    DateFilter: _DateFilter["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-filters-row", {
      scopedSlots: {
        "default": function _default(props) {
          var filters = [];
          if (props.hasChildRow && props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push(h("th"));
          props.columns.map(function (column) {
            var filter = '';

            if (props.filterable(column)) {
              filter = h(props.filterType(column), {
                props: {
                  column: column
                }
              }); // switch (true) {
              //     case props.isTextFilter(column):
              //         filter = <text-filter column={column}/>;
              //         break;
              //     case props.isDateFilter(column):
              //         filter = <date-filter column={column}/>;
              //         break;
              //     case props.isListFilter(column):
              //         filter = <list-filter column={column}/>
              //         break;
              // }
            }

            if (typeof props.slots["filter__".concat(column)] !== 'undefined') {
              filter = filter ? h("div", [filter, props.$slots["filter__".concat(column)]]) : props.slots["filter__".concat(column)];
            }

            filters.push(h("th", {
              "class": props.columnClass(column)
            }, [!!filter ? h("div", _defineProperty({
              "class": "VueTables__column-filter"
            }, "class", 'VueTables__' + column + '-filter-wrapper'), [filter]) : '']));
          });
          if (props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push(h("th"));
          return h("tr", {
            "class": "VueTables__filters-row"
          }, [filters]);
        }
      }
    });
  }
};
exports["default"] = _default2;