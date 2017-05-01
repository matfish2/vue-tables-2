'use strict';

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

  this.opts.customFilters.forEach(function (filter) {
    _bus2.default.$off('vue-tables.filter::' + filter.name);
    _bus2.default.$on('vue-tables.filter::' + filter.name, function (value) {
      this.customQueries[filter.name] = value;
      this.updateState('customQueries', this.customQueries);
      this.setPage(1);
      this.search(this.data);
    }.bind(this));
  }.bind(this));
};