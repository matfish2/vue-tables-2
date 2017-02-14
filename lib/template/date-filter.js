    module.exports = function(h, that) {
     return function(column) {
      return <div class="VueTables__date-filter"
      id={'VueTables__' + column + '-filter'}>
      <span class="VueTables__filter-placeholder">{that.display('filterBy',{column:that.getHeading(column)})}</span>
      </div>
    }

  }

