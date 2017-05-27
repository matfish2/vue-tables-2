'use strict';

module.exports = function (name) {
  if (!name) return name;
  return name.split('__')[1];
};