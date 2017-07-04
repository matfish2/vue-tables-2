'use strict';

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;

  this.opts.customFilters.forEach(function (filter) {
    _bus2.default.$off(event + '.filter::' + filter.name);
    _bus2.default.$on(event + '.filter::' + filter.name, function (value) {
      this.customQueries[filter.name] = value;
      this.updateState('customQueries', this.customQueries);
      this.setPage(1);
      this.search(this.data);
    }.bind(this));
  }.bind(this));
};