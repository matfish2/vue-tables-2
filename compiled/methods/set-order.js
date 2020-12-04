"use strict";

module.exports = function (column, ascending) {
  var sendRequest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  this.orderBy.column = column;
  this.orderBy.ascending = ascending;
  this.updateState('orderBy', {
    column: column,
    ascending: ascending
  });

  if (this.source == 'server' && sendRequest) {
    this.getData();
  }
};