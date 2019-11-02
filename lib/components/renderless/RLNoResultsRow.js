export default {
    name: 'RLNoResultsRow',
    inject:['colspan','display'],
    render() {
        return this.$scopedSlots.default({
            colspan: this.colspan,
            display: this.display
        })
    }
}
