module.exports = function(h) {

    return (right) => {
         var that = this;
        var sortControl = require('./sort-control')(h, right);

         var headings = [];

         if (this.hasChildRow && this.opts.childRowTogglerFirst && this.opts.showChildRowToggler) headings.push(<th tabindex="0"></th>);

         this.allColumns.map(function(column) {
          headings.push(<th on-keypress={function(e){
              if (e.key==='Enter') {
                  that.orderByColumn.bind(that, column)();
              }
             }} on-click={this.orderByColumn.bind(this,column)}
            class={this.sortableClass(column)} tabindex="0">
            <span class="VueTables__heading" title={this.getHeadingTooltip(column, h)}>{this.getHeading(column, h)}</span>
            {sortControl.call(this, column)}
            </th>)
        }.bind(this))

         if (this.hasChildRow && !this.opts.childRowTogglerFirst && this.opts.showChildRowToggler) headings.push(<th tabindex="0"></th>);

         return headings;
        }
    }
