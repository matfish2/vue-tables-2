var template = require('./template.jsx');
import VuePagination from 'vue-pagination-2'
import vuex from './state/vuex'
import normal from './state/normal'
import merge from 'merge'
import Table from './table'
import data from './mixins/data'
import created from './mixins/created'
import stateData from './state/data'
import paginationBus from'vue-pagination-2/src/bus';

exports.install = function(Vue, globalOptions, useVuex) {

  Vue.use(VuePagination, useVuex);

  var client = merge.recursive(true,Table(), {
    name:'client-table',
    render: template('client'),
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

      this.addCustomColumns();

      if (!this.vuex) {

        this.initOrderBy(this.Columns[0]);

        this.query = this.initQuery();

        this.customQueries = this.initCustomFilters();

        this.count = this.data.length;
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


