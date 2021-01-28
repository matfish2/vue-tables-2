"use strict";

module.exports = function (page) {
  var preventRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  page = parseInt(page);
  this.page = page > 0 ? page : 1;
  this.updateState('page', page);
  this.dispatch('pagination', page);
  if (this.source == 'server' && !preventRequest) this.getData();
};