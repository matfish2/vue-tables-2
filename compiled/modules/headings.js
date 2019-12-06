"use strict";

module.exports = function (h) {
  var _this = this;

  return function (right) {
    var that = _this;

    var sortControl = require("./sort-control")(h, right);

    var headings = [];
    if (_this.hasChildRow && _this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h("th"));

    _this.allColumns.map(function (column) {
      headings.push(h("th", {
        on: {
          "keypress": function keypress(e) {
            if (e.key === "Enter") {
              that.orderByColumn.bind(that, column, e)();
            }
          },
          "click": function click(e) {
            if (e.target.className !== "resize-handle") {
              that.orderByColumn.bind(that, column, e)();
            }
          }
        },
        attrs: {
          id: "VueTables_th--".concat(column),
          tabindex: "0"
        },
        "class": this.sortableClass(column)
      }, [h("span", {
        "class": "VueTables__heading",
        attrs: {
          title: this.getHeadingTooltip(column, h)
        }
      }, [this.getHeading(column, h)]), sortControl.call(this, column)]));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h("th"));
    return headings;
  };
};