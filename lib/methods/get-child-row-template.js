module.exports = function(h, row) {
  // scoped slot
   if (this.$scopedSlots.child_row)
    return this.$scopedSlots.child_row({row});

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
