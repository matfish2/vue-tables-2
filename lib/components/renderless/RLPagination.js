import merge from 'merge'

export default {
    name: "RLPagination",
    inject: ['opts', 'count', 'limit', 'vuex', 'name', 'id', 'theme', 'page', 'setPage', 'totalPages', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            setPage: this.setPage,
            options: this.opts().pagination,
            infiniteScroll: this.opts().infiniteScroll,
            page: this.page(),
            records: this.count(),
            perPage: parseInt(this.limit()),
            name: this.vuex ? this.name : this.id,
            vuex: this.vuex,
            theme: this.theme,
            texts: this.opts().texts,
            totalPages: this.totalPages(),
            optionsObj: {
                theme: merge(this.theme.pagination, {
                    wrapper: `${this.theme.row} ${this.theme.column} ${this.theme.contentCenter}`,
                    nav: this.theme.center,
                    count: `${this.theme.center} ${this.theme.column}`
                }),
                chunk: this.opts().pagination.chunk,
                chunksNavigation: this.opts().pagination.nav,
                edgeNavigation: this.opts().pagination.edge,
                texts: {
                    count: this.opts().texts.count,
                    first: this.opts().texts.first,
                    last: this.opts().texts.last
                }
            },
            override: this.componentsOverride.pagination
        })
    }
}
