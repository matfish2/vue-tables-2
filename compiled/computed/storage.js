"use strict";

module.exports = function () {
  if (typeof localStorage === 'undefined') return {};
  return this.opts.storage === 'local' ? localStorage : sessionStorage;
};