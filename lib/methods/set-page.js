module.exports = function(page) {

  page = page?page:this.$refs.page.value

  if (!this.opts.pagination.dropdown)
    this.$refs.pagination.Page = page;

  this.page = page;

  this.updateState('page', page);

  if (this.source=='server')
    this.getData();


}
