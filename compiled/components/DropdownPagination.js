"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLPagination = _interopRequireDefault(require("./renderless/RLPagination"));

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VTPagination',
  components: {
    RLPagination: _RLPagination["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-pagination", {
      scopedSlots: {
        "default": function _default(props) {
          var id = "VueTables__dropdown-pagination_" + props.name;
          var pages = [];

          for (var pag = 1; pag <= props.totalPages; pag++) {
            pages.push(h("option", {
              domProps: {
                "value": pag
              }
            }, [pag]));
          }

          return h("select", {
            "class": "".concat(props.theme.select, " dropdown-pagination"),
            directives: [{
              name: "show",
              value: props.totalPages > 1
            }],
            attrs: {
              name: "page",
              id: id
            },
            ref: "page",
            domProps: {
              "value": props.page
            },
            on: {
              "change": function change(e) {
                return props.setPage(e.target.value);
              }
            }
          }, [pages]);
        }
      }
    });
  }
};
exports["default"] = _default2;