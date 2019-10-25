"use strict";

module.exports = function (h, right) {
  return function (column) {
    if (!this.sortable(column)) return '';
    return h("span", {
      "class": "VueTables__sort-icon ".concat(right, " ").concat(this.sortableChevronClass(column))
    });
  };
};