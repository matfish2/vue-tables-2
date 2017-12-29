"use strict";

module.exports = function (h) {
  if (this.count === 0) {

    var colspan = this.allColumns.length;
    if (this.hasChildRow) colspan++;

    return h(
      "tr",
      { "class": "VueTables__no-results" },
      [h(
        "td",
        { "class": "text-center",
          attrs: { colspan: colspan }
        },
        [this.display(this.loading ? 'loading' : 'noResults')]
      )]
    );
  }
};