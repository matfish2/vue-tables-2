"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLHeadingRow',
  inject: ['opts', 'theme', 'hasChildRow', 'allColumns'],
  render: function render() {
    return this.$scopedSlots["default"]({
      columns: this.allColumns(),
      hasChildRow: this.hasChildRow,
      childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,
      childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst
    });
  }
};
exports["default"] = _default;