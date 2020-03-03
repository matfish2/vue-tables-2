"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTableCell = _interopRequireDefault(require("./renderless/RLTableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableCell',
  props: ['column'],
  components: {
    RLTableCell: _RLTableCell["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-cell", {
      attrs: {
        column: this.column
      },
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("td", {
            attrs: {
              tabindex: props.tabIndex
            },
            "class": props.classes
          }, [props.content]);
        }
      }
    });
  }
};
exports["default"] = _default2;