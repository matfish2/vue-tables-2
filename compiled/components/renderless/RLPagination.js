"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: "RLPagination",
  inject: ['opts', 'count', 'limit', 'vuex', 'name', 'id', 'theme', 'page', 'setPage', 'totalPages', 'componentsOverride'],
  render: function render() {
    return this.$scopedSlots["default"]({
      setPage: this.setPage,
      options: this.opts().pagination,
      page: this.page(),
      records: this.count(),
      perPage: parseInt(this.limit()),
      name: this.vuex ? this.name : this.id,
      vuex: this.vuex,
      theme: this.theme,
      texts: this.opts().texts,
      totalPages: this.totalPages(),
      optionsObj: {
        theme: (0, _merge["default"])(this.theme.pagination, {
          wrapper: "".concat(this.theme.row, " ").concat(this.theme.column, " ").concat(this.theme.contentCenter),
          nav: this.theme.center,
          count: "".concat(this.theme.center, " ").concat(this.theme.column)
        }),
        chunk: this.opts().pagination.chunk,
        chunksNavigation: this.opts().pagination.nav,
        edgeNavigation: this.opts().pagination.edge,
        texts: {
          count: this.opts().texts.count,
          first: this.opts().texts.first,
          last: this.opts().texts.last
        }
      },
      override: this.componentsOverride.pagination
    });
  }
};
exports["default"] = _default;