module.exports = function(obj) {
  var count = 0;
  for (var prop in obj) {
    var isDateRange = typeof obj[prop] == 'object';
    if (isDateRange || (obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim()))) count++;
  }
  return count;
}
