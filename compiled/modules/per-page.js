"use strict";

module.exports = function (h) {
  var _this = this;

  return function (perpageValues, cls, id) {

    return perpageValues.length > 1 ? h(
      "select",
      { "class": cls,
        attrs: { name: "limit",
          value: _this.limit,

          id: id
        },
        on: {
          "change": _this.setLimit.bind(_this)
        }
      },
      [perpageValues]
    ) : '';
  };
};