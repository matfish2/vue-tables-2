module.exports = function(h, that) {
    if (that.count==0)
   return <tr class="VueTables__no-results">
  <td class="text-center"
  colspan={that.allColumns.length}>
  {that.display('noResults')}
  </td>
  </tr>
}
