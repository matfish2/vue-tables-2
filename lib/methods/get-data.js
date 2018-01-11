var merge = require('merge');

module.exports = function(promiseOnly, additionalData = {}, emitLoading = true) {

  var keys = this.opts.requestKeys;

  var data = {
    [keys.query]:this.query,
    [keys.limit]:this.limit,
    [keys.ascending]: this.orderBy.ascending?1:0,
    [keys.page]:this.page,
    [keys.byColumn]:this.opts.filterByColumn?1:0
  };


  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column)
   data[keys.orderBy] = this.orderBy.column;

 data = merge(data, this.opts.params, this.customQueries, additionalData);
 
 if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
  data.multiSort = this.userMultiSorting[this.orderBy.column];
}

data = this.opts.requestAdapter(data);

if (emitLoading) {
  this.dispatch('loading', data);
}

var promise = this.sendRequest(data);

if (promiseOnly) return promise;

return promise.then(function(response) {

  let data = this.getResponseData(response);

  return this.setData(this.opts.responseAdapter.call(this.$root,data));
}.bind(this));


}
