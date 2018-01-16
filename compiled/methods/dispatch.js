'use strict';

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (event, payload) {

  if (this.vuex) {
    if (event.split('::').length > 1) return;
    this.commit(event.toUpperCase().replace('-', '_'), payload);
  }

  this.$emit(event, payload);

  _bus2.default.$emit('vue-tables.' + event, payload);

  if (this.name) {
    _bus2.default.$emit('vue-tables.' + name + '.' + event, payload);
  }
};