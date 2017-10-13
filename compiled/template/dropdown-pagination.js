'use strict';

module.exports = function (h, that) {

    if (that.opts.pagination && that.opts.pagination.dropdown) {

        var pages = [];
        var selected;

        for (var pag = 1; pag <= that.totalPages; pag++) {
            var selected = that.page == pag;
            pages.push(h(
                'option',
                {
                    attrs: { value: pag, selected: selected }
                },
                [pag]
            ));
        }

        var id = 'VueTables__dropdown-pagination_' + that.id;
        return h(
            'div',
            { 'class': 'form-group form-inline pull-right VueTables__dropdown-pagination',
                directives: [{
                    name: 'show',
                    value: that.totalPages > 1
                }]
            },
            [h(
                'label',
                {
                    attrs: { 'for': id }
                },
                [that.display('page')]
            ), h(
                'select',
                { 'class': 'form-control',
                    attrs: { name: 'page',

                        value: that.page,

                        id: id
                    },
                    ref: 'page', on: {
                        'change': that.setPage.bind(that, null)
                    }
                },
                [pages]
            )]
        );
    }

    return '';
};