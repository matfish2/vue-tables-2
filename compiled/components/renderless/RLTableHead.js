"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableHead',
  inject: ['opts', 'slots', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      opts: this.opts(),
      slots: this.slots(),
      override: this.componentsOverride.tableHead
    });
  }
};
exports["default"] = _default;