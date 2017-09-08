'use strict';

var debounce = require('debounce');

module.exports = function (h, that) {

    if (!that.opts.filterable) return '';

    var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

    if (that.opts.filterable && !that.opts.filterByColumn) {
        var id = 'VueTables__search_' + that.id;
        return h(
            'div',
            { 'class': 'form-group form-inline pull-left VueTables__search' },
            [h(
                'label',
                {
                    attrs: { 'for': id }
                },
                [that.display('filter')]
            ), h(
                'input',
                { 'class': 'form-control',
                    attrs: { type: 'text',
                        value: that.query,
                        placeholder: that.display('filterPlaceholder'),

                        id: id
                    },
                    on: {
                        'keyup': debounce(search, that.opts.debounce)
                    }
                },
                []
            )]
        );
    }

    return '';
};