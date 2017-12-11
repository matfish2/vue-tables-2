 var debounce = require('debounce');

 module.exports = function(h, that) {

    if (!that.opts.filterable) return '';

    var beforeFilter = that.$slots.beforeFilter?that.$slots.beforeFilter:''; 
    var afterFilter = that.$slots.afterFilter?that.$slots.afterFilter:''; 

    var search = that.source=='client'?
                that.search.bind(that, that.data):
                that.serverSearch.bind(that);

  if (that.opts.filterable && !that.opts.filterByColumn) {
      var id = 'VueTables__search_' + that.id;
      return <div class="form-group form-inline pull-left VueTables__search">
      {beforeFilter}
      <label for={id}>{that.display('filter')}</label>
      <input class="form-control"
      type="text"
      value={that.query}
      placeholder={that.display('filterPlaceholder')}
      on-keyup={debounce(search, that.opts.debounce)}
      id={id}
      />
      {afterFilter}
      </div>
    }

    return '';
  }
