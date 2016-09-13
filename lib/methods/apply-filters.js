module.exports = function(data) {
  return data.map(function(row) {
     for (var column in row) {
        row[column] = this.formatDate(row[column], this.opts.dateFormat);

        if (this.isListFilter(column)) {
          row[column] = this.optionText(row[column], column);
        }

        //row[column] = this.highlightMatch(row[column], column);

     }

     return row;
  }.bind(this));
}
