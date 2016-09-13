module.exports = function(column) {

  if (!this.opts.filterable) return false;

  return this.customColumns.indexOf(column)==-1 &&
  ((typeof this.opts.filterable=='boolean' && this.opts.filterable) || this.opts.filterable.indexOf(column)>-1);
}
