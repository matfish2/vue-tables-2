'use strict';

var _ucfirst = require('../helpers/ucfirst');

var _ucfirst2 = _interopRequireDefault(_ucfirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (value, h) {

  if (typeof value !== 'string') return '';

  var derivedHeading = (0, _ucfirst2.default)(value.split("_").join(" "));

  if (!this.opts.headings.hasOwnProperty(value)) return derivedHeading;

  if (typeof this.opts.headings[value] === 'function') {
    if (h) return this.opts.headings[value].call(this.$parent, h);

    return derivedHeading;
  }

  return this.opts.headings[value];
};