module.exports = function(column, start, end) {

    var dateFormat = this.dateFormat(column);
    var el = typeof column==='string'?$(this.$el).find(`#VueTables__${column}-filter`):column;

    el.text(start.format(dateFormat) + " - " + end.format(dateFormat));
}