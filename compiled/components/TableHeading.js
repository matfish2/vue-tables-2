"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTableHeading = _interopRequireDefault(require("./renderless/RLTableHeading"));

var _SortControl = _interopRequireDefault(require("./SortControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'TableHeading',
  props: ['column'],
  components: {
    RLTableHeading: _RLTableHeading["default"],
    SortControl: _SortControl["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-heading", {
      attrs: {
        column: this.column
      },
      scopedSlots: {
        "default": function _default(props) {
          return h("th", {
            on: {
              "keypress": props.thEvents.keypress,
              "click": props.thEvents.click
            },
            "class": props.thAttrs["class"],
            attrs: {
              tabindex: props.thAttrs.tabIndex
            }
          }, [h("span", {
            "class": "VueTables__heading",
            attrs: {
              title: props.title
            }
          }, [props.heading]), h("sort-control")]);
        }
      }
    });
  }
};
exports["default"] = _default2;