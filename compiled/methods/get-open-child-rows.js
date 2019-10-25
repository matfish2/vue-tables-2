"use strict";

module.exports = function () {
  var _this = this;

  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!this.opts.childRow || typeof this.opts.childRow === 'function') {
    throw new Error('vue-tables-2: Child row undefined or not a component');
  }

  var Rows = rows ? this.openChildRows.filter(function (row) {
    return rows.includes(row);
  }) : this.openChildRows;
  if (!Rows.length) return [];
  var components = this.$children.filter(function (child) {
    return child.$options.name === 'ChildRow' && Rows.includes(child.data[_this.opts.uniqueKey]);
  });
  return components;
};