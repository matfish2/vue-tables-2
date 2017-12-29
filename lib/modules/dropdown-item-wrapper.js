module.exports = function(h, classes, item) {
    if (classes.framework==='bulma') {
        return item;
    }

    return <li>{item}</li>
}