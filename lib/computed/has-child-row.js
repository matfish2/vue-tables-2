module.exports = function() {
  console.log(this.opts.childRow || this.$scopedSlots.child_row);
  return !!(this.opts.childRow || this.$scopedSlots.child_row);
}
