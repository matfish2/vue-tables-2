'use strict';

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (h, modules, classes, slots) {

  var filterId = 'VueTables__search_' + this.id;
  var perpageId = 'VueTables__limit_' + this.id;
  var perpageValues = require('../modules/per-page-values').call(this, h);

  var genericFilter = this.opts.filterByColumn || !this.opts.filterable ? '' : h(
    'div',
    { 'class': 'VueTables__search-field' },
    [h(
      'label',
      {
        attrs: { 'for': filterId },
        'class': classes.label },
      [this.display('filter')]
    ), modules.normalFilter(classes, filterId)]
  );

  var perpage = perpageValues.length > 1 ? h(
    'div',
    { 'class': 'VueTables__limit-field' },
    [h(
      'label',
      { 'class': classes.label, attrs: { 'for': perpageId }
      },
      [this.display('limit')]
    ), modules.perPage(perpageValues, classes.select, perpageId)]
  ) : '';

  var columnsDropdown = this.opts.columnsDropdown ? h(
    'div',
    { 'class': 'VueTables__columns-dropdown-wrapper' },
    [modules.columnsDropdown(classes)]
  ) : '';

  return h(
    'div',
    { 'class': "VueTables VueTables--" + this.source },
    [h(
      'div',
      { 'class': classes.row },
      [h(
        'div',
        { 'class': classes.column },
        [h(
          'div',
          { 'class': classes.field + ' ' + classes.inline + ' ' + classes.left + ' VueTables__search' },
          [slots.beforeFilter, genericFilter, slots.afterFilter]
        ), h(
          'div',
          { 'class': classes.field + ' ' + classes.inline + ' ' + classes.right + ' VueTables__limit' },
          [slots.beforeLimit, perpage, slots.afterLimit]
        ), columnsDropdown]
      )]
    ), slots.beforeTable, h(
      'div',
      { 'class': 'table-responsive' },
      [h(
        'table',
        { 'class': 'VueTables__table ' + (this.opts.skin ? this.opts.skin : classes.table) },
        [h(
          'thead',
          null,
          [h(
            'tr',
            null,
            [modules.headings(classes.right)]
          ), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]
        ), h(
          'tfoot',
          null,
          [h(
            'tr',
            null,
            [h(
              'td',
              {
                attrs: { colspan: this.colspan }
              },
              [modules.pagination((0, _merge2.default)(classes.pagination, {
                list: classes.pagination.list + ' ' + classes.right + ' ' + classes.nomargin,
                count: '' + classes.left
              }))]
            )]
          )]
        ), slots.beforeBody, h(
          'tbody',
          null,
          [slots.prependBody, modules.rows(classes), slots.appendBody]
        ), slots.afterBody]
      )]
    ), slots.afterTable]
  );
};