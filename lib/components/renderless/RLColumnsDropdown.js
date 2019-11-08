export default {
    name: 'RLColumnsDropdown',
    inject: ['getHeading', 'display','theme','allColumns','onlyColumn','toggleColumn','toggleColumnsDropdown','displayColumnsDropdown','origColumns'],
    render() {
        return this.$scopedSlots.default({
            theme: this.theme,
            getHeading: this.getHeading,
            display: this.display,
            onlyColumn: this.onlyColumn,
            toggleColumn: this.toggleColumn,
            toggleColumnsDropdown: this.toggleColumnsDropdown,
            displayColumnsDropdown: this.displayColumnsDropdown(),
            origColumns: this.origColumns
        })
    }
}
