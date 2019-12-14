export default {
    name: 'RLTableHead',
    inject:['opts', 'slots', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            opts: this.opts(),
            slots: this.slots(),
            override: this.componentsOverride.tableHead
        })
    }
}
