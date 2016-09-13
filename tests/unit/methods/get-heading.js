describe('get haedings', function() {
    var getHeading = require('../../../lib/methods/get-heading');
     var context = {
        options: {
          headings: {
            age:"Alter"
          }
        }
      };

    it("returns the heading if specified", function() {
      expect(getHeading.call(context, "age")).toBe("Alter");
    });

    it("creates the heading if it does not exists", function() {

      expect(getHeading.call(context,"undefined_heading")).toBe('Undefined heading');
    });

});

