'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (useVuex, source) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;


  if (useVuex) return {
    vuex: true,
    activeState: false
  };

  var data = {
    vuex: false,
    activeState: false,
    count: 0,
    customQueries: {},
    query: null,
    page: page,
    limit: 10,
    windowWidth: window.innerWidth,
    orderBy: {
      column: false,
      ascending: true
    }
  };

  if (source == 'server') data.data = [];

  return data;
};