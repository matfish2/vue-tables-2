import clone from 'clone';

module.exports = function(h) {

  return (classes) => {

    var data;

    if (this.source==='client') {
      data = this.filteredData;

      if (!data.length && this.source==='client' && this.page!==1) { // data was dynamically removed go to last page
        this.setPage(this.totalPages?this.totalPages:1);
      }

    } else {
      data = this.tableData;
    }

    if (data.length===0) {

      let colspan = this.allColumns.length;
      if (this.hasChildRow && this.opts.showChildRowToggler) colspan++;

      return <tr class="VueTables__no-results">
      <td class="text-center" tabindex="0"
      colspan={this.colspan}>
      {this.display(this.loading?'loading':'noResults')}
      </td>
      </tr>
    }

    var rows = [];
    var columns;
    var rowKey = this.opts.uniqueKey;

    var rowAttributes;
    var rowClass;
    var recordCount = (this.Page-1) * this.limit;
    var currentGroup;
    var groupSlot;
    var groupValue;
    var groupByContent;

    data.map((row, index) => {

      if (this.opts.groupBy && this.source==='client' && row[this.opts.groupBy]!==currentGroup) {
          groupSlot = this.getGroupSlot(row[this.opts.groupBy]);
          groupValue = row[this.opts.groupBy];

          groupByContent = this.opts.toggleGroups?
          <button class={classes.button} on-click={this.toggleGroup.bind(this, groupValue)}>{groupValue}<span class={this.groupToggleIcon(groupValue)}></span></button>
          :groupValue;

          rows.push(<tr class={classes.groupTr} on-click={this._toggleGroupDirection.bind(this)}><td colspan={this.colspan}>{groupByContent}{groupSlot}</td></tr>);
          currentGroup = row[this.opts.groupBy];
      }

      if (this.opts.toggleGroups && this.collapsedGroups.includes(currentGroup)) {
        return;
      }

      index = recordCount + index + 1;

      columns = [];
      var update;
      var isEditing;
      var setEditing;
      var revertValue;

      if (this.hasChildRow && this.opts.showChildRowToggler) {
        var childRowToggler = <td tabindex="0" on-keypress={(e) => {
          if (e.key==='Enter') {
            this.toggleChildRow.bind(this,row[rowKey])();
          }
          }} on-click={this.toggleChildRow.bind(this,row[rowKey])}><span class={`VueTables__child-row-toggler ` + this.childRowTogglerClass(row[rowKey])}></span></td>;
        if (this.opts.childRowTogglerFirst) columns.push(childRowToggler);
      }


      this.allColumns.map(column => {
        let rowTemplate = this.$scopedSlots && this.$scopedSlots[column];

        if (rowTemplate) {
            var rowTemplateData = { row, column, index };
        }

        if (this.opts.editableColumns.includes(column)) {
            rowTemplateData.update = updateValue(row, column).bind(this);
            rowTemplateData.isEditing = editing(row, column).bind(this);
            rowTemplateData.setEditing = setEdit(row, column).bind(this);
            rowTemplateData.revertValue = revertVal(row, column).bind(this);
        }

        columns.push(<td class={`${this.columnClass(column)} ${this._cellClasses(column, row)}`.trim()} tabindex="0">
        {rowTemplate ? rowTemplate(rowTemplateData) : this.render(row, column, index, h)}
        </td>)
      });

      if (this.hasChildRow && !this.opts.childRowTogglerFirst && this.opts.showChildRowToggler) columns.push(childRowToggler);

      rowClass = this.opts.rowClassCallback?this.opts.rowClassCallback(row):'';
      rowAttributes = this.opts.rowAttributesCallback?this.opts.rowAttributesCallback(row):{};

      rows.push(<tr {...{attrs: rowAttributes}} class={`VueTables__row ${rowClass}`} on-click={this.rowWasClicked.bind(this, row, index)}>{columns} </tr>);

      rows.push(this.hasChildRow && this.openChildRows.includes(row[rowKey])?

      <tr class={`VueTables__child-row ${rowClass}`}><td colspan={this.colspan} tabindex="0">{this._getChildRowTemplate(h, row, index)}</td></tr>:h());

    });

    return rows;

  }
}

function setEdit(row, column) {
    return function (editing) {
        if (editing) {
            this.editing.push({
                id: row[this.opts.uniqueKey],
                column,
                originalValue: row[column]
            });
        } else {
            this.editing = this.editing.filter(e => e.id !== row[this.opts.uniqueKey]);
        }
    }
}

function editing(row, column) {
    return function () {
        return this.editing.find(e => e.id === row[this.opts.uniqueKey] && e.column === column);
    }
}

function revertVal(row, column) {
    return function() {
        var origVal = this.editing.find(e=>e.id===row[this.opts.uniqueKey]).originalValue;

        row[column] = origVal;
    }
}

function updateValue(row, column) {
    return function(e) {
      var oldVal = row[column];

      row[column] = getValue(e);

      var data = clone(this.data).map(r=>{
        if (r[this.opts.uniqueKey]===row[this.opts.uniqueKey]) {
          return row;
        }

        return r;
      });

      this.$emit('input', data);
      this.$emit('update', {row, column, oldVal, newVal: row[column]})
    }
}

function getValue(val) {
    if (val.target) {
        return val.target.type==='checkbox' ? val.target.checked : val.target.value;
    }

    return val;
}
