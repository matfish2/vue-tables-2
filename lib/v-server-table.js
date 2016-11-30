import merge from 'merge';

var data = require('./mixins/data');
var created = require('./mixins/created');

var template = require('./template.jsx');
var VuePagination = require('vue-pagination-2');
var paginationBus = require('vue-pagination-2/src/bus');

import stateData from './state/data';
import vuex from './state/vuex';
import normal from './state/normal';
import Table from './table';


exports.install = function (Vue, globalOptions, useVuex) {

  let state = useVuex ? vuex('server') : normal();

  Vue.use(VuePagination, useVuex);

  var server = merge.recursive(true, Table(), {
    name: 'server-table',
    render: template('server'),
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
        default: function ()
        {
          return {}
        }
      }
    },
    created: function () {

      created(this);

      if (!this.vuex) {
        this.query = this.initQuery();

        this.initOrderBy(this.Columns[0]);

      }

      this.getData(true).then(function (data) {

        if (!this.vuex) {
          this.customQueries = this.initCustomFilters();
        }

        this.setData(this.opts.responseAdapter.call(this, data));

        this.loading = false;

        if (this.hasDateFilters()) {
          setTimeout(function () {
            this.initDateFilters();
          }.bind(this), 0);
        }

      }.bind(this));

    },
    mounted: function () {

      if (this.vuex)
        return;

      this.registerServerFilters();

      paginationBus.$on('vue-pagination::' + this.id, function (page) {

        this.setPage(page);

      }.bind(this));
    },
    data: function () {
      return merge.recursive(data(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions
      }, stateData(useVuex, 'server'));
    },
    methods: {
      refresh: require('./methods/refresh'),
      getData: require('./methods/get-data'),
      setData: require('./methods/set-data'),
      serverSearch: require('./methods/server-search'),
      registerServerFilters: require('./methods/register-server-filters'),
    },
    computed: {
      totalPages: require('./computed/total-pages')
    }

  }, state);

  Vue.component('v-server-table', server);

};
