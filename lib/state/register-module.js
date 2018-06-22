import state from './state'
import mutations from './mutations'
import merge from 'merge';

 module.exports = function(self) {

  var Module = {
    state:state(self),
    mutations: mutations(self)
  }

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    Module.state = merge.recursive(Module.state, self.$store.state[self.name]);
    self.$store.unregisterModule(self.name); 
  } 

   self.$store.registerModule(self.name, Module);

}


