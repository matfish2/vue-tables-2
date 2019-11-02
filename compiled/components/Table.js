"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLTable = _interopRequireDefault(require("./renderless/RLTable"));

var _TableHead = _interopRequireDefault(require("./TableHead"));

var _TableBody = _interopRequireDefault(require("./TableBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'TableComponent',
  components: {
    RLTable: _RLTable["default"],
    TableHead: _TableHead["default"],
    TableBody: _TableBody["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table", {
      scopedSlots: {
        "default": function _default(props) {
          var caption = props.caption ? h("caption", [props.caption]) : '';
          return h("table", {
            "class": props.tableAttrs["class"],
            attrs: {
              summary: props.tableAttrs.summary
            }
          }, [caption, h("table-head"), h("table-body")]);
        }
      }
    });
  }
};
exports["default"] = _default2;