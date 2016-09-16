var bus = require('../bus');

module.exports = function(row) {
  bus.$emit('vue-tables.row-click', row);
}
