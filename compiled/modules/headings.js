"use strict";

module.exports = function (h) {
  var _this = this;

  return function (right) {
    var sortControl = require('./sort-control')(h, right);

    var headings = [];

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) headings.push(h(
      "th",
      null,
      []
    ));

    _this.allColumns.map(function (column) {
      headings.push(h(
        "th",
        {
          on: {
            "click": this.orderByColumn.bind(this, column)
          },

          "class": this.sortableClass(column) },
        [h(
          "span",
          { "class": "VueTables__heading", attrs: { title: this.getHeadingTooltip(column, h) }
          },
          [this.getHeading(column, h)]
        ), sortControl.call(this, column)]
      ));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) headings.push(h(
      "th",
      null,
      []
    ));

    return headings;
  };
};