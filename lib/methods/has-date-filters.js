var intersection = require('array-intersection');

module.exports = function() {

  var opts = this.opts;

  return opts.dateColumns.length &&
         opts.filterByColumn &&
         ((typeof opts.filterable=='boolean' && opts.filterable) || intersection(opts.filterable, opts.dateColumns).length)
}
