'use strict';

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (event, payload) {
  if (this.vuex) {
    this.commit(event.toUpperCase().replace('-', '_'), payload);
  } else {
    _bus2.default.$emit('vue-tables.' + event, payload);
    this.$emit(event, payload);
  }
};