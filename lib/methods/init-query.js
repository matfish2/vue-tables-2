module.exports = function() {

  var init = this.opts.initFilters;

  if (!this.opts.filterByColumn)
    return init.hasOwnProperty('GENERIC')?init.GENERIC:'';

  var query = {};

  var filterable = this.opts.filterable && typeof this.opts.filterable=='object'?
                   this.opts.filterable:
                   this.columns;

  filterable.forEach(function(column) {
     query[column] = getInitialValue(init, column);
    }.bind(this));

    return query;
}

function getInitialValue(init, column) {

  if (!init.hasOwnProperty(column)) return '';

  if (typeof init[column].start == 'undefined') return init[column];

  return {
    start: init[column].start.format('YYYY-MM-DD HH:mm:ss'),
    end: init[column].end.format('YYYY-MM-DD HH:mm:ss')
  }

}
