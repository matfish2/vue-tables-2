var methods = require('./mixins/methods');
var computed = require('./mixins/computed');
var data = require('./mixins/data');
var created = require('./mixins/created');
var directives = require('./mixins/directives');
var watchers = require('./mixins/watchers');
var template = require('./template.jsx');
var VuePagination = require('vue-pagination-2');

import paginationBus from'vue-pagination-2/src/bus';

exports.install = function(Vue, globalOptions) {

  Vue.use(VuePagination);

  var client = {
    name:'client-table',
    render: template('client'),
    mixins:[data, methods, computed, created, directives, watchers],
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

      this.limit =  this.opts.perPage;

      this.addCustomColumns();

      this.initOrderBy(this.columns[0]);

      // initialize query as a string or an object depending on options.filterByColumn
     this.query = this.initQuery();

      this.customQueries = this.initClientFilters();

      this.count = this.data.length;

    },

    mounted: function() {

     this.registerClientFilters();

     if (this.hasDateFilters()) {
      this.initDateFilters();
     }

    if (this.opts.toMomentFormat)
      this.transformDateStringsToMoment();

    paginationBus.$on('vue-pagination::' + this.id, function(page) {
      this.setPage(page, false);
    }.bind(this));

  },

  data: function() {
    return {
      source:'client',
      globalOptions
    }
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
    initClientFilters: require('./methods/init-client-filters'),
    search: require('./methods/client-search')
  }

}

Vue.component('v-client-table',client);

}


