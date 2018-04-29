import state from './state'
import mutations from './mutations'

 module.exports = function(self) {

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    return;
  }
  
   let store =  {
     state:state(self),
     mutations: mutations(self)
   };

   self.$store.registerModule(self.name, store);

}


