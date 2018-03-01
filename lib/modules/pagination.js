module.exports = function(h) {

  return (theme) => {

    if (this.opts.pagination && this.opts.pagination.dropdown) return '';
    
    let name = this.vuex?this.name:this.id;
    
      return <pagination
      ref="pagination"
      theme={theme}
      for={name}
      vuex={this.vuex}
      records={this.count}
      per-page={parseInt(this.limit)}
      chunk={this.opts.pagination.chunk}
      chunks-navigation={this.opts.pagination.nav}
      count-text={this.opts.texts.count}
      onPaginate={this._onPagination.bind(this)}>
      </pagination>
    
  }
    
}
