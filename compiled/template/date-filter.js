'use strict';

module.exports = function (h, that) {
  return function (column) {
    return h(
      'div',
      { 'class': 'VueTables__date-filter',
        attrs: { id: 'VueTables__' + column + '-filter' }
      },
      [h(
        'span',
        { 'class': 'VueTables__filter-placeholder' },
        [that.display('filterBy', { column: that.getHeading(column) })]
      )]
    );
  };
};