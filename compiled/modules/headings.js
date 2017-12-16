"use strict";

module.exports = function (h) {

  var sortControl = require('./sort-control')(h);

  var headings = [];

  if (this.hasChildRow && this.opts.childRowTogglerFirst) headings.push(h(
    "th",
    null,
    []
  ));

  this.allColumns.map(function (column) {
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
      ), sortControl(column)]
    ));
  }.bind(this));

  if (this.hasChildRow && !this.opts.childRowTogglerFirst) headings.push(h(
    "th",
    null,
    []
  ));

  return headings;
};