"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (data) {
  try {
    return data.map(function (row) {
      for (var column in row) {}

      return row;
    });
  } catch (e) {
    console.log(e);
    console.error("vue-tables-2: non-iterable data property. Expected array, got ".concat(_typeof(data), ". Make sure that your response conforms to the expected format, or use the 'responseAdapter' option to match the currently returned format"));
    console.error('Data equals', data);
    throw new Error();
  }
};