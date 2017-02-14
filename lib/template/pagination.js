module.exports = function(h, that) {
  if (that.opts.pagination && !that.opts.pagination.dropdown) {

  let name = that.vuex?that.name:that.id;

  return <pagination
  ref="pagination"
  for={name}
  records={that.count}
  per-page={parseInt(that.limit)}
  chunk={that.opts.pagination.chunk}
  count-text={that.opts.texts.count}>
  </pagination>

}

  return '';
}

