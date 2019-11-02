"use strict";

module.exports = function _setEditingCell(row, column) {
  return function (editing) {
    var _this = this;

    if (editing) {
      this.editing.push({
        id: row[this.opts.uniqueKey],
        column: column,
        originalValue: row[column]
      });
    } else {
      this.editing = this.editing.filter(function (e) {
        return e.id !== row[_this.opts.uniqueKey];
      });
    }
  }.bind(this);
};