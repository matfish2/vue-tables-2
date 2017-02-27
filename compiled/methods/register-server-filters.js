'use strict';

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

  this.opts.customFilters.forEach(function (filter) {
    _bus2.default.$off('vue-tables.filter::' + filter);
    _bus2.default.$on('vue-tables.filter::' + filter, function (value) {
      this.customQueries[filter] = value;
      this.refresh();
    }.bind(this));
  }.bind(this));
};