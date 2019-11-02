"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableRow',
  props: ['row'],
  inject: ['allColumns', 'opts'],
  provide: function provide() {
    return {
      row: this.row
    };
  },
  render: function render() {
    return this.$scopedSlots["default"]({
      columns: this.allColumns,
      row: this.row,
      rowAttrs: {
        "class": this.opts.rowClassCallback ? this.opts.rowClassCallback(this.row) : '',
        attrs: this.opts.rowAttributesCallback ? this.opts.rowAttributesCallback(this.row) : {}
      }
    });
  }
};
exports["default"] = _default;