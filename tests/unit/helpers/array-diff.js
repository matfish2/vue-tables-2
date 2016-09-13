describe('calculate the diffrence between arrays', function() {
    var arrayDiff = require('../../../lib/helpers/array-diff');
    var context = [1,2,3];

    it("returns the differnece between two arrays", function() {
      var res = arrayDiff.call(context, [3,4,5]);
      expect(res).toEqual([1,2]);
      res = arrayDiff.call(context, [1]);
      expect(res).toEqual([2,3]);

    });

});

