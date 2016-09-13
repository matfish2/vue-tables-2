module.exports = function(h, that) {
  if (that.count>0 && that.opts.pagination.dropdown)
   return <div class="VuePagination">
 <p class="VuePagination__count">{that.display('count', that.count)}</p>
 </div>

 return '';
}
