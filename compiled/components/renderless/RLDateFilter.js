"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLDateFilter',
  inject: ['getHeading', 'display', 'componentsOverride'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      column: this.column,
      placeholder: this.display('filterBy', {
        column: this.getHeading(this.column)
      }),
      display: this.display,
      override: this.componentsOverride.dateFilter
    });
  }
};
exports["default"] = _default;