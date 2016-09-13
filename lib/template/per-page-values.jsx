module.exports = function(h, that) {
var perpageValues = [];
 that.opts.perPageValues.map(function(value) {
  // var selected = that.limit==value;
    perpageValues.push(<option value={value} >{value}</option>)
  })

 return perpageValues;

}
