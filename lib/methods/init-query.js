module.exports = function() {

  if (!this.opts.filterByColumn) return '';

  var query = {};

  this.columns.forEach(function(column) {
     query[column] = '';
    }.bind(this));

  return query;
}
