module.exports = function(a) {
    return this.filter?this.filter(function(i) {return a.indexOf(i) < 0;}):[];
}
