"use strict";

module.exports = function (h) {
  var perpageValues = [];

  this.opts.perPageValues.every(function (value) {
    var isLastEntry = value >= this.count;
    var selected = this.limit == value || isLastEntry && this.limit > value;
    perpageValues.push(h(
      "option",
      {
        domProps: {
          "value": value,
          "selected": selected
        }
      },
      [value]
    ));
    return !isLastEntry;
  });

  return perpageValues;
};