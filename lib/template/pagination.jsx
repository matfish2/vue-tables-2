module.exports = function(h, that) {
  if (that.opts.pagination && !that.opts.pagination.dropdown)
  return <pagination
  ref="pagination"
  for={that.id}
  records={that.count}
  per-page={parseInt(that.limit)}
  chunk={that.opts.pagination.chunk}
  count-text={that.opts.texts.count}>
  </pagination>

  return '';
}

