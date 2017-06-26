'use strict';

module.exports = function (data) {
  this.data = this.applyFilters(data.data);
  this.count = parseInt(data.count);

  setTimeout(function () {
    this.dispatch('loaded', data);
  }.bind(this), 0);
};
