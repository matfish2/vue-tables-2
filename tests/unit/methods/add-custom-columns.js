describe('add custom columns to the data', function() {
  var addCustomColumns = require('../../../lib/methods/add-custom-columns');
  var context = {
    data: [{id:1,
      firstName:"John",
      lastName:"Doe"
    },
    {
      id:2,
      firstName:"Dolly",
      lastName:"Barton"
    }],
    customColumns:['fullName'],
    $set: function(row, template) {
      var index = row.match(/\[(.*)\]/)[1];
      var templateKey = row.match(/\.(.*)/)[1];
      this.data[index][templateKey] = template;
      return row;
    },
    options: {
      templates: {
        fullName: "{firstName} {lastName}",
      }
    }
  };

  it("adds custom columns to the data", function() {
    addCustomColumns.call(context);
    expect(context.data[0].fullName).toBe("{firstName} {lastName}");
    expect(context.data[1].fullName).toBe("{firstName} {lastName}");
  });

});
