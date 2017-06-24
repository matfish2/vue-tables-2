'use strict';

var debounce = require('debounce');

module.exports = function (h, that) {

      var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

      return function (column) {
            return h(
                  'input',
                  {
                        on: {
                              keyup: debounce(search, that.opts.debounce)
                        },

                        'class': 'form-control',
                        attrs: { name: 'vf__' + column,
                              type: 'text',
                              placeholder: that.display('filterBy', { column: that.getHeading(column) }),
                              value: that.query[column]
                        }
                  },
                  []
            );
      };
};