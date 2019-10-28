module.exports = function (column, row) {

    if (!this.opts.cellClasses[column]) return '';

    return this.opts.cellClasses[column]
        .filter(item => item.condition(row))
        .map(item => item.class)
        .join(' ');
}
