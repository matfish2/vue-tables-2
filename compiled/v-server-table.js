'use strict';

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _data2 = require('./state/data');

var _data3 = _interopRequireDefault(_data2);

var _vuex = require('./state/vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _normal = require('./state/normal');

var _normal2 = _interopRequireDefault(_normal);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _vuePagination = require('vue-pagination-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = require('./mixins/data');
var _created = require('./mixins/created');

var templateCompiler = require('./template-compiler');

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bootstrap3';
  var template = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'default';


  var state = useVuex ? (0, _vuex2.default)('server') : (0, _normal2.default)();

  var server = _merge2.default.recursive(true, (0, _table2.default)(), {
    name: 'server-table',
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: templateCompiler.call(this, template, theme),
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      }
    },
    created: function created() {

      _created(this);

      if (!this.vuex) {
        this.query = this.initQuery();
        this.initOrderBy();
        this.customQueries = this.initCustomFilters();
      }

      this.loadState();

      this.getData(true).then(function (response) {

        var data = this.getResponseData(response);
        this.setData(this.opts.responseAdapter.call(this.$root, data));

        this.loading = false;

        if (this.hasDateFilters()) {
          setTimeout(function () {
            this.initDateFilters();
          }.bind(this), 0);
        }
      }.bind(this));
    },
    mounted: function mounted() {
      var _this = this;

      if (this.opts.saveState) {
        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.hasDateFilters) {
          this.opts.dateColumns.forEach(function (column) {
            return _this._setDateFilterText(column, state.query[column]);
          });
        }
      }

      if (this.vuex) return;

      this.registerServerFilters();

      if (this.options.initialPage) this.setPage(this.options.initialPage, true);

      _vuePagination.PaginationEvent.$on('vue-pagination::' + this.id, function (page) {

        this.setPage(page);
        this.dispatch('pagination');
      }.bind(this));
    },
    data: function data() {
      return _merge2.default.recursive(_data(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions: globalOptions
      }, (0, _data3.default)(useVuex, 'server', this.options.initialPage));
    },
    methods: {
      refresh: require('./methods/refresh'),
      getData: require('./methods/get-data'),
      setData: require('./methods/set-data'),
      serverSearch: require('./methods/server-search'),
      registerServerFilters: require('./methods/register-server-filters'),
      loadState: function loadState() {
        var _this2 = this;

        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.vuex) {
          this.commit('SET_STATE', {
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

        if (!this.opts.pagination.dropdown) {
          setTimeout(function () {
            _this2.$refs.pagination.Page = state.page;
          }, 0);
        }

        this.activeState = true;
      }
    },
    computed: {
      totalPages: require('./computed/total-pages'),
      hasMultiSort: function hasMultiSort() {
        return this.opts.serverMultiSorting;
      }
    }

  }, state);

  Vue.component('v-server-table', server);

  return server;
};