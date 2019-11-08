"use strict";

module.exports = function () {
  return !!(this.opts.childRow || this.$parent.$scopedSlots.child_row);
};