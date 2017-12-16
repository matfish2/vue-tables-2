import merge from 'merge';

module.exports = function(h) {

  if (!this.opts.filterByColumn || !this.opts.filterable) return '';

  var textFilter = require('./text-filter')(h);
  var dateFilter = require('./date-filter')(h);
  var listFilter = require('./list-filter')(h);

  var filters = [];
  var filter;

  if (this.hasChildRow && this.opts.childRowTogglerFirst)
    filters.push(<th></th>);

      this.allColumns.map(function(column) {

        var filter = '';

        if (this.filterable(column)) {
         switch (true) {
          case this.isTextFilter(column):   filter =  textFilter(column);break;
          case this.isDateFilter(column): filter =  dateFilter(column);break;
          case this.isListFilter(column):  filter =  listFilter(column);break;
        }
      }

      if (typeof this.$slots[`filter__${column}`]!=='undefined') {
        filter = filter?<div>{filter}{this.$slots[`filter__${column}`]}</div>:this.$slots[`filter__${column}`];
      }

      filters.push(<th class={this.columnClass(column)}>
      <div class="VueTables__column-filter" class={'VueTables__' + column + '-filter-wrapper'} >
      {filter}
      </div>
      </th>);

    });

    if (this.hasChildRow && !this.opts.childRowTogglerFirst)
      filters.push(<th></th>);

    return <tr class="VueTables__filters-row">
    {filters}
    </tr>

  }
