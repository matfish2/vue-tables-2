'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {

    if (_typeof(this.query) !== 'object' || this.opts.sendEmptyFilters) {
        return this.query;
    }

    var result = {};

    for (var key in this.query) {
        if (this.query[key] !== '') {
            result[key] = this.query[key];
        }
    }

    return result;
};