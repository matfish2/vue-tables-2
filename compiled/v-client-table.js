"use strict";

var _Pagination = _interopRequireDefault(require("./components/Pagination"));

var _PerPageSelector = _interopRequireDefault(require("./components/PerPageSelector"));

var _DataTable = _interopRequireDefault(require("./components/DataTable"));

var _vuex = _interopRequireDefault(require("./state/vuex"));

var _normal = _interopRequireDefault(require("./state/normal"));

var _merge = _interopRequireDefault(require("merge"));

var _table = _interopRequireDefault(require("./table"));

var _data2 = _interopRequireDefault(require("./state/data"));

var _resizeableColumns = _interopRequireDefault(require("./helpers/resizeable-columns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _data = require("./mixins/data");

var _created = require("./mixins/created");

var themes = {
  bootstrap3: require('./themes/bootstrap3')(),
  bootstrap4: require('./themes/bootstrap4')(),
  bulma: require('./themes/bulma')()
};

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "bootstrap3";

  var client = _merge["default"].recursive(true, (0, _table["default"])(), {
    name: "r-l-client-table",
    components: {
      Pagination: _Pagination["default"],
      PerPageSelector: _PerPageSelector["default"]
    },
    render: require('./components/renderless/RLDataTable'),
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
    provide: function provide() {
      var _this = this;

      return {
        count: function count() {
          return _this.count;
        },
        rowWasClicked: this.rowWasClicked,
        render: this.render,
        opts: function opts() {
          return _this.opts;
        },
        limit: function limit() {
          return _this.limit;
        },
        setLimit: this.setLimit,
        perPageValues: function perPageValues() {
          return _this.perPageValues;
        },
        page: function page() {
          return _this.page;
        },
        id: this.id,
        theme: this.theme,
        display: this.display,
        origColumns: this.columns,
        allColumns: function allColumns() {
          return _this.allColumns;
        },
        sortableClass: this.sortableClass,
        getHeadingTooltip: this.getHeadingTooltip,
        getHeading: this.getHeading,
        sortable: this.sortable,
        sortableChevronClass: this.sortableChevronClass,
        orderByColumn: this.orderByColumn,
        filteredData: function filteredData() {
          return _this.filteredData;
        },
        tableData: function tableData() {
          return _this.tableData;
        },
        source: this.source,
        colspan: this.colspan,
        setEditingCell: this._setEditingCell,
        revertValue: this._revertValue,
        updateValue: this._updateValue,
        editing: function editing() {
          return _this.editing;
        },
        hasChildRow: function hasChildRow() {
          return _this.hasChildRow;
        },
        getChildRowTemplate: this._getChildRowTemplate,
        openChildRows: function openChildRows() {
          return _this.openChildRows;
        },
        vuex: this.vuex,
        name: this.name,
        // onPagination: this._onPagination,
        setPage: this.setPage,
        totalPages: function totalPages() {
          return _this.totalPages;
        },
        query: function query() {
          return _this.query;
        },
        filterable: this.filterable,
        filterType: this._filterType,
        columnClass: this.columnClass,
        search: this._search,
        getColumnName: this._getColumnName,
        onlyColumn: this._onlyColumn,
        toggleColumn: this.toggleColumn,
        toggleColumnsDropdown: this._toggleColumnsDropdown,
        displayColumnsDropdown: function displayColumnsDropdown() {
          return _this.displayColumnsDropdown;
        }
      };
    },
    created: function created() {
      _created(this);

      if (this.opts.toMomentFormat) this.transformDateStringsToMoment();

      if (!this.vuex) {
        this.initOrderBy();
        this.query = this.initQuery();
        this.customQueries = this.initCustomFilters();
      }
    },
    mounted: function mounted() {
      if (this.opts.resizableColumns) {
        (0, _resizeableColumns["default"])(this.$el.querySelector("table"), this.hasChildRow, this.opts.childRowTogglerFirst);
      } // this._setColumnsDropdownCloseListener();


      if (!this.vuex) {
        this.registerClientFilters();
        if (this.options.initialPage) this.setPage(this.options.initialPage);
      }

      if (this.opts.groupBy && !this.opts.orderBy) {
        this.orderBy.column = this.opts.groupBy;
      }

      this.loadState();

      if (this.hasDateFilters()) {
        this.initDateFilters();
      }
    },
    model: {
      prop: "data"
    },
    data: function data() {
      return _merge["default"].recursive(_data(), {
        source: "client",
        theme: themes[theme],
        globalOptions: globalOptions,
        currentlySorting: {},
        time: Date.now()
      }, (0, _data2["default"])(useVuex, "client", this.options.initialPage));
    },
    computed: {
      q: require("./computed/q"),
      customQ: require("./computed/custom-q"),
      totalPages: require("./computed/total-pages"),
      filteredData: require("./computed/filtered-data"),
      hasMultiSort: function hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },
    methods: {
      transformDateStringsToMoment: require("./methods/transform-date-strings-to-moment"),
      registerClientFilters: require("./methods/register-client-filters"),
      search: require("./methods/client-search"),
      defaultSort: require("./methods/default-sort"),
      getGroupSlot: require("./methods/get-group-slot"),
      toggleGroup: function toggleGroup(group, e) {
        e.stopPropagation();
        var i = this.collapsedGroups.indexOf(group);

        if (i >= 0) {
          this.collapsedGroups.splice(i, 1);
        } else {
          this.collapsedGroups.push(group);
        }
      },
      groupToggleIcon: function groupToggleIcon(group) {
        var cls = this.opts.sortIcon.base + " ";
        cls += this.collapsedGroups.indexOf(group) > -1 ? this.opts.sortIcon.down : this.opts.sortIcon.up;
        return cls;
      },
      loadState: function loadState() {
        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));
        if (this.opts.filterable) this.setFilter(state.query);
        this.setOrder(state.orderBy.column, state.orderBy.ascending);

        if (this.vuex) {
          this.commit("SET_LIMIT", state.perPage);
        } else {
          this.limit = state.perPage;
        }

        this.setPage(state.page);
        this.activeState = true;

        if (state.userControlsColumns) {
          this.userColumnsDisplay = state.userColumnsDisplay;
          this.userControlsColumns = state.userControlsColumns;
        } // TODO: Custom Queries

      }
    }
  });

  var state = useVuex ? (0, _vuex["default"])() : (0, _normal["default"])();
  client = _merge["default"].recursive(client, state);
  Vue.component("r-l-data-table", client);
  Vue.component("v-client-table", _DataTable["default"]);
  return _DataTable["default"];
};