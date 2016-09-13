// TEST ME
// module.exports = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }


describe('ucfirst', function() {
    var ucfirst = require('../../../lib/helpers/ucfirst');
    var context = "nadine";

    it("capitalizes the first letter", function() {

      var res = ucfirst.call(context);

      expect(res).toBe("Nadine");

    });

});
