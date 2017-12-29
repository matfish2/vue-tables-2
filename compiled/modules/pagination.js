"use strict";

module.exports = function (h) {
  var _this = this;

  return function (theme) {

    var name = _this.vuex ? _this.name : _this.id;

    return h(
      "pagination",
      {
        ref: "pagination",
        attrs: { theme: theme,
          "for": name,
          vuex: _this.vuex,
          records: _this.count,
          "per-page": parseInt(_this.limit),
          chunk: _this.opts.pagination.chunk,
          "count-text": _this.opts.texts.count }
      },
      []
    );
  };
};