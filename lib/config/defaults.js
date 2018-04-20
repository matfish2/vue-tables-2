 module.exports = function() {
  return {
   dateColumns:[],
   listColumns:{},
   datepickerOptions:{
    locale: {
      cancelLabel:'Clear'
    }
  },
  datepickerPerColumnOptions:{},
  initialPage:1,
  perPage:10,
  perPageValues:[10,25,50,100],
  groupBy:false,
  collapseGroups:false,
  params:{},
  sortable:true,
  filterable:true,
  groupMeta:[],
  initFilters:{},
  customFilters:[],
  templates:{},
  debounce:250,
  dateFormat:"DD/MM/YYYY",
  dateFormatPerColumn:{},  
  toMomentFormat:false,
  skin:false,
  columnsDisplay: {},
  columnsDropdown: false,  
  texts:{
   count:"Showing {from} to {to} of {count} records|{count} records|One record",
   first:'First',
   last:'Last',
   filter:"Filter:",
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
descOrderColumns:[],
footerHeadings:false,
headings:{},
headingsTooltips:{},
pagination: {
  dropdown:false,
  chunk:10,
  edge:false,
  align:'center',
  nav:'fixed'
},
childRow: false,
childRowTogglerFirst:true,
uniqueKey:'id',
requestFunction:false,
requestAdapter: function(data) {
    return data;
},
responseAdapter: function(resp) {

  var data = this.getResponseData(resp);

  return {
    data: data.data,
    count: data.count
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
