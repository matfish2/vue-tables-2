module.exports = function(e) {

  let query = this.query;

  if (e) {
    var name = e.target.name;
    var value = e.target.value;

    if (name) {
      query[name] = value;
    } else {
      query = value;
    }

    if (!this.vuex)
      this.query = query
  }

  if (noDebounce(e ,name, this.opts)) {
    return search(this);
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

   if (that.opts.pagination.dropdown)
    that.getData();
}

}

function noDebounce(e, name, opts) {
 return !e || (name && (opts.dateColumns.indexOf(name)>-1 || Object.keys(opts.listColumns).indexOf(name)>-1))
}
