describe('client tables with various options, ensure instance independency', function(){
  require('daterangepicker/daterangepicker');
  var draw_table = require('../helpers/draw-table');
  var get_els = require('../helpers/get-els');
  data = require('../helpers/people.js')();

  var table1 = "table1";
  var table2 = "table2";

  var defaults = require('../../lib/config/defaults')();

  beforeAll(function(done){
    vm1 = draw_table(table1, data, ['id','name','birth_date'],{
      filterByColumn:true,
      pagination:{
        chunk:5
      },
      headings: {
        id:"Identifier"
      },
      templates:{
        name: "<b @click='notCompiled()'>{name} is {age} years old</b>"
      },
      perPageValues:[5,10,20,30],
       texts:{
      count:"{count} Results",
      limit:"Per page:",
      filterBy: "Search {column}" // Placeholder for search fields when filtering by column
    },
    skin:'table-bordered',
    dateFormat:'YYYY',
    footerHeadings:true
    });

    vm2 = draw_table(table2, data, ['id','name','age'],{
      pagination: {
        dropdown:true
      },
      headings: {
        id:"Index",
        name:"der Name",
        age:"der Alter"
      },
      sortable:['id','age'],
      perPage:25,
      compileTemplates:true,
      templates: {
        custom:"<i @click='compiled()'>{id}:{age}</i>"
      },
      texts: {
        page:'select page',
        filter:"Search"
      },
      highlightMatches:true,
      skin:'table-striped table-condensed',
      orderBy: {
        column:'age',
        ascending:false
      },
      dateColumns: ['birth_date']
    });

    setTimeout(function(){
      t1 = get_els($("#"+table1));
      t2 = get_els($("#"+table2));

      done();
    },1000);
});

it('columns', function() {

 expect(t1.headings.eq(0).text()).toBe('Identifier');
 expect(t1.headings.eq(1).text()).toBe('Name');
 expect(t1.headings.eq(2).text()).toBe('Birth date');

 expect(t2.headings.eq(0).text()).toBe('Index');
 expect(t2.headings.eq(1).text()).toBe('der Name');
 expect(t2.headings.eq(2).text()).toBe('der Alter');
});

it('sortable', function() {
    expect(t1.ths.eq(1).hasClass("VueTables__sortable")).toBe(true); // t1 name
    expect(t2.ths.eq(1).hasClass("VueTables__sortable")).toBe(false); // t2 name
    expect(t2.ths.eq(4).hasClass("VueTables__sortable")).toBe(false); // t2 custom
});


it('perPage', function() {
    expect(t1.limit.find("select").val()).toBe("10");
    expect(t2.limit.find("select").val()).toBe("25");
});

it('perPageValues', function() {
   expect(t1.limit.find("select").find("option").eq(0).text()).toBe("5");
   expect(t2.limit.find("select").find("option").eq(0).text()).toBe("10");
});

it('filterByColumn',function() {
  expect(t1.search.length).toBe(0);
  expect(t1.table.find("thead").find("tr").eq(1).length).toBe(1);
  expect(t2.search.length).toBe(1);
  expect(t2.table.find("thead").find("tr").eq(1).length).toBe(0);
});

it('templates', function() {
expect(t1.headings.eq(3).length).toBe(0);
expect(t2.headings.eq(3).text()).toBe('Custom');

expect(t1.rows.eq(3).find("td").eq(1).find("span").html()).toBe('<b @click="notCompiled()">Miss Laury Farrell is 71 years old</b>');
expect(t2.rows.eq(0).find("td").eq(3).text()).toBe("49:119");

});

it("compileTemplates", function() {
expect(t2.rows.eq(1).find("td").eq(3).html()).toBe('<span class="VueTables__template"><i>41:117</i></span>');
});

it("texts", function() {

 expect(t2.search.find("label").text()).toBe("Search");
 expect(t2.search.find("input").prop("placeholder")).toBe("Search query");
 expect($("#table2 .VueTables__dropdown-pagination").find("label").text()).toBe("select page");

expect(t1.table.find("thead").find("tr").eq(1).find("th").eq(0).find("input").prop("placeholder")).toBe("Search Identifier");
expect(t1.limit.find("label").text()).toBe("Per page:");
expect($("#table1 .VuePagination__count").eq(0).text()).toBe("100 Results");

});

it("skin", function() {
  expect(t1.table.prop("class")).toBe("VueTables__table table table-bordered");
  //expect(t2.table.prop("class")).toBe("VueTables__table table table-striped table-condensed");
});

it("orderBy", function() {
  expect(t1.ths.eq(0).find(".glyphicon-chevron-up").length).toBe(1);
  expect(t2.ths.eq(2).find(".glyphicon-chevron-down").length).toBe(1);

});

it("dateFormat", function() {

  expect(t1.rows.eq(0).find("td").eq(2).text()).toBe("2013");
 });

it("pagination.chunk", function() {
  expect(t1.paginationLinks.length).toBe(9); // 5 + 2 + 2
  expect($("#table1 .VueTables__dropdown-pagination").length).toBe(0);

});

it("pagination.dropdown", function() {
  expect(t2.paginationLinks.length).toBe(0);
  expect($("#table2 .VueTables__dropdown-pagination").length).toBe(1);
});

it('footerHeadings', function() {
  expect(t1.table.find("tfoot").length).toBe(1);
  expect(t2.table.find("tfoot").length).toBe(0);
});

it('dateColumns', function() {
//  expect(t1.table.find("thead").find("tr").eq(1).find("td").eq(2).find("input[type=date]").length).toBe(1);
});

  afterAll(function(){
   $("#" + table1, "#" + table2).remove();
  });
});


