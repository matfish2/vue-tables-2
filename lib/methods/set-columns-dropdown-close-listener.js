
module.exports = function() {
  if (this.opts.columnsDropdown) {

    var stopProp = (e)=>e.stopPropagation();

    const handler = ()=> {
      if (this.displayColumnsDropdown) {
        this.displayColumnsDropdown = false;
      }
    };

    this.$refs.columnsdropdown.addEventListener('click', stopProp);
    document.addEventListener('click', handler);

    this.$once('hook:destroyed', ()=>{
      document.removeEventListener('click',handler);
      this.$refs.columnsdropdown.removeEventListener('click',stopProp);
    });

  }
}