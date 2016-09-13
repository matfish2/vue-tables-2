describe('user interaction - default', function(){

  var draw_table = require('../helpers/draw-table');
  var get_els = require('../helpers/get-els');
  var user_event = require('../helpers/user-event');

  var data = require('../helpers/people.js')();
  entity = "my-table";
  var defaults = require('../../lib/config/defaults')();

  beforeAll(function(done){
    vm = draw_table(entity, data,['id', 'name','age'], {});
    setTimeout(function(){
     els = get_els($("#"+entity));
      done();
    },1000);
});

it('filters the records and is case-insensitive', function(done) {

    user_event(function(vm) {
      vm.query = "caRol";
    }, function(els) {
       name = els.rows.eq(0).find("td").eq(1).text();
      expect(els.rows.length).toBe(1);
      expect(name).toBe("Carolina Fahey");
      vm.query = "";
    }, done);

});

it('sets the page', function(done) {
  user_event(function(vm) {
    vm.page = 3;
  }, function(els) {
    expect(els.rows.eq(0).find("td").eq(1).text()).toBe("Jaida Rohan");
    vm.page = 1;
  }, done)
});

it('sets records per page', function(done) {
    user_event(function(vm) {
    vm.limit = 25;
  }, function(els) {
    expect(els.rows.length).toBe(25);
    vm.limit = 10;
  }, done)
});

it('sorts', function(done) {
    user_event(function(vm) {
    vm.orderBy.column = 'name';
    vm.orderBy.ascending = -1;
  }, function(els) {
    expect(els.rows.eq(0).find("td").eq(1).text()).toBe('Walton Buckridge');
    vm.orderBy.column = 'id';
    vm.orderBy.ascending = 1;
  }, done)
});

  afterAll(function(){
   $("#" + entity).remove();
  });
});
