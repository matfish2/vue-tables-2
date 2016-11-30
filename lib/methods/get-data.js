var merge = require('merge');

module.exports = function(promiseOnly) {

  var data =  {
    query:this.query,
    limit:this.limit,
    orderBy:this.orderBy.column,
    ascending: this.orderBy.ascending?1:0,
    page:this.page,
    byColumn:this.opts.filterByColumn?1:0
  };

  data = merge(data, this.opts.params, this.customQueries);

  this.dispatch('loading', data);

  var promise = this.$http.get(this.url, {params:data}).then(function(data) {
    return data.json();
  }.bind(this),  function(e) {
    this.dispatch('error', e);
  }.bind(this));

  if (promiseOnly) return promise;

  return promise.then(function(data) {
    return this.setData(this.opts.responseAdapter(data));
  });


}
