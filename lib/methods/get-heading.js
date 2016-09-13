module.exports = function(value) {
    return this.opts.headings.hasOwnProperty(value)?
    this.opts.headings[value]:
    value.split("_").join(" ").ucfirst();
  }
