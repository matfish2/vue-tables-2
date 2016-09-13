module.exports = {
     twoWay: true,
    bind: function(el, binding, vnode) {

      el.addEventListener('keydown', function(e) {
        vnode.context[binding.value] = e.target.value;
      });
    },

    update: function(el, binding, vnode, oldVnode) {

    }

}

