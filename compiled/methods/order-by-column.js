'use strict';

var bus = require('../bus');

module.exports = function (colName) {

  if (!this.sortable(colName)) return;

  if (colName == this.orderBy.column) {
    this.orderBy.ascending = !this.orderBy.ascending;
  }

  this.orderBy.column = colName;

  if (this.source == 'server') {
    this.getData();
  }
};