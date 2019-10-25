"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (data) {
  var _this = this;

  try {
    return data.map(function (row) {
      for (var column in row) {
        if (_this.source === 'client') row[column] = _this.formatDate(row[column], _this.dateFormat(column));

        if (_this.isListFilter(column) && !_this.opts.templates[column] && !_this.$scopedSlots[column]) {
          row[column] = _this.optionText(row[column], column);
        }
      }

      return row;
    });
  } catch (e) {
    console.error("vue-tables-2: non-iterable data property. Expected array, got ".concat(_typeof(data), ". Make sure that your response conforms to the expected format, or use the 'responseAdapter' option to match the currently returned format"));
    console.error('Data equals', data);
    throw new Error();
  }
};