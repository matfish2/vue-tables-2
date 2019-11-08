module.exports = function(column) {

  if (!this.opts.filterable) return false;

  if (this.isTextFilter(column)) return 'text-filter';
  if (this.isDateFilter(column)) return 'date-filter';
  if (this.isListFilter(column)) return 'list-filter';
}
