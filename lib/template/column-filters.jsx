module.exports = function(h, that) {

  if (!that.opts.filterByColumn || !that.opts.filterable) return '';

  var textFilter = require('./text-filter.jsx')(h, that);
  var dateFilter = require('./date-filter.jsx')(h, that);
  var listFilter = require('.//list-filter.jsx')(h, that);

  var filters = [];
  var filter;

  that.allColumns.map(function(column) {

      if (that.filterable(column)) {
       switch (true) {
          case that.isTextFilter(column):   filter =  textFilter(column);break;
          case that.isDateFilter(column): filter =  dateFilter(column);break;
          case that.isListFilter(column):  filter =  listFilter(column);break;
        }
      }
         else {
          filter = '';
        }

      filters.push(<th>
        <div class="VueTables__column-filter" class={'VueTables__' + column + '-filter-wrapper'} >
       {filter}
      </div>
      </th>);

    })

    return <tr class="VueTables__filters-row">
          {filters}
    </tr>

}
