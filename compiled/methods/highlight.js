"use strict";

module.exports = function (value, column) {

  var query = this.options.filterByColumn ? this.query[column] : this.query;

  if (!this.opts.highlightMatches || !query) return value;

  query = new RegExp(query, "i");

  return String(property).replace(query, function (highlight) {
    return "<b class='VueTables__highlight'>" + highlight + "</b>";
  });
};