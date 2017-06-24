import {Pagination, PaginationEvent} from 'vue-pagination-2';
import vuex from './state/vuex';
import normal from './state/normal';
import merge from 'merge';
import Table from './table';
import stateData from './state/data';

var data = require('./mixins/data');
var created = require('./mixins/created');

var template = require('./template');

exports.install = function(Vue, globalOptions, useVuex, customTemplate) {

  var client = merge.recursive(true,Table(), {
    name:'client-table',
    components:{
      Pagination
    },
    render: customTemplate?customTemplate:template('client'),
    props: {
      columns:{
        type: Array,
        required:true
      },
      data: {
        type: Array,
        required: true
      },
      name:{
        type: String,
        required:false
      },
      options: {
        type: Object,
        required:false,
        default: function() {
          return {}
        }
      }
    },

    created: function() {

      created(this);

      if (!this.vuex) {

        this.initOrderBy(this.Columns[0]);

        this.query = this.initQuery();

        this.customQueries = this.initCustomFilters();

      }


    },

    mounted: function() {

     if (this.hasDateFilters()) {
      this.initDateFilters();
    }

    if (this.opts.toMomentFormat)
      this.transformDateStringsToMoment();

    if (!this.vuex) {
     this.registerClientFilters();

     PaginationEvent.$on('vue-pagination::' + this.id, function(page) {
      this.setPage(page);
      this.dispatch('pagination', page);
    }.bind(this));
   }

   this.loadState();

 },

 data: function() {
  return merge.recursive(data(), {
    source:'client',
    globalOptions
  }, stateData(useVuex, 'client'))
},
computed: {
  q:require('./computed/q'),
  customQ: require('./computed/custom-q'),
  totalPages: require('./computed/total-pages'),
  filteredData: require('./computed/filtered-data')
},

filters: {
  setCount:require('./filters/set-count'),
  date: require('./filters/date')
},

methods: {
  transformDateStringsToMoment: require('./methods/transform-date-strings-to-moment'),
  registerClientFilters: require('./methods/register-client-filters'),
  search: require('./methods/client-search'),
  loadState() {

    if (!this.opts.saveState) return;

    if (!this.storage.getItem(this.stateKey)) {
      this.initState();
      return;
    }

    var state = JSON.parse(this.storage.getItem(this.stateKey));

    this.setFilter(state.query);
    this.setOrder(state.orderBy.column, state.orderBy.ascending);

    if (this.vuex) {
      this.commit('SET_LIMIT', state.perPage);
    }
    else {
      this.limit = state.perPage;
    }

    this.setPage(state.page);

    this.activeState = true;


    // TODO: Custom Queries
  }
}

});

  let state = useVuex?vuex():normal();

  client = merge.recursive(client, state);

  Vue.component('v-client-table',client);

}


