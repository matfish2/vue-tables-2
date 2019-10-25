"use strict";

module.exports = function (h) {
  var _this = this;

  return function (theme) {
    if (_this.opts.pagination && _this.opts.pagination.dropdown) return '';
    var options = {
      theme: theme,
      chunk: _this.opts.pagination.chunk,
      chunksNavigation: _this.opts.pagination.nav,
      edgeNavigation: _this.opts.pagination.edge,
      texts: {
        count: _this.opts.texts.count,
        first: _this.opts.texts.first,
        last: _this.opts.texts.last
      }
    };
    var name = _this.vuex ? _this.name : _this.id;
    return h("pagination", {
      ref: "pagination",
      attrs: {
        options: options,
        "for": name,
        vuex: _this.vuex,
        records: _this.count,
        "per-page": parseInt(_this.limit)
      },
      on: {
        "paginate": _this._onPagination.bind(_this)
      }
    });
  };
};