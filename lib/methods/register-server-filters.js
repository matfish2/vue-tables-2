var bus = require('../bus');

module.exports = function() {

  this.opts.customFilters.forEach(function(filter) {
		bus.$off('vue-tables.filter::' + filter);
        bus.$on('vue-tables.filter::' + filter, function(value) {
          this.customQueries[filter] = value;
          this.refresh();
        }.bind(this));
  }.bind(this));
}
