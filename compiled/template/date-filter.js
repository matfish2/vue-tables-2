'use strict';

module.exports = function (h) {
  return function (column) {
    return h(
      'div',
      { 'class': 'VueTables__date-filter',
        attrs: { id: 'VueTables__' + column + '-filter' }
      },
      [h(
        'span',
        { 'class': 'VueTables__filter-placeholder' },
        [this.display('filterBy', { column: this.getHeading(column) })]
      )]
    );
  };
};