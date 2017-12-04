'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return { methods: methods, computed: computed, directives: directives, beforeDestroy: beforeDestroy };
};

var methods = require('./mixins/methods');
var computed = require('./mixins/computed');
var directives = require('./mixins/directives');
var beforeDestroy = require('./mixins/before-destroy');