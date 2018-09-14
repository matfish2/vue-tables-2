'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (template, theme) {

    var themes = {
        bootstrap3: require('./themes/bootstrap3')(),
        bootstrap4: require('./themes/bootstrap4')(),
        bulma: require('./themes/bulma')(),
        semanticui: require('./themes/semanticui')()
    };

    var templates = {
        default: require('./templates/default'),
        footerPagination: require('./templates/footer-pagination')
    };

    return function (h) {

        var modules = {
            rows: require('./modules/rows').call(this, h),
            normalFilter: require('./modules/normal-filter').call(this, h),
            dropdownPagination: require('./modules/dropdown-pagination').call(this, h),
            dropdownPaginationCount: require('./modules/dropdown-pagination-count').call(this, h),
            columnFilters: require('./modules/column-filters').call(this, h),
            pagination: require('./modules/pagination').call(this, h),
            headings: require('./modules/headings').call(this, h),
            perPage: require('./modules/per-page').call(this, h),
            columnsDropdown: require('./modules/columns-dropdown').call(this, h)
        };

        if (typeof template === 'string' && (!templates[template] || typeof templates[template] !== 'function')) {
            throw 'vue-tables-2: Template "' + template + '" does not exist';
        }

        if (typeof theme === 'string' && (!themes[theme] || _typeof(themes[theme]) !== 'object')) {
            throw 'vue-tables-2: Theme "' + theme + '" does not exist';
        }

        var tpl = typeof template === 'string' ? templates[template] : template;
        var thm = typeof theme === 'string' ? themes[theme] : theme();
        var slots = require('./slots').call(this);

        return tpl.call(this, h, modules, thm, slots);
    };
};