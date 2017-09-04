"use strict";

module.exports = function (h, that) {

  var sortControl = require('./sort-control')(h, that);

  var headings = [];

  if (that.opts.childRow) headings.push(h(
    "th",
    null,
    []
  ));

  that.allColumns.map(function (column) {
    headings.push(h(
      "th",
      {
        on: {
          "click": that.orderByColumn.bind(that, column)
        },

        "class": that.sortableClass(column) },
      [h(
        "span",
        { "class": "VueTables__heading", attrs: { title: that.getHeadingTooltip(column, h) }
        },
        [that.getHeading(column, h)]
      ), sortControl(column)]
    ));
  }.bind(that));

  return headings;
};