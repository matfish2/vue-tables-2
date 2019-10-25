"use strict";

module.exports = function () {
  var defaults = require('../config/defaults')();

  return this.initOptions(defaults, this.globalOptions, this.options);
};