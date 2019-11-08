"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTableHead = _interopRequireDefault(require("./renderless/RLTableHead"));

var _HeadingsRow = _interopRequireDefault(require("./HeadingsRow"));

var _FiltersRow = _interopRequireDefault(require("./FiltersRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'TableBody',
  components: {
    RLTableHead: _RLTableHead["default"],
    HeadingsRow: _HeadingsRow["default"],
    FiltersRow: _FiltersRow["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-head", {
      scopedSlots: {
        "default": function _default(props) {
          return h("thead", [h("headings-row"), props.opts.filterByColumn && props.opts.filterable ? h("filters-row") : '']);
        }
      }
    });
  }
};
exports["default"] = _default2;