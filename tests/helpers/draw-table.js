  module.exports = function (id, data, columns, options, isServer) {
    var type = isServer?'server':'client';
    var dataProp = type=='client'?':data="tableData"':'url="/people"';
   // var proxyquire = require('proxyquireify')(require);
    var stubs = {
   "../../lib/methods/getData": function() {
    console.log("getting data");
  }
};

    options = options?options:{};
    $ = require('jquery');

    $(document.body).append( $('<div id="' + id + '"><h1>'+id+'</h1><v-' + type + '-table ' + dataProp + ' :options="options" :columns="columns"></v-' + type + '-table></div>'));

    var Vue = require('vue');

   var VueTables = require('../../index');
   Vue.use(VueTables[type]);

    return new Vue({
      el:"#" +id,
      data: {
       tableData:data,
       options: options,
       columns:columns
    }
  }).$children[0];
  }

