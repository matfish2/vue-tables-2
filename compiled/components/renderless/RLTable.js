"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTable',
  inject: ['opts', 'theme', 'colspan', 'slots', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      tableAttrs: {
        summary: this.opts().summary,
        "class": "VueTables__table ".concat(this.opts().skin ? this.opts().skin : this.theme.table)
      },
      slots: this.slots(),
      colspan: this.colspan(),
      caption: this.opts().caption,
      override: this.componentsOverride.table
    });
  }
};
exports["default"] = _default;