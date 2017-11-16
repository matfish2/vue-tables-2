'use strict';

module.exports = function (h, that) {

      return function (column) {

            var options = [];
            var selected = void 0;

            var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

            that.opts.listColumns[column].map(function (option) {
                  selected = option.id == that.query[column] && that.query[column] !== '';
                  options.push(h(
                        'option',
                        {
                              domProps: {
                                    'value': option.id,
                                    'selected': selected
                              }
                        },
                        [option.text]
                  ));
            });

            return h(
                  'div',
                  { 'class': 'VueTables__list-filter',
                        attrs: { id: 'VueTables__' + column + '-filter' }
                  },
                  [h(
                        'select',
                        { 'class': 'form-control',
                              on: {
                                    'change': search
                              },
                              attrs: {
                                    name: 'vf__' + column
                              },
                              domProps: {
                                    'value': that.query[column]
                              }
                        },
                        [h(
                              'option',
                              {
                                    attrs: { value: '' }
                              },
                              [that.display('defaultOption', { column: that.opts.headings[column] ? that.opts.headings[column] : column })]
                        ), options]
                  )]
            );
      };
};