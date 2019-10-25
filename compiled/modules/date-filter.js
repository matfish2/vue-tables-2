"use strict";

module.exports = function (h) {
  var _this = this;

  return function (column) {
    return h("div", {
      "class": "VueTables__date-filter",
      attrs: {
        id: 'VueTables__' + column + '-filter'
      }
    }, [h("span", {
      "class": "VueTables__filter-placeholder"
    }, [_this.display('filterBy', {
      column: _this.getHeading(column)
    })])]);
  };
};