'use strict';

module.exports = function (column) {

    var cls = this.opts.sortIcon.base + ' ';

    if (!this.sortable(column)) return;

    if (column != this.orderBy.column) return cls;

    cls += this.orderBy.ascending == 1 ? this.opts.sortIcon.up : this.opts.sortIcon.down;

    return cls;
};