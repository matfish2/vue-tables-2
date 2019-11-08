export default {
    name: 'RLGenericFilter',
    inject: ['opts', 'theme','source','search', 'query','display','id'],
    render() {
        return this.$scopedSlots.default({
            theme: this.theme,
            search: this.search,
            query: this.query(),
            display: this.display,
            id: this.id
        })
    }
}
