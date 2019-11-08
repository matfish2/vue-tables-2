"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableHead',
  inject: ['opts'],
  render: function render() {
    return this.$scopedSlots["default"]({
      opts: this.opts()
    });
  }
};
exports["default"] = _default;