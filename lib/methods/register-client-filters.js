var bus = require('../bus');

module.exports = function() {

  this.opts.customFilters.forEach(function(filter) {
    bus.$on('vue-tables.filter::' + filter.name, function(value) {
      this.customQueries[filter.name] = value;
      this.search(this.data);
    }.bind(this));

  }.bind(this))

}
