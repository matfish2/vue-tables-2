"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLChildRowToggler = _interopRequireDefault(require("./renderless/RLChildRowToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'ChildRowToggler',
  props: ['rowId'],
  components: {
    RLChildRowToggler: _RLChildRowToggler["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-child-row-toggler", {
      attrs: {
        "row-id": this.rowId
      },
      scopedSlots: {
        "default": function _default(props) {
          var _this = this;

          return h("td", {
            attrs: {
              tabindex: "0"
            },
            on: {
              "keypress": function keypress(e) {
                if (e.key === 'Enter') {
                  props.toggleChildRow.bind(_this, props.rowId)();
                }
              },
              "click": props.toggleChildRow.bind(this, props.rowId)
            }
          }, [h("span", {
            "class": "VueTables__child-row-toggler " + props.childRowTogglerClass(props.rowId)
          })]);
        }
      }
    });
  }
};
exports["default"] = _default2;