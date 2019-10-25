"use strict";

module.exports = function (h) {
  var _this = this;

  return function (right) {
    var that = _this;

    var sortControl = require('./sort-control')(h, right);

    var headings = [];
    if (_this.hasChildRow && _this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h("th", {
      attrs: {
        tabindex: "0"
      }
    }));

    _this.allColumns.map(function (column) {
      headings.push(h("th", {
        on: {
          "keypress": function keypress(e) {
            if (e.key === 'Enter') {
              that.orderByColumn.bind(that, column)();
            }
          },
          "click": this.orderByColumn.bind(this, column)
        },
        "class": this.sortableClass(column),
        attrs: {
          tabindex: "0"
        }
      }, [h("span", {
        "class": "VueTables__heading",
        attrs: {
          title: this.getHeadingTooltip(column, h)
        }
      }, [this.getHeading(column, h)]), sortControl.call(this, column)]));
    }.bind(_this));

    if (_this.hasChildRow && !_this.opts.childRowTogglerFirst && _this.opts.showChildRowToggler) headings.push(h("th", {
      attrs: {
        tabindex: "0"
      }
    }));
    return headings;
  };
};