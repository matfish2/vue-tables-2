
module.exports = function(row, column, h) {

  if (this.templatesKeys.indexOf(column)==-1)
    return row[column];

  var template = this.opts.templates[column];

  return <span class='VueTables__template'>{template.apply(this.$parent, [h, row])}</span>

}

