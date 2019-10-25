"use strict";

module.exports = function (column, ascending) {
  this.orderBy.column = column;
  this.orderBy.ascending = ascending;
  this.updateState('orderBy', {
    column: column,
    ascending: ascending
  });

  if (this.source == 'server') {
    this.getData();
  }
};