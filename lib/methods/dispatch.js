import bus from '../bus';

module.exports = function(event, payload) {
  if (this.vuex) {
    this.commit(event.toUpperCase().replace('-','_'), payload);
  } else {

    var name = 'vue-tables.';
    if (this.name) name+= this.name + ".";
    name+=event;

    bus.$emit(name, payload);
    this.$emit(event, payload);
  }
}
