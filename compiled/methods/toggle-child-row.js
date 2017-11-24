"use strict";


module.exports = function (rowId, e) {

  if (e) e.stopPropagation();

  var index; 

  if (this.openChildRows.includes(rowId)) {
  	index = this.openChildRows.indexOf(rowId);
    this.openChildRows.splice(index,1);
  } else {
    this.openChildRows.push(rowId);
  }
};