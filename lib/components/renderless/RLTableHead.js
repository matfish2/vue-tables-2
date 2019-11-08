export default {
    name: 'RLTableHead',
    inject:['opts'],
    render() {
        return this.$scopedSlots.default({
            opts: this.opts()
        })
    }
}
