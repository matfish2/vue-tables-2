module.exports = function(e) {

  if (e) {
    var name = e.target.name;
    var value = e.target.value;

    if (name) {
      this.query[name] = value;
    } else {
      this.query = value;
    }
  }

if (noDebounce(e ,name, this.opts)) {
  return search(this);
}

this.lastKeyStrokeAt = Date.now();

var elapsed;
var debounce = this.opts.debounce;

setTimeout(function() {

  elapsed = (Date.now() - this.lastKeyStrokeAt);

 if (elapsed >= debounce) search(this);

  }.bind(this),debounce);


}

function search(that) {
    that.initPagination();

      if (that.opts.pagination.dropdown)
        that.getData();
}

function noDebounce(e, name, opts) {
 return !e || (name && (opts.dateColumns.indexOf(name)>-1 || Object.keys(opts.listColumns).indexOf(name)>-1))
}
