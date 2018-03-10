module.exports = function(query) {

  var el;

  if (this.opts.filterByColumn) {
    for (var column in query) {
      
      if (this.isDateFilter(column)) { // handled by init-date-filters
        continue;
      } 

        el = this.$el.querySelector(`[name='vf__${column}']`);
      
        if (el) {
          el.value = query[column];
        } else {
          console.error(`vue-tables-2: Error in setting filter value. Column '${column}' does not exist.`);
        }
    }
  } else {
    this.$el.querySelector('.VueTables__search input').value = query;
  }

}

