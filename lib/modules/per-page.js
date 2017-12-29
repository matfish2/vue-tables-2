module.exports = function(h) {

  var perpageValues = require('./per-page-values').call(this, h);
  
  return (cls, id) => {
        
    return perpageValues.length>1?<select class={cls}
    name="limit"
    value={this.limit}
    on-change={this.setLimit.bind(this)}
    id={id}
    >
    {perpageValues}
    </select>:'';
  }
  
}