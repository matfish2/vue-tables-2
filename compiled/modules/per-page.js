'use strict';

module.exports = function (h) {
  var _this = this;

  var perpageValues = require('./per-page-values').call(this, h);

  return function (cls, id) {

    return perpageValues.length > 1 ? h(
      'select',
      { 'class': cls,
        attrs: { name: 'limit',

          id: id
        },
        domProps: {
          'value': _this.limit
        },
        on: {
          'change': _this.setLimit.bind(_this)
        }
      },
      [perpageValues]
    ) : '';
  };
};