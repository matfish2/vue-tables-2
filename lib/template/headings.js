module.exports = function(h, that) {

 var sortControl = require('./sort-control')(h, that);

 var headings = [];

 if (that.hasChildRow) headings.push(<th></th>);

 that.allColumns.map(function(column) {
  headings.push(<th on-click={that.orderByColumn.bind(that,column)}
    class={that.sortableClass(column)}>
    <span class="VueTables__heading" title={that.getHeadingTooltip(column, h)}>{that.getHeading(column, h)}</span>
    {sortControl(column)}
    </th>)
}.bind(that))

 return headings;
}
