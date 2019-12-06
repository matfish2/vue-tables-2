"use strict";

var _debounce = _interopRequireDefault(require("debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (debounceVal) {
  var search = this.source === 'client' ? this.search.bind(this, this.data) : this.serverSearch.bind(this);

  if (!debounceVal) {
    return search;
  }

  var debouncedSearch = (0, _debounce["default"])(search, debounceVal);
  return function (e) {
    // ignore tab
    if (e.keyCode === 9) return; // search immediately on enter

    if (e.keyCode === 13) {
      debouncedSearch.clear();
      search.apply(void 0, arguments);
    } else {
      debouncedSearch.apply(void 0, arguments);
    }
  };
};