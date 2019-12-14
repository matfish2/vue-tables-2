export default {
    name: 'RLTable',
    inject: ['opts', 'theme', 'slots', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            tableAttrs:{
                summary: this.opts().summary,
                class: `VueTables__table ${
                    this.opts().skin ? this.opts().skin : this.theme.table
                }`
            },
            slots: this.slots(),
            caption: this.opts().caption,
            override: this.componentsOverride.table
        })
    }
}
