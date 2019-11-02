"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLHeadingsRow = _interopRequireDefault(require("./renderless/RLHeadingsRow"));

var _TableHeading = _interopRequireDefault(require("./TableHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'HeadingsRow',
  components: {
    RLHeadingsRow: _RLHeadingsRow["default"],
    TableHeading: _TableHeading["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-headings-row", {
      scopedSlots: {
        "default": function _default(props) {
          var headings = [];

          if (props.childRowTogglerFirst) {
            headings.push(h("th"));
          }

          props.columns.map(function (column) {
            headings.push(h("table-heading", {
              attrs: {
                column: column
              }
            }));
          });
          return h("tr", [headings]);
        }
      }
    });
  }
};
exports["default"] = _default2;