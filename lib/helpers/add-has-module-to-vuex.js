export default function(store) {
    
    if (typeof store.hasModule==='function') return;

    const _registerModule = store.registerModule;
    const _unregisterModule = store.unregisterModule;
    
    store.registerModule = function(path, rawModule) {
      
      if ( !this._registeredModules )
        this._registeredModules = [];
      this._registeredModules.push(path);
    
      return _registerModule.call(this, path, rawModule)	
    }

    store.unregisterModule = function(path, rawModule) {
        console.log(path);
        if (this._registeredModules) {
            var index = this._registeredModules.indexOf(path);  
            this._registeredModules.splice(index,1);     
        }
       
      return _unregisterModule.call(this, path, rawModule)	
        
    }
    
    store.hasModule = function(path) {
    
      if ( this._registeredModules )
        return this._registeredModules.indexOf(path)>-1;
      return false;
    }
} 