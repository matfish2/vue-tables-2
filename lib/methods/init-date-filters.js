var merge = require('merge');

module.exports = function() {

  var el;
  var search = function() {
    return that.source=='client'?
    that.search(that.data):
    that.serverSearch();
  }

  var datepickerOptions = merge.recursive(this.opts.datepickerOptions, {
    autoUpdateInput:false,
    singleDatePicker:false,
    locale: {
      format: this.opts.dateFormat
    }
  });

  var that = this;

    that.opts.dateColumns.forEach(function(column) {
     el =  $(that.$el).find("#VueTables__" + column + "-filter");

     el.daterangepicker(datepickerOptions);
     el.on('apply.daterangepicker', function(ev, picker) {

      that.query[column] = {start:picker.startDate.format('YYYY-MM-DD'),
      end: picker.endDate.format('YYYY-MM-DD')};
      $(this).text(picker.startDate.format(that.opts.dateFormat) + " - " + picker.endDate.format(that.opts.dateFormat));

      search();
    });

     el.on('cancel.daterangepicker', function(ev, picker) {
      that.query[column] = '';
      $(this).html("<span class='VueTables__filter-placeholder'>" + that.display('filterBy',that.getHeading(column) + "</span>"));

      search();
      });

   });


}
