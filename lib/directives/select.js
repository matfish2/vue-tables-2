module.exports = {
     twoWay: true,
    bind: function(el, binding, vnode) {
      el.addEventListener('change', function(e) {
        console.log("SELECT CHANGE");
        vnode.context[binding.value.name] = e.target.value;
        binding.value.cb.call(this, binding.value.params);
      });
    },

    update: function(el, binding, vnode, oldVnode) {
         // el.value = vnode.context[binding.value];
         // console.log(binding.value + " was updated");
      //  vnode.context[binding.value] = el.value;

    }

}

