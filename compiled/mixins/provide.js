"use strict";

module.exports = function () {
  var _this = this;

  return {
    count: function count() {
      return _this.count;
    },
    rowWasClicked: this.rowWasClicked,
    render: this.render,
    opts: function opts() {
      return _this.opts;
    },
    limit: function limit() {
      return _this.limit;
    },
    setLimit: this.setLimit,
    perPageValues: function perPageValues() {
      return _this.perPageValues;
    },
    page: function page() {
      return _this.page;
    },
    id: this.id,
    theme: this.theme,
    display: this.display,
    origColumns: this.columns,
    allColumns: function allColumns() {
      return _this.allColumns;
    },
    sortableClass: this.sortableClass,
    getHeadingTooltip: this.getHeadingTooltip,
    getHeading: this.getHeading,
    sortable: this.sortable,
    sortableChevronClass: this.sortableChevronClass,
    orderByColumn: this.orderByColumn,
    filteredData: function filteredData() {
      return _this.filteredData;
    },
    tableData: function tableData() {
      return _this.tableData;
    },
    source: this.source,
    colspan: function colspan() {
      return _this.colspan;
    },
    setEditingCell: this._setEditingCell,
    revertValue: this._revertValue,
    updateValue: this._updateValue,
    editing: function editing() {
      return _this.editing;
    },
    hasChildRow: function hasChildRow() {
      return _this.hasChildRow;
    },
    getChildRowTemplate: this._getChildRowTemplate,
    openChildRows: function openChildRows() {
      return _this.openChildRows;
    },
    vuex: this.vuex,
    name: this.name,
    setPage: this.setPage,
    totalPages: function totalPages() {
      return _this.totalPages;
    },
    query: function query() {
      return _this.query;
    },
    filterable: this.filterable,
    filterType: this._filterType,
    columnClass: this.columnClass,
    search: this._search,
    getColumnName: this._getColumnName,
    onlyColumn: this._onlyColumn,
    toggleColumn: this.toggleColumn,
    toggleColumnsDropdown: this._toggleColumnsDropdown,
    displayColumnsDropdown: function displayColumnsDropdown() {
      return _this.displayColumnsDropdown;
    },
    childRowTogglerClass: this.childRowTogglerClass,
    toggleChildRow: this.toggleChildRow,
    componentsOverride: this.componentsOverride,
    getValue: this._getValue,
    cellClasses: this._cellClasses,
    toggleGroup: this.toggleGroup,
    groupToggleIcon: this.groupToggleIcon,
    getGroupSlot: this.getGroupSlot,
    toggleGroupDirection: this._toggleGroupDirection,
    collapsedGroups: function collapsedGroups() {
      return _this.collapsedGroups;
    },
    userMultiSorting: function userMultiSorting() {
      return _this.userMultiSorting;
    },
    hasMultiSort: this.hasMultiSort,
    orderBy: function orderBy() {
      return _this.orderBy;
    },
    isListFilter: this.isListFilter,
    optionText: this.optionText,
    dateFormat: this.dateFormat,
    formatDate: this.formatDate,
    tabIndex: function tabIndex() {
      return _this.tabIndex;
    }
  };
};