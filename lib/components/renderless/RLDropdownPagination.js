export default {
    name: "RLDropdownPagination",
    inject: ['limit','count', 'theme', 'page', 'setPage', 'totalPages', 'componentsOverride','id'],
    render() {
        return this.$scopedSlots.default({
            name: this.id,
            setPage: this.setPage,
            page: this.page(),
            records: this.count(),
            perPage: parseInt(this.limit()),
            theme: this.theme,
            totalPages: this.totalPages(),
            override: this.componentsOverride.dropdownPagination
        })
    }
}
