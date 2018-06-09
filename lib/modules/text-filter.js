    var debounce = require('debounce');

    module.exports = function(h, inputClass) {

          var search = this.source=='client'?
                this.search.bind(this, this.data):
                this.serverSearch.bind(this);
          
          if (this.opts.debounce) {
            var debouncedSearch = debounce(search, this.opts.debounce);

            var onKeyUp = function (e) {
              if (e.keyCode === 13) {
                debouncedSearch.clear();
                search(...arguments);
              } else {
                debouncedSearch(...arguments);
              }
            };
  
          }
         
      return (column) => {
       return <input
       on-keyup={this.opts.debounce?onKeyUp:search}
       class={inputClass}
       name={this._getColumnName(column)}
       type="text"
       placeholder={this.display('filterBy',{column:this.getHeading(column)})}
       value={this.query[column]}
       />
     }
   }

   

