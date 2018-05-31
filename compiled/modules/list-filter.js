'use strict';

module.exports = function (h, selectClass) {
      var _this = this;

      return function (column) {

            var options = [];
            var selected = void 0;

            var search = _this.source == 'client' ? _this.search.bind(_this, _this.data) : _this.serverSearch.bind(_this);

            var displayable = _this.opts.listColumns[column].filter(function (item) {
                  return !item.hide;
            });

            displayable.map(function (option) {
                  selected = option.id == _this.query[column] && _this.query[column] !== '';
                  options.push(h(
                        'option',
                        {
                              attrs: { value: option.id },
                              domProps: {
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
                        { 'class': selectClass,
                              on: {
                                    'change': search
                              },
                              attrs: {
                                    name: 'vf__' + column,
                                    value: _this.query[column] }
                        },
                        [h(
                              'option',
                              {
                                    attrs: { value: '' }
                              },
                              [_this.display('defaultOption', { column: _this.opts.headings[column] ? _this.opts.headings[column] : column })]
                        ), options]
                  )]
            );
      };
};