"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLColumnsDropdown',
  inject: ['getHeading', 'display', 'theme', 'allColumns', 'onlyColumn', 'toggleColumn', 'toggleColumnsDropdown', 'displayColumnsDropdown', 'origColumns'],
  render: function render() {
    return this.$scopedSlots["default"]({
      theme: this.theme,
      getHeading: this.getHeading,
      display: this.display,
      onlyColumn: this.onlyColumn,
      toggleColumn: this.toggleColumn,
      toggleColumnsDropdown: this.toggleColumnsDropdown,
      displayColumnsDropdown: this.displayColumnsDropdown(),
      origColumns: this.origColumns
    });
  }
};
exports["default"] = _default;