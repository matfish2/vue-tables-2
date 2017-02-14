"use strict";

module.exports = function () {
  this.page = 1;
  return Math.ceil(this.count / this.limit);
};