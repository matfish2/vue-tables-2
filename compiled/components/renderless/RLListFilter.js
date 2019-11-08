"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLListFilter',
  inject: ['search', 'query', 'theme', 'getHeading', 'display', 'getColumnName', 'opts'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      theme: this.theme,
      search: this.search,
      query: this.query(),
      getHeading: this.getHeading,
      getColumnName: this.getColumnName,
      display: this.display,
      items: this.opts().listColumns[this.column].filter(function (item) {
        return !item.hide;
      }),
      headings: this.opts().headings
    });
  }
};
exports["default"] = _default;