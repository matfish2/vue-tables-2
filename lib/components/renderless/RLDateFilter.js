export default {
    name: 'RLDateFilter',
    inject: ['getHeading', 'display'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            getHeading: this.getHeading,
            display: this.display
        })
    }
}
