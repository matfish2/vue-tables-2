"use strict";

module.exports = function (column) {
  return 'vf__' + column.split('.').join('@@@');
};