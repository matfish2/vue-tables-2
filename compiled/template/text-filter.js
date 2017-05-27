"use strict";

module.exports = function (h, that) {

      var search = that.source == 'client' ? that.search.bind(that, that.data) : that.serverSearch.bind(that);

      return function (column) {
            return h(
                  "input",
                  {
                        on: {
                              keyup: search
                        },

                        "class": "form-control",
                        attrs: { name: column,
                              type: "text",
                              placeholder: that.display('filterBy', { column: that.getHeading(column) }),
                              value: that.query[column]
                        }
                  },
                  []
            );
      };
};