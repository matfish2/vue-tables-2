"use strict";

var clone = require('clone');

module.exports = {
  get: function get() {
    var data = clone(this.tableData);
    var column = this.orderBy.column;
    data = this.search(data);

    if (column) {
      // dummy var to force compilation
      if (this.time) this.time = this.time;
      data = this.opts.sortingAlgorithm.call(this, data, column);
    } else if (this.opts.groupBy) {
      data = this.opts.sortingAlgorithm.call(this, data, this.opts.groupBy);
    }

    if (this.vuex) {
      if (this.count != data.length) this.commit('SET_COUNT', data.length);
    } else {
      this.count = data.length;
    }

    var offset = (this.page - 1) * this.limit;
    this.allFilteredData = JSON.parse(JSON.stringify(data));
    data = data.splice(offset, this.limit);
    return this.applyFilters(data);
  },
  set: function set(val) {
    console.log(val);
  }
};