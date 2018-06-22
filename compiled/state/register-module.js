'use strict';

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (self) {

  var Module = {
    state: (0, _state2.default)(self),
    mutations: (0, _mutations2.default)(self)
  };

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    console.log("unregister module");
    Module.state = _merge2.default.recursive(Module.state, self.$store.state[self.name]);
    self.$store.unregisterModule(self.name);
  }

  self.$store.registerModule(self.name, Module);
};