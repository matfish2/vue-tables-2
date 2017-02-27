import bus from '../bus';

module.exports = function() {

  this.opts.customFilters.forEach(function(filter) {
	bus.$off('vue-tables.filter::' + filter.name);
    bus.$on('vue-tables.filter::' + filter.name, function(value) {
      this.customQueries[filter.name] = value;
      this.setPage(1);
      this.search(this.data);
    }.bind(this));

  }.bind(this))

}
