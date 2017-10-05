'use strict';

module.exports = function (h, that) {

  if (!that.opts.footerHeadings) return '';

  var sortControl = require('./sort-control')(h, that);

  var footerHeadings = [];

  if (that.hasChildRow && that.opts.childRowTogglerFirst) footerHeadings.push(h(
    'th',
    null,
    []
  ));

  var columns = that.allColumns;

  columns.map(function (column) {

    footerHeadings.push(h(
      'th',
      {
        on: {
          click: that.orderByColumn.bind(that, column)
        },

        'class': that.sortableClass(column) },
      [h(
        'span',
        { 'class': 'VueTables__heading', attrs: { title: that.getHeadingTooltip(column, h) }
        },
        [that.getHeading(column, h)]
      ), sortControl(column)]
    ));
  });

  if (that.hasChildRow && !that.opts.childRowTogglerFirst) footerHeadings.push(h(
    'th',
    null,
    []
  ));

  return h(
    'tfoot',
    null,
    [h(
      'tr',
      null,
      [footerHeadings]
    )]
  );
};