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
    orderByColumn: function(column) {

      if (!this.sortable(column))
        return;

      this.commit(`SORT`, column);
    },
    setLimit: function(e) {
      let limit = parseInt(e.target.value);
      this.commit(`SET_LIMIT`, limit)
    },
    setPage: function(page, programmatic,e) {

      if (e) {
        page = e.target.value;
        this[e.target.name] = page;

      }

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
