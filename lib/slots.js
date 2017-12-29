module.exports = function() {
    return {
     beforeFilters: this.$slots.beforeFilters?this.$slots.beforeFilters:'',
     afterFilters: this.$slots.afterFilters?this.$slots.afterFilters:'',
     beforeBody: this.$slots.beforeBody?this.$slots.beforeBody:'', 
     prependBody: this.$slots.prependBody?this.$slots.prependBody:'', 
     appendBody: this.$slots.appendBody?this.$slots.appendBody:'', 
     afterBody: this.$slots.afterBody?this.$slots.afterBody:'', 
     beforeTable: this.$slots.beforeTable?this.$slots.beforeTable:'', 
     prependFilterContainer: this.$slots.prependFilterContainer?this.$slots.prependFilterContainer:'',     
     appendFilterContainer: this.$slots.appendFilterContainer?this.$slots.appendFilterContainer:'', 
     prependLimitContainer: this.$slots.prependLimitContainer?this.$slots.prependLimitContainer:'', 
     appendLimitContainer: this.$slots.appendLimitContainer?this.$slots.appendLimitContainer:'' 
    }
}