module.exports = function(h, headings) {

  if (!this.opts.footerHeadings) return '';

  return <tfoot><tr>{headings(h)}</tr></tfoot>

}

