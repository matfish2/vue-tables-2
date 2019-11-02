module.exports = function _setEditingCell(row, column) {
    return function (editing) {
        if (editing) {
            this.editing.push({
                id: row[this.opts.uniqueKey],
                column,
                originalValue: row[column]
            });
        } else {
            this.editing = this.editing.filter(e => e.id !== row[this.opts.uniqueKey]);
        }
    }.bind(this)
}
