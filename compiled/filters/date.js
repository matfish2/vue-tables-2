'use strict';

var is_valid_moment_object = require('../helpers/is-valid-moment-object');

module.exports = function (property) {

      if (is_valid_moment_object(property)) return property.format(this.opts.dateFormat);

      return property;
};