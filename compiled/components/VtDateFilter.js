"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLDateFilter = _interopRequireDefault(require("./renderless/RLDateFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtDateFilter',
  props: ['column'],
  components: {
    RLDateFilter: _RLDateFilter["default"]
  },
  render: function render(h) {
    var _this = this;

    return h("r-l-date-filter", {
      attrs: {
        column: this.column
      },
      scopedSlots: {
        "default": function _default(props) {
          return props.overide ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("div", {
            "class": "VueTables__date-filter",
            attrs: {
              id: 'VueTables__' + _this.column + '-filter'
            }
          }, [h("span", {
            "class": "VueTables__filter-placeholder"
          }, [props.placeholder])]);
        }
      }
    });
  }
};
exports["default"] = _default2;