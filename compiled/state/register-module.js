'use strict';

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _addHasModuleToVuex = require('../helpers/add-has-module-to-vuex');

var _addHasModuleToVuex2 = _interopRequireDefault(_addHasModuleToVuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (self) {

  var store = {
    state: (0, _state2.default)(self),
    mutations: (0, _mutations2.default)(self)
  };

  if (!self.$store.hasModule(self.name)) {
    self.$store.registerModule(self.name, store);
  }
};