export default {
    name: 'RLListFilter',
    inject: ['search','query','theme','getHeading','display','getColumnName','opts'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            theme: this.theme,
            search: this.search,
            query: this.query(),
            getHeading: this.getHeading,
            getColumnName: this.getColumnName,
            display: this.display,
            items: this.opts().listColumns[this.column].filter(item=>!item.hide),
            headings: this.opts().headings
        })
    }
}
