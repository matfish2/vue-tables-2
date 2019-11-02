"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTable',
  inject: ['opts', 'theme'],
  render: function render() {
    return this.$scopedSlots["default"]({
      // opts: this.opts,
      tableAttrs: {
        summary: this.opts.summary,
        "class": "VueTables__table ".concat(this.opts.skin ? this.opts.skin : this.theme.table)
      },
      caption: this.opts.caption
    });
  }
};
exports["default"] = _default;