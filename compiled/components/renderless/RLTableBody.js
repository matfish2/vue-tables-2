"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableBody',
  inject: ['opts', 'theme', 'source', 'filteredData', 'tableData', 'colspan', 'openChildRows', 'scopedSlots', 'slots', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      data: this.source === 'client' ? this.filteredData() : this.tableData(),
      colspan: this.colspan(),
      loading: true,
      hasChildRow: this.opts().childRow || this.scopedSlots()['child_row'],
      openChildRows: this.openChildRows(),
      uniqueRowId: this.opts().uniqueKey,
      slots: this.slots(),
      override: this.componentsOverride.tableBody
    });
  }
};
exports["default"] = _default;