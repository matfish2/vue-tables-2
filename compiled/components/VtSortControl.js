"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLSortControl = _interopRequireDefault(require("./renderless/RLSortControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtSortControl',
  components: {
    RLSortControl: _RLSortControl["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-sort-control", {
      scopedSlots: {
        "default": function _default(props) {
          return props.sortable ? props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("span", {
            "class": props["class"]
          }) : '';
        }
      }
    });
  }
};
exports["default"] = _default2;