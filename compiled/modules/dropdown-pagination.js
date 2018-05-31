"use strict";

var debounce = require('debounce');

module.exports = function (h) {
  var _this = this;

  return function (selectClass, id) {

    var pages = [];
    var selected;

    for (var pag = 1; pag <= _this.totalPages; pag++) {
      var selected = _this.page == pag;
      pages.push(h(
        "option",
        {
          attrs: { value: pag },
          domProps: {
            "selected": selected
          }
        },
        [pag]
      ));
    }
    return h(
      "select",
      { "class": selectClass + " dropdown-pagination",
        directives: [{
          name: "show",
          value: _this.totalPages > 1
        }],
        attrs: {
          name: "page",

          value: _this.page,

          id: id
        },
        ref: "page", on: {
          "change": _this.setPage.bind(_this, null, false)
        }
      },
      [pages]
    );
  };
};