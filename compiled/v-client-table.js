'use strict';

var _vuePagination = require('vue-pagination-2');

var _vuex = require('./state/vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _normal = require('./state/normal');

var _normal2 = _interopRequireDefault(_normal);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _data2 = require('./state/data');

var _data3 = _interopRequireDefault(_data2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = require('./mixins/data');
var _created = require('./mixins/created');

var template = require('./template');

exports.install = function (Vue, globalOptions, useVuex, customTemplate) {

  var client = _merge2.default.recursive(true, (0, _table2.default)(), {
    name: 'client-table',
    components: {
      Pagination: _vuePagination.Pagination
    },
    render: customTemplate ? customTemplate : template('client'),
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
        default: function _default() {
          return {};
        }
      }
    },

    created: function created() {

      _created(this);

      if (!this.vuex) {

        this.initOrderBy();

        this.query = this.initQuery();

        this.customQueries = this.initCustomFilters();
      }
    },

    mounted: function mounted() {

      if (this.hasDateFilters()) {
        this.initDateFilters();
      }

      if (this.opts.toMomentFormat) this.transformDateStringsToMoment();

      if (!this.vuex) {
        this.registerClientFilters();

        if (this.options.initialPage) this.setPage(this.options.initialPage);

        _vuePagination.PaginationEvent.$on('vue-pagination::' + this.id, function (page) {
          this.setPage(page);
          this.dispatch('pagination', page);
        }.bind(this));
      }

      this.loadState();
    },

    data: function data() {
      return _merge2.default.recursive(_data(), {
        source: 'client',
        globalOptions: globalOptions,
        currentlySorting: {},
        time: Date.now()
      }, (0, _data3.default)(useVuex, 'client', this.options.initialPage));
    },
    computed: {
      q: require('./computed/q'),
      customQ: require('./computed/custom-q'),
      totalPages: require('./computed/total-pages'),
      filteredData: require('./computed/filtered-data'),
      hasMultiSort: function hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },

    filters: {
      setCount: require('./filters/set-count'),
      date: require('./filters/date')
    },

    methods: {
      transformDateStringsToMoment: require('./methods/transform-date-strings-to-moment'),
      registerClientFilters: require('./methods/register-client-filters'),
      search: require('./methods/client-search'),
      defaultSort: require('./methods/default-sort'),
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
          this.commit('SET_LIMIT', state.perPage);
        } else {
          this.limit = state.perPage;
        }

        this.setPage(state.page);

        this.activeState = true;

        // TODO: Custom Queries
      }
    }

  });

  var state = useVuex ? (0, _vuex2.default)() : (0, _normal2.default)();

  client = _merge2.default.recursive(client, state);

  Vue.component('v-client-table', client);
};
