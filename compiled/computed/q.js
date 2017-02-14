"use strict";

module.exports = function () {
  return this.opts.filterByColumn ? JSON.stringify(this.query) : this.query;
};