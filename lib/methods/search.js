import debounce from 'debounce'

module.exports = function (debounceVal) {

    var search = this.source === 'client' ?
        this.search.bind(this, this.data) :
        this.serverSearch.bind(this);

    if (!debounceVal) {
        return search;
    }

    var debouncedSearch = debounce(search, debounceVal);

    return function (e) {
        if (e.keyCode === 13) {
            debouncedSearch.clear();
            search(...arguments);
        } else {
            debouncedSearch(...arguments);
        }
    };
}
