export default {
    name: 'RLChildRowToggler',
    props: ['rowId'],
    inject: ['toggleChildRow', 'childRowTogglerClass'],
    render(h) {
        return this.$scopedSlots.default({
            toggleChildRow: this.toggleChildRow,
            childRowTogglerClass: this.childRowTogglerClass,
            rowId: this.rowId
        })
    }
}




