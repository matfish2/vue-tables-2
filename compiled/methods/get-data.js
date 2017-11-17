'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var merge = require('merge');

module.exports = function (promiseOnly) {
  var _data;

  var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  var keys = this.opts.requestKeys;

  var data = (_data = {}, _defineProperty(_data, keys.query, this.query), _defineProperty(_data, keys.limit, this.limit), _defineProperty(_data, keys.ascending, this.orderBy.ascending ? 1 : 0), _defineProperty(_data, keys.page, this.page), _defineProperty(_data, keys.byColumn, this.opts.filterByColumn ? 1 : 0), _data);

  if (this.orderBy.hasOwnProperty('column') && this.orderBy.column) data[keys.orderBy] = this.orderBy.column;

  data = merge(data, this.opts.params, this.customQueries, additionalData);

  if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
    data.multiSort = this.userMultiSorting[this.orderBy.column];
  }

  data = this.opts.requestAdapter(data);

  this.dispatch('loading', data);

  var promise = this.sendRequest(data);

  if (promiseOnly) return promise;

  return promise.then(function (response) {

    var data = this.getResponseData(response);

    return this.setData(this.opts.responseAdapter(data));
  }.bind(this));
};