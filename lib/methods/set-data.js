var bus = require('../bus')

module.exports =  function(data) {
  this.data = data.data;
  this.count = data.count;

  this.addCustomColumns();

  setTimeout(function(){
    this.dispatch('loaded',data);
  }.bind(this),0);

}
