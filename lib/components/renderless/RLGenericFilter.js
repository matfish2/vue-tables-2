export default {
    name: 'RLGenericFilter',
    inject: ['opts', 'theme','source','search', 'query','display','id','componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            theme: this.theme,
            search: this.search,
            query: this.query(),
            display: this.display,
            id: this.id,
            override: this.componentsOverride.genericFilter
        })
    }
}
