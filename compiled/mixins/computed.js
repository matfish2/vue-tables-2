'use strict';

module.exports = {
  listColumnsObject: require('../computed/list-columns-object'),
  allColumns: require('../computed/all-columns'),
  templatesKeys: require('../computed/templates-keys'),
  opts: require('../computed/opts'),
  tableData: require('../computed/table-data'),
  vuex: function vuex() {
    return !!this.name;
  },
  Page: function Page() {
    return this.page;
  }
};