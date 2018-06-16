'use strict';

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (self) {

  var initialState;

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    initialState = self.$store.state[self.name];
    self.$store.unregisterModule(self.name);
  } else {
    initialState = (0, _state2.default)(self);
  }

  var store = {
    state: initialState,
    mutations: (0, _mutations2.default)(self)
  };

  self.$store.registerModule(self.name, store);
};