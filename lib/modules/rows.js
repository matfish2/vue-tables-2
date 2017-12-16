module.exports = function(h) {
    var rows = [];
    var columns;
    var rowKey = this.opts.uniqueKey;
    
    var rowClass;
    var data = this.source=='client'?this.filteredData:this.tableData;
    var recordCount = (this.Page-1) * this.limit;
    
    data.map(function(row, index) {
      
      index = recordCount + index + 1;
      
      columns = [];
      
      if (this.hasChildRow) {
        var childRowToggler = <td><span on-click={this.toggleChildRow.bind(this,row[rowKey])} class={`VueTables__child-row-toggler ` + this.childRowTogglerClass(row[rowKey])}></span></td>;
        if (this.opts.childRowTogglerFirst) columns.push(childRowToggler);
      }
      
      
      this.allColumns.map(function(column) {
        let rowTemplate = this.$scopedSlots && this.$scopedSlots[column];
        
        columns.push(<td class={this.columnClass(column)}>
        {rowTemplate ? rowTemplate({ row, column, index }) : this.render(row, column, index, h)}
        </td>)
      }.bind(this));
      
      if (this.hasChildRow && !this.opts.childRowTogglerFirst) columns.push(childRowToggler);
      
      rowClass = this.opts.rowClassCallback?this.opts.rowClassCallback(row):'';
      
      rows.push(<tr class={rowClass} on-click={this.rowWasClicked.bind(this, row)} on-dblclick={this.rowWasClicked.bind(this, row)}>{columns} </tr>);
      
      rows.push(this.hasChildRow && this.openChildRows.includes(row[rowKey])?
      <tr class='VueTables__child-row'><td colspan={this.allColumns.length+1}>{this._getChildRowTemplate(h, row)}</td></tr>:h());
      
    }.bind(this))
    
    return rows;
    
  }
  
  