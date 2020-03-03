"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLListFilter',
  inject: ['search', 'query', 'theme', 'getHeading', 'display', 'getColumnName', 'opts', 'componentsOverride'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      theme: this.theme,
      search: this.search,
      query: this.query(),
      getHeading: this.getHeading,
      display: this.display,
      items: this.opts().listColumns[this.column].filter(function (item) {
        return !item.hide;
      }),
      defaultOption: this.display('defaultOption', {
        column: this.opts().headings[this.column] ? this.opts().headings[this.column] : this.column
      }),
      name: this.getColumnName(this.column),
      value: this.query()[this.column],
      column: this.column,
      override: this.componentsOverride.listFilter
    });
  }
};
exports["default"] = _default;