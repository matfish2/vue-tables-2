'use strict';

module.exports = function (response) {

  var data = this.opts.responseAdapter.call(this, response);

  this.data = this.applyFilters(data.data);
  this.count = parseInt(data.count);

  setTimeout(function () {
    this.dispatch('loaded', response);
  }.bind(this), 0);
};