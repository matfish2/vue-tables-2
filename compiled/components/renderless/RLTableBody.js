"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableBody',
  inject: ['opts', 'theme', 'source', 'filteredData', 'tableData', 'colspan', 'openChildRows', 'collapsedGroups', 'scopedSlots', 'slots', 'componentsOverride', 'page', 'limit'],
  render: function render() {
    return this.$scopedSlots["default"]({
      source: this.source,
      canToggleGroups: this.opts().toggleGroups,
      collapsedGroups: this.collapsedGroups(),
      data: this.source === 'client' ? this.filteredData() : this.tableData(),
      colspan: this.colspan(),
      loading: true,
      hasChildRow: this.opts().childRow || this.scopedSlots()['child_row'],
      openChildRows: this.openChildRows(),
      uniqueRowId: this.opts().uniqueKey,
      groupBy: this.opts().groupBy,
      slots: this.slots(),
      override: this.componentsOverride.tableBody,
      initialIndex: (this.page() - 1) * this.limit()
    });
  }
};
exports["default"] = _default;