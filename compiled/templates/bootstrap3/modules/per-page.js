'use strict';

module.exports = function (h, perPage) {

    var beforeLimit = this.$slots.beforeLimit ? this.$slots.beforeLimit : '';
    var afterLimit = this.$slots.afterLimit ? this.$slots.afterLimit : '';

    var id = 'VueTables__limit_' + this.id;

    return h(
        'div',
        { 'class': 'form-group form-inline pull-right VueTables__limit' },
        [beforeLimit, h(
            'label',
            {
                attrs: { 'for': id }
            },
            [this.display('limit')]
        ), perPage('form-control'), afterLimit]
    );
};