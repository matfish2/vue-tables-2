 module.exports = function() {
  return {
   dateColumns:[],
   listColumns:{},
   datepickerOptions:{
    locale: {
      cancelLabel:'Clear'
    }
  },
  initialPage:1,
  perPage:10,
  perPageValues:[10,25,50,100],
  params:{},
  sortable:true,
  filterable:true,
  initFilters:{},
  customFilters:[],
  templates:{},
  debounce:250,
  dateFormat:"DD/MM/YYYY",
  toMomentFormat:false,
  skin:"table-striped table-bordered table-hover",
  columnsDisplay: {},
  texts:{
   count:"Showing {from} to {to} of {count} records|{count} records|One record",
   filter:"Filter Results:",
   filterPlaceholder:"Search query",
   limit:"Records:",
   page:"Page:",
   noResults:"No matching records",
   filterBy:"Filter by {column}",
   loading:'Loading...',
   defaultOption:'Select {column}',
   columns:'Columns'
 },
 sortIcon:{
  is:'glyphicon-sort',
  base:'glyphicon',
  up: 'glyphicon-chevron-up',
  down: 'glyphicon-chevron-down'
},
sortingAlgorithm(data, column) { 
  return data.sort(this.getSortFn(column));
},
customSorting:{},
multiSorting:{},
clientMultiSorting:true,
serverMultiSorting:false,
filterByColumn:false,
highlightMatches:false,
orderBy:false,
footerHeadings:false,
headings:{},
headingsTooltips:{},
pagination: {
  dropdown:false,
  chunk:10
},
childRow: false,
childRowTogglerFirst:true,
uniqueKey:'id',
requestFunction:false,
requestAdapter: function(data) {
    return data;
},
responseAdapter: function(resp) {
  return {
    data: resp.data,
    count: resp.count
  }
},
requestKeys:{
 query:'query',
 limit:'limit',
 orderBy:'orderBy',
 ascending:'ascending',
 page:'page',
 byColumn:'byColumn'
},
rowClassCallback: false,
preserveState: false,
saveState: false,
storage:'local',
columnsClasses:{}
}
}
