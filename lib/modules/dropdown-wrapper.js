module.exports = function(h, classes, columns) {
    if (classes.framework==='bulma') {
        return <div class={classes.dropdown.menu} style={this.displayColumnsDropdown?'display:block':'display:none'}>
        <div class={classes.dropdown.content}>{columns}</div>
        </div>
    }

    if (classes.framework==='bootstrap4') {
        return <div class={classes.dropdown.menu} style={this.displayColumnsDropdown?'display:block':'display:none'}>{columns}</div>
    }

    return <ul class={classes.dropdown.menu} style={this.displayColumnsDropdown?'display:block':'display:none'}>{columns}</ul>;
}