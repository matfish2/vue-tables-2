"use strict";

var _state = _interopRequireDefault(require("./state"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (self) {
  var Module = {
    state: (0, _state["default"])(self),
    mutations: (0, _mutations["default"])(self)
  };

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    Module.state = _merge["default"].recursive(Module.state, self.$store.state[self.name]);
    self.$store.unregisterModule(self.name);
  }

  self.$store.registerModule(self.name, Module);
};