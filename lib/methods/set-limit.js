module.exports = function(e) {
  this.limit = typeof e==='object'?e.target.value:e;
  this.updateState('perPage', this.limit);
  this.dispatch('limit',this.limit);
  this.setPage(1);
}
