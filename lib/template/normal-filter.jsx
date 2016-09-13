  module.exports = function(h, that) {

    if (!that.opts.filterable) return '';

    var search = that.source=='client'?
                that.search.bind(that, that.data):
                that.serverSearch.bind(that);

  if (that.opts.filterable && !that.opts.filterByColumn) {
      return <div class="form-group form-inline pull-left VueTables__search">
      <label>{that.display('filter')}</label>
      <input class="form-control"
      type="text"
      value={that.query}
      placeholder={that.display('filterPlaceholder')}
      on-keyup={search}
      />
      </div>
    }

    return '';
  }
