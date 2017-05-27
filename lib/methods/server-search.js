module.exports = function(e) {

  // we need to handle the store this.query to make sure we're not mutating outside of it
  let query = this.vuex?JSON.parse(JSON.stringify(this.query)):this.query;

  if (e) {
    let name = e.target.name;
    let value = e.target.value;

    if (name) {
      query[name] = value;
    } else {
      query = value;
    }

    if (!this.vuex)
      this.query = query

    this.updateState('query', query);
  }

  if (noDebounce(e ,name, this.opts)) {
    return search(this, query);
  }

  this.lastKeyStrokeAt = Date.now();

  var elapsed;
  var debounce = this.opts.debounce;

  setTimeout(function() {

    elapsed = (Date.now() - this.lastKeyStrokeAt);

    if (elapsed >= debounce) search(this, query);

  }.bind(this),debounce);


}

function search(that, query) {

  if (that.vuex) {
    that.commit('SET_FILTER', query)
  } else {
    that.initPagination();

    if (that.opts.pagination.dropdown) {
      that.getData();
    }
  }

}

function noDebounce(e, name, opts) {
  return !e || (name && (opts.dateColumns.indexOf(name)>-1 || Object.keys(opts.listColumns).indexOf(name)>-1))
}
