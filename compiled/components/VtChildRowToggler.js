"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLChildRowToggler = _interopRequireDefault(require("./renderless/RLChildRowToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtChildRowToggler',
  props: ['rowId'],
  components: {
    RLChildRowToggler: _RLChildRowToggler["default"]
  },
  render: function render(h) {
    return h("r-l-child-row-toggler", {
      attrs: {
        "row-id": this.rowId
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
            on: {
              "keypress": function keypress(e) {
                if (e.key === 'Enter') {
                  props.toggle();
                }
              },
              "click": props.toggle
            }
          }, [h("span", {
            "class": "VueTables__child-row-toggler " + props["class"]()
          })]);
        }
      }
    });
  }
};
exports["default"] = _default2;