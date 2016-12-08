var search = require('../methods/client-search')

module.exports = function() {

  var data = this.tableData.slice(0);

  var column = this.orderBy.column;
  var ascending = this.orderBy.ascending;

  data.sort(function(a, b) {

    if (ascending)
      return a[column] >= b[column]?1:-1;

    return b[column] >= a[column]?1:-1;
  });

  data = this.search(data);

  if (this.vuex) {
    if (this.count!=data.length)
      this.commit('SET_COUNT',data.length, true)
  } else {
    this.count = data.length;
  }

  var offset = (this.page-1) * this.limit;

  data = data.splice(offset, this.limit);

  return this.applyFilters(data);
}
