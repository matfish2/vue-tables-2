"use strict";

module.exports = function (h, that) {

    var cols = that.columns.map(function (column) {
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
                        attrs: { type: "checkbox", value: column,
                            disabled: that._onlyColumn(column)
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
        { "class": "btn-group pull-right" },
        [h(
            "button",
            {
                attrs: { type: "button" },
                "class": "btn btn-default dropdown-toggle",
                on: {
                    "click": that._toggleColumnsDropdown.bind(that)
                }
            },
            [that.display('columns'), " ", h(
                "span",
                { "class": "caret" },
                []
            )]
        ), h(
            "ul",
            { "class": "dropdown-menu", style: that.displayColumnsDropdown ? 'display:block' : 'display:none' },
            [cols]
        )]
    );
};