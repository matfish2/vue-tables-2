import state from './state'
import mutations from './mutations'

 module.exports = function(self) {

  var initialState;

  if (self.$store && self.$store.state && self.$store.state[self.name]) {
    initialState = self.$store.state[self.name];
    self.$store.unregisterModule(self.name); 
  } else {
    initialState = state(self);
  }
  
   let store =  {
     state:initialState,
     mutations: mutations(self)
   };

   self.$store.registerModule(self.name, store);

}


