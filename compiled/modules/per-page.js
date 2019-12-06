"use strict";

module.exports = function (h) {
  var _this = this;

  return function (perpageValues, cls, id) {
    return h("select", {
      "class": cls,
      attrs: {
        name: "limit",
        id: id
      },
      domProps: {
        "value": _this.limit
      },
      on: {
        "change": _this.setLimit.bind(_this)
      }
    }, [perpageValues]);
  };
};