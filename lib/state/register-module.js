 import state from './state'
 import mutations from './mutations'

 module.exports = function(self) {
   if (self.options.cache === false ||
		self.$store._runtimeModules === undefined || 
		self.$store._runtimeModules[self.name] === undefined) {
	 
      self.$store.registerModule(self.name,{
       state:state(self),
       mutations: mutations(self)
     });
   }
 }