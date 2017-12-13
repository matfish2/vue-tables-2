module.exports = function(h, that) {
    
    var columns = that.columns.map(column=>{
        return <li>
        <a href="#">
        <input type="checkbox" value={column} 
               on-change={that.toggleColumn.bind(that, column)}
               checked={that.allColumns.includes(column)}/>
        {that.getHeading(column)}
        </a>
        </li>
    });
    
    return <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {that.display('columns')} <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
        {columns}
    </ul>
    </div>
}