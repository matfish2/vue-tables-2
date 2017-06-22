'use strict';

var search = require('../methods/client-search');
var clone = require('clone');

module.exports = function () {

  var data = clone(this.tableData);

  var column = this.orderBy.column;

  if (column) data.sort(this.getSortFn(column));

  data = this.search(data);

  if (this.vuex) {
    if (this.count != data.length) this.commit('SET_COUNT', data.length, true);
  } else {
    this.count = data.length;
  }

  var offset = (this.page - 1) * this.limit;

  data = data.splice(offset, this.limit);

  return this.applyFilters(data);
};