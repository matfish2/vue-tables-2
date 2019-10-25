"use strict";

module.exports = function (h) {
  var _this = this;

  return function (perpageValues, classes, name, perPage) {
    var perpageId = 'VueTables__limit_' + name;
    return perpageValues.length > 1 ? h("div", {
      "class": "VueTables__limit-field"
    }, [h("label", {
      "class": classes.label,
      attrs: {
        "for": perpageId
      }
    }, [_this.display('limit')]), perPage(perpageValues, classes.select, perpageId)]) : '';
  };
};