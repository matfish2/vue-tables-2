"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLChildRow = _interopRequireDefault(require("./renderless/RLChildRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtChildRow',
  props: ['row', 'index'],
  components: {
    RLChildRow: _RLChildRow["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-child-row", {
      attrs: {
        row: this.row,
        index: this.index
      },
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("tr", {
            "class": 'VueTables__child-row ' + props["class"]
          }, [h("td", {
            attrs: {
              colspan: props.colspan
            }
          }, [props.childRow])]);
        }
      }
    });
  }
};
exports["default"] = _default2;