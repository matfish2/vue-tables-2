import state from './state'
import mutations from './mutations'
import merge from 'merge';

 module.exports = function(self) {

  var Module = {
    state:state(self),
    mutations: mutations(self)
  }

  var hasModule = self.$store.hasModule ? self.$store.hasModule(self.name) : self.$store.state && self.$store.state[self.name]

  if (hasModule) {
    Module.state = merge.recursive(Module.state, self.$store.state[self.name]);
    self.$store.unregisterModule(self.name);
  }

   self.$store.registerModule(self.name, Module);

}


