var debounce = require('debounce');

module.exports = function(h) {

    return (classes, id) => {

        var search = this.source=='client'?
                    this.search.bind(this, this.data):
                    this.serverSearch.bind(this);

        return <input class={`VueTables__search__input ${classes.input} ${classes.small}`}
        type="text"
        placeholder={this.display('filterPlaceholder')}
        on-keyup={this.opts.debounce?debounce(search, this.opts.debounce):search}
<<<<<<< HEAD
        id={`VueTables__search_${props.id}`}
=======
        id={id}
        autocomplete="off"
>>>>>>> master
        />
    }

}
