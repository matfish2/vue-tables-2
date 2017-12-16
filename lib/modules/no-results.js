module.exports = function(h) {
    if (this.count==0) {

      let colspan = this.allColumns.length;
      if (this.hasChildRow) colspan++;

   return <tr class="VueTables__no-results">
  <td class="text-center"
  colspan={colspan}>
  {this.display(this.loading?'loading':'noResults')}
  </td>
  </tr>
}
}
