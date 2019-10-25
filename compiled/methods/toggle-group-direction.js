"use strict";

module.exports = function () {
  if (this.orderBy.column != this.opts.groupBy) {
    this.setOrder(this.opts.groupBy, true);
  } else {
    this.setOrder(this.opts.groupBy, !this.orderBy.ascending);
  }
};