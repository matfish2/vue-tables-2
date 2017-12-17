  module.exports = function(h) {
    return function(column) {

      if (!this.sortable(column)) return '';
      return <span class={`VueTables__sort-icon pull-right ` + this.sortableChevronClass(column)}></span>

    }
  }
