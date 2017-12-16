module.exports = function(h) {
    
    if (!this.opts.columnsDropdown) return '';

    var cols = this.columns.map(column=>{
        return <li>
        <a href="#">
        <input type="checkbox" value={column} 
               disabled={this._onlyColumn(column)}
               on-change={this.toggleColumn.bind(this, column)}
               checked={this.allColumns.includes(column)}/>
        {this.getHeading(column)}
        </a>
        </li>
    });
    
    return <div class="btn-group pull-right VueTables__columns-dropdown">
    <button type="button" class="btn btn-default dropdown-toggle" 
    on-click={this._toggleColumnsDropdown.bind(this)}>
    {this.display('columns')} <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" style={this.displayColumnsDropdown?'display:block':'display:none'}>
        {cols}
    </ul>
    </div>
}