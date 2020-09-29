import VtPerPageSelector from './VtPerPageSelector'
import VtTable from './VtTable'
import VtPagination from "./VtPagination";
import VtDropdownPagination from "./VtDropdownPagination";
import VtGenericFilter from "./VtGenericFilter";
import VtColumnsDropdown from "./VtColumnsDropdown";

export default {
    name: 'VtServerTable',
    components: {
        VtPerPageSelector,
        VtTable,
        VtPagination,
        VtDropdownPagination,
        VtColumnsDropdown,
        VtGenericFilter
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        url: {
            type: String,
            required: false
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
    computed: {
        customQueries: {
            get() {
                return this.$refs.table.customQueries;
            },
            set(val) {
                this.$refs.table.customQueries = val;
            }
        },
        data() {
            return this.$refs.table.tableData
        },
        filtersCount() {
            return this.$refs.table.filtersCount
        }
    },
    methods: {
        refresh() {
            this.$refs.table.refresh();
        },
        getData() {
            return this.$refs.table.getData();
        },
        setFilter(val) {
            this.$refs.table.setFilter(val);
        },
        setPage(val) {
            this.$refs.table.setPage(val);
        },
        setOrder(column, asc) {
            this.$refs.table.setOrder(column, asc);
        },
        setLimit(limit) {
            this.$refs.table.setLimit(limit);
        },
        toggleChildRow(rowId) {
            this.$refs.table.toggleChildRow(rowId);
        },
        getOpenChildRows(rows = null) {
            return this.$refs.table.getOpenChildRows(rows);
        },
        getResponseData(response) {
            return this.$refs.table.getResponseData(response);
        },
        resetQuery() {
            this.$refs.table.resetQuery()
        },
        resetCustomFilters: require('../methods/reset-custom-filters')
    },
    provide() {
        return {
            scopedSlots: () => this.$scopedSlots,
            slots: () => this.$slots
        }
    },
    model: {
        prop: "data"
    },
    render(h) {
        return <r-l-server-table url={this.url} columns={this.columns} name={this.name} options={this.options}
                                 ref="table" scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {
                        attrs: {props}
                    }) : <div class={"VueTables VueTables--" + props.source}>

                        <div class={props.theme.row}>
                            <div class={props.theme.column}>
                                {!props.opts.filterByColumn && props.opts.filterable ?
                                    <div
                                        class={`${props.theme.field} ${props.theme.inline} ${props.theme.left} VueTables__search`}>
                                        {props.slots.beforeFilter}
                                        <vt-generic-filter ref="genericFilter"/>
                                        {props.slots.afterFilter}
                                    </div> : ''}
                                {props.slots.afterFilterWrapper}

                                {props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect ? <div
                                    class={`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__limit`}>
                                    {props.slots.beforeLimit}
                                    <vt-per-page-selector/>
                                    {props.slots.afterLimit}
                                </div> : ''}

                                {props.opts.pagination.dropdown && props.totalPages > 1 ?
                                    <div class="VueTables__pagination-wrapper">
                                        <div
                                            class={`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__dropdown-pagination`}>
                                            <vt-dropdown-pagination/>
                                        </div>
                                    </div> : ''}

                                {props.opts.columnsDropdown ? <div
                                    class={`VueTables__columns-dropdown-wrapper ${props.theme.right} ${props.theme.dropdown.container}`}>
                                    <vt-columns-dropdown/>
                                </div> : ''}
                            </div>
                        </div>

                        {props.slots.beforeTable}
                        <div class="table-responsive">
                            <vt-table ref="vt_table"/>
                        </div>
                        {props.slots.afterTable}

                        {props.opts.pagination.show ? <vt-pagination/> : ''}

                    </div>
                }
            }
        }
        >

        </r-l-server-table>
    }
}
