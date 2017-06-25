module.exports = function(source) {
return function(h) {

var rows = require('./template/rows')(h, this)
var normalFilter = require('./template/normal-filter')(h, this)
var dropdownPagination = require('./template/dropdown-pagination')(h, this)
var columnFilters = require('./template/column-filters')(h, this);
var footerHeadings = require('./template/footer-headings')(h, this);
var noResults = require('./template/no-results')(h, this);
var pagination = require('./template/pagination')(h, this);
var dropdownPaginationCount = require('./template/dropdown-pagination-count')(h, this);
var headings = require('./template/headings')(h, this);
var perPage = require('./template/per-page')(h, this);

return <div class={"VueTables VueTables--" + this.source}>
  <div class="row">
    <div class="col-md-6">
      {normalFilter}
    </div>
    <div class="col-md-6">
      {dropdownPagination}
      {perPage}
    </div>
  </div>
  <div class="table-responsive">
    <table class={'VueTables__table table ' + this.opts.skin}>
      <thead>
        <tr>
          {headings}
        </tr>
        {columnFilters}
      </thead>
      {footerHeadings}
      <tbody>
        {this.$slots.beforeBody}
        {noResults}
        {rows}
        {this.$slots.afterBody}
      </tbody>
    </table>
  </div>
  {pagination}
  {dropdownPaginationCount}
</div>
}
}
