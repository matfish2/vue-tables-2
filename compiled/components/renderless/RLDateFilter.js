"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLDateFilter',
  inject: ['getHeading', 'display'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      getHeading: this.getHeading,
      display: this.display
    });
  }
};
exports["default"] = _default;