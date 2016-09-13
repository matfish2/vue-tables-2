module.exports = function(column) {

  if (!this.opts.orderBy) {
     this.orderBy.column = column;
    return;
  }

  this.orderBy.column = this.opts.orderBy.column;
  this.orderBy.ascending = this.opts.orderBy.ascending;

}
