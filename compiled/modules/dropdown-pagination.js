'use strict';

var debounce = require('debounce');

module.exports = function (h) {

    var id = 'VueTables__dropdown-pagination_' + this.id;

    var pages = [];
    var selected;

    for (var pag = 1; pag <= this.totalPages; pag++) {
        var selected = this.page == pag;
        pages.push(h(
            'option',
            {
                domProps: {
                    'value': pag,
                    'selected': selected
                }
            },
            [pag]
        ));
    }
    return h(
        'select',
        { 'class': 'form-control dropdown-pagination',
            directives: [{
                name: 'show',
                value: this.totalPages > 1
            }],
            attrs: {
                name: 'page',

                id: id
            },
            ref: 'page',
            domProps: {
                'value': this.page
            },
            on: {
                'change': this.setPage.bind(this, null, false)
            }
        },
        [pages]
    );
};