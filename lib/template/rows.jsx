module.exports = function(h, that) {
    var rows = [];
    var columns;

    var data = that.source=='client'?that.filteredData:that.tableData;

    data.map(function(row) {
      columns = [];

      that.allColumns.map(function(column) {
          columns.push(<td>
            {that.render(row, column, h)}
        </td>)
      }.bind(that))

      rows.push(<tr on-click={that.rowWasClicked.bind(that, row)}>{columns} </tr>)
    }.bind(that))

    return rows;

}

