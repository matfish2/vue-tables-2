import merge from 'merge'

export default function(self) {

  let extra = self.source=='server'?
  {
    [`${self.name}/SET_DATA`] (state, {data, count}) {
      state.data = data;
      state.count = count;
    },
    [`${self.name}/LOADING`] (state, payload) {

    },
    [`${self.name}/LOADED`] (state, payload) {

    },
    [`${self.name}/ERROR`] (state, payload) {

    }
  }:
  {
   [`${self.name}/SET_COUNT`] (state, count) {
    state.count = count;
  }
}

return merge.recursive(true,{
  [`${self.name}/PAGINATE`] (state, page) {
    state.page = page;
    if (self.source=='server')
      self.getData()
  },
  [`${self.name}/SET_FILTER`] (state, filter) {
    state.page= 1;
    state.query = filter;

    if (self.source=='server') {
      self.getData()
    }
  },
  [`${self.name}/SET_CUSTOM_FILTER`] (state, {filter, value}) {

    state.page= 1;
    state.customQueries[filter] = value;

    if (self.source=='server') {
      self.getData()
    }
  },
  [`${self.name}/SET_LIMIT`] (state, limit) {
    state.page = 1;
    state.limit = limit;

    if (self.source=='server')
      self.getData()
  },
  [`${self.name}/SORT`] (state, column) {
    state.ascending = state.sortBy==column?!state.ascending:true;
    state.sortBy = column;

    if (self.source=='server')
      self.getData()
  },
  [`${self.name}/ROW_CLICK`] (state, row) {

  }
}, extra)
}
