'use strict';

var debounce = require('debounce');

module.exports = function (h) {
    var id = 'VueTables__search_' + this.id;
    var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

    return h(
        'input',
        { 'class': 'form-control',
            attrs: { type: 'text',
                value: this.query,
                placeholder: this.display('filterPlaceholder'),

                id: id
            },
            on: {
                'keyup': debounce(search, this.opts.debounce)
            }
        },
        []
    );
};