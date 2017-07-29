import bus from '../bus';

module.exports = function(event, payload) {

  if (this.vuex) {
    if (event.split('::').length>1) return;
    this.commit(event.toUpperCase().replace('-','_'), payload);
  }

    var name = 'vue-tables.';
    if (this.name) name+= this.name + ".";
    name+=event;

    bus.$emit(name, payload);
    this.$emit(event, payload);

}
