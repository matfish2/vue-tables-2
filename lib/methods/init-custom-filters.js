module.exports = function() {

  var customQueries = {};

  var init = this.opts.initFilters;
  let key;

  this.opts.customFilters.forEach(function(filter) {

    key = this.source=='client'?filter.name:filter;

    customQueries[key] = init.hasOwnProperty(key)?init[key]:'';
  }.bind(this));

  return customQueries;
}
