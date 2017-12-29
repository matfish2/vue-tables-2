'use strict';

module.exports = function (h, pagination) {
  if (this.opts.pagination && !this.opts.pagination.dropdown) {

    return pagination();
  }

  return '';
};