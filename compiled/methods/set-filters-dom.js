'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (query) {

  var el;

  if (this.opts.filterByColumn) {
    for (var column in query) {

      if (this.isDateFilter(column)) {
        if (query[column] && _typeof(query[column]) === 'object') {
          var start = typeof query[column].start === 'string' ? moment(query[column].start, 'YYYY-MM-DD') : query[column].start;
          var end = typeof query[column].end === 'string' ? moment(query[column].end, 'YYYY-MM-DD') : query[column].end;

          this._setDatepickerText(column, start, end);
        } else {
          $(this.$el).find('#VueTables__' + column + '-filter').html("<span class='VueTables__filter-placeholder'>" + this.display('filterBy', { column: this.getHeading(column) }) + "</span>");
        }
        continue;
      }

      el = this.$el.querySelector('[name=\'vf__' + column + '\']');

      if (el) {
        el.value = query[column];
      } else {
        console.error('vue-tables-2: Error in setting filter value. Column \'' + column + '\' does not exist.');
      }
    }
  } else {
    this.$el.querySelector('.VueTables__search input').value = query;
  }
};