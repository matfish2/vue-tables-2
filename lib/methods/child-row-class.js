module.exports = function(rowId) {
  return this.rowsToggleState['row_' + rowId]?'VueTables__child-row--open':'VueTables__child-row--closed';
}
