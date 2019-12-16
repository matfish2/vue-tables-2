export default {
    name: 'RLTableRow',
    props:['row','index'],
    inject: ['allColumns','opts', 'rowWasClicked','hasChildRow', 'componentsOverride'],
    provide() {
        return {
            row: () => this.row,
            index: this.index
        }
    },
    render() {
        return this.$scopedSlots.default({
            columns: this.allColumns(),
            hasChildRow: this.hasChildRow(),
            opts: this.opts(),
            rowId: this.row[this.opts().uniqueKey],
            rowAttrs: {
                class: this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row):'',
                attrs: this.opts().rowAttributesCallback?this.opts().rowAttributesCallback(this.row) : {}
            },
            rowEvents:{
                click: this.rowWasClicked.bind(this, this.row, this.index),
                dblclick: this.rowWasClicked.bind(this, this.row, this.index)
            },
            childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,
            childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst,
            override: this.componentsOverride.tableRow
        })
    }
}
