"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLDateFilter = _interopRequireDefault(require("./renderless/RLDateFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'DateFilter',
  props: ['column'],
  components: {
    RLDateFilter: _RLDateFilter["default"]
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("r-l-date-filter", {
      attrs: {
        column: this.column
      },
      scopedSlots: {
        "default": function _default(props) {
          return h("div", {
            "class": "VueTables__date-filter",
            attrs: {
              id: 'VueTables__' + _this.column + '-filter'
            }
          }, [h("span", {
            "class": "VueTables__filter-placeholder"
          }, [props.display('filterBy', {
            column: props.getHeading(_this.column)
          })])]);
        }
      }
    });
  }
};
exports["default"] = _default2;