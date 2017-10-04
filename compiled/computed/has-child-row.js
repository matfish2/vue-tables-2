"use strict";

module.exports = function () {
  return this.opts.childRow || this.$scopedSlots.child_row;
};