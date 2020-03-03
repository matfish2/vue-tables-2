"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'RLTableCell',
  inject: ['row', 'scopedSlots', 'opts', 'render', 'index', 'setEditingCell', 'updateValue', 'revertValue', 'editing', 'getValue', 'columnClass', 'cellClasses', 'componentsOverride', 'isListFilter', 'optionText', 'source', 'dateFormat', 'formatDate', 'tabIndex'],
  props: ['column'],
  render: function render(h) {
    return this.$scopedSlots["default"]({
      row: this.Row,
      content: this.content(h),
      classes: "".concat(this.columnClass(this.column), " ").concat(this.cellClasses(this.column, this.Row)).trim(),
      tabIndex: this.tabIndex(),
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

      return this.formatCellContent(this.getValue(this.Row, this.column), this.column);
    },
    formatCellContent: function formatCellContent(value, column) {
      if (this.source === 'client' && this.opts().dateColumns.includes(column)) {
        return this.formatDate(value, this.dateFormat(column));
      }

      if (this.isListFilter(column)) {
        return this.optionText(value, column);
      }

      return value;
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
        revertValue: this.revertValue(this.Row, this.column)
      };
    }
  }
};
exports["default"] = _default;