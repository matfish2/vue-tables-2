module.exports = function (promiseOnly, additionalData = {}, emitLoading = true) {

    if (!this.opts.sendInitialRequest && !this.initialRequestSent) {
        this.initialRequestSent = true;
        this.loading = true;
    }

    var data = this.opts.requestAdapter(this.getRequestParams(additionalData));

    if (emitLoading) {
        this.dispatch('loading', data);
    }

    var promise = this.sendRequest(data);

    if (promiseOnly) return promise;

    return promise.then(function (response) {
        if (typeof response !== 'undefined') {
            this.loading = false;
            return this.setData(response);
        } else {
            return false;
        }
    }.bind(this));


}
