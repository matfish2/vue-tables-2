'use strict';

module.exports = function (h, that) {
  var rows = [];
  var columns;
  var rowKey = that.opts.uniqueKey;

  var rowClass;
  var data = that.source == 'client' ? that.filteredData : that.tableData;

  data.map(function (row, index) {
    columns = [];

    if (that.hasChildRow) columns.push(h(
      'td',
      null,
      [h(
        'span',
        {
          on: {
            'click': that.toggleChildRow.bind(that, row[rowKey])
          },
          'class': 'VueTables__child-row-toggler ' + that.childRowTogglerClass(row[rowKey]) },
        []
      )]
    ));

    that.allColumns.map(function (column) {
      var rowTemplate = that.$scopedSlots && that.$scopedSlots[column];

      columns.push(h(
        'td',
        { 'class': that.columnClass(column) },
        [rowTemplate ? rowTemplate({ row: row, column: column, index: index }) : that.render(row, column, h)]
      ));
    }.bind(that));

    rowClass = that.opts.rowClassCallback ? that.opts.rowClassCallback(row) : '';

    rows.push(h(
      'tr',
      { 'class': rowClass, on: {
          'click': that.rowWasClicked.bind(that, row),
          'dblclick': that.rowWasClicked.bind(that, row)
        }
      },
      [columns, ' ']
    ));

    if (that.hasChildRow && this.rowsToggleState['row_' + row[rowKey]]) {

      var template = this._getChildRowTemplate(h, row);

      rows.push(h(
        'tr',
        { 'class': 'VueTables__child-row' },
        [h(
          'td',
          {
            attrs: { colspan: that.allColumns.length + 1 }
          },
          [template]
        )]
      ));
    }
  }.bind(that));

  return rows;
};