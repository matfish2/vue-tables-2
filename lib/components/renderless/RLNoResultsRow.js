export default {
    name: 'RLNoResultsRow',
    inject:['colspan','display', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            colspan: this.colspan(),
            display: this.display,
            override: this.componentsOverride.noResultsRow
        })
    }
}
