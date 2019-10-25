"use strict";

module.exports = function (h, classes, item) {
  if (classes.framework === 'bulma') {
    return item;
  }

  return h("li", [item]);
};