module.exports = function(h, that) {
    
    var cols = that.columns.map(column=>{
        return <li>
        <a href="#">
        <input type="checkbox" value={column} 
               disabled={that._onlyColumn(column)}
               on-change={that.toggleColumn.bind(that, column)}
               checked={that.allColumns.includes(column)}/>
        {that.getHeading(column)}
        </a>
        </li>
    });
    
    return <div class="btn-group pull-right">
    <button type="button" class="btn btn-default dropdown-toggle" 
    on-click={that._toggleColumnsDropdown.bind(that)}>
    {that.display('columns')} <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" style={that.displayColumnsDropdown?'display:block':'display:none'}>
        {cols}
    </ul>
    </div>
}