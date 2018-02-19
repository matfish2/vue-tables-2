    var debounce = require('debounce');

    module.exports = function(h, inputClass) {

          var search = this.source=='client'?
                this.search.bind(this, this.data):
                this.serverSearch.bind(this);

          var debouncedSearch = debounce(search, this.opts.debounce);

          var onKeyUp = function (e) {
            e.keyCode === 13 ? debouncedSearch.flush() : debouncedSearch(...arguments);
          };

      return (column) => {
       return <input
       on-keyup={onKeyUp}
       class={inputClass}
       name={'vf__' + column}
       type="text"
       placeholder={this.display('filterBy',{column:this.getHeading(column)})}
       value={this.query[column]}
       />
     }
   }

   

