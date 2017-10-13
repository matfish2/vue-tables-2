var merge = require('merge');

module.exports = function(promiseOnly, additionalData = {}) {

  var keys = this.opts.requestKeys;

  var  data =  this.opts.requestAdapter({
      [keys.query]:this.query,
      [keys.limit]:this.limit,
      [keys.orderBy]:this.orderBy.column,
      [keys.ascending]: this.orderBy.ascending?1:0,
      [keys.page]:this.page,
      [keys.byColumn]:this.opts.filterByColumn?1:0
    });

  data = merge(data, this.opts.params, this.customQueries, additionalData);

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    data.multiSort = this.userMultiSorting[this.orderBy.column];
  }

  this.dispatch('loading', data);

  var promise = this.sendRequest(data);

  if (promiseOnly) return promise;

  return promise.then(function(response) {

    let data = this.getResponseData(response);

    return this.setData(this.opts.responseAdapter(data));
  }.bind(this));


}
