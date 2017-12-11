'use strict';

module.exports = function (h, that) {

  var perpageValues = require('./per-page-values')(h, that);

  if (perpageValues.length > 1) {

    var beforeLimit = that.$slots.beforeLimit ? that.$slots.beforeLimit : '';
    var afterLimit = that.$slots.afterLimit ? that.$slots.afterLimit : '';

    var id = 'VueTables__limit_' + that.id;
    return h(
      'div',
      { 'class': 'form-group form-inline pull-right VueTables__limit' },
      [beforeLimit, h(
        'label',
        {
          attrs: { 'for': id }
        },
        [that.display('limit')]
      ), h(
        'select',
        { 'class': 'form-control',
          attrs: { name: 'limit',

            id: id
          },
          domProps: {
            'value': that.limit
          },
          on: {
            'change': that.setLimit.bind(that)
          }
        },
        [perpageValues]
      ), afterLimit]
    );
  }

  return '';
};