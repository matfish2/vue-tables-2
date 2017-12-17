'use strict';

module.exports = function (h) {

    var perpageValues = require('./per-page-values').call(this, h);
    var id = 'VueTables__limit_' + this.id;

    return perpageValues.length > 1 ? h(
        'select',
        { 'class': 'form-control',
            attrs: { name: 'limit',

                id: id
            },
            domProps: {
                'value': this.limit
            },
            on: {
                'change': this.setLimit.bind(this)
            }
        },
        [perpageValues]
    ) : '';
};