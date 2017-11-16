 import state from './state'
 import mutations from './mutations'

 module.exports = function(self) {

   let store =  {
     state:state(self),
     mutations: mutations(self)
   };

  if (typeof self.$store.state[self.name]!=='undefined') {
    self.$store.unregisterModule(self.name);
  }

  self.$store.registerModule(self.name, store);

}

