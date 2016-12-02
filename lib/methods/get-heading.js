import ucfirst from '../helpers/ucfirst'

module.exports = function(value) {

  if (typeof value!=='string') return '';

    return this.opts.headings.hasOwnProperty(value)?
    this.opts.headings[value]:
    ucfirst(value.split("_").join(" "));
  }
