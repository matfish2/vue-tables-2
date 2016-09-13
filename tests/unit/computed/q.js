describe('always return the query as a string traceable by the search filter', function() {

  var q = require('../../../lib/computed/q');

   var context = {
    query: 'find me',
      options: {
        filterByColumn:false
        }
    };

  it('should return the query as-is if it is a generic one', function() {
    var query = q.call(context);
    expect(query).toBe('find me');
  });

    it('should return a query object as a stringified JSON in case of a per-column query', function() {

      context.options.filterByColumn = true;
      context.query = {id:'1', name:'John Doe',age:'34'};
      query = q.call(context);
      expect(query).toBe('{"id":"1","name":"John Doe","age":"34"}');


  });

});

