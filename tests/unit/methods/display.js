describe('display text', function() {
    var display = require('../../../lib/methods/display');
     var context = {
      options: {
         texts: {
          hello:"Hello {someone}",
          records:"results"
        }
      }

      }

    it("returns the rendered text", function() {
      expect(display.call(context,'hello','world')).toBe("Hello world");
      expect(display.call(context,'records')).toBe("results");

    });



});
