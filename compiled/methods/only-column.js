"use strict";

module.exports = function (column) {
  return this.userColumnsDisplay.length === 1 && this.userColumnsDisplay[0] === column;
};