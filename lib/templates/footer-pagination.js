import merge from 'merge';

module.exports = function(h, modules, classes, slots) {
  
  var filterId = 'VueTables__search_' + this.id;  
  var perpageId = 'VueTables__limit_' + this.id;
  var perpageValues = require('../modules/per-page-values').call(this,h);

  var genericFilter = this.hasGenericFilter?
  <div class="VueTables__search-field">
  <label for={filterId} class={classes.label}>{this.display('filter')}</label>
  {modules.normalFilter(classes, filterId)}
  </div>:'';

  var perpage =  perpageValues.length>1?<div class="VueTables__limit-field">
  <label class={classes.label} for={perpageId}>{this.display('limit')}</label>
  {modules.perPage(perpageValues, classes.select, perpageId)}
  </div>:'';
  
  var columnsDropdown = this.opts.columnsDropdown?
  <div class="VueTables__columns-dropdown-wrapper">
  {modules.columnsDropdown(classes)}
  </div>:'';

var tableTop = (genericFilter || 
  perpage || 
  columnsDropdown || 
  slots.beforeFilter || 
  slots.afterFilter || 
  slots.beforeLimit || 
  slots.afterLimit)?
  <div class={classes.row}>
  <div class={classes.column}>
  <div class={`${classes.field} ${classes.inline} ${classes.left} VueTables__search`}>
  {slots.beforeFilter}
  {genericFilter}
  {slots.afterFilter}  
  </div>
  <div class={`${classes.field} ${classes.inline} ${classes.right} VueTables__limit`}>
  {slots.beforeLimit}
  {perpage}
  {slots.afterLimit}    
  </div>
  {columnsDropdown}
  </div>
  </div>:'';
    
  return <div class={"VueTables VueTables--" + this.source}>
  {tableTop}
  {slots.beforeTable}
  <div class="table-responsive">
  <table class={`VueTables__table ${this.opts.skin?this.opts.skin:classes.table}`}>
  <thead>
  <tr>
  {modules.headings(classes.right)}
  </tr>
  {slots.beforeFilters}  
  {modules.columnFilters(classes)}
  {slots.afterFilters}  
  </thead>
  <tfoot>
    <tr>
      <td colspan={this.colspan}>
      {modules.pagination(merge(classes.pagination,{
        list:`${classes.pagination.list} ${classes.right} ${classes.nomargin}`,
        count:`${classes.left}`
      }))}
      </td>
    </tr>
  </tfoot>
  {slots.beforeBody}      
  <tbody>
  {slots.prependBody}
  {modules.rows(classes)}
  {slots.appendBody}
  </tbody>
  {slots.afterBody}
  </table>
  </div>
  {slots.afterTable}
 
  </div>
}



