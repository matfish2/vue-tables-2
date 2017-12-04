var methods = require('./mixins/methods');
var computed = require('./mixins/computed');
var directives = require('./mixins/directives');
var beforeDestroy = require('./mixins/before-destroy');

export default function() {
  return {methods, computed, directives, beforeDestroy}
}
