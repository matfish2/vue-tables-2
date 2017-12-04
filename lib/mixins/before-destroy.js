import EventBus from '../bus';

module.exports = function() {
    EventBus.$off();
    EventBus.$destroy();

    if (this.vuex && !this.opts.preserveState) {
        this.$store.unregisterModule(this.name);
    }
}