"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'RLTableCell',
  inject: ['row', 'scopedSlots', 'opts', 'render', 'index', 'setEditingCell', 'updateValue', 'revertValue', 'editing', 'componentsOverride'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      row: this.Row,
      content: this.content(h),
      override: this.componentsOverride.tableCell
    });
  },
  computed: {
    Row: function Row() {
      return this.row();
    }
  },
  methods: {
    content: function content(h) {
      if (this.opts().templates[this.column]) {
        return this.render(this.Row, this.column, this.index, h);
      }

      if (this.scopedSlots()[this.column]) {
        var data = {
          row: this.Row,
          column: this.column,
          index: this.index
        };

        if (this.opts().editableColumns.includes(this.column)) {
          data = (0, _merge["default"])(data, this.getEditFunctions());
        }

        return this.scopedSlots()[this.column](data);
      }

      return this.Row[this.column];
    },
    isEditing: function isEditing() {
      return function () {
        var _this = this;

        return this.editing().find(function (e) {
          return e.id === _this.Row[_this.opts().uniqueKey] && e.column === _this.column;
        });
      }.bind(this);
    },
    getEditFunctions: function getEditFunctions() {
      return {
        update: this.updateValue(this.Row, this.column),
        isEditing: this.isEditing(),
        setEditing: this.setEditingCell(this.Row, this.column),
        revertValue: this.revertValue(this, this.Row, this.column)
      };
    }
  }
};
exports["default"] = _default;