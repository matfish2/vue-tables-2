'use strict';

var debounce = require('debounce');

module.exports = function (h) {

    var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

    return function (column) {
        return h(
            'input',
            {
                on: {
                    'keyup': debounce(search, this.opts.debounce)
                },

                'class': 'form-control',
                attrs: { name: 'vf__' + column,
                    type: 'text',
                    placeholder: this.display('filterBy', { column: this.getHeading(column) }),
                    value: this.query[column]
                }
            },
            []
        );
    };
};