"use strict";

module.exports = function (val) {
  return val && typeof val.isValid == 'function' && val.isValid();
};