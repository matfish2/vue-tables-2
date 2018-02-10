module.exports = function(data) {
try {
  return data.map(row => {
    for (var column in row) {
 
     if (this.source==='client')
       row[column] = this.formatDate(row[column], this.opts.dateFormat);
 
     if (this.isListFilter(column) && !this.opts.templates[column] && !this.$scopedSlots[column]) {
       row[column] = this.optionText(row[column], column);
     }
 
   }
 
   return row;
 });
} catch (e) {
  console.error(`vue-tables-2: non-iterable data property. Expected array, got ${typeof data}. Make sure that your response conforms to the expected format, or use the 'responseAdapter' option to match the currently returned format`);
  console.error('Data equals', data);
  throw new Error();
}
  
}
