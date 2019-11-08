"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLPagination = _interopRequireDefault(require("./renderless/RLPagination"));

var _vuePagination = _interopRequireDefault(require("vue-pagination-2"));

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VTPagination',
  components: {
    RLPagination: _RLPagination["default"],
    Pagination: _vuePagination["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-pagination", {
      scopedSlots: {
        "default": function _default(props) {
          var options = {
            theme: (0, _merge["default"])(props.theme.pagination, {
              wrapper: "".concat(props.theme.row, " ").concat(props.theme.column, " ").concat(props.theme.contentCenter),
              nav: props.theme.center,
              count: "".concat(props.theme.center, " ").concat(props.theme.column)
            }),
            chunk: props.options.chunk,
            chunksNavigation: props.options.nav,
            edgeNavigation: props.options.edge,
            texts: {
              count: props.texts.count,
              first: props.texts.first,
              last: props.texts.last
            }
          };
          return h("pagination", {
            ref: "pagination",
            attrs: {
              options: options,
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