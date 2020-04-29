export default {
    name: "RLPerPageSelector",
    inject: ['opts', 'limit', 'setLimit', 'perPageValues', 'id', 'theme', 'display','componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            opts: this.opts(),
            perPageValues:  this.perPageValues(),
            theme: this.theme,
            limit: this.limit(),
            setLimit: this.setLimit,
            id: this.id,
            selectClass: this.theme.select,
            display: this.display,
            selectAttrs:{
                id: `VueTables__limit_${this.id}`,
                class: this.theme.select,
                value: this.limit()
            },
            selectEvents:{
                change: (e) => this.setLimit(e)
            },
            override: this.componentsOverride.perPageSelector
        })
    }
}
