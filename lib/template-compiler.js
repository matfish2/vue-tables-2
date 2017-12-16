module.exports = function(template) {

    var templates = {
        bootstrap3: require('./templates/bootstrap3/template')
    };

    var modules = {
     rows: require('./modules/rows'),
     normalFilter: require('./modules/normal-filter'),
     dropdownPagination: require('./modules/dropdown-pagination'),
     columnFilters: require('./modules/column-filters'),
     noResults: require('./modules/no-results'),
     pagination: require('./modules/pagination'),
     dropdownPaginationCount: require('./modules/dropdown-pagination-count'),
     headings: require('./modules/headings'),
     perPage: require('./modules/per-page'),
     columnsDropdown: require('./modules/columns-dropdown')
    }

    return function(h) {
        return templates[template].call(this, h, modules);
    }
}