'use strict';

module.exports = function (h, that) {

  if (that.count > 0 && that.opts.pagination.dropdown) {

    var perPage = parseInt(that.limit);

    var from = (that.Page - 1) * perPage + 1;
    var to = that.Page == that.totalPages ? that.count : from + perPage - 1;

    var parts = that.opts.texts.count.split('|');
    var i = Math.min(that.count == 1 ? 2 : that.totalPages == 1 ? 1 : 0, parts.length - 1);

    var count = parts[i].replace('{count}', that.count).replace('{from}', from).replace('{to}', to);

    return h(
      'div',
      { 'class': 'VuePagination' },
      [h(
        'p',
        { 'class': 'VuePagination__count' },
        [count]
      )]
    );
  }

  return '';
};