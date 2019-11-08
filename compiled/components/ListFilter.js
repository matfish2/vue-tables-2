"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLListFilter = _interopRequireDefault(require("./renderless/RLListFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'ListFilter',
  props: ['column'],
  components: {
    RLListFilter: _RLListFilter["default"]
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("r-l-list-filter", {
      attrs: {
        column: this.column
      },
      scopedSlots: {
        "default": function _default(props) {
          var options = [];
          var selected;
          props.items.map(function (option) {
            selected = String(option.id) === String(props.query[_this.column]) && props.query[_this.column] !== '';
            options.push(h("option", {
              domProps: {
                "value": option.id,
                "selected": selected
              }
            }, [option.text]));
          });
          return h("div", {
            "class": "VueTables__list-filter",
            attrs: {
              id: 'VueTables__' + _this.column + '-filter'
            }
          }, [h("select", {
            "class": props.theme.select,
            on: {
              "change": props.search(false)
            },
            attrs: {
              name: props.getColumnName(_this.column)
            },
            domProps: {
              "value": props.query[_this.column]
            }
          }, [h("option", {
            attrs: {
              value: ""
            }
          }, [props.display('defaultOption', {
            column: props.headings[_this.column] ? props.headings[_this.column] : _this.column
          })]), options])]);
        }
      }
    });
  }
};
exports["default"] = _default2;