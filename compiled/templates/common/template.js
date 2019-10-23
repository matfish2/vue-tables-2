'use strict';

module.exports = function (h, modules, classes) {

  var normalFilter = require('./modules/normal-filter');
  var dropdownPagination = require('./modules/dropdown-pagination');
  var footerHeadings = require('./modules/footer-headings');
  var pagination = require('./modules/pagination');
  var perPage = require('./modules/per-page');

  var beforeSearch = this.$slots.beforeSearch ? this.$slots.beforeSearch : '';
  var beforeFilters = this.$slots.beforeFilters ? this.$slots.beforeFilters : '';
  var afterFilters = this.$slots.afterFilters ? this.$slots.afterFilters : '';
  var prependHead = this.$slots.prependHead ? this.$slots.prependHead : '';
  var beforeBody = this.$slots.beforeBody ? this.$slots.beforeBody : '';
  var prependBody = this.$slots.prependBody ? this.$slots.prependBody : '';
  var appendBody = this.$slots.appendBody ? this.$slots.appendBody : '';
  var afterBody = this.$slots.afterBody ? this.$slots.afterBody : '';
  var beforeTable = this.$slots.beforeTable ? this.$slots.beforeTable : '';

  var prependFilterContainer = this.$slots.prependFilterContainer ? this.$slots.prependFilterContainer : '';
  var appendFilterContainer = this.$slots.appendFilterContainer ? this.$slots.appendFilterContainer : '';

  var prependLimitContainer = this.$slots.prependLimitContainer ? this.$slots.prependLimitContainer : '';
  var appendLimitContainer = this.$slots.appendLimitContainer ? this.$slots.appendLimitContainer : '';

  return h(
    'div',
    { 'class': "VueTables VueTables--" + this.source },
    [h(
      'div',
      { 'class': classes.row },
      [beforeSearch,h(
        'div',
        { 'class': classes.column + ' VueTables__search-wrapper' },
        [prependFilterContainer, normalFilter.call(this, h, modules.normalFilter, classes), appendFilterContainer]
      ), h(
        'div',
        { 'class': classes.column + ' VueTables__limit-wrapper' },
        [prependLimitContainer, dropdownPagination.call(this, h, modules.dropdownPagination), perPage.call(this, h, modules.perPage), modules.columnsDropdown(), appendLimitContainer]
      )]
    ), beforeTable, h(
      'div',
      { 'class': 'table-responsive' },
      [h(
        'table',
        { 'class': 'VueTables__table table ' + (this.opts.skin ? this.opts.skin : classes.skin) },
        [h(
          'thead',
          null,
          [prependHead, h(
            'tr',
            null,
            [modules.headings()]
          ), beforeFilters, modules.columnFilters(), afterFilters]
        ), footerHeadings.call(this, h, modules.headings), beforeBody, h(
          'tbody',
          null,
          [prependBody, modules.rows(), appendBody]
        ), afterBody]
      )]
    ), pagination.call(this, h, modules.pagination), modules.dropdownPaginationCount()]
  );
};