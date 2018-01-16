import bus from '../bus';

module.exports = function(event, payload) {

  if (this.vuex) {
    if (event.split('::').length>1) return;
    this.commit(event.toUpperCase().replace('-','_'), payload);
  }

    this.$emit(event, payload);
  
    bus.$emit(`vue-tables.${event}`, payload);

    if (this.name) {
      bus.$emit(`vue-tables.${this.name}.${event}`, payload);
    }

}
