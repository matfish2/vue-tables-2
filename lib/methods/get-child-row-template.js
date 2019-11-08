module.exports = function(h, row, index) {
  // scoped slot
   if (this.$scopedSlots.child_row)
    return this.$scopedSlots.child_row({row, index});

  let childRow = this.opts.childRow;

  // function
  if (typeof childRow==='function')
    return childRow.apply(this, [h, row]);

  // component
  return h(childRow,{
    attrs:{
      data: row
    }
  });
}
