'use strict';

module.exports = function (h, dropdownPagiantion) {

    if (this.opts.pagination && this.opts.pagination.dropdown) {

        var id = 'VueTables__dropdown-pagination_' + this.id;
        return h(
            'div',
            { 'class': 'form-group form-inline pull-right VueTables__dropdown-pagination',
                directives: [{
                    name: 'show',
                    value: this.totalPages > 1
                }]
            },
            [h(
                'label',
                {
                    attrs: { 'for': id }
                },
                [this.display('page')]
            ), dropdownPagiantion(h)]
        );
    }

    return '';
};