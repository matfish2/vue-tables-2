module.exports = function(property, column) {

  if (!this.opts.highlightMatches || this.templatesKeys.indexOf(column)>-1)
    return property;

  var query = this.opts.filterByColumn?this.query[column]:this.query;

  if (!query) return property;

  query = new RegExp(query,"i");

  property = String(property).replace(query,function(highlight) {
    return "<b class='VueTables__highlight'>" + highlight + "</b>";
  });

  return property;

}
