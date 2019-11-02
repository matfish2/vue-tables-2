"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _PerPageSelector = _interopRequireDefault(require("./PerPageSelector"));

var _Table = _interopRequireDefault(require("./Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'DataTableComponent',
  components: {
    PerPageSelector: _PerPageSelector["default"],
    TableComponent: _Table["default"]
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    }
  },
  render: function render(h) {
    return h("r-l-data-table", {
      attrs: {
        data: this.data,
        columns: this.columns,
        name: this.name,
        options: this.options
      },
      scopedSlots: {
        "default": function _default(props) {
          return h("div", {
            "class": "VueTables VueTables--" + props.source
          }, [h("div", {
            "class": props.theme.row
          }, [h("div", {
            "class": props.theme.column
          }, [h("per-page-selector")])]), h("div", {
            "class": "table-responsive"
          }, [h("table-component")])]);
        }
      }
    });
  }
};
exports["default"] = _default2;