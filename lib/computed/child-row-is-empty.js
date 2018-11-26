module.exports = function() {
  return this.opts.childRow.children.length || this.$scopedSlots.child_row.children.length;
}
