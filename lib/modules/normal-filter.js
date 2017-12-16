var debounce = require('debounce');

module.exports = function(h) {
    var id = 'VueTables__search_' + this.id;
    var search = this.source=='client'?
                this.search.bind(this, this.data):
                this.serverSearch.bind(this);
    
    return <input class="form-control"
    type="text"
    value={this.query}
    placeholder={this.display('filterPlaceholder')}
    on-keyup={debounce(search, this.opts.debounce)}
    id={id}
    />
}