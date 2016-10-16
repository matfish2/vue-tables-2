module.exports = function(h, that) {
  if (that.count>0 && that.opts.pagination.dropdown) {

  let perPage = parseInt(that.limit);

   let from = ((that.Page-1) * perPage) + 1;
   let to = that.Page==that.totalPages?that.count:from + perPage - 1;

   return <div class="VuePagination">
 <p class="VuePagination__count">{that.display('count', {count:that.count, from, to})}</p>
 </div>
}

 return '';
}
