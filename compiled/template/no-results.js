"use strict";

module.exports = function (h, that) {
  if (that.count == 0) {

    var colspan = that.allColumns.length;
    if (that.hasChildRow) colspan++;

    return h(
      "tr",
      { "class": "VueTables__no-results" },
      [h(
        "td",
        { "class": "text-center",
          attrs: { colspan: colspan }
        },
        [!that.loading && that.opts.templates._main && that.opts.templates._main.noresult ? that.opts.templates._main.noresult(h) : that.display(that.loading ? 'loading' : 'noResults')]
      )]
    );
  }
};