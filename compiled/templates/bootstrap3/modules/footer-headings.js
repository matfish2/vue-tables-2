'use strict';

module.exports = function (h, headings) {

  if (!this.opts.footerHeadings) return '';

  return h(
    'tfoot',
    null,
    [h(
      'tr',
      null,
      [headings(h)]
    )]
  );
};