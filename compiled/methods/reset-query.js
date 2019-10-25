"use strict";

module.exports = function () {
  for (var key in this.query) {
    this.query[key] = '';
  }
};