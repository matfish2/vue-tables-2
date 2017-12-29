'use strict';

var common = require('../common/template');

module.exports = function (h, modules) {
    return common.call(this, h, modules, {
        skin: 'table-striped table-bordered table-hover',
        row: 'row',
        column: 'col-md-6',
        input: 'form-control',
        label: '',
        field: 'form-group form-inline pull-left'
    });
};