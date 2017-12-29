'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = require('../common/template');

module.exports = function (h, modules) {
    var _common$call;

    return common.call(this, h, modules, (_common$call = {
        skin: 'is-bordered is-striped is-hoverable is-fullwidth',
        row: 'columns',
        column: 'column in-half',
        label: 'label',
        input: 'input',
        select: 'select'
    }, _defineProperty(_common$call, 'label', 'label'), _defineProperty(_common$call, 'field', 'field'), _common$call));
};