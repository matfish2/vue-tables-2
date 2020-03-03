export default {
    name: 'RLNoResultsRow',
    inject:['colspan','display', 'componentsOverride','tabIndex'],
    render() {
        return this.$scopedSlots.default({
            colspan: this.colspan(),
            display: this.display,
            tabIndex: this.tabIndex(),
            override: this.componentsOverride.noResultsRow
        })
    }
}
