"use strict";

module.exports = function (e) {
  this.limit = e.target.value;
  this.setPage(1);
};