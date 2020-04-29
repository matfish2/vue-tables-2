export default {
    name: 'RLColumnsDropdown',
    inject: ['getHeading', 'display', 'opts', 'theme', 'allColumns', 'onlyColumn', 'toggleColumn', 'toggleColumnsDropdown', 'displayColumnsDropdown', 'origColumns', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            opts: this.opts(),
            theme: this.theme,
            getHeading: this.getHeading,
            display: this.display,
            onlyColumn: this.onlyColumn,
            toggleColumn: this.toggleColumn,
            toggleColumnsDropdown: this.toggleColumnsDropdown,
            displayColumnsDropdown: this.displayColumnsDropdown(),
            origColumns: this.origColumns,
            columns: this.allColumns(),
            override: this.componentsOverride.columnsDropdown
        })
    }
}
