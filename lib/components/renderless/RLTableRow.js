export default {
    name: 'RLTableRow',
    props:['row','index'],
    inject: ['allColumns','opts', 'rowWasClicked'],
    provide() {
        return {
            row: () => this.row,
            index: this.index
        }
    },
    render() {
        return this.$scopedSlots.default({
            columns: this.allColumns,
            rowAttrs: {
                class: this.opts.rowClassCallback ? this.opts.rowClassCallback(this.row):'',
                attrs: this.opts.rowAttributesCallback?this.opts.rowAttributesCallback(this.row) : {}
            },
            rowEvents:{
                click: this.rowWasClicked.bind(this, this.row, this.index),
                dblclick: this.rowWasClicked.bind(this, this.row, this.index)
            }
        })
    }
}