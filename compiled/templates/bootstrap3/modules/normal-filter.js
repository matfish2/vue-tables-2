'use strict';

module.exports = function (h, normalFilter) {

    if (!this.opts.filterable) return '';

    var beforeFilter = this.$slots.beforeFilter ? this.$slots.beforeFilter : '';
    var afterFilter = this.$slots.afterFilter ? this.$slots.afterFilter : '';

    if (this.opts.filterable && !this.opts.filterByColumn) {

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
            ), normalFilter(h), afterFilter]
        );
    }

    return '';
};