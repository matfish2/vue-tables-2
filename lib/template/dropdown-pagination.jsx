module.exports = function(h, that) {

    if (that.opts.pagination && that.opts.pagination.dropdown) {

    var pages = [];
    var selected;

    for (var pag=1; pag<=that.totalPages; pag++) {
      var selected = that.page==pag;
      pages.push(<option value={pag} selected={selected}>{pag}</option>)
    }

    return <div class="form-group form-inline pull-right VueTables__dropdown-pagination"
                v-show={that.totalPages>1}
                >
    <label>{that.display('page')}</label>
    <select class="form-control"
    name="page"
    value={that.page}
    on-change={that.setPage.bind(that, null, null)}
    >
    {pages}
    </select>
    </div>
    }

    return '';

}
