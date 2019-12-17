"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLGroupRow',
  props: ['row'],
  inject: ['colspan', 'opts', 'theme', 'toggleGroupDirection', 'toggleGroup', 'groupToggleIcon', 'getGroupSlot', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      theme: this.theme,
      colspan: this.colspan(),
      toggleGroupDirection: this.toggleGroupDirection,
      canToggleGroup: this.opts().toggleGroups,
      toggleGroup: this.toggleGroup,
      groupValue: this.row[this.opts().groupBy],
      groupToggleIcon: this.groupToggleIcon,
      slot: this.getGroupSlot(this.row[this.opts().groupBy]),
      override: this.componentsOverride.groupRow
    });
  }
};
exports["default"] = _default;