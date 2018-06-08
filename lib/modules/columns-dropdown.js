var dropdownWrapper = require('./dropdown-wrapper');
var dropdownItemWrapper = require('./dropdown-item-wrapper');

module.exports = function(h) {
    
    return (classes) => {
        
        var cols = this.columns.map(column=>{
            return dropdownItemWrapper(h, classes, <a class={classes.dropdown.item} 
            href="#"  
            onClick={()=>this.toggleColumn(column)}>
            <input type="checkbox" value={column} 
            disabled={this._onlyColumn(column)}
            checked={this.allColumns.includes(column)}/>
            {this.getHeading(column)}
            </a>);
        });
        
        return <div class={`${classes.dropdown.container} ${classes.right} VueTables__columns-dropdown`}>
        <button type="button" class={`${classes.button} ${classes.dropdown.trigger}`} 
        on-click={this._toggleColumnsDropdown.bind(this)}>
        {this.display('columns')} 
        <span class={`${classes.icon} ${classes.small}`}>
            <i class={classes.dropdown.caret}></i>
        </span>
        </button>
      
        {dropdownWrapper.call(this, h, classes, cols)}
      
        </div>
    }
    
}