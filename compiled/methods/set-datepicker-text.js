"use strict";

module.exports = function (column, start, end) {

    var el = typeof column === 'string' ? $(this.$el).find("#VueTables__" + column + "-filter") : column;

    el.text(start.format(this.opts.dateFormat) + " - " + end.format(this.opts.dateFormat));
};