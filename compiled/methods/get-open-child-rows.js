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
  return this.$parent.$refs.vt_table.$refs.vt_table_body.$children[0].$children.filter(function (child) {
    return child.$options.name === 'VtChildRow' && Rows.includes(child.$children[0].$children[0].data[_this.opts.uniqueKey]);
  }).map(function (child) {
    return child.$children[0].$children[0];
  });
};