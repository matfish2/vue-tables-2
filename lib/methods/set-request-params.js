module.exports = function (params = {}, sendRequest = true) {
    if (params.page) {
        this.setPage(params.page, true)
    }

    if (params.limit) {
        this.setLimit(params.limit, false)
    }

    if (params.order) {
        this.setOrder(params.order.column, params.order.ascending, false)
    }

    if (params.filters) {
        this.setFilter(params.filters, false)
    }

    if (params.customFilters) {
        this.setCustomFilters(params.customFilters, false)
    }

    if (sendRequest) {
        this.getData()
    }
}
