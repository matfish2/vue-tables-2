export default {
    name: 'RLChildRow',
    props:['row','index'],
    inject: ['colspan','scopedSlots','getChildRowTemplate', 'opts'],
    render(h) {
        return this.$scopedSlots.default({
            childRow: this.getChildRowTemplate(h, this.row, this.scopedSlots()['child_row']),
            colspan: this.colspan,
            class: this.opts.rowClassCallback ? this.opts.rowClassCallback(this.row) : ''
        })
    }
}




