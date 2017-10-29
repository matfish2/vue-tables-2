import merge from 'merge'

export default function(source) {

  const extra = source=='server'?serverExtra():clientExtra();

  return merge.recursive(true, {
    props: {
      name:{
        type: String,
        required:true
      }
    },
    computed: {
      state: function() {
        return this.$store.state[this.name]
      },
      Page: function() {
        return this.state.page
      },
      count: function() {
        return this.state.count
      },
      Columns: function() {
        return this.state.columns
      },
      tableData: function() {
        return this.state.data;
      },
      page: function() {
        return this.state.page;
      },
      limit: function() {
        return this.state.limit
      },
      customQueries: function() {
        return this.state.customQueries
      },
      query: function() {
        return this.state.query
      },
      orderBy: function() {
        return {
          column: this.state.sortBy,
          ascending: this.state.ascending
        }
      }
    },
    methods:{
     commit: function(action, payload) {
      return this.$store.commit(`${this.name}/${action}`, payload);
    },
    orderByColumn: function(column, ev) {

      if (!this.sortable(column))
        return;

      if (ev.shiftKey &&
        this.orderBy.column &&
        this.hasMultiSort) {
        this.setUserMultiSort(column);
    } else {
      var ascending = this.orderBy.column === column ? !this.orderBy.ascending : true;
      var orderBy = {column, ascending};
      this.updateState('orderBy', orderBy);
      this.commit('SORT', orderBy);
      this.dispatch('sorted', orderBy);
    }
  },
  setLimit: function(e) {
    let limit = typeof e==='object'?parseInt(e.target.value):e;
    this.updateState('perPage', limit);
    this.commit(`SET_LIMIT`, limit)
  },
  setOrder: function(column, ascending) {
    this.updateState('orderBy',{column, ascending});
    this.commit('SORT',{column, ascending});
  },
  setPage: function(page) {

    if (!page) {
      page = this.$refs.page.value;
    }

    if (!this.opts.pagination.dropdown)
      this.$refs.pagination.Page = page;

    this.commit(`PAGINATE`, page);
  }

}
}, extra)

}


function serverExtra() {
  return {
    methods:{
      setData: function({data, count}) {
       this.commit('SET_DATA', {data, count})
       this.commit('LOADED', {data, count})
     }
   }
 }
}

function clientExtra() {
  return {}
}
