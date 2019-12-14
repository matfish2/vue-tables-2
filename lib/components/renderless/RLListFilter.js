export default {
    name: 'RLListFilter',
    inject: ['search','query','theme','getHeading','display','getColumnName','opts', 'componentsOverride'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            theme: this.theme,
            search: this.search,
            query: this.query(),
            getHeading: this.getHeading,
            display: this.display,
            items: this.opts().listColumns[this.column].filter(item=>!item.hide),
            defaultOption: this.display('defaultOption', {
                column: this.opts().headings[this.column] ? this.opts().headings[this.column] : this.column}),
            name: this.getColumnName(this.column),
            value: this.query()[this.column],
            override: this.componentsOverride.listFilter
        })
    }
}
