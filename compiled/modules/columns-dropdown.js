"use strict";

var dropdownWrapper = require('./dropdown-wrapper');

var dropdownItemWrapper = require('./dropdown-item-wrapper');

module.exports = function (h) {
  var _this = this;

  return function (classes) {
    var cols = _this.columns.map(function (column) {
      return dropdownItemWrapper(h, classes, h("a", {
        "class": classes.dropdown.item,
        attrs: {
          href: "#"
        },
        on: {
          "click": function click() {
            return _this.toggleColumn(column);
          }
        }
      }, [h("input", {
        attrs: {
          type: "checkbox",
          disabled: _this._onlyColumn(column)
        },
        domProps: {
          "value": column,
          "checked": _this.allColumns.includes(column)
        }
      }), _this.getHeading(column)]));
    });

    return h("div", {
      ref: "columnsdropdown",
      "class": "".concat(classes.dropdown.container, " ").concat(classes.right, " VueTables__columns-dropdown")
    }, [h("button", {
      attrs: {
        type: "button"
      },
      "class": "".concat(classes.button, " ").concat(classes.dropdown.trigger),
      on: {
        "click": _this._toggleColumnsDropdown.bind(_this)
      }
    }, [_this.display('columns'), h("span", {
      "class": "".concat(classes.icon, " ").concat(classes.small)
    }, [h("i", {
      "class": classes.dropdown.caret
    })])]), dropdownWrapper.call(_this, h, classes, cols)]);
  };
};