import merge from 'merge';

module.exports = function(h, that) {
  if (!that.opts.filterByColumn || !that.opts.filterable) return '';

  var textFilter = require('./text-filter')(h, that);
  var dateFilter = require('./date-filter')(h, that);
  var listFilter = require('./list-filter')(h, that);

  var filters = [];

  if (that.hasChildRow && that.opts.childRowTogglerFirst) filters.push(<th></th>);

  that.allColumns.map(function(column) {
      var filter = '';

    
      if (that.filterable(column)) {
        if (that.opts.customsFilterBy) {
          filter = that.opts.customsFilterBy[column] && that.opts.customsFilterBy[column](h) || '';
        } else {
          switch (true) {
            case that.isTextFilter(column): filter = textFilter(column); break;
            case that.isDateFilter(column): filter = dateFilter(column); break;
            case that.isListFilter(column): filter = listFilter(column); break;
          }
        };
      }


      if (typeof that.$slots[`filter__${column}`]!=='undefined') {
        filter = filter ? <div>{filter}{that.$slots[`filter__${column}`]}</div> : that.$slots[`filter__${column}`];
      }

      filters.push(<th class={that.columnClass(column)}>
        <div class="VueTables__column-filter" class={'VueTables__' + column + '-filter-wrapper'} >
          {filter}
        </div>
      </th>);
  });

  if (that.hasChildRow && !that.opts.childRowTogglerFirst)
    filters.push(<th></th>);

  return <tr class="VueTables__filters-row">
    {filters}
  </tr>
}
