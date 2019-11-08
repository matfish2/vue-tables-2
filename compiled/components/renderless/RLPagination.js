"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: "RLPerPageSelector",
  inject: ['opts', 'count', 'limit', 'vuex', 'name', 'id', 'theme', 'page', 'setPage', 'totalPages'],
  render: function render() {
    return this.$scopedSlots["default"]({
      setPage: this.setPage,
      options: this.opts().pagination,
      page: this.page(),
      records: this.count(),
      perPage: parseInt(this.limit()),
      name: this.vuex ? this.name : this.id,
      theme: this.theme,
      texts: this.opts().texts,
      totalPages: this.totalPages()
    });
  }
};
exports["default"] = _default;