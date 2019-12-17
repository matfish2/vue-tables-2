"use strict";

module.exports = function (props) {
  return props.override ? h(props.override, {
    attrs: {
      props: props
    }
  }) : h("div", {
    "class": "VueTables VueTables--" + props.source
  }, [h("div", {
    "class": props.theme.row
  }, [h("div", {
    "class": props.theme.column
  }, [!props.opts.filterByColumn && props.opts.filterable ? h("div", {
    "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.left, " VueTables__search")
  }, [props.slots.beforeFilter, h("vt-generic-filter"), props.slots.afterFilter]) : '', props.slots.afterFilterWrapper, props.perPageValues.length > 1 ? h("div", {
    "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__limit")
  }, [props.slots.beforeLimit, h("vt-per-page-selector"), props.slots.afterLimit]) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? h("div", {
    "class": "VueTables__pagination-wrapper"
  }, [h("div", {
    "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__dropdown-pagination")
  }, [h("vt-dropdown-pagination")])]) : '', props.opts.columnsDropdown ? h("div", {
    "class": "VueTables__columns-dropdown-wrapper ".concat(props.theme.right, " ").concat(props.theme.dropdown.container)
  }, [h("vt-columns-dropdown")]) : ''])]), props.slots.beforeTable, h("div", {
    "class": "table-responsive"
  }, [h("vt-table", {
    ref: "vt_table"
  })]), props.slots.afterTable, h("vt-pagination")]);
};