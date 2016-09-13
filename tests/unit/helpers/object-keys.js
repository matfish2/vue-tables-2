describe('object keys', function() {
    var objectKeys = require('../../../lib/helpers/object-keys');

    it("returns an array of object keys", function() {
      var res = objectKeys({
        one:'five',
        two:'six',
        three:'six',
        four:'seven'
      });

      expect(res).toEqual(['one','two','three','four']);

    });

});
