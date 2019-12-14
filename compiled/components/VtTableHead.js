"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTableHead = _interopRequireDefault(require("./renderless/RLTableHead"));

var _VtHeadingsRow = _interopRequireDefault(require("./VtHeadingsRow"));

var _VtFiltersRow = _interopRequireDefault(require("./VtFiltersRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableHead',
  components: {
    RLTableHead: _RLTableHead["default"],
    VtHeadingsRow: _VtHeadingsRow["default"],
    VtFiltersRow: _VtFiltersRow["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-head", {
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("thead", [props.slots.prependHead, h("vt-headings-row"), props.slots.beforeFilters, props.opts.filterByColumn && props.opts.filterable ? h("vt-filters-row") : '', props.slots.afterFilters]);
        }
      }
    });
  }
};
exports["default"] = _default2;