var merge = require('merge');

module.exports = function(promiseOnly) {

  var keys = this.opts.requestKeys;

  var data =  {
    [keys.query]:this.query,
    [keys.limit]:this.limit,
    [keys.orderBy]:this.orderBy.column,
    [keys.ascending]: this.orderBy.ascending?1:0,
    [keys.page]:this.page,
    [keys.byColumn]:this.opts.filterByColumn?1:0
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
