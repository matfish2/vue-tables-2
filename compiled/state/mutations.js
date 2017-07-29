'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (self) {
  var _ref2, _merge$recursive;

  var extra = self.source == 'server' ? (_ref2 = {}, _defineProperty(_ref2, self.name + '/SET_DATA', function undefined(state, _ref) {
    var data = _ref.data,
        count = _ref.count;

    state.data = data;
    state.count = parseInt(count);
  }), _defineProperty(_ref2, self.name + '/LOADING', function undefined(state, payload) {}), _defineProperty(_ref2, self.name + '/LOADED', function undefined(state, payload) {}), _defineProperty(_ref2, self.name + '/ERROR', function undefined(state, payload) {}), _ref2) : _defineProperty({}, self.name + '/SET_COUNT', function undefined(state, count) {
    state.count = count;
  });

  return _merge2.default.recursive(true, (_merge$recursive = {}, _defineProperty(_merge$recursive, self.name + '/PAGINATE', function undefined(state, page) {
    state.page = page;
    self.updateState('page', page);

    if (self.source == 'server') self.getData();

    self.commit('PAGINATION', page);
  }), _defineProperty(_merge$recursive, self.name + '/SET_FILTER', function undefined(state, filter) {
    state.page = 1;

    self.updateState('page', 1);

    state.query = filter;

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, self.name + '/PAGINATION', function undefined(state, page) {}), _defineProperty(_merge$recursive, self.name + '/SET_CUSTOM_FILTER', function undefined(state, _ref4) {
    var filter = _ref4.filter,
        value = _ref4.value;


    state.page = 1;
    self.updateState('page', 1);
    state.customQueries[filter] = value;

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, self.name + '/SET_STATE', function undefined(state, _ref5) {
    var page = _ref5.page,
        query = _ref5.query,
        customQueries = _ref5.customQueries,
        limit = _ref5.limit,
        orderBy = _ref5.orderBy;

    state.customQueries = customQueries;
    state.query = query;
    state.page = page;
    state.limit = limit;
    state.ascending = orderBy.ascending;
    state.sortBy = orderBy.column;
  }), _defineProperty(_merge$recursive, self.name + '/SET_LIMIT', function undefined(state, limit) {
    state.page = 1;
    self.updateState('page', 1);

    state.limit = limit;

    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, self.name + '/SORT', function undefined(state, _ref6) {
    var column = _ref6.column,
        ascending = _ref6.ascending;


    state.ascending = ascending;
    state.sortBy = column;

    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, self.name + '/ROW_CLICK', function undefined(state, row) {}), _defineProperty(_merge$recursive, self.name + '/FILTER', function undefined(state, row) {}), _merge$recursive), extra);
};

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }