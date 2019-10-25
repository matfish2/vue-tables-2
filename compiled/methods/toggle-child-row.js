"use strict";

module.exports = function (rowId, e) {
  if (e) e.stopPropagation();

  if (this.openChildRows.includes(rowId)) {
    var index = this.openChildRows.indexOf(rowId);
    this.openChildRows.splice(index, 1);
  } else {
    this.openChildRows.push(rowId);
  }
};