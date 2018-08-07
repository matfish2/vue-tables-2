"use strict";

module.exports = function (h) {
  var _this = this;

  return function (right) {
    var sortControl = require('./sort-control')(h, right);

    var headings = [];

    if (_this.hasChildRow && _this.opts.childRowTogglerFirst) headings.push(h("th", {class: "_toggler"}));

    _this.allColumns.map(function (column) {
      var heading = this.getHeading(column, h);
      headings.push(h(
        "th",
        {
          on: {
            "click": this.orderByColumn.bind(this, column)
          },

          class: this.sortableClass(column)
        },
        [h(
          "span",
          { "class": "VueTables__heading", attrs: { title: this.getHeadingTooltip(column, h) }
          },
          [typeof heading === "function"
           ? heading({col: column, name: this.opts.headings[column]})
           : heading]

        ), sortControl.call(this, column)]
      ));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) headings.push(h("th", {class: "_toggler"}));

    return headings;
  };
};