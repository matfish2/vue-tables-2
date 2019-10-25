"use strict";

module.exports = {
  listColumnsObject: require('../computed/list-columns-object'),
  allColumns: require('../computed/all-columns'),
  templatesKeys: require('../computed/templates-keys'),
  opts: require('../computed/opts'),
  tableData: require('../computed/table-data'),
  storage: require('../computed/storage'),
  filterableColumns: require('../computed/filterable-columns'),
  datepickerColumns: require('../computed/datepicker-columns'),
  hasChildRow: require('../computed/has-child-row'),
  colspan: require('../computed/colspan'),
  hasGenericFilter: require('../computed/has-generic-filter'),
  stateKey: function stateKey() {
    var key = this.name ? this.name : this.id;
    return 'vuetables_' + key;
  },
  Page: function Page() {
    return this.page;
  }
};