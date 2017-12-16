'use strict';

module.exports = function (h) {

  if (this.count > 0 && this.opts.pagination.dropdown) {

    var perPage = parseInt(this.limit);

    var from = (this.Page - 1) * perPage + 1;
    var to = this.Page == this.totalPages ? this.count : from + perPage - 1;

    var parts = this.opts.texts.count.split('|');
    var i = Math.min(this.count == 1 ? 2 : this.totalPages == 1 ? 1 : 0, parts.length - 1);

    var count = parts[i].replace('{count}', this.count).replace('{from}', from).replace('{to}', to);

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