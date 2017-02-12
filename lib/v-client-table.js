import VuePagination from 'vue-pagination-2'
import vuex from './state/vuex'
import normal from './state/normal'
import merge from 'merge'
import Table from './table'
import stateData from './state/data'
import paginationBus from'vue-pagination-2/src/bus';

var data = require('./mixins/data');
var created = require('./mixins/created');

var template = require('./template.jsx');

exports.install = function(Vue, globalOptions, useVuex, customTemplate) {

  Vue.use(VuePagination, useVuex);

  var client = merge.recursive(true,Table(), {
    name:'client-table',
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

     paginationBus.$on('vue-pagination::' + this.id, function(page) {
      this.setPage(page);
    }.bind(this));
   }

 },

 data: function() {
  return merge.recursive(data(), {
    source:'client',
    globalOptions
  }, stateData(useVuex))
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
  search: require('./methods/client-search')
}

});

  let state = useVuex?vuex():normal();

  client = merge.recursive(client, state);

  Vue.component('v-client-table',client);

}


