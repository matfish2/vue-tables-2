var methods = require('./mixins/methods');
var computed = require('./mixins/computed');
var directives = require('./mixins/directives');

export default function() {
  return {methods, computed, directives}
}
