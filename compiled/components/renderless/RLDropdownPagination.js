"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: "RLDropdownPagination",
  inject: ['limit', 'count', 'theme', 'page', 'setPage', 'totalPages', 'componentsOverride', 'id'],
  render: function render() {
    return this.$scopedSlots["default"]({
      name: this.id,
      setPage: this.setPage,
      page: this.page(),
      records: this.count(),
      perPage: parseInt(this.limit()),
      theme: this.theme,
      totalPages: this.totalPages(),
      override: this.componentsOverride.dropdownPagination
    });
  }
};
exports["default"] = _default;