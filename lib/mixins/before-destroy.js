import EventBus from '../bus';

module.exports = function() {

    var el;

    if (this.opts.destroyEventBus) {
        EventBus.$off();
        EventBus.$destroy();
    }

    if (this.vuex && !this.opts.preserveState) {
        this.$store.unregisterModule(this.name);
    }

    if (this.opts.filterByColumn) {
        this.datepickerColumns.forEach(column => {
            el =  $(this.$el).find("#VueTables__" + $.escapeSelector(column) + "-filter").data('daterangepicker');
            if (el) el.remove();
        });
    }

}
