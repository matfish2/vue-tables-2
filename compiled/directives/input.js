"use strict";

module.exports = {
  twoWay: true,
  bind: function bind(el, binding, vnode) {
    el.addEventListener('keydown', function (e) {
      vnode.context[binding.value] = e.target.value;
    });
  },
  update: function update(el, binding, vnode, oldVnode) {}
};