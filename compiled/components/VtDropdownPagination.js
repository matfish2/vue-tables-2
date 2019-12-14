"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLDropdownPagination = _interopRequireDefault(require("./renderless/RLDropdownPagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VTPagination',
  components: {
    RLDropdownPagination: _RLDropdownPagination["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-dropdown-pagination", {
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

          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("select", {
            "class": "".concat(props.theme.select, " dropdown-pagination"),
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