import EventBus from '../bus';

module.exports = function() {
    EventBus.$off();
    EventBus.$destroy();
}