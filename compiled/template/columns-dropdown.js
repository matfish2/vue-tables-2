"use strict";

module.exports = function (h, that) {

    var columns = that.columns.map(function (column) {
        return h(
            "li",
            null,
            [h(
                "a",
                {
                    attrs: { href: "#" }
                },
                [h(
                    "input",
                    {
                        attrs: { type: "checkbox", value: column
                        },
                        on: {
                            "change": that.toggleColumn.bind(that, column)
                        },
                        domProps: {
                            "checked": that.allColumns.includes(column)
                        }
                    },
                    []
                ), that.getHeading(column)]
            )]
        );
    });

    return h(
        "div",
        { "class": "btn-group" },
        [h(
            "button",
            {
                attrs: { type: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                "class": "btn btn-default dropdown-toggle" },
            [that.display('columns'), " ", h(
                "span",
                { "class": "caret" },
                []
            )]
        ), h(
            "ul",
            { "class": "dropdown-menu" },
            [columns]
        )]
    );
};