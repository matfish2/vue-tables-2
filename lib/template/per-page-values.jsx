module.exports = function(h, that) {
var perpageValues = [];
 that.opts.perPageValues.map(function(value) {
  var selected = that.limit==value;
    perpageValues.push(<option value={value} selected={selected}>{value}</option>)
  })

 return perpageValues;

}
