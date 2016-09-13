module.exports = function() {

  var customQueries = {};

  this.opts.customFilters.forEach(function(filter) {
    customQueries[filter.name] = '';
  });

  return customQueries;
}
