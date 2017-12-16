'use strict';

module.exports = function (h) {

      return function (column) {

            var options = [];
            var selected = void 0;

            var search = this.source == 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

            this.opts.listColumns[column].map(function (option) {
                  selected = option.id == this.query[column] && this.query[column] !== '';
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
                                    'value': this.query[column]
                              }
                        },
                        [h(
                              'option',
                              {
                                    attrs: { value: '' }
                              },
                              [this.display('defaultOption', { column: this.opts.headings[column] ? this.opts.headings[column] : column })]
                        ), options]
                  )]
            );
      };
};