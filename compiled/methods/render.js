'use strict';

module.exports = function (row, column, h) {

  if (this.templatesKeys.indexOf(column) == -1) return this.highlightMatch(row[column], column, h);

  var template = this.opts.templates[column];

  template = typeof template == 'function' ? template.apply(this.$root, [h, row]) : h(template, {
    attrs: {
      data: row
    }
  });

  return h(
    'span',
    { 'class': 'VueTables__template' },
    [template]
  );
};