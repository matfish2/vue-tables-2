'use strict';

var merge = require('merge');

module.exports = function (filter) {

  if (this.opts.filterByColumn) filter = merge(this.query, filter);

  if (this.vuex) {
    this.commit('SET_FILTER', filter);
  } else {
    this.query = filter;
  }

  this.setDateFilterText(filter);

  if (this.source == 'server') {
    this.getData();
  }
};