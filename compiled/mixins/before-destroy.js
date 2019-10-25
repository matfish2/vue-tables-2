"use strict";

var _bus = _interopRequireDefault(require("../bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function () {
  var _this = this;

  var el;

  if (this.opts.destroyEventBus) {
    _bus["default"].$off();

    _bus["default"].$destroy();
  }

  if (this.vuex && !this.opts.preserveState) {
    this.$store.unregisterModule(this.name);
  }

  if (this.opts.filterByColumn) {
    this.datepickerColumns.forEach(function (column) {
      el = $(_this.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter").data('daterangepicker');
      if (el) el.remove();
    });
  }
};