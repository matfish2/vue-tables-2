module.exports = function(row, column) {

    if (column.indexOf('.')===-1) return formatCellContent.call(this, row[column], column);

    var p = column.split('.');

    var value = row[p[0]];

    if (!value) return '';

    for (var i=1;i<p.length;i++) {
      value = value[p[i]];

      // If the nested structure doesn't exist return an empty string
      if (typeof value==='undefined')
      return '';
    }

    return formatCellContent.call(this, value, column);
  }

  function formatCellContent(value, column) {
     if (this.source==='client' && this.opts.dateColumns.includes(column)) {
       return this.formatDate(value, this.dateFormat(column));
     }

     if (this.isListFilter(column)) {
       return this.optionText(value, column);
     }
  }
