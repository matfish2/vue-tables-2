'use strict';

module.exports = function (source) {
  return function (h) {

    var rows = require('./template/rows')(h, this);
    var normalFilter = require('./template/normal-filter')(h, this);
    var dropdownPagination = require('./template/dropdown-pagination')(h, this);
    var columnFilters = require('./template/column-filters')(h, this);
    var footerHeadings = require('./template/footer-headings')(h, this);
    var noResults = require('./template/no-results')(h, this);
    var pagination = require('./template/pagination')(h, this);
    var dropdownPaginationCount = require('./template/dropdown-pagination-count')(h, this);
    var headings = require('./template/headings')(h, this);
    var perPage = require('./template/per-page')(h, this);
    var beforeFilters = this.$slots.beforeFilters ? this.$slots.beforeFilters : '';
    var afterFilters = this.$slots.afterFilters ? this.$slots.afterFilters : '';
    var beforeBody = this.$slots.beforeBody ? this.$slots.beforeBody : '';
    var prependBody = this.$slots.prependBody ? this.$slots.prependBody : '';
    var appendBody = this.$slots.appendBody ? this.$slots.appendBody : '';
    var afterBody = this.$slots.afterBody ? this.$slots.afterBody : '';

    var prependFilterContainer = this.$slots.prependFilterContainer ? this.$slots.prependFilterContainer : '';
    var appendFilterContainer = this.$slots.appendFilterContainer ? this.$slots.appendFilterContainer : '';

    var prependLimitContainer = this.$slots.prependLimitContainer ? this.$slots.prependLimitContainer : '';
    var appendLimitContainer = this.$slots.appendLimitContainer ? this.$slots.appendLimitContainer : '';

    return h(
      'div',
      { 'class': "VueTables VueTables--" + this.source },
      [h(
        'div',
        { 'class': 'row' },
        [h(
          'div',
          { 'class': 'col-md-6 VueTables__search-wrapper' },
          [prependFilterContainer, normalFilter, appendFilterContainer]
        ), h(
          'div',
          { 'class': 'col-md-6 VueTables__limit-wrapper' },
          [prependLimitContainer, dropdownPagination, perPage, appendLimitContainer]
        )]
      ), h(
        'div',
        { 'class': 'table-responsive' },
        [h(
          'table',
          { 'class': 'VueTables__table table ' + this.opts.skin },
          [h(
            'thead',
            null,
            [h(
              'tr',
              null,
              [headings]
            ), beforeFilters, columnFilters, afterFilters]
          ), footerHeadings, beforeBody, h(
            'tbody',
            null,
            [prependBody, noResults, rows, appendBody]
          ), afterBody]
        )]
      ), pagination, dropdownPaginationCount]
    );
  };
};