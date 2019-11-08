import Pagination from "./components/Pagination";
import PerPageSelector from "./components/PerPageSelector"
import TableComponent from './components/DataTable';

import vuex from "./state/vuex";
import normal from "./state/normal";
import merge from "merge";
import Table from "./table";
import stateData from "./state/data";
import resizableColumns from "./helpers/resizeable-columns";

var data = require("./mixins/data");
var created = require("./mixins/created");

var templateCompiler = require("./template-compiler");
var themes = {
    bootstrap3: require('./themes/bootstrap3')(),
    bootstrap4: require('./themes/bootstrap4')(),
    bulma: require('./themes/bulma')()
};

exports.install = function (
    Vue,
    globalOptions,
    useVuex,
    theme = "bootstrap3",
) {
    var client = merge.recursive(true, Table(), {
        name: "r-l-client-table",
        components: {
            Pagination,
            PerPageSelector,
        },
        render: require('./components/renderless/RLDataTable'),
        props: {
            columns: {
                type: Array,
                required: true
            },
            data: {
                type: Array,
                required: true
            },
            name: {
                type: String,
                required: false
            },
            options: {
                type: Object,
                required: false,
                default: function () {
                    return {};
                }
            }
        },
        provide() {
            return {
                count: () => this.count,
                rowWasClicked: this.rowWasClicked,
                render: this.render,
                opts: () => this.opts,
                limit: () => this.limit,
                setLimit: this.setLimit,
                perPageValues: () => this.perPageValues,
                page: () => this.page,
                id: this.id,
                theme: this.theme,
                display: this.display,
                origColumns: this.columns,
                allColumns: () => this.allColumns,
                sortableClass: this.sortableClass,
                getHeadingTooltip: this.getHeadingTooltip,
                getHeading: this.getHeading,
                sortable: this.sortable,
                sortableChevronClass: this.sortableChevronClass,
                orderByColumn: this.orderByColumn,
                filteredData: () => this.filteredData,
                tableData: () => this.tableData,
                source: this.source,
                colspan: this.colspan,
                setEditingCell: this._setEditingCell,
                revertValue: this._revertValue,
                updateValue: this._updateValue,
                editing: () => this.editing,
                hasChildRow: () => this.hasChildRow,
                getChildRowTemplate: this._getChildRowTemplate,
                openChildRows: () => this.openChildRows,
                vuex: this.vuex,
                name: this.name,
                // onPagination: this._onPagination,
                setPage: this.setPage,
                totalPages: () => this.totalPages,
                query: () => this.query,
                filterable: this.filterable,
                filterType: this._filterType,
                columnClass: this.columnClass,
                search: this._search,
                getColumnName: this._getColumnName,
                onlyColumn: this._onlyColumn,
                toggleColumn: this.toggleColumn,
                toggleColumnsDropdown: this._toggleColumnsDropdown,
                displayColumnsDropdown: () => this.displayColumnsDropdown
            }
        },

        created: function () {
            created(this);

            if (this.opts.toMomentFormat) this.transformDateStringsToMoment();

            if (!this.vuex) {
                this.initOrderBy();

                this.query = this.initQuery();

                this.customQueries = this.initCustomFilters();
            }
        },

        mounted: function () {

            if (this.opts.resizableColumns) {
              resizableColumns(
                this.$el.querySelector("table"),
                this.hasChildRow,
                this.opts.childRowTogglerFirst
              );
            }

            // this._setColumnsDropdownCloseListener();

            if (!this.vuex) {
                this.registerClientFilters();

                if (this.options.initialPage) this.setPage(this.options.initialPage);
            }

            if (this.opts.groupBy && !this.opts.orderBy) {
                this.orderBy.column = this.opts.groupBy;
            }

            this.loadState();

            if (this.hasDateFilters()) {
                this.initDateFilters();
            }
        },
        model: {
            prop: "data"
        },
        data: function () {
            return merge.recursive(
                data(),
                {
                    source: "client",
                    theme: themes[theme],
                    globalOptions,
                    currentlySorting: {},
                    time: Date.now()
                },
                stateData(useVuex, "client", this.options.initialPage)
            );
        },
        computed: {
            q: require("./computed/q"),
            customQ: require("./computed/custom-q"),
            totalPages: require("./computed/total-pages"),
            filteredData: require("./computed/filtered-data"),
            hasMultiSort() {
                return this.opts.clientMultiSorting;
            }
        },
        methods: {
            transformDateStringsToMoment: require("./methods/transform-date-strings-to-moment"),
            registerClientFilters: require("./methods/register-client-filters"),
            search: require("./methods/client-search"),
            defaultSort: require("./methods/default-sort"),
            getGroupSlot: require("./methods/get-group-slot"),
            toggleGroup(group, e) {
                e.stopPropagation();

                var i = this.collapsedGroups.indexOf(group);
                if (i >= 0) {
                    this.collapsedGroups.splice(i, 1);
                } else {
                    this.collapsedGroups.push(group);
                }
            },
            groupToggleIcon(group) {
                var cls = this.opts.sortIcon.base + " ";
                cls +=
                    this.collapsedGroups.indexOf(group) > -1
                        ? this.opts.sortIcon.down
                        : this.opts.sortIcon.up;

                return cls;
            },
            loadState() {
                if (!this.opts.saveState) return;

                if (!this.storage.getItem(this.stateKey)) {
                    this.initState();
                    this.activeState = true;
                    return;
                }

                var state = JSON.parse(this.storage.getItem(this.stateKey));

                if (this.opts.filterable) this.setFilter(state.query);

                this.setOrder(state.orderBy.column, state.orderBy.ascending);

                if (this.vuex) {
                    this.commit("SET_LIMIT", state.perPage);
                } else {
                    this.limit = state.perPage;
                }

                this.setPage(state.page);

                this.activeState = true;

                if (state.userControlsColumns) {
                    this.userColumnsDisplay = state.userColumnsDisplay;
                    this.userControlsColumns = state.userControlsColumns;
                }

                // TODO: Custom Queries
            }
        }
    });

    let state = useVuex ? vuex() : normal();

    client = merge.recursive(client, state);

    Vue.component("r-l-data-table", client);
    Vue.component("v-client-table", TableComponent);

    return TableComponent;
};
