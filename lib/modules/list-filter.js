    module.exports = function(h, selectClass) {

     return (column) => {

      var options = [];
      let selected;

      var search = this.source=='client'?
      this.search.bind(this, this.data):
      this.serverSearch.bind(this);

      var displayable = this.opts.listColumns[column].filter(item=>!item.hide);
      
      displayable.map(option => {
        selected = option.id == this.query[column] && this.query[column]!=='';
        options.push(<option value={option.id} selected={selected}>{option.text}</option>)
      })

      return <div class="VueTables__list-filter"
      id={'VueTables__' + column + '-filter'}>
      <select class={selectClass}
      on-change={search}
      name={this._getColumnName(column)}
      value={this.query[column]}>
      <option value="">{this.display('defaultOption',{column: this.opts.headings[column]?this.opts.headings[column]:column})}</option>
      {options}
      </select>
      </div>
    }

  }

