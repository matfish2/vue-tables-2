export default {
    name: 'RLTextFilter',
    inject: ['opts','search', 'query', 'theme', 'getHeading', 'display', 'getColumnName'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            debounce: this.opts().debounce,
            theme: this.theme,
            search: this.search,
            query: this.query(),
            getHeading: this.getHeading,
            getColumnName: this.getColumnName,
            display: this.display
        })
    }
}
