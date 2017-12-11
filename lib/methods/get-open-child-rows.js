module.exports = function(rows = null) {

    if (!this.opts.childRow || typeof this.opts.childRow==='function' ) {
        throw new Error('vue-tables-2: Child row undefined or not a component');
     }

    var Rows = rows?this.openChildRows.filter(row=>rows.includes(row)):this.openChildRows;
    
    if (!Rows.length) return [];

    var components = this.$children.filter(child =>{
        return child.$options.name==='ChildRow' && Rows.includes(child.data[this.opts.uniqueKey]);        
    });

    return components;

}
    