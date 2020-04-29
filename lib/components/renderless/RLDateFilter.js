export default {
    name: 'RLDateFilter',
    inject: ['getHeading', 'display', 'componentsOverride','opts'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            opts: this.opts(),
            column: this.column,
            placeholder: this.display('filterBy', {column: this.getHeading(this.column)}),
            display: this.display,
            override: this.componentsOverride.dateFilter
        })
    }
}
