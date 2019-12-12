"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLChildRowToggler',
  props: ['rowId'],
  inject: ['toggleChildRow', 'childRowTogglerClass'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      toggleChildRow: this.toggleChildRow,
      childRowTogglerClass: this.childRowTogglerClass,
      rowId: this.rowId
    });
  }
};
exports["default"] = _default;