"use strict";

module.exports = function (h, classes, columns) {
  if (classes.framework === 'bulma') {
    return h("div", {
      "class": classes.dropdown.menu,
      style: this.displayColumnsDropdown ? 'display:block' : 'display:none'
    }, [h("div", {
      "class": classes.dropdown.content
    }, [columns])]);
  }

  if (classes.framework === 'bootstrap4') {
    return h("div", {
      "class": classes.dropdown.menu,
      style: this.displayColumnsDropdown ? 'display:block' : 'display:none'
    }, [columns]);
  }

  return h("ul", {
    "class": classes.dropdown.menu,
    style: this.displayColumnsDropdown ? 'display:block' : 'display:none'
  }, [columns]);
};