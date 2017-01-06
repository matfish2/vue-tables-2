import ucfirst from '../helpers/ucfirst'

module.exports = function(value, h) {

  if (typeof value!=='string') return '';

 if (!this.opts.headings.hasOwnProperty(value))
  return ucfirst(value.split("_").join(" "));

  if (typeof this.opts.headings[value]==='function')
    return this.opts.headings[value](h);

  return this.opts.headings[value];
  }
