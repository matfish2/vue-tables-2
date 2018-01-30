import merge from 'merge'

export default function(self) {

  let extra = self.source=='server'?
  {
    [`${self.name}/SET_DATA`] (state, response) {
      
      var data = self.getResponseData(response);

      state.data = data.data;
      state.count = parseInt(data.count);
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
    self.updateState('page', page);

    if (self.source=='server')
      self.getData()

    self.commit('PAGINATION', page);
  },
  [`${self.name}/SET_FILTER`] (state, filter) {
    state.page = 1;

    self.updateState('page', 1);

    state.query = filter;

    if (self.source=='server') {
      self.getData()
    }
  },
  [`${self.name}/PAGINATION`] (state, page) {

  },
  [`${self.name}/SET_CUSTOM_FILTER`] (state, {filter, value}) {

    state.page= 1;
    self.updateState('page', 1);
    state.customQueries[filter] = value;

    if (self.source=='server') {
      self.getData();
    }
  },
  [`${self.name}/SET_STATE`] (state, {page, query, customQueries, limit, orderBy}) {
    state.customQueries = customQueries;
    state.query = query;
    state.page = page;
    state.limit = limit;
    state.ascending = orderBy.ascending;
    state.sortBy = orderBy.column;
  },
  [`${self.name}/SET_LIMIT`] (state, limit) {
    state.page = 1;
    self.updateState('page', 1);

    state.limit = limit;

    if (self.source=='server')
      self.getData()
  },
  [`${self.name}/SORT`] (state, {column, ascending}) {

    state.ascending = ascending;
    state.sortBy = column;

    if (self.source=='server')
      self.getData()
  },
  [`${self.name}/SORTED`] (state, data) {

  },
  [`${self.name}/ROW_CLICK`] (state, row) {

  },
  [`${self.name}/FILTER`] (state, row) {

  },
  [`${self.name}/LIMIT`] (state, limit) {

  }
}, extra)
}
