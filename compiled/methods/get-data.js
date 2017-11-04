'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var merge = require('merge');

module.exports = function (promiseOnly) {
  var _opts$requestAdapter;

  var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  var keys = this.opts.requestKeys;

  var data = this.opts.requestAdapter((_opts$requestAdapter = {}, _defineProperty(_opts$requestAdapter, keys.query, this.query), _defineProperty(_opts$requestAdapter, keys.limit, this.limit), _defineProperty(_opts$requestAdapter, keys.ascending, this.orderBy.ascending ? 1 : 0), _defineProperty(_opts$requestAdapter, keys.page, this.page), _defineProperty(_opts$requestAdapter, keys.byColumn, this.opts.filterByColumn ? 1 : 0), _opts$requestAdapter));

  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column) data[keys.orderBy] = this.orderBy.column;

  data = merge(data, this.opts.params, this.customQueries, additionalData);

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    data.multiSort = this.userMultiSorting[this.orderBy.column];
  }

  this.dispatch('loading', data);

  var promise = this.sendRequest(data);

  if (promiseOnly) return promise;

  return promise.then(function (response) {

    var data = this.getResponseData(response);

    return this.setData(this.opts.responseAdapter(data));
  }.bind(this));
};
