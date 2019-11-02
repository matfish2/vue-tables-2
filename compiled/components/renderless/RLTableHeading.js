"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableHeading',
  props: ['column'],
  provide: function provide() {
    return {
      column: this.column
    };
  },
  inject: ['opts', 'theme', 'sortableClass', 'getHeadingTooltip', 'getHeading', 'orderByColumn'],
  render: function render() {
    var _this = this;

    return this.$scopedSlots["default"]({
      thAttrs: {
        "class": this.sortableClass(this.column),
        tabIndex: 0
      },
      thEvents: {
        keypress: function keypress(e) {
          if (e.key === "Enter") {
            this.orderByColumn(this.column, e);
          }
        },
        click: function click(e) {
          if (e.target.className !== "resize-handle") {
            _this.orderByColumn(_this.column, e);
          }
        }
      },
      spanAttrs: {
        title: this.getHeadingTooltip(this.column)
      },
      heading: this.getHeading(this.column)
    });
  }
};
exports["default"] = _default;