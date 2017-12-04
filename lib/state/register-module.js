 import state from './state'
 import mutations from './mutations'

 module.exports = function(self) {

   let store =  {
     state:state(self),
     mutations: mutations(self)
   };

  self.$store.registerModule(self.name, store);

}

