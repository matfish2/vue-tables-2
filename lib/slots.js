module.exports = function() {
    return {
     beforeFilters: this.$slots.beforeFilters?this.$slots.beforeFilters:'',
     afterFilters: this.$slots.afterFilters?this.$slots.afterFilters:'',
     beforeBody: this.$slots.beforeBody?this.$slots.beforeBody:'', 
     prependBody: this.$slots.prependBody?this.$slots.prependBody:'', 
     appendBody: this.$slots.appendBody?this.$slots.appendBody:'', 
     afterBody: this.$slots.afterBody?this.$slots.afterBody:'', 
     beforeFilter:this.$slots.beforeFilter?this.$slots.beforeFilter:'',
     afterFilter:this.$slots.afterFilter?this.$slots.afterFilter:'',
     beforeLimit:this.$slots.beforeLimit?this.$slots.beforeLimit:'',
     afterLimit:this.$slots.afterLimit?this.$slots.afterLimit:'',
     beforeTable: this.$slots.beforeTable?this.$slots.beforeTable:''
    }
}