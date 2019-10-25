"use strict";

var _bus = _interopRequireDefault(require("../bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function () {
  var _this = this;

  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;
  this.opts.customFilters.forEach(function (filter) {
    _bus["default"].$off("".concat(event, ".filter::").concat(filter.name));

    _bus["default"].$on("".concat(event, ".filter::").concat(filter.name), function (value) {
      _this.customQueries[filter.name] = value;

      _this.updateState('customQueries', _this.customQueries);
    });
  });
};