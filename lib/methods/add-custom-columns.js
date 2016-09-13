module.exports = function() {

    this.data.forEach(function(row,index) {

      this.customColumns.forEach(function(custom) {

      this.$set('data['+index+'].' + custom, this.opts.templates[custom]);
      }.bind(this));

  }.bind(this));

}
