module.exports = function(data) {
  return data.map(function(row) {
   for (var column in row) {

    if (this.source==='client')
      row[column] = this.formatDate(row[column], this.opts.dateFormat);

    if (this.isListFilter(column)) {
      row[column] = this.optionText(row[column], column);
    }

  }

  return row;
}.bind(this));
}
