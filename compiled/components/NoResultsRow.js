"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLNoResultsRow = _interopRequireDefault(require("./renderless/RLNoResultsRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'NoResultsRow',
  components: {
    RLNoResultsRow: _RLNoResultsRow["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-no-results-row", {
      scopedSlots: {
        "default": function _default(props) {
          return h("tr", {
            "class": "VueTables__no-results"
          }, [h("td", {
            "class": "text-center",
            attrs: {
              tabindex: "0",
              colspan: props.colspan
            }
          }, [props.display(props.loading ? 'loading' : 'noResults')])]);
        }
      }
    });
  }
};
exports["default"] = _default2;