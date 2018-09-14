'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = require('../common/template');

module.exports = function (h, modules) {
    var _common$call;

    return common.call(this, h, modules, (_common$call = {
        skin: 'ui is-bordered is-striped is-hoverable is-fullwidth',
        row: 'ui columns',
        column: 'ui column in-half',
        label: 'ui label',
        input: 'ui input',
        select: 'ui select'
    }, _defineProperty(_common$call, 'label', 'label'), _defineProperty(_common$call, 'field', 'field'), _common$call));
};
