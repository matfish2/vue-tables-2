'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function () {
    var _ref;

    return _ref = {
        framework: 'bulma',
        table: 'table is-bordered is-striped is-hoverable is-fullwidth',
        row: 'columns',
        column: 'column is-12',
        label: 'label',
        input: 'input',
        select: 'select'
    }, _defineProperty(_ref, 'label', 'label'), _defineProperty(_ref, 'field', 'field'), _defineProperty(_ref, 'inline', 'is-horizontal'), _defineProperty(_ref, 'right', 'is-pulled-right'), _defineProperty(_ref, 'left', 'is-pulled-left'), _defineProperty(_ref, 'center', 'has-text-centered'), _defineProperty(_ref, 'contentCenter', 'is-centered'), _defineProperty(_ref, 'small', 'is-small'), _defineProperty(_ref, 'nomargin', 'marginless'), _defineProperty(_ref, 'pagination', {
        nav: '',
        count: '',
        wrapper: 'pagination',
        list: 'pagination-list',
        item: '',
        link: 'pagination-link',
        next: '',
        prev: '',
        active: 'is-current'
    }), _ref;
};