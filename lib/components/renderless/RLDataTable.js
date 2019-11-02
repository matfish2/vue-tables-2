module.exports = function () {
    return this.$scopedSlots.default({
        source: this.source,
        theme: this.theme
    })
}
