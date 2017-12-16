module.exports = function(h) {

    let name = this.vuex?this.name:this.id;
    
      return <pagination
      ref="pagination"
      for={name}
      vuex={this.vuex}
      records={this.count}
      per-page={parseInt(this.limit)}
      chunk={this.opts.pagination.chunk}
      count-text={this.opts.texts.count}>
      </pagination>
    
}
