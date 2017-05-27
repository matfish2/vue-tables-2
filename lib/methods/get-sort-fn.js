module.exports = function(column) {

var ascending = this.orderBy.ascending;

if (typeof this.opts.customSorting[column]=='undefined')
  return (a, b) => {

    // Set to empty string if is null object
    var aVal = a[column] == null ? '' : a[column];
    var bVal = b[column] == null ? '' : b[column];

    if (typeof aVal==='string') aVal = aVal.toLowerCase();
    if (typeof bVal==='string') bVal = bVal.toLowerCase();

    if (ascending)
      return aVal >= bVal?1:-1;

    return bVal >= aVal?1:-1;
  };

if (this.opts.customSorting[column] === 'numeric')
  return (a, b) => {

    // Cast to numbers if sort is set to 'numeric' for this column
    var aVal = Number(a[column]);
    var bVal = Number(b[column]);

    if (ascending)
      return aVal >= bVal?1:-1;

    return bVal >= aVal?1:-1;
  };

  return this.opts.customSorting[column](ascending);

}
