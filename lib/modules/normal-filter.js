var debounce = require('debounce');

module.exports = function(h) {

    return (classes, id) => {

        var search = this.source=='client'?
                    this.search.bind(this, this.data):
                    this.serverSearch.bind(this);

        return <input class={`VueTables__search__input ${classes.input} ${classes.small}`}
        type="text"
        value={this.query}
        placeholder={this.display('filterPlaceholder')}
        on-keyup={this.opts.debounce?debounce(search, this.opts.debounce):search}
        id={`VueTables__search_${props.id}`}
        />
    }

}
