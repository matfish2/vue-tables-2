module.exports = function(rows = null) {

    if (!this.opts.childRow || typeof this.opts.childRow==='function' ) {
        throw new Error('vue-tables-2: Child row undefined or not a component');
     }

    var Rows = rows?this.openChildRows.filter(row=>rows.includes(row)):this.openChildRows;

    if (!Rows.length) return [];

    return this.$parent.$refs.vt_table.$refs.vt_table_body.$children[0].$children
        .filter(child => child.$options.name==='VtChildRow' && Rows.includes(child.$children[0].$children[0].data[this.opts.uniqueKey]))
        .map(child => child.$children[0].$children[0]);
}
