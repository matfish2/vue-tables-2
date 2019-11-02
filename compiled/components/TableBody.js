"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTableBody = _interopRequireDefault(require("./renderless/RLTableBody"));

var _NoResultsRow = _interopRequireDefault(require("./NoResultsRow"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'TableBody',
  components: {
    RLTableBody: _RLTableBody["default"],
    NoResultsRow: _NoResultsRow["default"],
    TableRow: _TableRow["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-body", {
      scopedSlots: {
        "default": function _default(props) {
          if (props.data.length === 0) {
            return h("no-results-row");
          }

          return h("tbody", [props.data.map(function (row) {
            return h("table-row", {
              attrs: {
                row: row
              }
            });
          })]);
        }
      }
    });
  }
};
exports["default"] = _default2;