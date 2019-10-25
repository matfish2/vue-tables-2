"use strict";

var validMoment = require('../helpers/is-valid-moment-object');

module.exports = function (value, dateFormat) {
  if (!validMoment(value)) return value;
  return value.format(dateFormat);
};