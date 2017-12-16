"use strict";

module.exports = function (h) {
    var _this = this;

    if (!this.opts.columnsDropdown) return '';

    var cols = this.columns.map(function (column) {
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
                            disabled: _this._onlyColumn(column)
                        },
                        on: {
                            "change": _this.toggleColumn.bind(_this, column)
                        },
                        domProps: {
                            "checked": _this.allColumns.includes(column)
                        }
                    },
                    []
                ), _this.getHeading(column)]
            )]
        );
    });

    return h(
        "div",
        { "class": "btn-group pull-right VueTables__columns-dropdown" },
        [h(
            "button",
            {
                attrs: { type: "button" },
                "class": "btn btn-default dropdown-toggle",
                on: {
                    "click": this._toggleColumnsDropdown.bind(this)
                }
            },
            [this.display('columns'), " ", h(
                "span",
                { "class": "caret" },
                []
            )]
        ), h(
            "ul",
            { "class": "dropdown-menu", style: this.displayColumnsDropdown ? 'display:block' : 'display:none' },
            [cols]
        )]
    );
};