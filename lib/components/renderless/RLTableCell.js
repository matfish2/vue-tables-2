import merge from 'merge'

export default {
    name: 'RLTableCell',
    inject: ['row', 'scopedSlots','theme', 'orderBy','opts', 'render', 'index', 'setEditingCell', 'updateValue', 'revertValue', 'editing', 'getValue', 'columnClass', 'cellClasses', 'componentsOverride','isListFilter','optionText', 'source','dateFormat','formatDate', 'tabIndex'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            opts: this.opts(),
            row: this.Row,
            column: this.column,
            content: this.content(h),
            classes: `${this.theme.td} ${this.columnClass(this.column)} ${this.cellClasses(this.column, this.Row)} ${this.sortedClass(this.column)}`.trim(),
            tabIndex: this.tabIndex(),
            override: this.componentsOverride.tableCell
        })
    },
    computed: {
        Row() {
            return this.row();
        },
        options() {
            return this.opts()
        }
    },
    methods: {
        content(h) {
            if (this.options.templates[this.column]) {
                return this.render(this.Row, this.column, this.index(), h);
            }

            if (this.scopedSlots()[this.column]) {
                var data = {row: this.Row, column: this.column, index: this.index()};
                if (this.options.editableColumns.includes(this.column)) {
                    data = merge(data, this.getEditFunctions());
                }
                return this.scopedSlots()[this.column](data);
            }

            return this.formatCellContent(this.getValue(this.Row, this.column), this.column);
        },
        sortedClass(column) {
            if (!this.options.addSortedClassToCells) return ''

            return this.orderBy().column === column ? `${column}-sorted-` + (this.orderBy().ascending ? 'asc':'desc') : '';
        },
        formatCellContent(value, column) {
            if (this.source === 'client' && this.options.dateColumns.includes(column)) {
                return this.formatDate(value, this.dateFormat(column));
            }

            if (this.isListFilter(column)) {
                return this.optionText(value, column);
            }

            return value;
        },
        isEditing() {
            return function () {
                return this.editing().find(e => e.id === this.Row[this.options.uniqueKey] && e.column === this.column);
            }.bind(this)
        },
        getEditFunctions() {
            return {
                update: this.updateValue(this.Row, this.column),
                isEditing: this.isEditing(),
                setEditing: this.setEditingCell(this.Row, this.column),
                revertValue: this.revertValue(this.Row, this.column)
            }
        }
    }
}
