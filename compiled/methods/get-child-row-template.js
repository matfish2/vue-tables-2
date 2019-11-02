"use strict";

module.exports = function (h, row, scopedSlot) {
  // scoped slot
  if (scopedSlot) return scopedSlot({
    row: row
  });
  var childRow = this.opts.childRow; // function

  if (typeof childRow === 'function') return childRow.apply(this, [h, row]); // component

  return h(childRow, {
    attrs: {
      data: row
    }
  });
};