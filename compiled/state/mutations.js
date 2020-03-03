"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _merge = _interopRequireDefault(require("merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default(self) {
  var _ref, _merge$recursive;

  var extra = self.source == 'server' ? (_ref = {}, _defineProperty(_ref, "".concat(self.name, "/SET_DATA"), function SET_DATA(state, response) {
    var data = self.opts.responseAdapter.call(self, response);
    state.data = data.data;
    state.count = parseInt(data.count);
  }), _defineProperty(_ref, "".concat(self.name, "/LOADING"), function LOADING(state, payload) {}), _defineProperty(_ref, "".concat(self.name, "/LOADED"), function LOADED(state, payload) {}), _defineProperty(_ref, "".concat(self.name, "/ERROR"), function ERROR(state, payload) {}), _defineProperty(_ref, "".concat(self.name, "/SET_COUNT"), function SET_COUNT(state, count) {
    state.count = count;
  }), _ref) : _defineProperty({}, "".concat(self.name, "/SET_COUNT"), function SET_COUNT(state, count) {
    state.count = count;
  });
  return _merge["default"].recursive(true, (_merge$recursive = {}, _defineProperty(_merge$recursive, "".concat(self.name, "/PAGINATE"), function PAGINATE(state, page) {
    state.page = page;
    self.updateState('page', page);
    if (self.source == 'server') self.getData();
    self.commit('PAGINATION', page);
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_FILTER"), function SET_FILTER(state, filter) {
    state.page = 1;
    self.updateState('page', 1);
    state.query = filter;

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/PAGINATION"), function PAGINATION(state, page) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_CUSTOM_FILTER"), function SET_CUSTOM_FILTER(state, _ref3) {
    var filter = _ref3.filter,
        value = _ref3.value;
    state.customQueries[filter] = value;
    state.page = 1;
    self.updateState('page', 1);
    self.updateState('customQueries', state.customQueries);

    if (self.source == 'server') {
      self.getData();
    }
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_STATE"), function SET_STATE(state, _ref4) {
    var page = _ref4.page,
        query = _ref4.query,
        customQueries = _ref4.customQueries,
        limit = _ref4.limit,
        orderBy = _ref4.orderBy;
    state.customQueries = customQueries;
    state.query = query;
    state.page = page;
    state.limit = limit;
    state.ascending = orderBy.ascending;
    state.sortBy = orderBy.column;
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SET_LIMIT"), function SET_LIMIT(state, limit) {
    state.page = 1;
    self.updateState('page', 1);
    state.limit = limit;
    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SORT"), function SORT(state, _ref5) {
    var column = _ref5.column,
        ascending = _ref5.ascending;
    state.ascending = ascending;
    state.sortBy = column;
    if (self.source == 'server') self.getData();
  }), _defineProperty(_merge$recursive, "".concat(self.name, "/SORTED"), function SORTED(state, data) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/ROW_CLICK"), function ROW_CLICK(state, row) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/FILTER"), function FILTER(state, row) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/LIMIT"), function LIMIT(state, limit) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/INPUT"), function INPUT(state, payload) {}), _defineProperty(_merge$recursive, "".concat(self.name, "/UPDATE"), function UPDATE(state, payload) {}), _merge$recursive), extra);
}