"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLFiltersRow = _interopRequireDefault(require("./renderless/RLFiltersRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'FiltersRow',
  components: {
    RLFiltersRow: _RLFiltersRow["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-filters-row", {
      scopedSlots: {
        "default": function _default(props) {
          return h("tr");
        }
      }
    });
  }
};
exports["default"] = _default2;