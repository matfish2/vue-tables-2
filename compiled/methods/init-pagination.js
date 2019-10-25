"use strict";

module.exports = function () {
  this.page = 1;

  if (!this.opts.pagination.dropdown) {
    this.$refs.pagination.setPage(1);
  }
};