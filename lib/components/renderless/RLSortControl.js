export default {
    name: 'RLSortControl',
    inject: ['column', 'theme', 'sortable', 'hasMultiSort', 'orderBy', 'userMultiSorting', 'sortableChevronClass', 'componentsOverride'],
    render() {
        return this.$scopedSlots.default({
            sortable: this.sortable(this.column),
            class: `VueTables__sort-icon ${this.theme.right} ${this.sortableChevronClass(this.column)}`,
            sortStatus: this.sortStatus,
            override: this.componentsOverride.sortControl
        })
    },
    computed: {
        OrderBy() {
            return this.orderBy()
        },
        UserMultiSorting() {
            return this.userMultiSorting();
        },
        sortStatus() {
            if (this.hasMultiSort && this.OrderBy.column && this.UserMultiSorting[this.OrderBy.column]) {
                var col = this.UserMultiSorting[this.OrderBy.column].filter(c => c.column === this.column)[0];

                if (col) return {
                    sorted: true,
                    asc: col.ascending
                }
            }

            if (this.column === this.OrderBy.column) {
                return {
                    sorted: true,
                    asc: this.OrderBy.ascending
                }
            }

            return {
                sorted: false,
                asc: false
            }
        }
    },
    methods: {}
}
