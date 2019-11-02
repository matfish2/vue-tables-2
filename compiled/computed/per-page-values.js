"use strict";

module.exports = function () {
  var _this = this;

  var perpageValues = [];
  this.opts.perPageValues.every(function (value) {
    var isLastEntry = value >= _this.count;
    perpageValues.push(value);
    return !isLastEntry;
  });
  return perpageValues;
};