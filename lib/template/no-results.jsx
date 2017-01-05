module.exports = function(h, that) {
    if (that.count==0) {

      let colspan = that.allColumns.length;
      if (that.opts.childRow) colspan++;

   return <tr class="VueTables__no-results">
  <td class="text-center"
  colspan={colspan}>
  {that.display(that.loading?'loading':'noResults')}
  </td>
  </tr>
}
}
