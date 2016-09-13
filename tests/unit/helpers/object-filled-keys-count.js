// This is used to determine the total queries in case of per column filters
describe('object filled keys count', function() {
    var objectFilledKeysCount = require('../../../lib/helpers/object-filled-keys-count');

    it("counts the properties that has values", function() {
      var res = objectFilledKeysCount({
        id:'',
        name:'sandra',
        age:'',
        grade:'90'
      });

      expect(res).toBe(2);

    });

});

