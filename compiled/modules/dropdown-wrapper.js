"use strict";

module.exports = function (h, classes, columns, display) {
  if (classes.framework === 'bulma') {
    return h("div", {
      "class": classes.menu,
      style: display ? 'display:block' : 'display:none'
    }, [h("div", {
      "class": classes.content
    }, [columns])]);
  }

  if (classes.framework === 'bootstrap4') {
    return h("div", {
      "class": classes.menu,
      style: display ? 'display:block' : 'display:none'
    }, [columns]);
  }

  return h("ul", {
    "class": classes.menu,
    style: display ? 'display:block' : 'display:none'
  }, [columns]);
};