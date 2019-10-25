"use strict";

module.exports = function (h) {
  var _this = this;

  return function () {
    if (_this.count > 0 && _this.opts.pagination.dropdown) {
      var perPage = parseInt(_this.limit);
      var from = (_this.Page - 1) * perPage + 1;
      var to = _this.Page == _this.totalPages ? _this.count : from + perPage - 1;

      var parts = _this.opts.texts.count.split('|');

      var i = Math.min(_this.count == 1 ? 2 : _this.totalPages == 1 ? 1 : 0, parts.length - 1);
      var count = parts[i].replace('{count}', _this.count).replace('{from}', from).replace('{to}', to);
      return h("div", {
        "class": "VuePagination"
      }, [h("p", {
        "class": "VuePagination__count"
      }, [count])]);
    }

    return '';
  };
};