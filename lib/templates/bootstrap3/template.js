module.exports = function(h, modules) {
  
  var normalFilter = require('./modules/normal-filter');
  var dropdownPagination = require('./modules/dropdown-pagination');
  var footerHeadings = require('./modules/footer-headings');
  var noResults = require('./modules/no-results');
  var pagination = require('./modules/pagination');
  var dropdownPaginationCount = require('./modules/dropdown-pagination-count');
  var perPage = require('./modules/per-page');

  var beforeFilters = this.$slots.beforeFilters?this.$slots.beforeFilters:'';
    var afterFilters = this.$slots.afterFilters?this.$slots.afterFilters:'';
    var beforeBody = this.$slots.beforeBody?this.$slots.beforeBody:''; 
    var prependBody = this.$slots.prependBody?this.$slots.prependBody:''; 
    var appendBody = this.$slots.appendBody?this.$slots.appendBody:''; 
    var afterBody = this.$slots.afterBody?this.$slots.afterBody:''; 
    var beforeTable = this.$slots.beforeTable?this.$slots.beforeTable:''; 
    
    
    var prependFilterContainer = this.$slots.prependFilterContainer?this.$slots.prependFilterContainer:'';     
    var appendFilterContainer = this.$slots.appendFilterContainer?this.$slots.appendFilterContainer:''; 
   
    var prependLimitContainer = this.$slots.prependLimitContainer?this.$slots.prependLimitContainer:''; 
    var appendLimitContainer = this.$slots.appendLimitContainer?this.$slots.appendLimitContainer:''; 
    
    return <div class={"VueTables VueTables--" + this.source}>
    <div class="row">
    <div class="col-md-6 VueTables__search-wrapper">
    {prependFilterContainer}
    {normalFilter(modules.normalFilter)}
    {appendFilterContainer}
    </div>
    </div>
    </div>
    
  }

