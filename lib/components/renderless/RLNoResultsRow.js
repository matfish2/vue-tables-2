export default {
    name: 'RLNoResultsRow',
    inject:['colspan','display', 'componentsOverride','loading','tabIndex'],
    render() {
        return this.$scopedSlots.default({
            colspan: this.colspan(),
            display: this.display,
            tabIndex: this.tabIndex(),
            loading: this.loading(),
            override: this.componentsOverride.noResultsRow
        })
    }
}
