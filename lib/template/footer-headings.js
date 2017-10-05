module.exports = function(h, that) {

  if (!that.opts.footerHeadings) return '';

  var sortControl = require('./sort-control')(h, that);

  var footerHeadings = [];

  if (that.hasChildRow && that.opts.childRowTogglerFirst) footerHeadings.push(<th></th>);

  var columns = that.allColumns;

  columns.map(function(column) {

    footerHeadings.push(<th on-click={that.orderByColumn.bind(that,column)}
      class={that.sortableClass(column)}>
      <span class="VueTables__heading" title={that.getHeadingTooltip(column, h)}>{that.getHeading(column, h)}</span>
      {sortControl(column)}
      </th>);
  });

  if (that.hasChildRow && !that.opts.childRowTogglerFirst) footerHeadings.push(<th></th>);

  return <tfoot><tr>{footerHeadings}</tr></tfoot>


}

