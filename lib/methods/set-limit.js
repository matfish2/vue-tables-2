module.exports = function(e) {
  this.limit = typeof e==='object'?e.target.value:e;
  this.setPage(1);
}
