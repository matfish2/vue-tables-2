import merge from 'merge'

export default {
    name: 'RLTableCell',
    inject: ['row', 'scopedSlots', 'opts', 'render', 'index','setEditingCell','updateValue','revertValue','editing', 'getValue', 'columnClass','cellClasses', 'componentsOverride'],
    props: ['column'],
    render(h) {
        return this.$scopedSlots.default({
            row: this.Row,
            content: this.content(h),
            classes: `${this.columnClass(this.column)} ${this.cellClasses(this.column, this.Row)}`.trim(),
            override: this.componentsOverride.tableCell
        })
    },
    computed: {
        Row() {
            return this.row();
        }
    },
    methods: {
        content(h) {
            if (this.opts().templates[this.column]) {
                return this.render(this.Row, this.column, this.index, h);
            }

            if (this.scopedSlots()[this.column]) {

                var data = {row: this.Row, column: this.column, index: this.index};
                if (this.opts().editableColumns.includes(this.column)) {
                    data = merge(data, this.getEditFunctions());
                }
                return this.scopedSlots()[this.column](data);
            }

            return this.getValue(this.Row,this.column);
        },
        isEditing() {
            return function () {
                return this.editing().find(e => e.id === this.Row[this.opts().uniqueKey] && e.column === this.column);
            }.bind(this)
        },
        getEditFunctions() {
            return {
                update: this.updateValue(this.Row, this.column),
                isEditing: this.isEditing(),
                setEditing: this.setEditingCell(this.Row, this.column),
                revertValue: this.revertValue(this, this.Row, this.column)
            }
        }
    }
}
