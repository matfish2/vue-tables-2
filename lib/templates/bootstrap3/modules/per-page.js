module.exports = function(h) {

    var beforeLimit = this.$slots.beforeLimit?this.$slots.beforeLimit:''; 
    var afterLimit = this.$slots.afterLimit?this.$slots.afterLimit:''; 

    var id = 'VueTables__limit_' + this.id;
    
    return  <div class="form-group form-inline pull-right VueTables__limit">
        {beforeLimit}
          <label for={id}>{this.display('limit')}</label>
          {perPage}
        {afterLimit}
        </div>

}
