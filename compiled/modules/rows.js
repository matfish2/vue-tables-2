'use strict';

module.exports = function (h) {
  var rows = [];
  var columns;
  var rowKey = this.opts.uniqueKey;

  var rowClass;
  var data = this.source == 'client' ? this.filteredData : this.tableData;
  var recordCount = (this.Page - 1) * this.limit;

  data.map(function (row, index) {

    index = recordCount + index + 1;

    columns = [];

    if (this.hasChildRow) {
      var childRowToggler = h(
        'td',
        null,
        [h(
          'span',
          {
            on: {
              'click': this.toggleChildRow.bind(this, row[rowKey])
            },
            'class': 'VueTables__child-row-toggler ' + this.childRowTogglerClass(row[rowKey]) },
          []
        )]
      );
      if (this.opts.childRowTogglerFirst) columns.push(childRowToggler);
    }

    this.allColumns.map(function (column) {
      var rowTemplate = this.$scopedSlots && this.$scopedSlots[column];

      columns.push(h(
        'td',
        { 'class': this.columnClass(column) },
        [rowTemplate ? rowTemplate({ row: row, column: column, index: index }) : this.render(row, column, index, h)]
      ));
    }.bind(this));

    if (this.hasChildRow && !this.opts.childRowTogglerFirst) columns.push(childRowToggler);

    rowClass = this.opts.rowClassCallback ? this.opts.rowClassCallback(row) : '';

    rows.push(h(
      'tr',
      { 'class': rowClass, on: {
          'click': this.rowWasClicked.bind(this, row),
          'dblclick': this.rowWasClicked.bind(this, row)
        }
      },
      [columns, ' ']
    ));

    rows.push(this.hasChildRow && this.openChildRows.includes(row[rowKey]) ? h(
      'tr',
      { 'class': 'VueTables__child-row' },
      [h(
        'td',
        {
          attrs: { colspan: this.allColumns.length + 1 }
        },
        [this._getChildRowTemplate(h, row)]
      )]
    ) : h());
  }.bind(this));

  return rows;
};