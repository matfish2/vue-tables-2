var bus = require('../bus');

module.exports = function(row) {
  bus.$emit('row-click', row);
}
