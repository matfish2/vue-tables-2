module.exports = function _revertVal(row, column) {
    return function () {
        row[column] = this.editing.find(e => e.id === row[this.opts.uniqueKey]).originalValue;
    }.bind(this)
}
