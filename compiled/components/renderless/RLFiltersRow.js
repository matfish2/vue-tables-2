"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLFiltersRow',
  inject: ['opts', 'theme', 'allColumns', 'filterable', 'filterType', 'slots', 'columnClass', 'hasChildRow', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      columns: this.allColumns(),
      filterable: this.filterable,
      filterType: this.filterType,
      opts: this.opts(),
      slots: this.slots(),
      columnClass: this.columnClass,
      hasChildRow: this.hasChildRow(),
      override: this.componentsOverride.filtersRow
    });
  }
};
exports["default"] = _default;