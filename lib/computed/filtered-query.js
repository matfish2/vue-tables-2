module.exports = function() {

    if (typeof this.query!=='object' || this.opts.sendEmptyFilters) {
        return this.query;
      }
    
    var result = {};

    for (var key in this.query) {
        if (this.query[key]!=='') {
            result[key] = this.query[key];
        }
    }

    return result;

}