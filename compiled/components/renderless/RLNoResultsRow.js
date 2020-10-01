"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLNoResultsRow',
  inject: ['colspan', 'display', 'componentsOverride', 'loading', 'initialRequestSent', 'tabIndex', 'opts'],
  render: function render() {
    return this.$scopedSlots["default"]({
      opts: this.opts(),
      colspan: this.colspan(),
      display: this.display,
      tabIndex: this.tabIndex(),
      loading: this.loading(),
      initialRequestSent: this.initialRequestSent(),
      message: this.message,
      override: this.componentsOverride.noResultsRow
    });
  },
  computed: {
    message: function message() {
      if (this.loading()) {
        return 'loading';
      }

      if (!this.opts().sendInitialRequest && !this.initialRequestSent()) {
        return 'noRequest';
      }

      return 'noResults';
    }
  }
};
exports["default"] = _default;