module.exports = function(h, dropdownPagiantion) {

    if (this.opts.pagination && this.opts.pagination.dropdown) {
      
    var id = 'VueTables__dropdown-pagination_' + this.id;
    return <div class="form-group form-inline pull-right VueTables__dropdown-pagination"
                v-show={this.totalPages>1}
                >
    <label for={id}>{this.display('page')}</label>
    {dropdownPagiantion}
    </div>
    }

    return '';

}
