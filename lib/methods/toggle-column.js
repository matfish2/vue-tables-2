module.exports = function(column) {
    if (!this.userColumnsDisplay.length || this.userColumnsDisplay.includes(column)) {
        var index = this.userColumnsDisplay.indexOf(column);
        this.userColumnsDisplay.splice(index, 1);
    } else {
        this.userColumnsDisplay.push(column);
    }
}