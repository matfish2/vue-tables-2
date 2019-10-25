"use strict";

module.exports = function (page) {
  if (this.vuex) return;
  this.setPage(page);
  this.dispatch('pagination', page);
};