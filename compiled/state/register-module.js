'use strict';

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (self) {
  if (self.options.cache === false || self.$store._runtimeModules === undefined || self.$store._runtimeModules[self.name] === undefined) {

    self.$store.registerModule(self.name, {
      state: (0, _state2.default)(self),
      mutations: (0, _mutations2.default)(self)
    });
  }
};