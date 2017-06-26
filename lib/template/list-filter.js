    module.exports = function(h, that) {

     return  function(column) {

      var options = [];
      let selected;

      var search = that.source=='client'?
      that.search.bind(that, that.data):
      that.serverSearch.bind(that);

      that.opts.listColumns[column].map(function(option) {
        selected = option.id == that.query[column] && that.query[column]!=='';
        options.push(<option value={option.id} selected={selected}>{option.text}</option>)
      })

      return <div class="VueTables__list-filter"
      id={'VueTables__' + column + '-filter'}>
      <select class='form-control'
      on-change={search}
      name={'vf__' + column}
      value={that.query[column]}>
      <option value="">{that.display('defaultOption',{column: that.opts.headings[column]?that.opts.headings[column]:column})}</option>
      {options}
      </select>
      </div>
    }

  }

