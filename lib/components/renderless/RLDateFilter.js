export default {
    name: 'RLDateFilter',
    inject: ['getHeading', 'display', 'componentsOverride'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            column: this.column,
            placeholder: this.display('filterBy', {column: this.getHeading(this.column)}),
            display: this.display,
            override: this.componentsOverride.dateFilter
        })
    }
}
