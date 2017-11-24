module.exports = function(rowId, e) {

  if (e) e.stopPropagation();

  if (this.openChildRows.includes(rowId)) {
  	this.openChildRows.$remove(rowId);
  } else {
  	this.openChildRows.push(rowId);
  }
}
