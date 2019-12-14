"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTableBody = _interopRequireDefault(require("./renderless/RLTableBody"));

var _VtNoResultsRow = _interopRequireDefault(require("./VtNoResultsRow"));

var _VtTableRow = _interopRequireDefault(require("./VtTableRow"));

var _VtChildRow = _interopRequireDefault(require("./VtChildRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableBody',
  components: {
    RLTableBody: _RLTableBody["default"],
    VtNoResultsRow: _VtNoResultsRow["default"],
    VtTableRow: _VtTableRow["default"],
    VtChildRow: _VtChildRow["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-body", {
      scopedSlots: {
        "default": function _default(props) {
          if (props.data.length === 0) {
            return h("vt-no-results-row");
          }

          var rows = [];
          props.data.forEach(function (row, index) {
            rows.push(h("vt-table-row", {
              attrs: {
                row: row,
                index: index
              }
            }));

            if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
              rows.push(h("vt-child-row", {
                attrs: {
                  row: row,
                  index: index
                }
              }));
            }
          });
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("tbody", [props.slots.prependBody, rows, props.slots.appendBody]);
        }
      }
    });
  }
};
exports["default"] = _default2;