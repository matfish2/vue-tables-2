'use strict';

module.exports = function (h, normalFilter, classes) {

  if (!this.opts.filterable || this.opts.filterByColumn) return '';

  var beforeFilter = this.$slots.beforeFilter ? this.$slots.beforeFilter : '';
  var afterFilter = this.$slots.afterFilter ? this.$slots.afterFilter : '';

  var id = 'VueTables__search_' + this.id;
  return h(
    'div',
    { 'class': classes.field + ' VueTables__search' },
    [beforeFilter, h(
      'label',
      {
        attrs: { 'for': id },
        'class': classes.label },
      [this.display('filter')]
    ), normalFilter(classes.input), afterFilter]
  );
};