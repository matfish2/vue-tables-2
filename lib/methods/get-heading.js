import ucfirst from '../helpers/ucfirst'

module.exports = function(value) {
    return this.opts.headings.hasOwnProperty(value)?
    this.opts.headings[value]:
    ucfirst(value.split("_").join(" "));
  }
