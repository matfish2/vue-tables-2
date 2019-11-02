export default {
    name: 'RLTableBody',
    inject: ['opts', 'theme', 'source','filteredData','tableData','colspan'],
    render() {
        return this.$scopedSlots.default({
            data: this.source==='client' ? this.filteredData() : this.tableData,
            colspan: this.colspan,
            loading: true
        })
    }
}




