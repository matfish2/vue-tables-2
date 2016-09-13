describe('Draws a server-side table', function(){
  var draw_table = require('../helpers/draw-table');
  var get_els = require('../helpers/get-els');

  var data = require('../helpers/people.js')();
  var entity = "people-server";
  var defaults = require('../../lib/config/defaults')();


  beforeAll(function(done){
    setTimeout(function() {
    servervm = draw_table(entity, data, {}, true);
      done();
    },1000);
});





  afterAll(function(){
   $("#" + entity).remove();
  });
});
