var merge = require('merge');

module.exports = function() {

  var el;
  var drp;
  var that = this;
  var query = this.vuex ? JSON.parse(JSON.stringify(this.query)) : this.query;

  var search = function(query) {
    return that.source == 'client'?that.search(that.data):that.serverSearch(query);
  }

  var datepickerOptions = merge.recursive(this.opts.datepickerOptions, {
    autoUpdateInput:false,
    singleDatePicker:false,
    locale: {
      format: this.opts.dateFormat
    }
  });

  that.opts.dateColumns.forEach(function(column) {

    el =  $(that.$el).find("#VueTables__" + column + "-filter");
    el.daterangepicker(datepickerOptions);
    drp = el.data('daterangepicker');
    el.text(drp.startDate.format(that.opts.dateFormat) + " - " + drp.endDate.format(that.opts.dateFormat));

    el.on('apply.daterangepicker', function(ev, picker) {

      query[column] = {
        start:picker.startDate.format('YYYY-MM-DD'),
        end: picker.endDate.format('YYYY-MM-DD')
      };

      if (!that.vuex) 
        that.query = query;

      $(this).text(picker.startDate.format(that.opts.dateFormat) + " - " + picker.endDate.format(that.opts.dateFormat));
      that.updateState('query', query);

      search(query);
    });

    el.on('cancel.daterangepicker', function(ev, picker) {
      that.query[column] = '';

      if (!that.vuex) 
        that.query = query;
        
      that.updateState('query', query);

      $(this).html("<span class='VueTables__filter-placeholder'>" + that.display('filterBy',{column:that.getHeading(column)}) + "</span>");

      search(query);
    });

  });

}
