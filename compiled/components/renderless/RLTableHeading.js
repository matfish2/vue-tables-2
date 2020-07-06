"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableHeading',
  props: ['column'],
  provide: function provide() {
    var _this = this;

    return {
      column: function column() {
        return _this.column;
      }
    };
  },
  inject: ['opts', 'theme', 'sortableClass', 'getHeadingTooltip', 'getHeading', 'orderByColumn', 'componentsOverride', 'tabIndex'],
  render: function render(h) {
    var _this2 = this;

    return this.$scopedSlots["default"]({
      opts: this.opts(),
      thAttrs: {
        "class": this.sortableClass(this.column),
        tabIndex: this.tabIndex(),
        title: this.getHeadingTooltip(this.column)
      },
      thEvents: {
        keypress: function keypress(e) {
          if (e.key === "Enter") {
            this.orderByColumn(this.column, e);
          }
        },
        click: function click(e) {
          if (e.target.className !== "resize-handle") {
            _this2.orderByColumn(_this2.column, e);
          }
        }
      },
      spanAttrs: {
        title: this.getHeadingTooltip(this.column)
      },
      heading: this.getHeading(this.column, h),
      override: this.componentsOverride.tableHeading
    });
  }
};
exports["default"] = _default;