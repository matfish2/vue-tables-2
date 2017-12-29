import merge from 'merge';

module.exports = function(h, modules, classes, slots) {
  
  var filterId = 'VueTables__search_' + this.id;  
  var perpageId = 'VueTables__limit_' + this.id;
  
  var genericFilter = this.opts.filterByColumn?'':
  <div class={`${classes.field} ${classes.inline} ${classes.left} VueTables__search`}>
  {slots.beforeFilter}
  <label for={filterId} class={classes.label}>{this.display('filter')}</label>
  {modules.normalFilter(classes, filterId)}
  {slots.afterFilter}
  </div>
  
  
  var columnsDropdown = this.opts.columnsDropdown?
  <div class="VueTables__columns-dropdown-wrapper">
  {modules.columnsDropdown(classes)}
  </div>:'';
    
  return <div class={"VueTables VueTables--" + this.source}>
  <div class={classes.row}>
  <div class={classes.column}>
  {genericFilter}
  
  <div class={`${classes.field} ${classes.inline} ${classes.right} VueTables__limit`}>
  {slots.beforeLimit}
  <label class={classes.label} for={perpageId}>{this.display('limit')}</label>
  {modules.perPage(classes.select, perpageId)}
  {slots.afterLimit}
  </div>
  
  {columnsDropdown}
  </div>
  </div>
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
      <td colspan={this.allColumns.length + 1}>
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
  {modules.rows()}
  {slots.appendBody}
  </tbody>
  {slots.afterBody}
  </table>
  </div>
 
  </div>
}



