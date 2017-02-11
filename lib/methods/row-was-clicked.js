module.exports = function(row) {

  var data;

  if (this.source=='client' && typeof row[this.opts.uniqueKey] !== 'undefined') {
    data = this.tableData.filter(function(r) {
    return row.id===r.id;
  })[0];
  } else {
    data = row;
  }

  this.dispatch('row-click', data);

}
