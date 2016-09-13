describe('Draws a client-side table', function(){

  var draw_table = require('../helpers/draw-table');
  var get_els = require('../helpers/get-els');

  var data = require('../helpers/people.js')();
  var entity = "people";
  var defaults = require('../../lib/config/defaults')();

  beforeAll(function(done){
    draw_table(entity, data,['id','name','age'], {});
    setTimeout(function(){
     els = get_els($("#"+entity));
      done();
    },1000);
});

it('counts the columns', function(){
  var countText = $("#" + entity + " .VuePagination__count").eq(0).text();
  expect(countText).toBe("100 Records");
})

it('displays the columns names', function() {

 expect(els.headings.eq(0).text()).toBe('Id');
 expect(els.headings.eq(1).text()).toBe('Name');
 expect(els.headings.eq(2).text()).toBe('Age');

});

it('displays all default texts', function() {

  var searchText = els.search.find("label").text();
  var searchPlaceholder = els.search.find("input").prop("placeholder");

 expect(searchText).toBe("Filter Results:");
 expect(searchPlaceholder).toBe("Search query");
 expect(els.limit.find("label").text()).toBe("Records:");

});

it('applys the correct skin', function() {
  expect(els.table.hasClass("table-striped")).toBe(true);
  expect(els.table.hasClass("table-bordered")).toBe(true);
  expect(els.table.hasClass("table-hover")).toBe(true);
  expect(els.table.hasClass("table-condensed")).toBe(false);

});

it('adds a sortable class to the applicable th\'s', function() {

    expect(els.ths.eq(0).hasClass("VueTables__sortable")).toBe(true);
    expect(els.ths.eq(1).hasClass("VueTables__sortable")).toBe(true);
    expect(els.ths.eq(2).hasClass("VueTables__sortable")).toBe(true);

});

it('sorts by the first column in ascending order', function() {

  var sortIcon = els.ths.eq(0).find('.glyphicon-chevron-up');
  var firstRowId = els.rows.eq(0).find("td").eq(0).text();
  var lastRowId = els.rows.last().find("td").eq(0).text();

  expect(sortIcon.length).toBe(1);
  expect(firstRowId).toBe('1');
  expect(lastRowId).toBe(String(defaults.perPage));

});

it('shows the default rows per page', function() {

  expect(els.rows.length).toBe(defaults.perPage);

});

it('display the correct number of pages', function() {
  expect(els.paginationLinks.length).toBe(14); // 10 + 2 prev + 2 next
});

  afterAll(function(){
   $("#" + entity).remove();
  });
});
