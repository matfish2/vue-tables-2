'use strict';

var debounce = require('debounce');

module.exports = function (h, inputClass) {
  var _this = this;

  var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

  if (this.opts.debounce) {
    var debouncedSearch = debounce(search, this.opts.debounce);

    var onKeyUp = function onKeyUp(e) {
      if (e.keyCode === 13) {
        debouncedSearch.clear();
        search.apply(undefined, arguments);
      } else {
        debouncedSearch.apply(undefined, arguments);
      }
    };
  }

  return function (column) {
    return h('input', {
      on: {
        'keyup': _this.opts.debounce ? onKeyUp : search
      },

      'class': inputClass,
      attrs: { name: 'vf__' + column,
        type: 'text',
        placeholder: _this.display('filterBy', { column: _this.getHeading(column) })
      },
      domProps: {
        'value': _this.query[column]
      }
    });
  };
};