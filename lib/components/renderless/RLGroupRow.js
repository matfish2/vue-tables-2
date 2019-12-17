export default {
    name: 'RLGroupRow',
    props:['row'],
    inject: ['colspan','opts', 'theme','toggleGroupDirection','toggleGroup','groupToggleIcon','getGroupSlot','componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            theme: this.theme,
            colspan: this.colspan(),
            toggleGroupDirection: this.toggleGroupDirection,
            canToggleGroup: this.opts().toggleGroups,
            toggleGroup: this.toggleGroup,
            groupValue: this.row[this.opts().groupBy],
            groupToggleIcon: this.groupToggleIcon,
            slot: this.getGroupSlot(this.row[this.opts().groupBy]),
            override: this.componentsOverride.groupRow,
        })
    }
}
