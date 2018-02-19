'use strict';

var debounce = require('debounce');

module.exports = function (h, inputClass) {
          var _this = this;

          var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

          var debouncedSearch = debounce(search, this.opts.debounce);

          var onKeyUp = function onKeyUp(e) {
                    e.keyCode === 13 ? debouncedSearch.flush() : debouncedSearch.apply(undefined, arguments);
          };

          return function (column) {
                    return h(
                              'input',
                              {
                                        on: {
                                                  'keyup': onKeyUp
                                        },

                                        'class': inputClass,
                                        attrs: { name: 'vf__' + column,
                                                  type: 'text',
                                                  placeholder: _this.display('filterBy', { column: _this.getHeading(column) }),
                                                  value: _this.query[column]
                                        }
                              },
                              []
                    );
          };
};