describe('user interaction - custom', function(){
  window.$ = require('jquery');
  var draw_table = require('../helpers/draw-table');
  var get_els = require('../helpers/get-els');
  var user_event = require('../helpers/user-event');

  var data = require('../helpers/people.js')();
  var entity = "my-table2";
  var defaults = require('../../lib/config/defaults')();

  beforeAll(function(done){
    vm = draw_table(entity, data,['id','name','age'], {
      filterByColumn:true,
      highlightMatches:true,
      pagination: {
        dropdown:true
      }
    });

    setTimeout(function(){
      done();
    },1000);
  });

  it('filters the records and is case-insensitive', function(done) {

    user_event(function(vm) {
      vm.query = {id: '2', name: 'sO', age: ''};
    }, function(els) {
     var id = els.rows.eq(0).find("td").eq(0).html();
     var name = els.rows.eq(0).find("td").eq(1).html();
     expect(els.rows.length).toBe(2);
     expect(id).toBe('20');
     expect(name).toBe('Janelle Wisoky');
     vm.query = {id: '', name: '', age: ''};
   }, done);

  });


  afterAll(function(){
   $("#my-table2").remove();
 });
});
