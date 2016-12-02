module.exports = function(h, that) {
    var rows = [];
    var columns;

    var data = that.source=='client'?that.filteredData:that.tableData;

    data.map(function(row, index) {
      columns = [];

      if (that.opts.childRow)
       columns.push(<td><span on-click={that.toggleChildRow.bind(that,row.id)} class={`VueTables__child-row-toggler ` + that.childRowTogglerClass(row.id)}></span></td>);

      that.allColumns.map(function(column) {
          columns.push(<td>
            {that.render(row, column, h)}
        </td>)
      }.bind(that))

      rows.push(<tr on-click={that.rowWasClicked.bind(that, row)}>{columns} </tr>);

      if (that.opts.childRow)
        rows.push(<tr class={`VueTables__child-row ` + that.childRowClass(row.id)}><td colspan={that.allColumns.length+1}>{that.opts.childRow.apply(that, [h, row])}</td></tr>);

    }.bind(that))

    return rows;

}

