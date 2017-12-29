module.exports = function(h) {
  return () => {
    if (this.count>0 && this.opts.pagination.dropdown) {
      
      let perPage = parseInt(this.limit);
      
      let from = ((this.Page-1) * perPage) + 1;
      let to = this.Page==this.totalPages?this.count:from + perPage - 1;
      
      let parts = this.opts.texts.count.split('|');
      let i = Math.min(this.count==1?2:this.totalPages==1?1:0, parts.length-1);
      
      let count =  parts[i].replace('{count}', this.count)
      .replace('{from}', from)
      .replace('{to}', to)
      
      return <div class="VuePagination">
      <p class="VuePagination__count">{count}</p>
      </div>
    }
    
    return '';
  }
  
}
