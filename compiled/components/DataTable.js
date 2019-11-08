"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _PerPageSelector = _interopRequireDefault(require("./PerPageSelector"));

var _Table = _interopRequireDefault(require("./Table"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _DropdownPagination = _interopRequireDefault(require("./DropdownPagination"));

var _GenericFilter = _interopRequireDefault(require("./GenericFilter"));

var _ColumnsDropdown = _interopRequireDefault(require("./ColumnsDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'DataTableComponent',
  components: {
    PerPageSelector: _PerPageSelector["default"],
    TableComponent: _Table["default"],
    Pagination: _Pagination["default"],
    DropdownPagination: _DropdownPagination["default"],
    ColumnsDropdown: _ColumnsDropdown["default"],
    GenericFilter: _GenericFilter["default"]
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
  methods: {
    setFilter: function setFilter(val) {
      this.$refs.table.setFilter(val);
    },
    setPage: function setPage(val) {
      this.$refs.table.setPage(val);
    }
  },
  computed: {
    filteredData: function filteredData() {
      return this.$refs.table.filteredData;
    },
    allFilteredData: function allFilteredData() {
      return this.$refs.table.allFilteredData;
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
    return h("r-l-data-table", {
      attrs: {
        data: this.data,
        columns: this.columns,
        name: this.name,
        options: this.options
      },
      ref: "table",
      scopedSlots: {
        "default": function _default(props) {
          return h("div", {
            "class": "VueTables VueTables--" + props.source
          }, [h("div", {
            "class": props.theme.row
          }, [h("div", {
            "class": props.theme.column
          }, [props.opts.filterByColumn ? '' : h("generic-filter"), h("per-page-selector"), props.opts.columnsDropdown ? h("columns-dropdown") : '', props.opts.dropdownPagination ? h("dropdown-pagination") : ''])]), h("div", {
            "class": "table-responsive"
          }, [h("table-component")]), h("pagination")]);
        }
      }
    });
  }
};
exports["default"] = _default2;