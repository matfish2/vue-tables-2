'use strict';

var debounce = require('debounce');

module.exports = function (h, inputClass) {
    var _this = this;

    var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

    return function (column) {
        return h(
            'input',
            {
                on: {
                    'keyup': debounce(search, _this.opts.debounce)
                },

                'class': inputClass,
                attrs: { name: 'vf__' + column,
                    type: 'text',
                    placeholder: _this.display('filterBy', { column: _this.getHeading(column) }),
                    value: _this.query[column]
                }
            },
            []
        );
    };
};