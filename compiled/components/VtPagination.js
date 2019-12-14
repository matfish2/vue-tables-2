"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLPagination = _interopRequireDefault(require("./renderless/RLPagination"));

var _vuePagination = _interopRequireDefault(require("vue-pagination-2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtPagination',
  components: {
    RLPagination: _RLPagination["default"],
    Pagination: _vuePagination["default"]
  },
  render: function render(h) {
    return h("r-l-pagination", {
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("pagination", {
            attrs: {
              options: props.optionsObj,
              "for": props.name,
              vuex: props.vuex,
              records: props.records,
              "per-page": props.perPage,
              page: props.page
            },
            on: {
              "paginate": function paginate(page) {
                return props.setPage(page);
              }
            }
          });
        }
      }
    });
  }
};
exports["default"] = _default2;