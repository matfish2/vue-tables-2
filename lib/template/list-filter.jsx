    module.exports = function(h, that) {

     return  function(column) {

      var options = [];

      var search = that.source=='client'?
      that.search.bind(that, that.data):
      that.serverSearch.bind(that);

      that.opts.listColumns[column].map(function(option) {
        options.push(<option value={option.id}>{option.text}</option>)
      })

      return <div class="VueTables__list-filter"
      id={'VueTables__' + column + '-filter'}>
      <select class='form-control'
      on-change={search}
      name={column}
      value={that.query[column]}>
      <option value="">{that.display('defaultOption',that.getHeading(column))}</option>
      {options}
      </select>
      </div>
    }

  }

