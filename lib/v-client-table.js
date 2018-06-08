import {Pagination} from 'vue-pagination-2';
import vuex from './state/vuex';
import normal from './state/normal';
import merge from 'merge';
import Table from './table';
import stateData from './state/data';

var data = require('./mixins/data');
var created = require('./mixins/created');

var templateCompiler = require('./template-compiler');

exports.install = function(Vue, globalOptions, useVuex, theme = 'bootstrap3', template = 'default') {

  var client = merge.recursive(true,Table(), {
    name:'client-table',
    components:{
      Pagination
    },
    render: templateCompiler.call(this, template, theme),
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

        this.initOrderBy();

        this.query = this.initQuery();

        this.customQueries = this.initCustomFilters();

      }


    },

    mounted: function() {
    
    this._setColumnsDropdownCloseListener();

    if (this.opts.toMomentFormat)
      this.transformDateStringsToMoment();

    if (!this.vuex) {
     this.registerClientFilters();

     if (this.options.initialPage)
     this.setPage(this.options.initialPage);

   }

   if (this.opts.groupBy && !this.opts.orderBy) {
     this.orderBy.column = this.opts.groupBy;
   }

   this.loadState();

   if (this.hasDateFilters()) {
    this.initDateFilters();
  }

 },

 data: function() {
  return merge.recursive(data(), {
    source:'client',
    globalOptions,
    currentlySorting:{},
    time:Date.now(),
  }, stateData(useVuex, 'client', this.options.initialPage))
},
computed: {
  q:require('./computed/q'),
  customQ: require('./computed/custom-q'),
  totalPages: require('./computed/total-pages'),
  filteredData: require('./computed/filtered-data'),
  hasMultiSort() {
      return this.opts.clientMultiSorting;
  }
},
methods: {
  transformDateStringsToMoment: require('./methods/transform-date-strings-to-moment'),
  registerClientFilters: require('./methods/register-client-filters'),
  search: require('./methods/client-search'),
  defaultSort: require('./methods/default-sort'),
  getGroupSlot: require('./methods/get-group-slot'),
  toggleGroup(group, e) {

    e.stopPropagation();

    var i = this.collapsedGroups.indexOf(group);
    if (i >= 0) {
      this.collapsedGroups.splice(i, 1);
    } else {
      this.collapsedGroups.push(group);
    }
  },
  groupToggleIcon(group) {
    var cls = this.opts.sortIcon.base + ' ';
    cls+= this.collapsedGroups.indexOf(group)>-1?
    this.opts.sortIcon.down:
    this.opts.sortIcon.up;

    return cls;
  },
  loadState() {

    if (!this.opts.saveState) return;

    if (!this.storage.getItem(this.stateKey)) {
      this.initState();
      this.activeState = true;
      return;
    }

    var state = JSON.parse(this.storage.getItem(this.stateKey));

    if (this.opts.filterable)
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

  return client;

}


