module.exports = function(h) {
    
     var sortControl = require('./sort-control')(h);
    
     var headings = [];
    
     if (this.hasChildRow && this.opts.childRowTogglerFirst) headings.push(<th></th>);
    
     this.allColumns.map(function(column) {
      headings.push(<th on-click={this.orderByColumn.bind(this,column)}
        class={this.sortableClass(column)}>
        <span class="VueTables__heading" title={this.getHeadingTooltip(column, h)}>{this.getHeading(column, h)}</span>
        {sortControl(column)}
        </th>)
    }.bind(this))
    
     if (this.hasChildRow && !this.opts.childRowTogglerFirst) headings.push(<th></th>);
    
     return headings;
    }
    