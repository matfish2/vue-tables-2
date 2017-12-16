'use strict';

module.exports = function (h) {
  return function (column) {

    if (!this.sortable(column)) return '';
    return h(
      'span',
      { 'class': 'VueTables__sort-icon pull-right ' + this.sortableChevronClass(column) },
      []
    );
  }.bind(this);
};