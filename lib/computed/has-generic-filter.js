module.exports = function() {
    return !this.opts.filterByColumn && (
        (typeof this.opts.filterable==='boolean' && this.opts.filterable) || 
        (typeof this.opts.filterable==='object' && this.opts.filterable.length));
}