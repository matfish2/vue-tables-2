'use strict';

var common = require('../common/template');

module.exports = function (h, modules) {
    return common.call(this, h, modules, {
        skin: 'is-bordered is-striped is-hoverable is-fullwidth',
        row: 'columns',
        column: 'column in-half',
        input: 'input',
        label: 'label',
        field: 'field'
    });
};