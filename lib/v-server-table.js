var methods = require('./mixins/methods');
var computed = require('./mixins/computed');
var data = require('./mixins/data');
var created = require('./mixins/created');
var directives = require('./mixins/directives');
var watchers = require('./mixins/watchers');

var template = require('./template.jsx');
var VuePagination = require('vue-pagination-2');
var paginationBus = require('vue-pagination-2/src/bus');

exports.install = function(Vue, globalOptions) {

  Vue.use(VuePagination);

  var server = {
    render: template('server'),
    mixins:[data, methods,computed, created, directives, watchers],
    props: {
     columns:{
      type: Array,
      required:true
    },
    url: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required:false,
      default: function()
      {
        return {}
      }
    }
  },
  created: function() {

      this.query = this.initQuery();

      this.initOrderBy(this.columns[0]);

      // set initial records per page
      this.limit = this.opts.perPage;

      // request data for the first time
      this.getData(true).then(function(data) {

              // initialize query as a string or an object depending on options.filterByColumn
              this.customQueries = this.initServerFilters();

              this.setData(data);
              this.loading = false;

              if (this.hasDateFilters()) {
               setTimeout(function() {
                this.initDateFilters();
              }.bind(this),0);
             }

           }.bind(this));

    },
    mounted: function() {

      this.registerServerFilters();

      paginationBus.$on('vue-pagination::' + this.id, function(page) {

       this.setPage(page);

     }.bind(this));
    },
    data: function() {
      return {
        source:'server',
        data:[],
        loading:true,
        lastKeyStrokeAt:false,
        globalOptions
      }
    },

    methods: {
     refresh: require('./methods/refresh'),
     getData:require('./methods/get-data'),
     setData:require('./methods/set-data'),
     serverSearch:require('./methods/server-search'),
     registerServerFilters: require('./methods/register-server-filters'),
     initServerFilters: require('./methods/init-server-filters')
   },
   computed: {
    totalPages: require('./computed/total-pages')
  }

}

Vue.component('v-server-table', server);

}


