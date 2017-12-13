module.exports = function() {

  var display = this.columnsDisplay;

  // default - return all columns

  if (!display && !this.userControlsColumns) {
    return this.Columns;
  } 

  // user toggled columns - return user selected columns

  if (this.userControlsColumns) {
    return this.columns.filter(column=>this.userColumnsDisplay.includes(column));
  }

// developer defined columns display

return this.Columns.filter(column => {

  if (!display[column]) return true;
  
       var range = display[column];
       var operator = range[2];
  
       var inRange = (!range[0] || this.windowWidth>=range[0]) &&
                     (!range[1] || this.windowWidth<range[1]);
  
       return operator=='not'?!inRange:inRange;
    });
  
}

