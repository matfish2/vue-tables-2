'use strict';

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (event, payload) {

    if (this.vuex) {
        if (event.split('::').length > 1) return;
        this.commit(event.toUpperCase().replace('-', '_'), payload);
    }

    var name = 'vue-tables.';
    if (this.name) name += this.name + ".";
    name += event;

    _bus2.default.$emit(name, payload);
    this.$emit(event, payload);
};