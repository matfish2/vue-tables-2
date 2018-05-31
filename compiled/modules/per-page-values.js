"use strict";

module.exports = function (h) {
  var _this = this;

  var perpageValues = [];

  this.opts.perPageValues.every(function (value) {
    var isLastEntry = value >= _this.count;
    var selected = _this.limit == value || isLastEntry && _this.limit > value;
    perpageValues.push(h(
      "option",
      {
        attrs: { value: value },
        domProps: {
          "selected": selected
        }
      },
      [value]
    ));
    return !isLastEntry;
  });

  return perpageValues;
};