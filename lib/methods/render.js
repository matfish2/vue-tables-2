
module.exports = function(row, column, index, h) {

  if (this.templatesKeys.indexOf(column)==-1)
    return this.highlightMatch(row[column], column, h);

  var template = this.opts.templates[column];

  template = typeof template=='function'?
            template.apply(this.$root, [h, row, index]):
            h(template,{
              attrs:{
                data: row,
                index
            }
          });

  return template;

}

