module.exports = function(h) {
  var perpageValues = [];

  this.opts.perPageValues.every(function(value) {
    var isLastEntry = value >= this.count;
    var selected = this.limit==value || (isLastEntry && this.limit>value);
    perpageValues.push(<option value={value} selected={selected}>{value}</option>)
    return !isLastEntry;
  });

  return perpageValues;

}
