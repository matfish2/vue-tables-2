module.exports = function(query) {
  var value;

  if (this.hasDateFilters()) {
    this.opts.dateColumns.forEach(column=>{
      value = query[column];

      if (!value) return;

      var datepicker =  $(this.$el).find("#VueTables__" + column + "-filter");
      var text = moment(value.start, 'YYYY-MM-DD').format(this.opts.dateFormat) + " - " + moment(value.end,'YYYY-MM-DD').format(this.opts.dateFormat);
      datepicker.text(text);
    });

  }

}
