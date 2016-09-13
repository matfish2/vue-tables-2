module.exports = function(column) {

   var isCustomColumn = this.customColumns.indexOf(column)>-1;

    if (isCustomColumn) return false;

    var sortAll = typeof this.opts.sortable=='boolean' && this.opts.sortable;

    if (sortAll) return true;

    return this.opts.sortable.indexOf(column)>-1;

}
