module.exports = function (e, sendRequest = true) {
    this.limit = typeof e === 'object' ? e.target.value : e;
    this.updateState('perPage', this.limit);
    this.dispatch('limit', parseInt(this.limit));
    if (sendRequest) {
        this.setPage(1);
    }
}
