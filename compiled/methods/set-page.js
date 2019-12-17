"use strict";

module.exports = function (page, preventRequest) {
  page = parseInt(page);
  this.page = page;
  this.updateState('page', page);
  if (this.source == 'server' && !preventRequest) this.getData();
};