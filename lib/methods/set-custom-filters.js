module.exports = function (filters, sendRequest = true) {
    for (var key in filters) {
        this.customQueries[key] = filters[key]
    }

    this.updateState('customQueries', this.customQueries);

    if (this.source === 'server' && sendRequest) {
        this.getData()
    }
}
