'use strict';

module.exports = {
    listColumnsObject: require('../computed/list-columns-object'),
    allColumns: require('../computed/all-columns'),
    templatesKeys: require('../computed/templates-keys'),
    opts: require('../computed/opts'),
    tableData: require('../computed/table-data'),
    storage: require('../computed/storage'),
    stateKey: function stateKey() {
        var key = this.name ? this.name : this.id;
        return 'vuetables_' + key;
    },

    Page: function Page() {
        return this.page;
    }
};