module.exports = function(page) {

  page = page?page:this.$refs.page.value

  if (!this.opts.pagination.dropdown)
    this.$refs.pagination.page = page;

  this.page = page

  if (this.source=='server')
    this.getData();


}
