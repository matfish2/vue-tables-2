"use strict";

var _merge = _interopRequireDefault(require("merge"));

var _data2 = _interopRequireDefault(require("./state/data"));

var _vuex = _interopRequireDefault(require("./state/vuex"));

var _normal = _interopRequireDefault(require("./state/normal"));

var _table = _interopRequireDefault(require("./table"));

var _resizeableColumns = _interopRequireDefault(require("./helpers/resizeable-columns"));

var _VtServerTable = _interopRequireDefault(require("./components/VtServerTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _data = require("./mixins/data");

var _created = require("./mixins/created");

var provide = require("./mixins/provide");

var themes = {
  bootstrap3: require('./themes/bootstrap3')(),
  bootstrap4: require('./themes/bootstrap4')(),
  bulma: require('./themes/bulma')()
};

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "bootstrap3";
  var componentsOverride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var state = useVuex ? (0, _vuex["default"])("server") : (0, _normal["default"])();

  var server = _merge["default"].recursive(true, (0, _table["default"])(), {
    name: "r-l-server-table",
    render: require('./components/renderless/RLDataTable'),
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String
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
    provide: provide,
    created: function created() {
      if (!this.opts.requestFunction && !this.url) {
        throw 'vue-tables-2: you must provide either a "url" prop or a custom request function. Aborting';
      }

      _created(this);

      if (!this.vuex) {
        this.query = this.initQuery();
        this.initOrderBy();
        this.customQueries = this.initCustomFilters();
      }

      if (this.opts.sendInitialRequest) {
        this.loadState();
        this.getData(true).then(function (response) {
          if (typeof response === 'undefined') return;
          this.setData(response);
          this.loading = false;

          if (this.hasDateFilters()) {
            setTimeout(function () {
              this.initDateFilters();
            }.bind(this), 0);
          }
        }.bind(this));
      }
    },
    mounted: function mounted() {
      this._setFiltersDOM(this.query);

      if (this.opts.resizableColumns) {
        (0, _resizeableColumns["default"])(this.$el.querySelector("table"), this.hasChildRow, this.opts.childRowTogglerFirst, this.opts.resizableColumns);
      } // this._setColumnsDropdownCloseListener();


      if (this.vuex) return;
      this.registerServerFilters();
      if (this.options.initialPage) this.setPage(this.options.initialPage, true);
    },
    data: function data() {
      return _merge["default"].recursive(_data(), {
        source: "server",
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions: globalOptions,
        componentsOverride: componentsOverride,
        theme: typeof theme === 'string' ? themes[theme] : theme()
      }, (0, _data2["default"])(useVuex, "server", this.options.initialPage));
    },
    methods: {
      refresh: require("./methods/refresh"),
      getData: require("./methods/get-data"),
      setData: require("./methods/set-data"),
      serverSearch: require("./methods/server-search"),
      registerServerFilters: require("./methods/register-server-filters"),
      loadState: function loadState() {
        var _this = this;

        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.vuex) {
          this.commit("SET_STATE", {
            query: state.query,
            customQueries: state.customQueries,
            page: state.page,
            limit: state.perPage,
            orderBy: state.orderBy
          });
        } else {
          this.page = state.page;
          this.query = state.query;
          this.customQueries = state.customQueries;
          this.limit = state.perPage;
          this.orderBy = state.orderBy;
        }

        if (!this.opts.pagination.dropdown && this.$refs.pagination) {
          setTimeout(function () {
            _this.$refs.pagination.Page = state.page;
          }, 0);
        }

        if (this.opts.filterable) {
          setTimeout(function () {
            _this._setFiltersDOM(state.query);
          }, 0);
        }

        this.activeState = true;
      }
    },
    watch: {
      url: function url() {
        this.refresh();
      }
    },
    computed: {
      totalPages: require("./computed/total-pages"),
      filteredQuery: require("./computed/filtered-query"),
      hasMultiSort: function hasMultiSort() {
        return this.opts.serverMultiSorting;
      }
    }
  }, state);

  Vue.component("r-l-server-table", server);
  Vue.component("v-server-table", _VtServerTable["default"]);
  return _VtServerTable["default"];
};