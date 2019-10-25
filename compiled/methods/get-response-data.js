"use strict";

module.exports = function (response) {
  if (typeof axios !== 'undefined') return response.data;
  return response;
};