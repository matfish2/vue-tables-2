export default {
    name: 'RLChildRow',
    props:['row','index'],
    inject: ['colspan','scopedSlots','getChildRowTemplate', 'opts', 'componentsOverride'],
    render(h) {
        return this.$scopedSlots.default({
            opts: this.opts(),
            childRow: this.getChildRowTemplate(h, this.row, this.index, this.scopedSlots()['child_row']),
            colspan: this.colspan(),
            class: this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row) : '',
            override: this.componentsOverride.childRow
        })
    }
}




