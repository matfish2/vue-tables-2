module.exports = {
    listColumnsObject: require('../computed/list-columns-object'),
    allColumns: require('../computed/all-columns'),
    customColumns: require('../computed/custom-columns'),
    templatesKeys: require('../computed/templates-keys'),
    opts: require('../computed/opts'),
    tableData: require('../computed/table-data'),
    vuex: function() {
      return !!this.name
    }
}
