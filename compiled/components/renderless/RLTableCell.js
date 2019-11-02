"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableCell',
  inject: ['row'],
  props: ['column'],
  render: function render() {
    return this.$scopedSlots["default"]({
      row: this.row,
      column: this.column
    });
  }
};
exports["default"] = _default;