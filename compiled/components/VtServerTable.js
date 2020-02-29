"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VtPerPageSelector = _interopRequireDefault(require("./VtPerPageSelector"));

var _VtTable = _interopRequireDefault(require("./VtTable"));

var _VtPagination = _interopRequireDefault(require("./VtPagination"));

var _VtDropdownPagination = _interopRequireDefault(require("./VtDropdownPagination"));

var _VtGenericFilter = _interopRequireDefault(require("./VtGenericFilter"));

var _VtColumnsDropdown = _interopRequireDefault(require("./VtColumnsDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtServerTable',
  components: {
    VtPerPageSelector: _VtPerPageSelector["default"],
    VtTable: _VtTable["default"],
    VtPagination: _VtPagination["default"],
    VtDropdownPagination: _VtDropdownPagination["default"],
    VtColumnsDropdown: _VtColumnsDropdown["default"],
    VtGenericFilter: _VtGenericFilter["default"]
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: false
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
  computed: {
    customQueries: {
      get: function get() {
        return this.$refs.table.customQueries;
      },
      set: function set(val) {
        this.$refs.table.customQueries = val;
      }
    }
  },
  methods: {
    refresh: function refresh() {
      this.$refs.table.refresh();
    },
    setFilter: function setFilter(val) {
      this.$refs.table.setFilter(val);
    },
    setPage: function setPage(val) {
      this.$refs.table.setPage(val);
    },
    setOrder: function setOrder(column, asc) {
      this.$refs.table.setOrder(column, asc);
    },
    toggleChildRow: function toggleChildRow(rowId) {
      this.$refs.table.toggleChildRow(rowId);
    },
    getOpenChildRows: function getOpenChildRows() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return this.$refs.table.getOpenChildRows(rows);
    },
    getResponseData: function getResponseData(response) {
      return this.$refs.table.getResponseData(response);
    }
  },
  provide: function provide() {
    var _this = this;

    return {
      scopedSlots: function scopedSlots() {
        return _this.$scopedSlots;
      },
      slots: function slots() {
        return _this.$slots;
      }
    };
  },
  model: {
    prop: "data"
  },
  render: function render(h) {
    return h("r-l-server-table", {
      attrs: {
        url: this.url,
        columns: this.columns,
        name: this.name,
        options: this.options
      },
      ref: "table",
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("div", {
            "class": "VueTables VueTables--" + props.source
          }, [h("div", {
            "class": props.theme.row
          }, [h("div", {
            "class": props.theme.column
          }, [!props.opts.filterByColumn && props.opts.filterable ? h("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.left, " VueTables__search")
          }, [props.slots.beforeFilter, h("vt-generic-filter"), props.slots.afterFilter]) : '', props.slots.afterFilterWrapper, props.perPageValues.length > 1 ? h("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__limit")
          }, [props.slots.beforeLimit, h("vt-per-page-selector"), props.slots.afterLimit]) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? h("div", {
            "class": "VueTables__pagination-wrapper"
          }, [h("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__dropdown-pagination")
          }, [h("vt-dropdown-pagination")])]) : '', props.opts.columnsDropdown ? h("div", {
            "class": "VueTables__columns-dropdown-wrapper ".concat(props.theme.right, " ").concat(props.theme.dropdown.container)
          }, [h("vt-columns-dropdown")]) : ''])]), props.slots.beforeTable, h("div", {
            "class": "table-responsive"
          }, [h("vt-table", {
            ref: "vt_table"
          })]), props.slots.afterTable, h("vt-pagination")]);
        }
      }
    });
  }
};
exports["default"] = _default2;