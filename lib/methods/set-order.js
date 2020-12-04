module.exports = function(column, ascending, sendRequest = true) {

  this.orderBy.column = column;
  this.orderBy.ascending = ascending;

  this.updateState('orderBy',{column, ascending});

  if (this.source == 'server' && sendRequest) {
    this.getData();
  }

}
