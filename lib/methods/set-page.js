module.exports = function(page, programmatic,e) {


  if (e) {
    this[e.target.name] = e.target.value;
  }

  if (programmatic && !this.opts.pagination.dropdown) {
    this.$refs.pagination.setPage(page);
   } else {
    if (!this.opts.pagination.dropdown)
      this.$refs.pagination.page = page;
      this.page = page?page:e.target.value;
   }

  if (this.source=='server')
    this.getData();


}
