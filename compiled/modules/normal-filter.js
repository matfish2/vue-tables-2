'use strict';

var debounce = require('debounce');

module.exports = function (h) {
    var _this = this;

    return function (classes, id) {

        var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

        return h('input', { 'class': classes.input + ' ' + classes.small,
            attrs: { type: 'text',
                value: _this.query,
                placeholder: _this.display('filterPlaceholder'),

                id: id
            },
            on: {
                'keyup': _this.opts.debounce ? debounce(search, _this.opts.debounce) : search
            }
        });
    };
};