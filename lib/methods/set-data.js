module.exports =  function(data) {
  this.data = data.data;
  this.count = data.count;

  setTimeout(function(){
    this.dispatch('loaded',data);
  }.bind(this),0);

}
