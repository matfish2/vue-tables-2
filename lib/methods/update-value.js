var clone = require('lodash.clonedeep')

module.exports = function _updateValue (row, column) {
            return function (e) {
                var oldVal = row[column];

                row[column] = getValue(e);

                var data = clone(this.data).map(r => {
                    if (r[this.opts.uniqueKey] === row[this.opts.uniqueKey]) {
                        return row;
                    }

                    return r;
                });

                this.dispatch('input', data);
                this.dispatch('update', {row, column, oldVal, newVal: row[column]})
            }.bind(this)
        }

        function getValue(val) {
            if (val.target) {
                return val.target.type === 'checkbox' ? val.target.checked : val.target.value;
            }

            return val;
        }
