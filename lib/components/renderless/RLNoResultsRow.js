export default {
    name: 'RLNoResultsRow',
    inject: ['colspan', 'display', 'componentsOverride', 'loading', 'tabIndex', 'opts'],
    render() {
        return this.$scopedSlots.default({
            opts: this.opts(),
            colspan: this.colspan(),
            display: this.display,
            tabIndex: this.tabIndex(),
            loading: this.loading(),
            override: this.componentsOverride.noResultsRow
        })
    }
}
