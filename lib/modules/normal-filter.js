var debounce = require('debounce');

module.exports = function(h) {

    return (classes, id) => {

        var search = this.source=='client'?
                    this.search.bind(this, this.data):
                    this.serverSearch.bind(this);
        
        return <input class={`${classes.input} ${classes.small}`}
        type="text"
        value={this.query}
        placeholder={this.display('filterPlaceholder')}
        on-keyup={debounce(search, this.opts.debounce)}
        id={id}
        />
    }
   
}