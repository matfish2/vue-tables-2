'use strict';

module.exports = function (colName, ev) {

  if (!this.sortable(colName)) return;

  if (ev.shiftKey && this.orderBy.column && this.hasMultiSort) {
    this.setUserMultiSort(colName);
  } else {

    this.userMultiSorting = {};

    if (colName == this.orderBy.column) {
      this.orderBy.ascending = !this.orderBy.ascending;
    }

    this.orderBy.column = colName;

    this.updateState('orderBy', this.orderBy);
  }

  if (this.source == 'server') {
    this.getData();
  }
};