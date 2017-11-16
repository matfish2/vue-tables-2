"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (arr1, arr2) {
    return arr1.filter(function (i) {
        return arr2.indexOf(i) < 0;
    });
};