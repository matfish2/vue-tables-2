"use strict";

var _bus = _interopRequireDefault(require("../bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function () {
  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;
  this.opts.customFilters.forEach(function (filter) {
    _bus["default"].$off("".concat(event, ".filter::").concat(filter));

    _bus["default"].$on("".concat(event, ".filter::").concat(filter), function (value) {
      this.customQueries[filter] = value;
      this.updateState('customQueries', this.customQueries);
      this.refresh();
    }.bind(this));
  }.bind(this));
};