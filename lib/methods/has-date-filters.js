var intersection = require('array-intersect').default;

module.exports = function() {

  var opts = this.opts;

  return opts.dateColumns.length &&
  opts.filterByColumn &&
  ((typeof opts.filterable=='boolean' && opts.filterable) ||
    (typeof opts.filterable=='object' && intersection(opts.filterable, opts.dateColumns).length))

}
