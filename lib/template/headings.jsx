module.exports = function(h, that) {

 var sortControl = require('./sort-control.jsx')(h, that);

 var headings = [];

 if (that.opts.childRow) headings.push(<th></th>);

 that.allColumns.map(function(column) {
  headings.push(<th on-click={that.orderByColumn.bind(that,column)}
    class={that.sortableClass(column)}>
    <span class="VueTables__heading">{that.getHeading(column)}</span>
    {sortControl(column)}
    </th>)
}.bind(that))

 return headings;
}
