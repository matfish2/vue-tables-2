module.exports = function(column) {

  if (!this.opts.orderBy) return;


  this.orderBy.column = this.opts.orderBy.column;
  this.orderBy.ascending = this.opts.orderBy.hasOwnProperty('ascending')?this.opts.orderBy.ascending:true;

}
