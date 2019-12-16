export default {
    name: 'RLHeadingRow',
    inject: ['opts', 'theme', 'hasChildRow', 'allColumns'],
    render() {
        return this.$scopedSlots.default({
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
