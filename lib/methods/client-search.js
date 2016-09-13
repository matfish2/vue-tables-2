var object_filled_keys_count = require('../helpers/object-filled-keys-count');
var is_valid_moment_object = require('../helpers/is-valid-moment-object');
var filterByCustomFilters = require('../filters/custom-filters');
var clone = require('clone');

module.exports = function(data, e) {

  if (e) {
    var name = e.target.name;
    if (name) {
      this.query[name] = '' + e.target.value;
    } else {
      this.query = e.target.value;
    }
  }

  var query = this.query;

  var totalQueries = !query?0:1;

  if (!this.opts) return data;

  if (this.opts.filterByColumn)  {
    totalQueries = object_filled_keys_count(query);
  }

  var value;
  var found;
  var currentQuery;
  var dateFormat = this.opts.dateFormat;
  var filterByDate;
  var isListFilter;


  var data = filterByCustomFilters(data, this.opts.customFilters, this.customQueries);

  if (!totalQueries) return data;

  this.setPage(1);

  return data.filter(function(row, index) {

    found = 0;

    this.columns.forEach(function(column) {

      filterByDate = this.opts.dateColumns.indexOf(column)>-1 && this.opts.filterByColumn;
      isListFilter = this.isListFilter(column) && this.opts.filterByColumn;

      value = getValue(row[column], filterByDate, dateFormat);

      currentQuery = this.opts.filterByColumn?query[column]:query;

      currentQuery = setCurrentQuery(currentQuery);

      if (currentQuery && foundMatch(currentQuery, value, isListFilter)) found++;

    }.bind(this));

    return found>=totalQueries;

  }.bind(this));
}

function setCurrentQuery(query) {

  if (!query) return '';

  if (typeof query=='string')
    return query.toLowerCase();

  // Date Range

  return query;
}

function foundMatch(query, value, isListFilter) {

  // List Filter
  if (isListFilter)
    return value==query;

  //Text Filter
  if (typeof value=='string')
    return value.indexOf(query)>-1;

  // Date range

  var start = moment(query.start,'YYYY-MM-DD');
  var end = moment(query.end,'YYYY-MM-DD');

  return (value>=start && value<=end);
}

function getValue(val, filterByDate, dateFormat) {

  if (is_valid_moment_object(val)) {

    if (filterByDate) return val;
    return val.format(dateFormat);
  }

  return String(val).toLowerCase();
}
