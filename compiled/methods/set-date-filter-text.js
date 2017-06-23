"use strict";

module.exports = function (query) {
  var _this = this;

  var value;

  if (this.hasDateFilters()) {
    this.opts.dateColumns.forEach(function (column) {
      value = query[column];

      if (!value) return;

      var datepicker = $(_this.$el).find("#VueTables__" + column + "-filter");
      var text = moment(value.start, 'YYYY-MM-DD').format(_this.opts.dateFormat) + " - " + moment(value.end, 'YYYY-MM-DD').format(_this.opts.dateFormat);
      datepicker.text(text);
    });
  }
};