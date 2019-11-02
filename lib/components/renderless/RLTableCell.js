export default {
    name: 'RLTableCell',
    inject: ['row'],
    props:['column'],
    render() {
        return this.$scopedSlots.default({
            row: this.row,
            column: this.column
        })
    }
}
