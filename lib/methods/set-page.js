module.exports = function(page, e) {

  if (e) {
    this[e.target.name] = e.target.value;
  }

  if (!this.opts.pagination.dropdown)
    this.$refs.pagination.page = page;

  this.page = page?page:e.target.value;

  if (this.source=='server')
    this.getData();


}
