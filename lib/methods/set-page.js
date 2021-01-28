module.exports = function(page, preventRequest = false) {

  page = parseInt(page);

  this.page = page > 0 ? page : 1;

  this.updateState('page', page);
  this.dispatch('pagination', page);

  if (this.source=='server' && !preventRequest)
    this.getData();
}
