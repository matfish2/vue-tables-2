module.exports = function () {
    var perpageValues = [];

    this.opts.perPageValues.every(value => {
        var isLastEntry = value >= this.count;
        perpageValues.push(value)
        return !isLastEntry;
    });

    return perpageValues;
}
