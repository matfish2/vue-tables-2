module.exports = function() {

  try {
    this.data.forEach(function(row,index) {

      this.customColumns.forEach(function(custom) {
       this.$set('data['+index+'].' + custom, this.opts.templates[custom]);
     }.bind(this));

    }.bind(this));
  } catch (e) {
    console.error(`vue-tables-2: Undeclared template. All templates must be declared in the 'columns' prop.`, e);
  }
}
