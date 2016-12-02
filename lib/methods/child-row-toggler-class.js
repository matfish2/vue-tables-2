module.exports = function(rowId) {
  return this.rowsToggleState['row_' + rowId]?'VueTables__child-row-toggler--open':'VueTables__child-row-toggler--closed';
}
