export default {
    name: 'RLChildRowToggler',
    props: ['rowId'],
    inject: ['toggleChildRow', 'opts', 'childRowTogglerClass', 'componentsOverride', 'tabIndex','row'],
    render(h) {
        var toggleable = this.isToggleable(this.opts().disabledChildRows);

        return this.$scopedSlots.default({
            opts: this.opts(),
            class: this.childRowTogglerClass.bind(this, this.rowId),
            toggle: toggleable ? this.toggleChildRow.bind(this, this.rowId) : function(){},
            override: this.componentsOverride.childRowToggler,
            tabIndex: this.tabIndex(),
            toggleable: toggleable
        })
    },
    methods:{
        isToggleable(callback) {
            if (!callback) {
                return true
            }

            return !callback(this.row())
        }
    }
}




