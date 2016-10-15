 import state from './state'
 import mutations from './mutations'

 module.exports = function(self) {
   self.$store.registerModule(self.name,{
    state:state(self),
    mutations: mutations(self)
  });
 }
