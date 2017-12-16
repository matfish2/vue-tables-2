var debounce = require('debounce');

module.exports = function(h) {

    var id = 'VueTables__dropdown-pagination_' + this.id;
    
    var pages = [];
    var selected;

    for (var pag=1; pag<=this.totalPages; pag++) {
      var selected = this.page==pag;
      pages.push(<option value={pag} selected={selected}>{pag}</option>)
    }
    return <select class="form-control dropdown-pagination"
    v-show={this.totalPages>1}
    name="page"
    ref="page"
    value={this.page}
    on-change={this.setPage.bind(this, null, false)}
    id={id}
    >
    {pages}
    </select>
}