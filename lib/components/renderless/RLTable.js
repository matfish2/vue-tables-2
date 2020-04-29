export default {
    name: 'RLTable',
    inject: ['opts', 'theme', 'colspan', 'slots', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            opts: this.opts(),
            tableAttrs: {
                summary: this.opts().summary,
                class: `VueTables__table ${
                    this.opts().skin ? this.opts().skin : this.theme.table
                }`
            },
            slots: this.slots(),
            colspan: this.colspan(),
            caption: this.opts().caption,
            override: this.componentsOverride.table
        })
    }
}
