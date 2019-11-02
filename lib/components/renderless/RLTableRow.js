export default {
    name: 'RLTableRow',
    props:['row'],
    inject: ['allColumns','opts'],
    provide() {
        return {
            row: this.row
        }
    },
    render() {
        return this.$scopedSlots.default({
            columns: this.allColumns,
            row: this.row,
            rowAttrs: {
                class: this.opts.rowClassCallback ? this.opts.rowClassCallback(this.row):'',
                attrs: this.opts.rowAttributesCallback?this.opts.rowAttributesCallback(this.row) : {}
            }
        })
    }
}
