"use strict";

module.exports = function _revertVal(row, column) {
  return function () {
    var _this = this;

    row[column] = this.editing.find(function (e) {
      return e.id === row[_this.opts.uniqueKey];
    }).originalValue;
  }.bind(this);
};