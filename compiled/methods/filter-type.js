"use strict";

module.exports = function (column) {
  if (!this.opts.filterable) return false;
  if (this.isTextFilter(column)) return 'vt-text-filter';
  if (this.isDateFilter(column)) return 'vt-date-filter';
  if (this.isListFilter(column)) return 'vt-list-filter';
};