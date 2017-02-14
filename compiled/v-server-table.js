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

var template = require('./template');

exports.install = function (Vue, globalOptions, useVuex, customTemplate) {

  var state = useVuex ? (0, _vuex2.default)('server') : (0, _normal2.default)();

  Vue.use(_vuePagination.VuePagination, useVuex);

  var server = _merge2.default.recursive(true, (0, _table2.default)(), {
    name: 'server-table',
    render: customTemplate ? customTemplate : template('server'),
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String,
        required: true
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

        this.initOrderBy(this.Columns[0]);
      }

      if (!this.vuex) {
        this.customQueries = this.initCustomFilters();
      }

      this.getData(true).then(function (response) {

        var data = this.getResponseData(response);
        this.setData(this.opts.responseAdapter(data));

        this.loading = false;

        if (this.hasDateFilters()) {
          setTimeout(function () {
            this.initDateFilters();
          }.bind(this), 0);
        }
      }.bind(this));
    },
    mounted: function mounted() {

      if (this.vuex) return;

      this.registerServerFilters();

      _vuePagination.VueEvent.$on('vue-pagination::' + this.id, function (page) {

        this.setPage(page);
      }.bind(this));
    },
    data: function data() {
      return _merge2.default.recursive(_data(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions: globalOptions
      }, (0, _data3.default)(useVuex, 'server'));
    },
    methods: {
      refresh: require('./methods/refresh'),
      getData: require('./methods/get-data'),
      setData: require('./methods/set-data'),
      serverSearch: require('./methods/server-search'),
      registerServerFilters: require('./methods/register-server-filters')
    },
    computed: {
      totalPages: require('./computed/total-pages')
    }

  }, state);

  Vue.component('v-server-table', server);
};