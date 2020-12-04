"use strict";

module.exports = function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (params.page) {
    this.setPage(params.page, true);
  }

  if (params.limit) {
    this.setLimit(params.limit, false);
  }

  if (params.order) {
    this.setOrder(params.order.column, params.order.ascending, false);
  }

  if (params.filters) {
    this.setFilter(params.filters, false);
  }

  if (params.customFilters) {
    this.setCustomFilters(params.customFilters, false);
  }

  if (sendRequest) {
    this.getData();
  }
};