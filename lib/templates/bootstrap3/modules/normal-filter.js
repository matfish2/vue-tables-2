 module.exports = function(h, normalFilter) {

    if (!this.opts.filterable) return '';

    var beforeFilter = this.$slots.beforeFilter?this.$slots.beforeFilter:''; 
    var afterFilter = this.$slots.afterFilter?this.$slots.afterFilter:''; 
    
  if (this.opts.filterable && !this.opts.filterByColumn) {
  
      var id = 'VueTables__search_' + this.id;
    
      return <div class="form-group form-inline pull-left VueTables__search">
      {beforeFilter}
      <label for={id}>{this.display('filter')}</label>
      {normalFilter(h)}
      {afterFilter}
      </div>
    }

    return '';
  }
