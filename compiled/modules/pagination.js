"use strict";

module.exports = function (h) {

  var name = this.vuex ? this.name : this.id;

  return h(
    "pagination",
    {
      ref: "pagination",
      attrs: { "for": name,
        vuex: this.vuex,
        records: this.count,
        "per-page": parseInt(this.limit),
        chunk: this.opts.pagination.chunk,
        "count-text": this.opts.texts.count }
    },
    []
  );
};