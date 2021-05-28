"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLChildRowToggler',
  props: ['rowId'],
  inject: ['toggleChildRow', 'opts', 'childRowTogglerClass', 'componentsOverride', 'tabIndex', 'row'],
  render: function render(h) {
    var toggleable = this.isToggleable(this.opts().disabledChildRows);
    return this.$scopedSlots["default"]({
      opts: this.opts(),
      "class": this.childRowTogglerClass.bind(this, this.rowId),
      toggle: toggleable ? this.toggleChildRow.bind(this, this.rowId) : function () {},
      override: this.componentsOverride.childRowToggler,
      tabIndex: this.tabIndex(),
      toggleable: toggleable
    });
  },
  methods: {
    isToggleable: function isToggleable(callback) {
      if (!callback) {
        return true;
      }

      return !callback(this.row());
    }
  }
};
exports["default"] = _default;