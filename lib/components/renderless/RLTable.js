export default {
    name: 'RLTable',
    inject: ['opts', 'theme'],
    render() {
        return this.$scopedSlots.default({
            // opts: this.opts,
            tableAttrs:{
                summary: this.opts.summary,
                class: `VueTables__table ${
                    this.opts.skin ? this.opts.skin : this.theme.table
                }`
            },
            caption: this.opts.caption,
        })
    }
}
