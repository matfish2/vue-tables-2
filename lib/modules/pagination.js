module.exports = function(h) {

  return (theme) => {

    if (this.opts.pagination && this.opts.pagination.dropdown) return '';
    
    let options = {
      theme:theme,
      chunk:this.opts.pagination.chunk,
      chunksNavigation:this.opts.pagination.nav,
      edgeNavigation:this.opts.pagination.edge,
      texts:{
        count:this.opts.texts.count,
        first:this.opts.texts.first,
        last:this.opts.texts.last        
      }
    };

    let name = this.vuex?this.name:this.id;
    
      return <pagination
      ref="pagination"
      options={options}
      for={name}
      vuex={this.vuex}
      records={this.count}
      per-page={parseInt(this.limit)}
      onPaginate={this._onPagination.bind(this)}>
      </pagination>
    
  }
    
}
