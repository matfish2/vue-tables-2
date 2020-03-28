"use strict";

module.exports = function (page, preventRequest) {
  page = parseInt(page);
  this.page = page;
  this.updateState('page', page);
  this.dispatch('pagination', page);
  if (this.source == 'server' && !preventRequest) this.getData();
};