"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableRow',
  props: ['row', 'index'],
  inject: ['allColumns', 'opts', 'rowWasClicked', 'hasChildRow'],
  provide: function provide() {
    var _this = this;

    return {
      row: function row() {
        return _this.row;
      },
      index: this.index
    };
  },
  render: function render() {
    return this.$scopedSlots["default"]({
      columns: this.allColumns(),
      hasChildRow: this.hasChildRow(),
      opts: this.opts(),
      rowId: this.row[this.opts().uniqueKey],
      rowAttrs: {
        "class": this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row) : '',
        attrs: this.opts().rowAttributesCallback ? this.opts().rowAttributesCallback(this.row) : {}
      },
      rowEvents: {
        click: this.rowWasClicked.bind(this, this.row, this.index),
        dblclick: this.rowWasClicked.bind(this, this.row, this.index)
      }
    });
  }
};
exports["default"] = _default;