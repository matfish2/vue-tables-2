module.exports = function(value) {

    if (this.$parent.$scopedSlots && this.$parent.$scopedSlots['__group_meta']) {
        var data = this.opts.groupMeta.find(val=>val.value===value);

        if (!data) return '';

        return this.$parent.$scopedSlots['__group_meta'](data);
    }

    return '';

}
