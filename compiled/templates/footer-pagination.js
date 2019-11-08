"use strict";

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (h, modules, classes, slots) {
  var filterId = 'VueTables__search_' + this.id;
  var perpageId = 'VueTables__limit_' + this.id;

  var perpageValues = require('../modules/per-page-values').call(this, h);

  var caption = this.opts.caption ? h("caption", [this.opts.caption]) : '';
  var genericFilter = this.hasGenericFilter ? h("div", {
    "class": "VueTables__search-field"
  }, [h("label", {
    attrs: {
      "for": filterId
    },
    "class": classes.label
  }, [this.display('filter')]), modules.normalFilter(classes, filterId)]) : '';
  var perpage = perpageValues.length > 1 ? h("div", {
    "class": "VueTables__limit-field"
  }, [h("label", {
    "class": classes.label,
    attrs: {
      "for": perpageId
    }
  }, [this.display('limit')]), modules.perPage(perpageValues, classes.select, perpageId)]) : '';
  var columnsDropdown = this.opts.columnsDropdown ? h("div", {
    "class": "VueTables__columns-dropdown-wrapper"
  }, [modules.columnsDropdown(classes)]) : '';
  var shouldShowTop = genericFilter || perpage || columnsDropdown || slots.beforeFilter || slots.afterFilter || slots.beforeLimit || slots.afterLimit;
  var tableTop = h("div", {
    "class": classes.row,
    directives: [{
      name: "show",
      value: shouldShowTop
    }]
  }, [h("div", {
    "class": classes.column
  }, [h("div", {
    "class": "".concat(classes.field, " ").concat(classes.inline, " ").concat(classes.left, " VueTables__search")
  }, [slots.beforeFilter, genericFilter, slots.afterFilter]), slots.afterFilterWrapper, h("div", {
    "class": "".concat(classes.field, " ").concat(classes.inline, " ").concat(classes.right, " VueTables__limit")
  }, [slots.beforeLimit, perpage, slots.afterLimit]), columnsDropdown])]);
  return h("div", {
    "class": "VueTables VueTables--" + this.source
  }, [tableTop, slots.beforeTable, h("div", {
    "class": "table-responsive"
  }, [h("table", {
    "class": "VueTables__table ".concat(this.opts.skin ? this.opts.skin : classes.table),
    attrs: {
      summary: this.opts.summary
    }
  }, [caption, h("thead", [slots.prependHead, h("tr", [modules.headings(classes.right)]), slots.beforeFilters, modules.columnFilters(classes), slots.afterFilters]), h("tfoot", [h("tr", [h("td", {
    attrs: {
      colspan: this.colspan
    }
  }, [modules.pagination((0, _merge["default"])(classes.pagination, {
    list: "".concat(classes.pagination.list, " ").concat(classes.right, " ").concat(classes.nomargin),
    count: "".concat(classes.left)
  }))])])]), slots.beforeBody, h("tbody", [slots.prependBody, modules.rows(classes), slots.appendBody]), slots.afterBody])]), slots.afterTable]);
};