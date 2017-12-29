'use strict';

module.exports = function (h, perPage, classes) {

    var beforeLimit = this.$slots.beforeLimit ? this.$slots.beforeLimit : '';
    var afterLimit = this.$slots.afterLimit ? this.$slots.afterLimit : '';

    var id = 'VueTables__limit_' + this.id;

    return h(
        'div',
        { 'class': classes.field + ' VueTables__limit' },
        [beforeLimit, h(
            'label',
            { 'class': classes.label, attrs: { 'for': id }
            },
            [this.display('limit')]
        ), perPage(classes.select), afterLimit]
    );
};