'use strict';

module.exports = function (h) {
  var _this = this;

  return function (classes) {

    var data;

    if (_this.source === 'client') {
      data = _this.filteredData;

      if (!data.length && _this.source === 'client' && _this.page !== 1) {
        // data was dynamically removed go to last page
        _this.setPage(_this.totalPages ? _this.totalPages : 1);
      }
    } else {
      data = _this.tableData;
    }

    if (_this.count === 0) {

      var colspan = _this.allColumns.length;
      if (_this.hasChildRow) colspan++;

      return h(
        'tr',
        { 'class': 'VueTables__no-results' },
        [h(
          'td',
          { 'class': 'text-center',
            attrs: { colspan: _this.colspan }
          },
          [_this.display(_this.loading ? 'loading' : 'noResults')]
        )]
      );
    }

    var rows = [];
    var columns;
    var rowKey = _this.opts.uniqueKey;

    var rowClass;
    var recordCount = (_this.Page - 1) * _this.limit;
    var currentGroup;
    var groupSlot;
    var groupValue;
    var groupByContent;

    data.map(function (row, index) {

      if (_this.opts.groupBy && _this.source === 'client' && row[_this.opts.groupBy] !== currentGroup) {
        groupSlot = _this.getGroupSlot(row[_this.opts.groupBy]);
        groupValue = row[_this.opts.groupBy];

        groupByContent = _this.opts.toggleGroups ? h(
          'button',
          { 'class': classes.button, on: {
              'click': _this.toggleGroup.bind(_this, groupValue)
            }
          },
          [groupValue, h('span', { 'class': _this.groupToggleIcon(groupValue) })]
        ) : groupValue;

        rows.push(h(
          'tr',
          { 'class': classes.groupTr, on: {
              'click': _this._toggleGroupDirection.bind(_this)
            }
          },
          [h(
            'td',
            {
              attrs: { colspan: _this.colspan }
            },
            [groupByContent, groupSlot]
          )]
        ));
        currentGroup = row[_this.opts.groupBy];
      }

      if (_this.opts.toggleGroups && _this.collapsedGroups.includes(currentGroup)) {
        return;
      }

      index = recordCount + index + 1;

      columns = [];

      if (_this.hasChildRow) {
        var childRowToggler = h('td', {class: "_toggler"},[h('span', {
          on: {
            'click': _this.toggleChildRow.bind(_this, row[rowKey])
          },
          'class': 'VueTables__child-row-toggler ' + _this.childRowTogglerClass(row[rowKey]) })]);
        if (_this.opts.childRowTogglerFirst) columns.push(childRowToggler);
      }

      _this.allColumns.map(function (column) {
        var rowTemplate = _this.$scopedSlots && _this.$scopedSlots[column];

        columns.push(h(
          'td',
          { 'class': _this.columnClass(column) },
          [rowTemplate ? rowTemplate({ row: row, column: column, index: index }) : _this.render(row, column, index, h)]
        ));
      });

      if (_this.hasChildRow && !_this.opts.childRowTogglerFirst) columns.push(childRowToggler);

      rowClass = _this.opts.rowClassCallback ? _this.opts.rowClassCallback(row) : '';

      rows.push(h(
        'tr',
        { 'class': rowClass, on: {
            'click': _this.rowWasClicked.bind(_this, row),
            'dblclick': _this.rowWasClicked.bind(_this, row)
          }
        },
        [columns, ' ']
      ));

      rows.push(_this.hasChildRow && _this.openChildRows.includes(row[rowKey]) ? h(
        'tr',
        { 'class': 'VueTables__child-row' },
        [h(
          'td',
          {
            attrs: { colspan: _this.colspan }
          },
          [_this._getChildRowTemplate(h, row)]
        )]
      ) : h());
    });

    return rows;
  };
};