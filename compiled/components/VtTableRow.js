"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("babel-helper-vue-jsx-merge-props"));

var _RLTableRow = _interopRequireDefault(require("./renderless/RLTableRow"));

var _VtTableCell = _interopRequireDefault(require("./VtTableCell"));

var _VtChildRowToggler = _interopRequireDefault(require("./VtChildRowToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableRow',
  props: ['row', 'index'],
  components: {
    RLTableRow: _RLTableRow["default"],
    VtTableCell: _VtTableCell["default"],
    VtChildRowToggler: _VtChildRowToggler["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-row", {
      attrs: {
        row: this.row,
        index: this.index
      },
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("tr", (0, _babelHelperVueJsxMergeProps["default"])([{
            "class": "VueTables__row " + props.rowAttrs["class"]
          }, {
            attrs: props.rowAttrs.attrs
          }, {
            on: {
              "click": props.rowEvents.click
            }
          }]), [props.childRowTogglerFirst ? h("vt-child-row-toggler", {
            attrs: {
              "row-id": props.rowId
            }
          }) : '', props.columns.map(function (column) {
            return h("vt-table-cell", {
              attrs: {
                column: column
              }
            });
          }), props.childRowTogglerLast ? h("vt-child-row-toggler", {
            attrs: {
              "row-id": props.rowId
            }
          }) : '']);
        }
      }
    });
  }
};
exports["default"] = _default2;