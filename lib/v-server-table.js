import merge from 'merge';
import stateData from './state/data';
import vuex from './state/vuex';
import normal from './state/normal';
import Table from './table';
import {Pagination, PaginationEvent} from 'vue-pagination-2';

var data = require('./mixins/data');
var created = require('./mixins/created');

var template = require('./template');

exports.install = function (Vue, globalOptions, useVuex, customTemplate) {

  let state = useVuex ? vuex('server') : normal();

  var server = merge.recursive(true, Table(), {
    name: 'server-table',
    components:{
      Pagination
    },
    render: customTemplate?customTemplate:template('server'),
    props: {
      columns: {
        type: Array,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      name:{
        type: String,
        required:false
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

        this.initOrderBy();

      }

      if (!this.vuex) {
        this.customQueries = this.initCustomFilters();
      }

      this.loadState();

      this.getData(true).then(function (response) {

        let data = this.getResponseData(response);
        this.setData(this.opts.responseAdapter(data));

        this.loading = false;

        if (this.hasDateFilters()) {
          setTimeout(function () {
            this.initDateFilters();
          }.bind(this), 0);
        }

      }.bind(this));

    },
    mounted: function () {

      if (this.opts.saveState) {
        var state = JSON.parse(this.storage.getItem(this.stateKey));

        if (this.hasDateFilters) {
          this.opts.dateColumns.forEach(column=>this._setDateFilterText(column, state.query[column]));
        }
        
      }

      if (this.vuex)
        return;

      this.registerServerFilters();

      if (this.options.initialPage)
      this.setPage(this.options.initialPage, true);

      PaginationEvent.$on('vue-pagination::' + this.id, function (page) {

        this.setPage(page);
        this.dispatch('pagination');

      }.bind(this));

    },
    data: function () {
      return merge.recursive(data(), {
        source: 'server',
        loading: true,
        lastKeyStrokeAt: false,
        globalOptions
      }, stateData(useVuex, 'server', this.options.initialPage));
    },
    methods: {
      refresh: require('./methods/refresh'),
      getData: require('./methods/get-data'),
      setData: require('./methods/set-data'),
      serverSearch: require('./methods/server-search'),
      registerServerFilters: require('./methods/register-server-filters'),
      loadState() {

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
          setTimeout(()=>{
            this.$refs.pagination.Page = state.page;
          },0);
        }

        this.activeState = true;
      }
    },
    computed: {
      totalPages: require('./computed/total-pages'),
      hasMultiSort() {
        return this.opts.serverMultiSorting;
      }
    }

  }, state);

  Vue.component('v-server-table', server);

};
