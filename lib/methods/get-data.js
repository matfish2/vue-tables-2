var merge = require('merge');
var bus = require('../bus')

module.exports = function(externalHandler) {

  var data =  {
    query:this.query,
    limit:this.limit,
    orderBy:this.orderBy.column,
    ascending: this.orderBy.ascending?1:0,
    page:this.page,
    byColumn:this.opts.filterByColumn?1:0
  };

  data = merge(data, this.opts.params, this.customQueries);

  bus.$emit('vue-tables.loading', data);

  if (externalHandler)
    return this.$http.get(this.url, {params:data});

  return this.$http.get(this.url, {params:data}).then(function(data) {
      var data = data.json();
      this.setData(data);
    }.bind(this))
  .catch(function(e) {
    bus.$emit('vue-tables.error', e);
  }.bind(this));

}
