"use strict";

module.exports = function () {
  var _this = this;

  var display = this.columnsDisplay; // default - return all columns

  if (!display && !this.userControlsColumns) {
    return this.Columns.filter(function (col) {
      return _this._shouldShowColumnOnInit(col);
    });
  } // user toggled columns - return user selected columns


  if (this.userControlsColumns) {
    return this.columns.filter(function (column) {
      return _this.userColumnsDisplay.includes(column);
    });
  }

  if (this.opts.ssr) return this.Columns; // developer defined columns display

  return this.Columns.filter(function (column) {
    if (!_this._shouldShowColumnOnInit(column)) {
      return false;
    }

    if (!display[column]) return true;
    var range = display[column];
    var operator = range[2];
    var inRange = (!range[0] || _this.windowWidth >= range[0]) && (!range[1] || _this.windowWidth < range[1]);
    return operator == 'not' ? !inRange : inRange;
  });
};