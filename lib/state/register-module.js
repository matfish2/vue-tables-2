import state from './state'
import mutations from './mutations'
import addHasModuleToVuex from '../helpers/add-has-module-to-vuex';

 module.exports = function(self) {

   let store =  {
     state:state(self),
     mutations: mutations(self)
   };

  if (!self.$store.hasModule(self.name)) {
    self.$store.registerModule(self.name, store);
  }

}


