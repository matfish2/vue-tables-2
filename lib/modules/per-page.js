module.exports = function(h) {

    var perpageValues = require('./per-page-values').call(this, h);
    var id = 'VueTables__limit_' + this.id;
    
    return perpageValues.length>1?<select class="form-control"
    name="limit"
    value={this.limit}
    on-change={this.setLimit.bind(this)}
    id={id}
    >
    {perpageValues}
  </select>:'';
}