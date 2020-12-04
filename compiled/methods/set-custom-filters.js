"use strict";

module.exports = function (filters) {
  var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  for (var key in filters) {
    this.customQueries[key] = filters[key];
  }

  this.updateState('customQueries', this.customQueries);

  if (this.source === 'server' && sendRequest) {
    this.getData();
  }
};