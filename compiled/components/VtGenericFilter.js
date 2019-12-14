"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLGenericFilter = _interopRequireDefault(require("./renderless/RLGenericFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtGenericFilter',
  components: {
    RLGenericFilter: _RLGenericFilter["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-generic-filter", {
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("div", {
            "class": "VueTables__search-field"
          }, [h("label", {
            attrs: {
              "for": "VueTables__search_".concat(props.id)
            },
            "class": props.theme.label
          }, [props.display("filter")]), h("input", {
            "class": "VueTables__search__input ".concat(props.theme.input, " ").concat(props.theme.small),
            attrs: {
              type: "text",
              placeholder: props.display('filterPlaceholder'),
              id: "VueTables__search_".concat(props.id),
              autocomplete: "off"
            },
            on: {
              "keyup": props.search(props.debounce)
            }
          })]);
        }
      }
    });
  }
};
exports["default"] = _default2;