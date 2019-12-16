export default {
    name: 'RLFiltersRow',
    inject: ['opts', 'theme','allColumns','filterable','filterType','slots','columnClass','hasChildRow', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            columns: this.allColumns(),
            filterable: this.filterable,
            filterType: this.filterType,
            opts: this.opts(),
            slots: this.slots(),
            columnClass: this.columnClass,
            hasChildRow: this.hasChildRow(),
            override: this.componentsOverride.filtersRow
        })
    }
}
