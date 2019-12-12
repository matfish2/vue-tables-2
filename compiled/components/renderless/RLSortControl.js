"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLSortControl',
  inject: ['column', 'theme', 'sortable', 'sortableChevronClass', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      sortable: this.sortable(this.column),
      "class": "VueTables__sort-icon ".concat(this.theme.right, " ").concat(this.sortableChevronClass(this.column)),
      override: this.componentsOverride.sortControl
    });
  }
};
exports["default"] = _default;