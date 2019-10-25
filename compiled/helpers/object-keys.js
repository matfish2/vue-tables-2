"use strict";

module.exports = function (obj) {
  var keys = [];

  for (var prop in obj) {
    keys.push(prop);
  }

  return keys;
};