'use strict';

module.exports = function (rowId, e) {

  if (e) e.stopPropagation();

  var key = 'row_' + rowId;

  if (typeof this.rowsToggleState[key] == 'undefined') {
    this.$set(this.rowsToggleState, key, true);
  } else {
    this.rowsToggleState[key] = !this.rowsToggleState[key];
  }
};