"use strict";

var debounce = require('debounce');

module.exports = function (h) {
  var _this = this;

  return function (selectClass, id) {
    var pages = [];
    var selected;

    for (var pag = 1; pag <= _this.totalPages; pag++) {
      var selected = _this.page == pag;
      pages.push(h("option", {
        domProps: {
          "value": pag,
          "selected": selected
        }
      }, [pag]));
    }

    return h("select", {
      "class": "".concat(selectClass, " dropdown-pagination"),
      directives: [{
        name: "show",
        value: _this.totalPages > 1
      }],
      attrs: {
        name: "page",
        id: id
      },
      ref: "page",
      domProps: {
        "value": _this.page
      },
      on: {
        "change": _this.setPage.bind(_this, null, false)
      }
    }, [pages]);
  };
};