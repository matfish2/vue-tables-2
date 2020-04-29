"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLChildRowToggler',
  props: ['rowId'],
  inject: ['toggleChildRow', 'opts', 'childRowTogglerClass', 'componentsOverride', 'tabIndex'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      opts: this.opts(),
      "class": this.childRowTogglerClass.bind(this, this.rowId),
      toggle: this.toggleChildRow.bind(this, this.rowId),
      override: this.componentsOverride.childRowToggler,
      tabIndex: this.tabIndex()
    });
  }
};
exports["default"] = _default;