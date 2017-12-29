'use strict';

module.exports = function (h, normalFilter) {

  if (!this.opts.filterable || this.opts.filterByColumn) return '';

  var beforeFilter = this.$slots.beforeFilter ? this.$slots.beforeFilter : '';
  var afterFilter = this.$slots.afterFilter ? this.$slots.afterFilter : '';

  var id = 'VueTables__search_' + this.id;

  return h(
    'div',
    { 'class': 'form-group form-inline pull-left VueTables__search' },
    [beforeFilter, h(
      'label',
      {
        attrs: { 'for': id }
      },
      [this.display('filter')]
    ), normalFilter.call(this, h), afterFilter]
  );
};