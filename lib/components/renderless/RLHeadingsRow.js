export default {
    name: 'RLHeadingRow',
    inject: ['opts', 'theme', 'hasChildRow', 'allColumns','componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            override: this.componentsOverride.headingsRow,
            opts: this.opts(),
            columns: this.allColumns(),
            hasChildRow: this.hasChildRow,
            childRowTogglerFirst: this.hasChildRow() &&
                this.opts().showChildRowToggler &&
                this.opts().childRowTogglerFirst,
            childRowTogglerLast: this.hasChildRow() &&
                this.opts().showChildRowToggler &&
                !this.opts().childRowTogglerFirst
        })
    }
}
