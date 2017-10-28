module.exports = function(h, that) {
    var rows = [];
    var columns;
    var rowKey = that.opts.uniqueKey;

    var rowClass;
    var data = that.source=='client'?that.filteredData:that.tableData;
    var recordCount = (that.Page-1) * that.limit;

    data.map(function(row, index) {
      
      index = recordCount + index + 1;

      columns = [];

      if (that.hasChildRow) {
        var childRowToggler = <td><span on-click={that.toggleChildRow.bind(that,row[rowKey])} class={`VueTables__child-row-toggler ` + that.childRowTogglerClass(row[rowKey])}></span></td>;
        if (that.opts.childRowTogglerFirst) columns.push(childRowToggler);
      }


      that.allColumns.map(function(column) {
          let rowTemplate = that.$scopedSlots && that.$scopedSlots[column];

          columns.push(<td class={that.columnClass(column)}>
            {rowTemplate ? rowTemplate({ row, column, index }) : that.render(row, column, index, h)}
        </td>)
      }.bind(that));

      if (that.hasChildRow && !that.opts.childRowTogglerFirst) columns.push(childRowToggler);

      rowClass = that.opts.rowClassCallback?that.opts.rowClassCallback(row):'';

      rows.push(<tr class={rowClass} on-click={that.rowWasClicked.bind(that, row)} on-dblclick={that.rowWasClicked.bind(that, row)}>{columns} </tr>);

      if (that.hasChildRow && this.rowsToggleState['row_' + row[rowKey]]) {

        let template = this._getChildRowTemplate(h, row);

        rows.push(<tr class='VueTables__child-row'><td colspan={that.allColumns.length+1}>{template}</td></tr>);
      }

    }.bind(that))

    return rows;

}

