"use strict";

module.exports = function (column, value) {
  var datepicker = $(this.$el).find("#VueTables__" + column + "-filter");
  var text = value ? moment(value.start, 'YYYY-MM-DD').format(this.opts.dateFormat) + " - " + moment(value.end, 'YYYY-MM-DD').format(this.opts.dateFormat) : this.opts.texts.filterBy.replace("{column}", column);
  datepicker.text(text);
};