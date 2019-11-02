"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableBody',
  inject: ['opts', 'theme', 'source', 'filteredData', 'tableData', 'colspan'],
  render: function render() {
    return this.$scopedSlots["default"]({
      data: this.source === 'client' ? this.filteredData() : this.tableData,
      colspan: this.colspan,
      loading: true
    });
  }
};
exports["default"] = _default;