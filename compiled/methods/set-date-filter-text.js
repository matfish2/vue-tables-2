"use strict";

module.exports = function (column, value) {
  var dateFormat = this.dateFormat(column);
  var datepicker = $(this.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter");
  var text = value ? moment(value.start, 'YYYY-MM-DD HH:mm:ss').format(dateFormat) + " - " + moment(value.end, 'YYYY-MM-DD HH:mm:ss').format(dateFormat) : this.opts.texts.filterBy.replace("{column}", column);
  datepicker.text(text);
};