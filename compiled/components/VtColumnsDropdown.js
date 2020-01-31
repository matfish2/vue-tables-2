"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLColumnsDropdown = _interopRequireDefault(require("./renderless/RLColumnsDropdown"));

var _dropdownWrapper = _interopRequireDefault(require("./dropdown-wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtColumnsDropdown',
  components: {
    RLColumnsDropdown: _RLColumnsDropdown["default"]
  },
  render: function render(h) {
    return h("r-l-columns-dropdown", {
      scopedSlots: {
        "default": function _default(props) {
          if (props.override) {
            return h(props.override, {
              attrs: {
                props: props
              }
            });
          }

          var content;
          var cols = props.origColumns.map(function (column) {
            content = h("a", {
              "class": props.theme.dropdown.item,
              attrs: {
                href: "#"
              },
              on: {
                "click": function click() {
                  return props.toggleColumn(column);
                }
              }
            }, [h("input", {
              attrs: {
                type: "checkbox",
                disabled: props.onlyColumn(column)
              },
              domProps: {
                "value": column,
                "checked": props.columns.includes(column)
              }
            }), props.getHeading(column)]);
            return props.theme.framework === 'bulma' ? content : h("li", [content]);
          });
          return h("div", {
            "class": "VueTables__columns-dropdown"
          }, [h("button", {
            attrs: {
              type: "button"
            },
            "class": "".concat(props.theme.button, " ").concat(props.theme.dropdown.trigger),
            on: {
              "click": props.toggleColumnsDropdown
            }
          }, [props.display('columns'), h("span", {
            "class": "".concat(props.theme.icon, " ").concat(props.theme.small)
          }, [h("i", {
            "class": props.theme.dropdown.caret
          })])]), (0, _dropdownWrapper["default"])(h, props.theme.dropdown, cols, props.displayColumnsDropdown)]);
        }
      }
    });
  }
};
exports["default"] = _default2;