var merge = require('merge');

module.exports = function (additionalData = {}) {
    var keys = this.opts.requestKeys;

    var data = {
        [keys.query]: this.filteredQuery,
        [keys.limit]: this.limit,
        [keys.ascending]: this.orderBy.ascending ? 1 : 0,
        [keys.page]: parseInt(this.page),
        [keys.byColumn]: this.opts.filterByColumn ? 1 : 0
    };


    if (this.orderBy.hasOwnProperty('column') && this.orderBy.column)
        data[keys.orderBy] = this.orderBy.column;

    data = merge(data, this.opts.params, this.customQueries, additionalData);

    if (this.hasMultiSort && this.orderBy.column && this.userMultiSorting[this.orderBy.column]) {
        data.multiSort = this.userMultiSorting[this.orderBy.column];
    }

    return data
}
