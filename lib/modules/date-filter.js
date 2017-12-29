    module.exports = function(h) {
     return column => {
      return <div class="VueTables__date-filter"
      id={'VueTables__' + column + '-filter'}>
      <span class="VueTables__filter-placeholder">{this.display('filterBy',{column:this.getHeading(column)})}</span>
      </div>
    }

  }

