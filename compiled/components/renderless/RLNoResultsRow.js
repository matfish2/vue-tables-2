"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLNoResultsRow',
  inject: ['colspan', 'display'],
  render: function render() {
    return this.$scopedSlots["default"]({
      colspan: this.colspan,
      display: this.display
    });
  }
};
exports["default"] = _default;