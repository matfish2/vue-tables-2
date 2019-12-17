"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLPerPageSelector = _interopRequireDefault(require("./renderless/RLPerPageSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtPerPageSelector',
  components: {
    RLPerPageSelector: _RLPerPageSelector["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-per-page-selector", {
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("div", {
            "class": "VueTables__limit-field"
          }, [h("label", {
            "class": props.labelClass,
            attrs: {
              "for": "VueTables__limit_".concat(props.id)
            }
          }, [props.display('limit')]), h("select", {
            attrs: {
              id: props.selectAttrs.id
            },
            "class": props.selectAttrs["class"],
            domProps: {
              "value": props.selectAttrs.value
            },
            on: {
              "change": props.selectEvents.change
            }
          }, [props.perPageValues.map(function (val) {
            return h("option", {
              domProps: {
                "value": val
              }
            }, [val]);
          })])]);
        }
      }
    });
  }
};
exports["default"] = _default2;