"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLChildRow',
  props: ['row', 'index'],
  inject: ['colspan', 'scopedSlots', 'getChildRowTemplate', 'opts', 'componentsOverride'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      childRow: this.getChildRowTemplate(h, this.row, this.index, this.scopedSlots()['child_row']),
      colspan: this.colspan(),
      "class": this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row) : '',
      override: this.componentsOverride.childRow
    });
  }
};
exports["default"] = _default;