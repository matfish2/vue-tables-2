"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTextFilter',
  inject: ['opts', 'search', 'query', 'theme', 'getHeading', 'display', 'getColumnName', 'componentsOverride'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      column: this.column,
      debounce: this.opts().debounce,
      theme: this.theme,
      search: this.search,
      query: this.query(),
      getHeading: this.getHeading,
      getColumnName: this.getColumnName,
      display: this.display,
      override: this.componentsOverride.textFilter
    });
  }
};
exports["default"] = _default;